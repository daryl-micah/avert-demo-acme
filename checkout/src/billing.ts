import { stripe } from './lib/stripe';

export interface Cart {
  customerId: string;
  amountCents: number;
}

export async function chargeCustomer(cart: Cart) {
  return stripe.paymentIntents.create({
    amount: cart.amountCents,
    currency: 'usd',
    customer: cart.customerId,
    allowed_payment_method_types: ['card'],
    confirm: true,
  });
}
