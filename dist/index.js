import { debounce } from "./debounce.js";
import { searchBooks } from "./code.js";
const textArea = document.getElementById("textUs");
const debouncedSearch = debounce(searchBooks, 1000);
if (textArea) {
    textArea.addEventListener("input", (event) => {
        const input = event.target;
        debouncedSearch(input.value);
    });
}
