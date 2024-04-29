import express from "express";
import "dotenv/config";
import cors from "cors";
import connectToDatabase from "./configs/db.js";
import route from "./routes.js";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    return res
      .status(200)
      .send({ message: "Welcome to the arba developement studio" });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});
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
