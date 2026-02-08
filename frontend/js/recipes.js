// =======================
// JWT → current user
// =======================
function parseJwt(token) {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch {
        return null;
    }
}

const authToken = localStorage.getItem("token");
const currentUserId = authToken ? parseJwt(authToken)?.id : null;

// =======================
// Load recipes
// =======================
fetch("/api/recipes")
    .then(res => res.json())
    .then(list => {
        const root = document.getElementById("recipes-list");
        if (!root) return;

        root.innerHTML = list.map(r => `
      <div class="card">

        ${r.image ? `
          <img src="${r.image}" alt="${r.title}">
        ` : ""}

        <h4>${r.title}</h4>

        <small>
          by ${r.user?.username || "user"} · 
          ${new Date(r.createdAt).toLocaleString()}
        </small>

        <p>${r.ingredients}</p>
        

        ${currentUserId === r.user?._id ? `
          <div class="card-actions">
            <button class="btn edit" onclick="editRecipe('${r._id}')">Edit</button>
            <button class="btn delete" onclick="deleteRecipe('${r._id}')">Delete</button>
          </div>
        ` : ""}

      </div>
    `).join("");
    })
    .catch(err => {
        console.error("Failed to load recipes", err);
    });

// =======================
// DELETE
// =======================
function deleteRecipe(id) {
    if (!confirm("Delete this recipe?")) return;

    fetch(`/api/recipes/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    }).then(() => location.reload());
}

// =======================
// EDIT
// =======================
function editRecipe(id) {
    window.location.href = `edit-recipe.html?id=${id}`;
}
