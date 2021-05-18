import React from "react";
import Book from "./Book";

const Books = ({ trilogy }) => {
  return (
    <div className="row mt-1">
      <div className="card bg-secondary">
        <h3 className="card-title text-info text-center ">{trilogy.author}</h3>
        <ul className="list-unstyled">
          {trilogy.books.map((book) => (
            <li key={book.id}>
                <div className="card p-1 mb-2 bg-success">
              <Book book={book} /></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Books;
