import { Router } from "express";
import clientsRouter from "./clients.routes.js"
import ordersRouter from "./orders.routes.js";
import cakesRouter from "./cakes.routes.js";

const router = Router()

router.use(clientsRouter)
router.use(cakesRouter)
router.use(ordersRouter)

export default router