import { llibres } from "./llibres.js";
export function mainSearch(textUs) {
    return llibres.filter((llibre) => {
        return (llibre.nom.toLowerCase().includes(textUs.toLowerCase()) ||
            llibre.autor.toLowerCase().includes(textUs.toLowerCase()));
    });
}
export function showResults(llibres) {
    const showBooksDiv = document.getElementById("showBooks");
    if (showBooksDiv) {
        showBooksDiv.innerHTML = "";
        if (llibres.length === 0) {
            showBooksDiv.innerHTML = "No s'han trobat resultats";
        }
        const list = document.createElement("ul");
        llibres.forEach((llibre) => {
            const listItem = document.createElement("li");
            listItem.innerText = `${llibre.nom} - ${llibre.autor} - ${llibre.any} - ${llibre.preu} € - ${llibre.genere}`;
            list.appendChild(listItem);
        });
        showBooksDiv.appendChild(list);
    }
}
export function searchBooks(textUs) {
    const llibres = mainSearch(textUs);
    showResults(llibres);
}
