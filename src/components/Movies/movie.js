import React from "react";
import Button from "react-bootstrap/Button";

const Movie = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.title}</h3>
      <Button variant="primary">Primary</Button>
      <img
        src={
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + props.posterUrl
        }
      />
    </div>
  );
};
export default Movie;
