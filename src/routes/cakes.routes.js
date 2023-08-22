import { Router } from "express";
import { createRecipe } from "../controllers/cakes.controllers.js";

const cakesRouter = Router()

cakesRouter.post("/cakes", createRecipe)

export default cakesRouter