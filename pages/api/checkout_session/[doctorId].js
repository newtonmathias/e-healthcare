import nc from "next-connect";
import dbConnect from "../../../utils/mongo";
import { isAuthenticatedUser } from "../../../middlewares/auth";
import onError from "../../../middlewares/errors";
import { stripCheckoutSession } from "../../../controllers/paymentControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(stripCheckoutSession)

export default handler;