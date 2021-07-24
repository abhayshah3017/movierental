import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.movie.liked) classes = classes + "-o";
    return (
      <i
        className={classes}
        style={{cursor: "pointer"}}
        onClick={() => this.props.onLike(this.props.movie)}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
