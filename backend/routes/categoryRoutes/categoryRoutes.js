import { Router } from "express";
import * as Controllers from "../../controllers/categories/categories.js";
import authMiddleware from "../../middlewares/authMiddleware.js";
const route = Router();

route.get("/get-category", authMiddleware, Controllers.getCategory);
route.post("/create-category", authMiddleware, Controllers.createCategory);
route.patch(
  "/update-category/:_id",
  authMiddleware,
  Controllers.updateCategory
);
route.delete(
  "/delete-category/:id",
  authMiddleware,
  Controllers.deleteCategory
);
export default route;
