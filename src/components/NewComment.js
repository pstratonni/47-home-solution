import React, { Component } from "react";
import { bookContext } from "./App";

const getClearComment = () => {
  return {
    name: "",
    comment: "",
    rating: 0,
  };
};

export default class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: getClearComment() };
  }
  onChangeHandle = (event) => {
    const com = { ...this.state.comment };
    com[event.target.name] = event.target.value;
    this.setState({
      ...this.state,
      comment: com,
    });
  };

  render() {
    return (
      <bookContext.Consumer>
        {(ctn) => {
          return (
            <div className="card mt-3 mb-1">
              <div className="card-body">
                <div className="h4 card-title text-danger">New comment</div>
                <div className="mb-3">
                  <label htmlFor={"nameText"+this.props.id} className="form-label text-indigo">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id={"nameText"+this.props.id}
                    name="name"
                    placeholder="Your Name here"
                    value={this.state.comment.name}
                    onChange={this.onChangeHandle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={"commentText"+this.props.id} className="form-label">
                    Comment
                  </label>
                  <textarea
                    className="form-control form-control-sm"
                    id={"commentText"+this.props.id}
                    rows="3"
                    name="comment"
                    value={this.state.comment.comment}
                    onChange={this.onChangeHandle}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Rating</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="rating"
                    value={this.state.comment.rating}
                    onChange={this.onChangeHandle}
                  >
                    <option>Open this select menu</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-success"
                  onClick={() => {
                    ctn.addComment(this.state.comment, this.props.id);
                    this.setState({
                      ...this.state,
                      comment: getClearComment(),
                    });
                  }}
                >
                  Add Comment
                </button>
              </div>
            </div>
          );
        }}
      </bookContext.Consumer>
    );
  }
}
