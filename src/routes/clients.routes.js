import { Router } from "express";
import { createClient, getClientOrders } from "../controllers/clients.controllers.js";

const clientsRouter = Router()

clientsRouter.post("/clients", createClient)
clientsRouter.get("/clients/:id/orders" , getClientOrders)

export default clientsRouter