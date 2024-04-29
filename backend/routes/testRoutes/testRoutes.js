import { Router } from "express";
import * as Controller from "../../controllers/test/test.js";
import uploadImage from "../../middlewares/imageMiddleware.js";

const route = Router();
route.post("/post", uploadImage.single("profile"), Controller.post);

export default route;
