import render from "./render";
import './reset.css';
import './styles.css';

// If user make search render the result.
const searchButton = document.querySelectorAll("#searchButton");
searchButton.forEach(button => button.addEventListener("click", () => {
    render();
}))

// Render default data.
render();
