document.getElementById("blogForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const response = await fetch("/api/blogs", {
        method: "POST",
        body: formData,
    });

    if (response.ok) {
        alert("Blog saved successfully!");
        loadBlogs();
    } else {
        alert("Failed to save the blog.");
    }
});

async function loadBlogs() {
    const response = await fetch("/api/blogs");
    const blogs = await response.json();

    const blogsContainer = document.getElementById("blogsContainer");
    blogsContainer.innerHTML = "";

    blogs.forEach((blog) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        blogCard.innerHTML = `
            <img src="${blog.image_url}" alt="Blog Image">
            <h3>${blog.title}</h3>
            <p>${blog.content.slice(0, 100)}...</p>
            <button onclick="deleteBlog(${blog.blog_id})">Delete</button>
        `;

        blogsContainer.appendChild(blogCard);
    });
}

document.getElementById('carbonCalculator').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Carbon footprint calculation coming soon!");
});

async function deleteBlog(blogId) {
    const response = await fetch(`/api/blogs/${blogId}`, { method: "DELETE" });

    if (response.ok) {
        alert("Blog deleted successfully!");
        loadBlogs();
    } else {
        alert("Failed to delete the blog.");
    }
}

// Initial load
loadBlogs();
