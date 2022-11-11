import nc from "next-connect";
import { getSingleDoctor } from "../../../controllers/allDoctorsController";
import dbConnect from '../../../utils/mongo';

const handler = nc();

dbConnect();

handler.get(getSingleDoctor);

export default handler;