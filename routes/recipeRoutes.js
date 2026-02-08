import express from "express";
import {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
} from "../controllers/recipeController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
    .get(getAllRecipes)
    .post(protect, createRecipe);

router.route("/:id")
    .get(getRecipeById)
    .put(protect, updateRecipe)
    .delete(protect, deleteRecipe);

export default router;
