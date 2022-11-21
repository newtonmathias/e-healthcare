import { isAuthenticatedUser } from "../../../middlewares/auth";
import dbConnect from "../../../utils/mongo";
import onError from "../../../middlewares/errors";
import nc from "next-connect";
import { checkReviewAvailability } from "../../../controllers/allDoctorsController";


const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser)
    .get(checkReviewAvailability)

export default handler;