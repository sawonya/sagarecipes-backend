import axios from "axios";

export const getExternalRecipes = async (req, res) => {
    try {
        const search = req.query.search || "";

        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );

        res.json(response.data.meals);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch external recipes" });
    }
};

