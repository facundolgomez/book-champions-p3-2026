import BookItem from "../bookItem/BookItem";
import { useState } from "react";
import BookSearch from "../booksSearch/BooksSearch";

const Books = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState("");
  const [bookSearch, setBookSearch] = useState("");
  const handleBookSearch = (book) => {
    setBookSearch(book);
  };

  const booksToShow = books.filter((book) =>
    book.title.toLowerCase().includes(bookSearch.toLowerCase())
  );
  return (
    <>
      {selectedBook && (
        <p>
          El libro seleccionado es: <b>{selectedBook}</b>
        </p>
      )}
      <BookSearch onFindBook={handleBookSearch} value={bookSearch} />
      <div className="d-flex justify-content-center flex-wrap">
        {booksToShow.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
            onSelectedBook={setSelectedBook}
          />
        ))}
      </div>
    </>
  );
};
export default Books;
