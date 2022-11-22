import nc from "next-connect";
import { deleteDoctor, getSingleDoctor } from "../../../controllers/allDoctorsController";
import dbConnect from '../../../utils/mongo';
import { isAuthenticatedUser, authorizeRoles } from "../../../middlewares/auth";

const handler = nc();

dbConnect();

handler.get(getSingleDoctor);

handler
    .use(isAuthenticatedUser, authorizeRoles('admin'))
    .delete(deleteDoctor)
export default handler;