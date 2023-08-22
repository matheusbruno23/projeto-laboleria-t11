import { Router } from "express";
import { getOrderById, getOrders, orderCake } from "../controllers/orders.controllers.js";
import { validateOrder } from "../middlewares/orders.middlewares.js";

const ordersRouter = Router()

ordersRouter.post("/order", validateOrder,orderCake)
ordersRouter.get("/orders" , getOrders)
ordersRouter.get("/orders/:id", getOrderById)

export default ordersRouter