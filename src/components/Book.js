import React from "react";
import Comments from "./Comments";
import NewComment from "./NewComment";
const Book = ({ book }) => {
  return (
    <div className="row mt-2">
      <div className="col-sm-6">
        <div className="card bg-light">
          <div className="card-body">
            <h5 className="card-title text-warning">{book.title}</h5>
            <p className="card-text text-primary">{book.year}</p>
            <p className={"card-text "+(book.avgRating>3?"text-success":"text-danger")}>Rating: {book.avgRating}</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 ">
        <Comments comments={book.comments} />
        <NewComment id={book.id}/>
      </div>
    </div>
  );
};
export default Book;
