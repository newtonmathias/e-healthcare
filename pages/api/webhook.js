import nc from 'next-connect';
import dbConnect from '../../utils/mongo';
import onError from '../../middlewares/errors';
import { webhookCheckout } from '../../controllers/paymentControllers';

const handler = nc({ onError });


dbConnect();

export const config = {
    api: {
        bodyParser: false,
    }
}

handler.post(webhookCheckout)

export default handler;