import { Router } from "express";
import { sentEmail } from "../controllers/email_servise"

const router = Router();

router.post('/sent-email', sentEmail);


export default router;