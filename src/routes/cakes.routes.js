import { Router } from "express";
import { createRecipe } from "../controllers/cakes.controllers.js";
import { validateCake } from "../middlewares/cakes.middlewares.js";

const cakesRouter = Router()

cakesRouter.post("/cakes", validateCake, createRecipe)

export default cakesRouter