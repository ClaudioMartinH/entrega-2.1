"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearch = exports.busqueda = void 0;
const llibres_1 = require("./llibres");
function busqueda(textUs) {
    return llibres_1.llibres.filter((llibre) => {
        return (llibre.nom.toLowerCase().includes(textUs.toLowerCase()) ||
            llibre.autor.toLowerCase().includes(textUs.toLowerCase()));
    });
}
exports.busqueda = busqueda;
function makeSearch() {
    let textUs = "";
    let text = document.getElementById("textUs");
    if (text !== null && text.value.trim() !== "") {
        textUs = text.value.trim();
        const results = busqueda(textUs);
        console.log(results);
    }
}
exports.makeSearch = makeSearch;
