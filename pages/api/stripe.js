const stripe = require('stripe')('sk_test_51L33oyJV172R9NcyfzbyoXa91zKMBbi8BehHuFa2vXxfCOqdsov4ABAKxQ3OX64IvhQwpnBRYtJgi66r3v63AfEn00Y38MrNq2');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body.cartItems)

        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1L34e7JV172R9Ncydgqo4A3z' },
                    { shipping_rate: 'shr_1L34fbJV172R9NcyS7XwPZ3Q' },
                ],
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: '{{PRICE_ID}}',
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            }
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.redirect(303, session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

const response = await fetch('/api/stripe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItems),
});