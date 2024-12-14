document.addEventListener("DOMContentLoaded", () => {
    const categoryDropdown = document.getElementById("category");
    const addCategoryBtn = document.getElementById("addCategoryBtn");
    const newCategoryInput = document.getElementById("newCategory");
    const saveCategoryBtn = document.getElementById("saveCategoryBtn");
    const contentForm = document.getElementById("contentForm");
    const imageInput = document.getElementById("image");
    const imagePreview = document.getElementById("image-preview");

    let categories = JSON.parse(localStorage.getItem("categories")) || [
        "Technology",
        "Automobiles",
        "History",
        "Astro",
    ];

    // Populate Categories
    const populateCategories = () => {
        categoryDropdown.innerHTML = `<option value="">Select a Category</option>`;
        categories.forEach((cat) => {
            const option = document.createElement("option");
            option.value = cat.toLowerCase();
            option.textContent = cat;
            categoryDropdown.appendChild(option);
        });
    };

    populateCategories();

    // Add New Category
    addCategoryBtn.addEventListener("click", () => {
        newCategoryInput.style.display = "block";
        saveCategoryBtn.style.display = "block";
    });

    saveCategoryBtn.addEventListener("click", () => {
        const newCategory = newCategoryInput.value.trim();
        if (newCategory && !categories.includes(newCategory)) {
            categories.push(newCategory);
            localStorage.setItem("categories", JSON.stringify(categories));
            populateCategories();
            alert(`Category "${newCategory}" added successfully!`);
            newCategoryInput.value = "";
            newCategoryInput.style.display = "none";
            saveCategoryBtn.style.display = "none";
        } else {
            alert("Invalid or duplicate category!");
        }
    });

    // Image Preview
    imageInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = "";
        }
    });

    // Form Submission
    contentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(contentForm);
        alert("Content saved successfully!");
        console.log("Form Data:", Object.fromEntries(formData));
    });
});
