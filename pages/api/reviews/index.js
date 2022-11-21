import { isAuthenticatedUser } from "../../../middlewares/auth";
import dbConnect from "../../../utils/mongo";
import onError from "../../../middlewares/errors";
import nc from "next-connect";
import { createDoctorReview } from "../../../controllers/allDoctorsController";


const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser)
    .put(createDoctorReview)

export default handler;