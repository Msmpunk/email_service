import { Router } from "express";
import { getInformation } from "../controllers/email_servise"

const router = Router();

router.get('/get-information', getInformation);


export default router;