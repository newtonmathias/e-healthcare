import { isAuthenticatedUser, authorizeRoles } from "../../../../middlewares/auth";
import dbConnect from "../../../../utils/mongo";
import onError from "../../../../middlewares/errors";
import nc from "next-connect";
import { allAdminDoctors } from "../../../../controllers/allDoctorsController";


const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser, authorizeRoles('admin'))
    .get(allAdminDoctors)

export default handler;