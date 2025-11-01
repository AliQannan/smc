'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';

declare global {
  interface Window {
    paypal?: PayPalNamespace;
  }
}

interface Service {
  id: string;
  name: string;
  price: number;
  description?: string;
}

interface PayPalNamespace {
  Buttons: (config: PayPalButtonConfig) => { render: (selector: string) => void };
}

interface PayPalButtonConfig {
  style?: {
    layout?: string;
    color?: string;
    shape?: string;
    label?: string;
  };
  createOrder: (_data: unknown, actions: PayPalActions) => Promise<string>;
  onApprove: (_data: unknown, actions: PayPalActions) => Promise<void>;
  onError: (err: unknown) => void;
}

interface PayPalActions {
  order: {
    create: (order: any) => Promise<string>;
    capture: () => Promise<{ id: string }>;
  };
}

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('service');
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const userId = user?.id || null;

  // 🔹 Fetch service details
  useEffect(() => {
  if (!serviceId) return;
  const fetchService = async () => {
    try {
      const res = await fetch(`/api/service?id=${serviceId}`);
      const data: { success: boolean; service?: Service; message?: string } = await res.json();
      if (!res.ok || !data.success || !data.service) throw new Error(data.message || 'Failed to load service.');
      setService(data.service); // ✅ Extract the service object
      toast.success(data.message || 'Service loaded successfully!');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      toast.error(message || 'Failed to load service.');
    } finally {
      setLoading(false);
    }
  };
  fetchService();
}, [serviceId]);


  // 🔹 Add PayPal button
  useEffect(() => {
    if (!service || !userId || typeof service.price !== 'number') return;

    const addPayPalScript = async () => {
      if (document.getElementById('paypal-sdk')) return;

      const script = document.createElement('script');
      script.id = 'paypal-sdk';
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
      script.async = true;

      script.onload = () => {
        if (!window.paypal) return toast.error('PayPal failed to load.');

        window.paypal.Buttons({
          style: { layout: 'vertical', color: 'gold', shape: 'pill', label: 'paypal' },
          createOrder: (_data, actions) => {
            return actions.order.create({
              purchase_units: [{ description: service.name, amount: { value: service.price.toFixed(2) } }],
            });
          },
          onApprove: async (_data, actions) => {
            try {
              const details = await actions.order.capture();

              const response = await fetch('/api/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  userId,
                  serviceId: service.id,
                  paypalOrderId: details.id,
                  amount: service.price,
                }),
              });

              const result = await response.json();
              if (response.ok) {
                toast.success(result.message || 'Payment successful!');
              } else {
                toast.error(result.message || result.error || 'Payment failed.');
              }
            } catch (err: unknown) {
              const message = err instanceof Error ? err.message : String(err);
              toast.error(message || 'Server error while saving payment.');
            }
          },
          onError: (err: unknown) => {
            const message = err instanceof Error ? err.message : String(err);
            toast.error(message || 'PayPal error occurred.');
          },
        }).render('#paypal-button-container');
      };

      document.body.appendChild(script);
    };

    addPayPalScript();
  }, [service, userId]);

  if (!userId)
    return <p className="text-center mt-20 text-xl text-gray-600">Please login to continue.</p>;

  if (loading)
    return <p className="text-center mt-20 text-xl text-gray-600">Loading service...</p>;

  if (!service)
    return <p className="text-center mt-20 text-xl text-gray-600">Service not found.</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">{service.name}</h1>
        <p className="text-center text-gray-700 text-lg mb-8">
          <span className="text-3xl font-bold text-green-600">${service.price.toFixed(2)}</span> / month
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">What you get:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>AI cryptocurrency predictions</li>
            <li>Access to Telegram bot</li>
            <li>Real-time market alerts</li>
            <li>Priority support</li>
          </ul>
        </div>

        <div id="paypal-button-container" className="flex justify-center"></div>
      </div>
    </div>
  );
}
