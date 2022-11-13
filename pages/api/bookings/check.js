import { checkBookingAvailability } from "../../../controllers/bookingControllers";
import dbConnect from "../../../utils/mongo";
import onError from "../../../middlewares/errors";
import nc from "next-connect";


const handler = nc({ onError });

dbConnect();
handler.get(checkBookingAvailability)

export default handler;