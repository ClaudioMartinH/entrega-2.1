import { llibres, Llibre } from "./llibres";
//import { debounce } from "./debounce";

export function busqueda(textUs: string): Llibre[] {
  return llibres.filter((llibre) => {
    return (
      llibre.nom.toLowerCase().includes(textUs.toLowerCase()) ||
      llibre.autor.toLowerCase().includes(textUs.toLowerCase())
    );
  });
}

export function makeSearch(): Llibre[] {
  let results: Llibre[] = [];
  let textUs: string = "";
  let text: HTMLInputElement | null = document.getElementById(
    "textUs"
  ) as HTMLInputElement;
  if (text !== null && text.value.trim() !== "") {
    textUs = text.value.trim();
    results = busqueda(textUs);
  }
  return results;
}
