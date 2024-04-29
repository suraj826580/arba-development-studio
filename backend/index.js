import express from "express";
import "dotenv/config";
import cors from "cors";
import connectToDatabase from "./configs/db.js";
import route from "./routes.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", route);

app.listen(process.env.PORT, async () => {
  try {
    await connectToDatabase();
    console.log("PORT is listening on" + " " + process.env.PORT);
  } catch (error) {
    console.log(error);
  }
});

export default app;
