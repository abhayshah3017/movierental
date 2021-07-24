import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import ListGroup from "../comman/listGroup";
import Pagination from "../comman/pagination";
import { paginate } from "../utils/paginate";
import { getMovies, deleteMovie } from "../Services/fakeMovieService";
import { getGenres } from "../Services/fakeGenreService";
import { Link } from "react-router-dom";
import _ from "lodash";
import SearchBox from "../comman/searchBox";

class GetMovie extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
  };
  componentDidMount() {
    const genres = [{ name: "All Genres", _id: 0 }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    deleteMovie(movie._id);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    // console.log("like clicked",movie);
    const movies = [...this.state.movies];
    const index = this.state.movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePagination = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenre = (genre) => {
    // console.log({ genre });
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    console.log(query);
  };

  getPageData = () => {
    const { searchQuery } = this.state;
    let filtered = this.state.movies;
    if (searchQuery) {
      filtered = this.state.movies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (this.state.selectedGenre && this.state.selectedGenre._id) {
      this.state.movies.filter(
        (m) => m.genre._id === this.state.selectedGenre._id
      );
    }
    // console.log(filtered);
    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    const movies = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    // console.log(movies);
    const { totalCount, data: movies } = this.getPageData();
    return (
      <>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenre}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <Link className="btn btn-primary" to="/movie/new">
              New Movie
            </Link>
            <SearchBox
              value={this.state.searchQuery}
              onChange={this.handleSearch}
            />
            <MoviesTable
              movies={movies}
              sortColumn={this.state.sortColumn}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            />
            <Pagination
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              totalCount={totalCount}
              onPagination={this.handlePagination}
            />
            <h3>
              {" "}
              Movies{" "}
              <span className="badge bg-secondary rounded-pill">
                {totalCount}
              </span>
            </h3>
          </div>
        </div>
      </>
    );
  }
}

export default GetMovie;
