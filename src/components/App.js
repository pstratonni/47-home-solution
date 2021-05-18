import React, { Component } from "react";
import Books from "./Books";

const getBook = () => {
  return {
    id: 1,
    author: "John Doe",
    books: [
      {
        id: 2,
        title: "The Super Book 1",
        year: 2019,
        avgRating: 5,
        comments: [
          { id: 211, name: "Ivan", comment: "Lol 1", rating: 5 },
          { id: 212, name: "Marya", comment: "Wow 1", rating: 5 },
          {
            id:213,
            name: "Jimmy",
            comment: "Super book 1",
            rating: 5,
          },
        ],
      },
      {
        id:3,
        title: "The Super Book 2",
        year: 2020,
        avgRating: 4,
        comments: [
          { id:321, name: "Ivan", comment: "Lol 2", rating: 4 },
          { id: 322, name: "Marya", comment: "Wow 2", rating: 4 },
          {
            id: 323,
            name: "Jimmy",
            comment: "Super book",
            rating: 4,
          },
        ],
      },
      {
        id:4,
        title: "The Super Book 3",
        year: 2021,
        avgRating: 3,
        comments: [
          { id:431, name: "Ivan", comment: "Lol 3", rating: 3 },
          { id: 432, name: "Marya", comment: "Wow 3", rating: 3 },
          {
            id: 433,
            name: "Jimmy",
            comment: "Super book 3",
            rating: 3,
          },
        ],
      },
    ],
  };
};

export const bookContext = React.createContext();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { trilogy: getBook() };
  }

  addComment = (comment, idBook) => {
    if (
      comment.name.trim() === "" ||
      comment.comment.trim() === "" ||
      comment.rating === 0
    ) {
      return;
    }
    const booksDoe = { ...this.state.trilogy };
    const idx = booksDoe.books.findIndex((book) => (book.id === idBook));
    console.log(idx, idBook);
    if (idx === -1) {
      return;
    }

    booksDoe.books[idx].comments.push({
      ...comment,
      id: Date.now(),
      rating: +comment.rating,
    });
    booksDoe.books[idx].avgRating =
      booksDoe.books[idx].comments.reduce(
        (sum, comnt) => (sum += comnt.rating),
        0
      ) / booksDoe.books[idx].comments.length;
    this.setState({ ...this.state, trilogy: booksDoe });
  };

  render() {
    return (
      <section className="container">
        <bookContext.Provider value={{ addComment: this.addComment }}>
          <Books trilogy={this.state.trilogy} />
        </bookContext.Provider>
      </section>
    );
  }
}
