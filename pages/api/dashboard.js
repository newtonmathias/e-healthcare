import nc from 'next-connect';
import { currentDoctorProfile } from '../../controllers/authControllers';
import { isAuthenticatedUser } from '../../middlewares/auth';
import dbConnect from '../../utils/mongo';
import onError from '../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(currentDoctorProfile)

export default handler;


