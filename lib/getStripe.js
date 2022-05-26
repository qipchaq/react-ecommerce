import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    // stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    stripePromise = loadStripe('pk_test_51L33oyJV172R9NcyrSzCgrEXNf6esrULfh4OVA1X7MKwMGG1ZHQUlERmk0k1y3c8EgfucMR9PBxhjGqGUfTIh4VS005W9vh1hp');
  }

  return stripePromise;
}

export default getStripe;