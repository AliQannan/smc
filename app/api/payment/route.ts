// app/api/payment/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface PaymentRequest {
  userId: string;
  serviceId: string;
  paypalOrderId: string;
  amount: number;
}

export async function POST(req: Request) {
  try {
    const body: PaymentRequest = await req.json();
    const { userId: clerkId, serviceId, paypalOrderId, amount } = body;

    if (!clerkId || !serviceId || !paypalOrderId || !amount) {
      return NextResponse.json(
        { success: false, message: "Missing required payment data." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { clerkId } });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found in local database." },
        { status: 404 }
      );
    }

    const service = await prisma.service.findUnique({ where: { id: serviceId } });
    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found." },
        { status: 404 }
      );
    }

    const payment = await prisma.payment.create({
      data: {
        userId: user.id,
        serviceId,
        paypalOrderId,
        amount,
        status: "COMPLETED",
        createdAt: new Date(),
      },
    });

    return NextResponse.json(
      { success: true, message: "Payment saved successfully.", payment },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("❌ Error saving payment:", message);
    return NextResponse.json(
      { success: false, message: "Server error.", error: message },
      { status: 500 }
    );
  }
}
