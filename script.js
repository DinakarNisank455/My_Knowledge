
document.addEventListener("DOMContentLoaded", () => {
    const contentGrid = document.getElementById("content-grid");
    const loadMoreBtn = document.getElementById("load-more");

    let offset = 0; // Initial offset for content
    const limit = 4; // Number of items to load at a time

    async function fetchContent() {
        // Fetch content list dynamically
        const response = await fetch("content/content-list.json");
        const contentList = await response.json();

        // Determine how many items to load
        const nextItems = contentList.slice(offset, offset + limit);

        // Add new items to the grid
        nextItems.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="content/${item.file}" class="btn">Read More</a>
            `;
            contentGrid.appendChild(card);
        });

        // Update offset
        offset += nextItems.length;

        // Hide the Load More button if all items are loaded
        if (offset >= contentList.length) {
            loadMoreBtn.style.display = "none";
        }
    }

    // Load initial content
    fetchContent();

    // Attach event listener for Load More button
    loadMoreBtn.addEventListener("click", fetchContent);
});