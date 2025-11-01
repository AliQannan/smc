// app/components/ServicesSection.tsx
import Link from 'next/link';

// Define the Service type based on your Prisma schema
interface Service {
  id: string;
  name: string;
  description: string | null;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwritten text-5xl text-center mb-16 font-bold text-black">
          Our AI Prediction Plans
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="border border-gray-300 p-8 rounded-xl bg-white hover:shadow-sm transition-all duration-300 font-handwritten group relative"
            >
              {/* Popular badge for the middle plan */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-3xl font-bold mb-4 text-black text-center">
                {service.name}
              </h3>
              
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-green-600">${service.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              
              {service.description && (
                <p className="text-lg text-gray-700 mb-6 text-center">
                  {service.description}
                </p>
              )}
              
              <div className="space-y-3 mb-8">
                {getServiceFeatures(service.name).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href={`/checkout?service=${service.id}`}
                className={`w-full block text-center py-3 px-6 rounded-lg font-bold text-lg transition-colors ${
                  index === 1 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'border border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
        
        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 font-handwritten text-lg">
            All plans include access to our Telegram bot and real-time AI predictions
          </p>
        </div>
      </div>
    </section>
  );
}

// Helper function to determine features based on service name
function getServiceFeatures(serviceName: string): string[] {
  const features: { [key: string]: string[] } = {
    'Basic': [
      'Daily AI predictions',
      '5 cryptocurrency pairs',
      'Telegram notifications',
      'Basic support'
    ],
    'Pro': [
      'Real-time AI predictions',
      '15+ cryptocurrency pairs',
      'Priority Telegram notifications',
      'Advanced market analysis',
      'Priority support',
      'Trading signals'
    ],
    'Enterprise': [
      'All Pro features',
      'Unlimited cryptocurrency pairs',
      'Custom AI models',
      '24/7 dedicated support',
      'API access',
      'Custom alerts',
      'Portfolio management'
    ]
  };

  return features[serviceName] || [
    'AI predictions',
    'Telegram access',
    'Market analysis'
  ];
}

// Check icon component
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}