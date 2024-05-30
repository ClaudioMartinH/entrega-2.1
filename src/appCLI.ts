import readline from "readline"
import {debounce} from "./debounce"
import { busqueda } from "./index";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const debouncedSearch = debounce((text: string) => {
  const results = busqueda(text);
  console.log(`Resultados para "${text}":`, results);
}, 300);

console.log("Escribe el título o autor del libro a buscar:");

rl.on("line", (input) => {
  debouncedSearch(input);
});