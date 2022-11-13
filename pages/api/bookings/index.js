import { newBooking } from "../../../controllers/bookingCOntrollers";
import { isAuthenticatedUser } from "../../../middlewares/auth";
import dbConnect from "../../../utils/mongo";
import onError from "../../../middlewares/errors";
import nc from "next-connect";


const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser)
    .post(newBooking)

export default handler;