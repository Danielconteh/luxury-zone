import { buffer } from 'micro';
import { Puchase, User } from '../../../../mongodConnection/connection';
const stripe = require('stripe')(process.env.STRIP_SERVER_SIDE_KEY);



const creatBookingCheckOut = async session => {
    // const house = session.client_reference_id;
    // const user = (await User.findOne({ email: session.customer_email }))._id;
    // const price = session.payment_intent.amount / 100;
  if (session) {
    await Puchase.create({
      house: '612a0bb674f1a82d902b789e',
      user: '612a0bb674f1a82d902b7891',
      price: 90000,
    });
    
  }
        
  
}

// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;


const checkOutHandler = async (req, res) => {

     if (req.method === 'POST') {
       const buf = await buffer(req);
       const sig = req.headers['stripe-signature'];

       let event;

       try {
         event = stripe.webhooks.constructEvent(
           buf,
           sig,
           process.env.STRIPE_WEBHOOK_SECRET
         );
       } catch (err) {
         res.status(400).send(`Webhook Error: ${err.message}`);
         return;
       }

         
         if (event.type === 'checkout.session.completed') return
           // Handle successful charge
           creatBookingCheckOut(event.data.object);
         
          return res.json({ received: true });  
       
      //  ================================
     } else {
       res.setHeader('Allow', 'POST');
       res.status(405).end('Method Not Allowed');
     }
};

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default checkOutHandler;