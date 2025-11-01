import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {
  try {
    const { userId: clerkId, serviceId, paypalOrderId, amount } = await req.json();

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
      { success: true, message: "Payment saved and email sent.", payment },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Error saving payment:", error);
    return NextResponse.json(
      { success: false, message: "Server error.", error: error?.message },
      { status: 500 }
    );
  }
}
