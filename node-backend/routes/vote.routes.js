import express from "express";
import { VoteJoke } from "../controller/vote.controller.js";

const router = express.Router();

router.route("/").post(VoteJoke);

export default router;
