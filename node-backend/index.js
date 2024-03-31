import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

import voteRouter from "./routes/vote.routes.js";
import jokesRouter from "./routes/joke.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://zen-s-test-frontend.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/api/v1/vote", voteRouter);
app.use("/api/v1/jokes", jokesRouter);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
