function parseJwt(token) {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch {
        return null;
    }
}

const token = localStorage.getItem("token");
const currentUserId = token ? parseJwt(token)?.id : null;

const id = new URLSearchParams(window.location.search).get("id");

fetch(`/api/recipes/${id}`)
    .then(res => res.json())
    .then(r => {
        const root = document.getElementById("recipe");

        root.innerHTML = `
      <div class="card">

        ${r.image ? `<img src="${r.image}" alt="${r.title}">` : ""}

        <h2>${r.title}</h2>

        <small>
          by ${r.user?.username || "user"} ·
          ${new Date(r.createdAt).toLocaleString()}
        </small>

        <h4>Ingredients</h4>
        <p>${r.ingredients}</p>

        <h4>Instructions</h4>
        <p>${r.instructions}</p>

        ${currentUserId === r.user?._id
                ? `
              <div style="margin-top:16px">
                <button class="btn primary"
                  onclick="editRecipe('${r._id}')">Edit</button>
                <button class="btn danger"
                  onclick="deleteRecipe('${r._id}')">Delete</button>
              </div>
            `
                : ""
            }

      </div>
    `;
    });

function editRecipe(id) {
    window.location.href = `edit-recipe.html?id=${id}`;
}

function deleteRecipe(id) {
    if (!confirm("Delete recipe?")) return;

    fetch(`/api/recipes/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then(() => {
        window.location.href = "/";
    });
}
