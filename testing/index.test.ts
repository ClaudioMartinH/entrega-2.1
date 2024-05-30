import { busqueda, makeSearch } from "../src";
import { llibres, Llibre } from "../src/llibres";
import { describe, test, expect, vitest, it } from "vitest";
import documentMock from "node:test";

describe("Book search", () => {
  test("Should return the book the user's searching", () => {
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
