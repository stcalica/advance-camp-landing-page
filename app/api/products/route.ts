import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  try {
    const products = await stripe.products.list({ limit: 10 });
    return NextResponse.json(products.data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
