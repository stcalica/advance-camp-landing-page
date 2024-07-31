import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export async function POST(req: NextRequest) {

  const resp = await req.json();

  try {

    const data = JSON.parse(resp.body)
    const priceId = data.priceId

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 999
          }
        },
      ],
      mode: 'payment',
      success_url: `${process.env.HOST}/products/success`,
      cancel_url: `${process.env.HOST}/products/canceled`,
      custom_fields: [
        {
          key: "troop_number",
          label: {
            type: "custom",
            custom: "Troop Number"
          },
          type: "text"
        }
      ]
    });

    return NextResponse.json({ session: session, ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, ok: false }, { status: 500 });
  }
}