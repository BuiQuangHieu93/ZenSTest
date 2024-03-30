import express from "express";
import { FetchJoke } from "../controller/joke.controller.js";

const router = express.Router();

router.route("/").get(FetchJoke);

export default router;
