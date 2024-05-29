import { llibres, Llibre } from "./llibres";
import { debounce } from "./debounce";

export function busqueda(textUs: string): Llibre[] {
  return llibres.filter((llibre) => {
    llibre.nom.toLowerCase().includes(textUs.toLowerCase()) ||
      llibre.autor.toLowerCase().includes(textUs.toLowerCase());
  });
}
