import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import { moviesCast, moviesDetails, moviesReviews } from "../services/api";
import Cast from "../Components/Cast/Cast";
import Reviews from "../Components/Reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    moviesDetails: {},
    cast: [],
    reviews: [],
    back: {},
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    moviesDetails(movieId).then((data) => {
      this.setState({
        moviesDetails: { ...data },
        back: { ...this.props.location.state },
      });
    });

    moviesCast(movieId).then((cast) => {
      this.setState({ cast: cast });
    });

    moviesReviews(movieId).then((reviews) => {
      this.setState({ reviews: reviews });
    });
    // console.log("back", this.props.location.state);
  }

  onHandleBack = () => {
    const { history } = this.props;
    if (this.state.back?.query) {
      history.push({
        pathname: this.state.back.from,
        state: { query: this.state.back?.query },
        search: `query=${this.state.back?.query}`,
      });
    } else history.push("/");
  };
  render() {
    const { location } = this.props;

    const { cast, reviews, moviesDetails } = this.state;
    const { url, path } = this.props.match;
    return (
      <>
        <div className=" flex  flex-col flex-wrap content-center">
          <MovieDetails {...moviesDetails} />
          <button
            type="button"
            onClick={this.onHandleBack}
            className="backdrop mt-2 bg-white bg-opacity-0 border text-white border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg"
          >
            Go Back
          </button>
          <h3 className="text-white">More Info:</h3>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state.from },
            }}
          >
            <button className="w-full  backdrop bg-white bg-opacity-0 border text-white border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
              Cast
            </button>
          </NavLink>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state.from },
            }}
          >
            <button className=" w-full mt-2 backdrop bg-white bg-opacity-0 border text-white border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
              Reviews
            </button>
          </NavLink>
        </div>
        <Switch>
          <Route
            path={`${path}/cast`}
            render={(props) => <Cast cast={cast} />}
          />

          <Route
            path={`${path}/reviews`}
            render={(props) => <Reviews reviews={reviews} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
