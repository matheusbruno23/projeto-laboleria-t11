import { Router } from "express";
import { createClient, getClientOrders } from "../controllers/clients.controllers.js";
import { validateClient } from "../middlewares/clients.middlewares.js";

const clientsRouter = Router()

clientsRouter.post("/clients", validateClient ,createClient)
clientsRouter.get("/clients/:id/orders" , getClientOrders)

export default clientsRouter