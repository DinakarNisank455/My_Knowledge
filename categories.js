// Categories and their content
const categories = {
    technology: ["cookies", "ai"],
    automobiles: ["tesla", "ev"],
    history: ["world_war", "renaissance"]
};

// Render categories
function renderCategories() {
    const categoriesDiv = document.getElementById("categories");
    categoriesDiv.innerHTML = "";

    Object.keys(categories).forEach(category => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        card.addEventListener("click", () => loadCategoryContent(category));
        categoriesDiv.appendChild(card);
    });
}

// Load category content dynamically
function loadCategoryContent(category) {
    const contentDisplay = document.getElementById("content-display");
    const contentTitle = document.getElementById("content-title");
    const contentBody = document.getElementById("content-body");

    contentDisplay.style.display = "block";
    contentTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Topics`;

    contentBody.innerHTML = "";

    categories[category].forEach(topic => {
        const topicLink = document.createElement("a");
        topicLink.href = `categories/${category}/${topic}.html`;
        topicLink.textContent = topic.replace("_", " ").toUpperCase();
        topicLink.target = "_blank";
        topicLink.classList.add("topic-link");
        contentBody.appendChild(topicLink);
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", renderCategories);
