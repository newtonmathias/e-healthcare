import nc from "next-connect";
import { getBookingDetails } from "../../../controllers/bookingControllers";
import dbConnect from "../../../utils/mongo";
import { isAuthenticatedUser } from "../../../middlewares/auth";
import onError from "../../../middlewares/errors";


const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser)
    .get(getBookingDetails)

export default handler;