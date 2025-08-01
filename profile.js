document.querySelectorAll(".content-nav button").forEach(button => {
    button.addEventListener("click", () => {
        // Hide the all sections and titles by REMOVING "active" from the class name
        document.querySelectorAll(".content").forEach(s => s.classList.remove("active"));
        document.querySelectorAll(".title").forEach(s => s.classList.remove("active"));

        // Now show the section and title that was clicked on 
        // find the div element by id using data-target
        // add to the class name "active"
        const targetId = button.dataset.target;
        document.getElementById("content-" + targetId).classList.add("active");
        document.getElementById("title-" + targetId).classList.add("active");
    });
});