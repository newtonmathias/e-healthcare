import nc from 'next-connect'
import { updateProfile } from '../../../controllers/authControllers'
import dbConnect from '../../../utils/mongo'
import { isAuthenticatedUser } from '../../../middlewares/auth';
import { onError } from '../../../middlewares/errors';


const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser)
    .put(updateProfile)

export default handler;