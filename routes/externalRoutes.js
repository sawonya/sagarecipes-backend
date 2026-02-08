import express from "express";
import { getExternalRecipes } from "../controllers/externalController.js";

const router = express.Router();

router.get("/external/recipes", getExternalRecipes);

export default router;

