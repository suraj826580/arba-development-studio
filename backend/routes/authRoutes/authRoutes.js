import { Router } from "express";
import * as Controllers from "../../controllers/auth/auth.js";
import authmidlleware from "../../middlewares/authMiddleware.js";
const route = Router();

route.post("/register", Controllers.register);
route.post("/login", Controllers.login);
route.patch("/update-profile", authmidlleware, Controllers.updateProfile);
route.get("/get-user", authmidlleware, Controllers.getUser);
route.patch("/change-password", authmidlleware, Controllers.changePassword);
export default route;
