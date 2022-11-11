import nc from "next-connect";
import { allDoctors } from "../../../controllers/allDoctorsController";
import dbConnect from '../../../utils/mongo';

const handler = nc();

dbConnect();

handler.get(allDoctors);

export default handler;