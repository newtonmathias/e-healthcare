import nc from 'next-connect';
import { currentUserProfile } from '../../controllers/authControllers';
import { isAuthenticatedUser } from '../../middlewares/auth';
import dbConnect from '../../utils/mongo';
import onError from '../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(currentUserProfile)

export default handler;


