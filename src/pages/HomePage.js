import React, { Component } from "react";

import MoviesList from "../Components/MoviesList/MoviesList";
import { popularMovies } from "../services/api";

class HomePage extends Component {
  state = { popularMovies: [] };
  componentDidMount() {
    popularMovies().then((movies) => {
      this.setState({ popularMovies: movies });
    });
  }
  render() {
    const { popularMovies } = this.state;
    // console.log(popularMovies);
    return (
      <>
        <h2 className="mb-3 pb-3 text-3xl font-semibold text-shadow backdrop text-center bg-opacity-10 rounded p-3 text-white">
          Popular movies for today
        </h2>
        <MoviesList
          renderMovie={popularMovies}
          location={this.props.location}
        />
      </>
    );
  }
}

export default HomePage;
