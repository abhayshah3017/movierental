import React, { Component } from "react";
import Table from "../comman/table";
import Like from "../comman/like";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    const columns = [
      {
        label: "Title",
        key: "Title",
        path: "title",
        content: (movie) => {
          return <Link to={`/movie/${movie._id}`}>{movie.title}</Link>;
        },
      },
      { label: "Genre", path: "genre.name" },
      { label: "Quantity", path: "numberInStock" },
      { label: "Rent", path: "dailyRentalRate" },
      {
        key: "Like",
        content: (movie) => <Like movie={movie} onLike={onLike} />,
      },
      {
        key: "Delete",
        content: (movie) => (
          <button
            type="button"
            onClick={() => onDelete(movie)}
            className="btn btn-sm btn-dark"
          >
            Delete
          </button>
        ),
      },
    ];
    return (
      <Table
        columns={columns}
        sortColumn={sortColumn}
        items={movies}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
