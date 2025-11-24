// Stripe checkout session creation
// Replace with your actual Stripe secret key

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { priceId } = req.body;

    // In production, use actual Stripe integration:
    /*
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [{
            price: priceId,
            quantity: 1,
        }],
        success_url: `${process.env.DOMAIN}/dashboard.html?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.DOMAIN}/index.html`,
    });

    return res.status(200).json({ id: session.id });
    */

    // Demo response
    return res.status(200).json({
        message: 'Configure Stripe in production',
        instructions: 'See README.md for setup guide'
    });
}
