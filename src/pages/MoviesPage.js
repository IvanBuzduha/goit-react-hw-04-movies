import React, { Component } from "react";
import MoviesList from "../Components/MoviesList/MoviesList";
import { searchMovies } from "../services/api";
import queryString from "query-string";

class MoviesPage extends Component {
  state = { searchMovies: [], query: "" };

  componentDidMount() {
    const { search, pathname } = this.props.location;
    if (this.props.location.state?.query) {
      searchMovies(this.props.location.state?.query).then((searchMovies) =>
        this.setState({ searchMovies })
      );
    }
    if (search && pathname) {
      this.setState({
        query: queryString.parse(search).query,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      searchMovies(this.state.query).then((searchMovies) =>
        this.setState({ searchMovies })
      );
    }
  }

  onHandleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();

    const { query } = this.state;
    const { history, location } = this.props;
    this.setState({ query: query });
    // console.log("STATE", this.state);
    history.push({
      pathname: location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { query, searchMovies } = this.state;
    return (
      <>
        <div className=" flex  flex-col flex-wrap content-center">
          <h2 className="text-white">Search Movies...</h2>
          <form onSubmit={this.onHandleSubmit}>
            <input
              className="h-8 mr-5 pl-5"
              name="query"
              type="text"
              placeholder="Search films"
              value={query}
              onChange={this.onHandleChange}
            ></input>
            <button
              type="submit"
              className="backdrop bg-white bg-opacity-0 border text-white border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg"
            >
              Search
            </button>
          </form>
        </div>
        {searchMovies.length > 0 && (
          <MoviesList
            renderMovie={searchMovies}
            location={this.props.location}
            query={this.state.query}
          />
        )}
      </>
    );
  }
}

export default MoviesPage;
