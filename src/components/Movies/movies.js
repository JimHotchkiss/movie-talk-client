import React from "react";
import MovieCard from "./movieCard";
import MovieReviews from "../MovieReviews/movieReviews";
import Button from "react-bootstrap/Button";
const moviesApiKey = process.env.REACT_APP_API_KEY;
let movieReviews = "";
class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      showReview: false
    };
  }

  clickHandler = (event, movieData) => {
    movieReviews = <MovieReviews movieData={movieData} />;
    this.setState({
      showReview: true
    });
  };
  render() {
    const movie = this.state.movies.map(movie => {
      return (
        <div key={movie.id}>
          <MovieCard
            movieData={movie}
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterUrl={movie.poster_path}
            description={movie.overview}
            showReview={this.state.showReview}
          />
          <div style={{ paddingLeft: "14px" }}>
            <Button
              style={{
                width: "187px",
                textAlign: "center"
              }}
              onClick={event => this.clickHandler(event, movie)}
            >
              Reviews
            </Button>
          </div>
        </div>
      );
    });

    if (!this.state.showReview) {
      return (
        <div
          style={{
            backgroundColor: "#D8D8D8",
            padding: ".5em",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {movie}
        </div>
      );
    } else {
      return <div>{movieReviews}</div>;
    }
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${moviesApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019`
    )
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.results
        });
      });
  }
}

export default Movies;
