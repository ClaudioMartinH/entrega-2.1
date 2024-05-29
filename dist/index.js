"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.busqueda = void 0;
const llibres_1 = require("./llibres");
function busqueda(textUs) {
    return llibres_1.llibres.filter((llibre) => {
        llibre.nom.toLowerCase().includes(textUs.toLowerCase()) ||
            llibre.autor.toLowerCase().includes(textUs.toLowerCase());
    });
}
exports.busqueda = busqueda;
