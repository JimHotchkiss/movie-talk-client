import React from "react";

const Movie = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.title}</h3>
      <img
        src={
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + props.posterUrl
        }
      />
    </div>
  );
};
export default Movie;
