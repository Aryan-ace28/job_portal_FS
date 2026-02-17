const form = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value;

    if(title === "" || category === "" || location === "") {
        alert("Please fill all fields");
        return;
    }

    createJobCard(title, category, location);
    form.reset();
});

function createJobCard(title, category, location) {

    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Location:</strong> ${location}</p>

        <div class="card-buttons">
            <button class="update-btn">Update</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    card.querySelector(".delete-btn").addEventListener("click", function() {
        card.remove();
    });

    card.querySelector(".update-btn").addEventListener("click", function() {
        const newTitle = prompt("Enter new job title:", title);
        const newCategory = prompt("Enter new category:", category);
        const newLocation = prompt("Enter new location:", location);

        if(newTitle && newCategory && newLocation) {
            card.querySelector("h3").textContent = newTitle;
            card.querySelectorAll("p")[0].innerHTML = "<strong>Category:</strong> " + newCategory;
            card.querySelectorAll("p")[1].innerHTML = "<strong>Location:</strong> " + newLocation;
        }
    });

    jobList.appendChild(card);
}
