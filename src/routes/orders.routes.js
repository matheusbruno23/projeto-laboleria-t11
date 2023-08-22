import { Router } from "express";
import { getOrderById, getOrders, orderCake } from "../controllers/orders.controllers.js";

const ordersRouter = Router()

ordersRouter.post("/order", orderCake)
ordersRouter.get("/orders" , getOrders)
ordersRouter.get("/orders/:id", getOrderById)

export default ordersRouter