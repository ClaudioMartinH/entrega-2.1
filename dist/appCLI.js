"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const debounce_1 = require("./debounce");
const index_1 = require("./index");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const debouncedSearch = (0, debounce_1.debounce)((text) => {
    const results = (0, index_1.busqueda)(text);
    console.log(`Resultados para "${text}":`, results);
}, 300);
console.log("Escribe el título o autor del libro a buscar:");
rl.on("line", (input) => {
    debouncedSearch(input);
});
