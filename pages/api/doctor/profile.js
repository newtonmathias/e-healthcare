import nc from "next-connect";
import { updateDoctorProfile } from "../../../controllers/authControllers";
import { isAuthenticatedUser } from "../../../middlewares/auth";
import onError from "../../../middlewares/errors";
import dbConnect from "../../../utils/mongo";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).put(updateDoctorProfile)

export default handler;