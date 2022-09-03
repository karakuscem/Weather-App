import render from "./render";

// If user make search render the result.
const searchButton = document.querySelectorAll("#searchButton");
searchButton.forEach(button => button.addEventListener("click", () => {
    render();
}))

// Render default data.
render();
