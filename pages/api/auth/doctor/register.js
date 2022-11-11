import nc from 'next-connect'
import dbConnect from '../../../../utils/mongo'

import { registerDoctor } from '../../../../controllers/authControllers'

import onError from '../../../../middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler.post(registerDoctor) 

export default handler;