const jobForm = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

/* ADD JOB */
jobForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value;

    if (!title || !category || !location) return;

    createJobCard(title, category, location);
    jobForm.reset();
});

function createJobCard(title, category, location) {

    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
        <h3>${title}</h3>
        <p class="card-category"><strong>Category:</strong> ${category}</p>
        <p class="card-location"><strong>Location:</strong> ${location}</p>
        <button class="update-btn">Update</button>
        <button class="delete-btn">Delete</button>
    `;

    card.querySelector(".delete-btn").addEventListener("click", function() {
        card.remove();
    });

    card.querySelector(".update-btn").addEventListener("click", function() {
        const newTitle = prompt("Enter new title:", title);
        const newCategory = prompt("Enter new category:", category);
        const newLocation = prompt("Enter new location:", location);

        if (newTitle && newCategory && newLocation) {
            card.querySelector("h3").textContent = newTitle;
            card.querySelector(".card-category").innerHTML =
                "<strong>Category:</strong> " + newCategory;
            card.querySelector(".card-location").innerHTML =
                "<strong>Location:</strong> " + newLocation;
        }
    });

    jobList.appendChild(card);
}

/* SEARCH FEATURE */
searchForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const searchValue = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".job-card");

    cards.forEach(function(card) {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.querySelector(".card-category").textContent.toLowerCase();
        const location = card.querySelector(".card-location").textContent.toLowerCase();

        if (
            title.includes(searchValue) ||
            category.includes(searchValue) ||
            location.includes(searchValue)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});