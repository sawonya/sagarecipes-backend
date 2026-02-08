import Recipe from "../models/Recipe.js";

// CREATE
export const createRecipe = async (req, res) => {
    const { title, ingredients, instructions, image } = req.body;

    if (!title || !ingredients || !instructions) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const recipe = await Recipe.create({
        title,
        ingredients,
        instructions,
        image,
        user: req.user._id
    });

    res.status(201).json(recipe);
};


// READ ALL (главная страница)
export const getAllRecipes = async (req, res) => {
    const recipes = await Recipe.find()
        .populate("user", "username")
        .sort({ createdAt: -1 });

    res.json(recipes);
};

// READ ONE
export const getRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id).populate(
        "user",
        "username"
    );

    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(recipe);
};

// UPDATE (только владелец)
export const updateRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

    if (recipe.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "Not authorized" });
    }

    recipe.title = req.body.title || recipe.title;
    recipe.ingredients = req.body.ingredients || recipe.ingredients;
    recipe.instructions = req.body.instructions || recipe.instructions;

    const updatedRecipe = await recipe.save();
    res.json(updatedRecipe);
};

// DELETE (только владелец)
export const deleteRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

    if (recipe.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "Not authorized" });
    }

    await recipe.deleteOne();
    res.json({ message: "Recipe removed" });
};
