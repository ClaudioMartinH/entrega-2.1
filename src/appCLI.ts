import readline from "readline";
import { debounce } from "./debounce.js";
import { mainSearch } from "./code.js";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const debouncedSearch = debounce((text: string) => {
  const results = mainSearch(text);
  console.log(`Resultados para "${text}":`, results);
  showMenu();
  chooseOption();
}, 1000);

rl.on("line", (input) => {
  debouncedSearch(input);
  });

function showMenu() {
  console.log(chalk.bgGreenBright.bold("\n-----Buscador de llibres-----\n"));
  console.log(chalk.cyanBright("Menú d'opcions "));
  console.log("1. Buscar llibre ");
  console.log("2. Sortir ");
}

function chooseOption() {
  rl.question("Introdueix el número de l'opció desitjada: ", (option) => {
    switch (option) {
      case "1":
        console.log("Has seleccionado la opción Buscar");

        console.log("Escribe el título o autor del libro a buscar:");

        rl.on("line", (input) => {
          debouncedSearch(input);
          });
        break;
      case "2":
        console.log("Has seleccionado la opción Salir");
        console.log(chalk.greenBright("Adéu 👋😉"));
        rl.close();
        break;
      default:
        console.log("Opción no válida");
        break;
    }
  });
}
showMenu();
chooseOption();