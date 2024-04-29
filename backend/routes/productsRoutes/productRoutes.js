import { Router } from "express";
import * as Controllers from "../../controllers/products/products.js";
import authmiddleware from "../../middlewares/authMiddleware.js";
const route = Router();

route.post("/create-product", authmiddleware, Controllers.createProduct);
route.get("/get-product", authmiddleware, Controllers.getProducts);
route.get("/get-product/:id", authmiddleware, Controllers.getProductById);
route.patch("/update-product/:id", authmiddleware, Controllers.updateProduct);
route.delete("/delete-product/:id", authmiddleware, Controllers.deleteProduct);

export default route;
