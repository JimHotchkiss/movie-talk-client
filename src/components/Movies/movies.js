import React from "react";
import Movie from "./movie";

const moviesApiKey = process.env.REACT_APP_API_KEY;
class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  render() {
    const movie = this.state.movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterUrl={movie.poster_path}
          description={movie.overview}
        />
      );
    });
    return <div>{movie}</div>;
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
