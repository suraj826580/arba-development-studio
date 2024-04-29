import { Router } from "express";
import testRoutes from "./routes/testRoutes/testRoutes.js";
import authRoutes from "./routes/authRoutes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes/categoryRoutes.js";
import productRoutes from "./routes/productsRoutes/productRoutes.js";
const route = Router();

route.use("/test", testRoutes);
route.use("/auth", authRoutes);
route.use("/category", categoryRoutes);
route.use("/product", productRoutes);

export default route;
