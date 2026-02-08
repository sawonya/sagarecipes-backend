const API = "http://localhost:5000";

function searchExternal() {
    const query = document.getElementById("search").value.trim();
    if (!query) return;

    fetch(`${API}/api/external/recipes?search=${query}`)
        .then(res => res.json())
        .then(data => {
            const root = document.getElementById("external");
            root.innerHTML = "";

            if (!data || data.length === 0) {
                root.innerHTML = "<p>No recipes found</p>";
                return;
            }

            root.innerHTML = data.map(meal => `
                <div class="card">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h4>${meal.strMeal}</h4>

                    <button class="btn primary"
                        onclick="viewExternalRecipe('${meal.idMeal}')">
                        View recipe
                    </button>

                    <div class="external-details" id="details-${meal.idMeal}" style="display:none">
                        <p>${meal.strInstructions}</p>
                    </div>
                </div>
            `).join("");
        })
        .catch(err => {
            console.error("External search error", err);
        });
}

function viewExternalRecipe(id) {
    const block = document.getElementById(`details-${id}`);
    block.style.display =
        block.style.display === "none" ? "block" : "none";
}
