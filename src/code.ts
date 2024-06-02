import { books, Book } from "./books.js";

export function mainSearch(textUs: string): Book[] {
  return books.filter((book) => {
    return (
      book.nom.toLowerCase().includes(textUs.toLowerCase()) ||
      book.autor.toLowerCase().includes(textUs.toLowerCase())
    );
  });
}

export function showResults(books: Book[]) {
  const showBooksDiv = document.getElementById("showBooks");
  if (showBooksDiv) {
    showBooksDiv.innerHTML = "";
    if (books.length === 0) {
      showBooksDiv.innerHTML = "No se han encontrado resultados";
    }
    const container = document.createElement("div");
    books.forEach((llibre) => {
      const divBooks = document.createElement("div");
      divBooks.innerText = `${llibre.nom} - ${llibre.autor} - ${llibre.any} - ${llibre.preu} € - ${llibre.genere}`;
      container.appendChild(divBooks);
    });
    showBooksDiv.appendChild(container);
  }
}

export function searchBooks(textUs: string) {
  const books = mainSearch(textUs);
  showResults(books);
}
