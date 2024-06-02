import { mock } from "node:test";
import { mainSearch } from "../src/code";
import { debounce } from "../src/debounce";
import { describe, test, expect, vitest, beforeEach, vi } from "vitest";

describe("Book search", () => {
  test("Should return the book the user's searching", () => {
    expect(
      mainSearch("El señor de los anillos. La comunidad del anillo")
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

describe("Debounced search", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  test("Should delay the search", async () => {
    const mainSearchMock = vi.fn();
    const debouncedSearch = debounce(mainSearchMock, 1000);
    debouncedSearch("El señor de los anillos. La comunidad del anillo");
    expect(mainSearchMock).not.toHaveBeenCalled();
    vitest.runAllTimers();
    expect(mainSearchMock).toHaveBeenCalled();
  });
});
