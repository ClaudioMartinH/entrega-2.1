import { busqueda, makeSearch } from "../src";
import { llibres, Llibre } from "../src/llibres";
import { describe, test, expect, vitest } from "vitest";
import documentMock from "node:test";
import { text } from "stream/consumers";

describe("Buscador de libros por texto", () => {
  test("Should get text from textarea", () => {
   
  });
  test("El libro que busca el usuario", () => {
    expect(
      busqueda("El señor de los anillos. La comunidad del anillo")
    ).toEqual([
      {
        nom: "El señor de los anillos. La comunidad del anillo",
        autor: "J.R.R. Tolkien",
        any: 1954,
        preu: 18.95,
        genere: "Fantasia",
      },
    ]);
  });
});
