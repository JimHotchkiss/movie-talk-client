import React from "react";
import Card from "react-bootstrap/Card";

const Movie = props => {
  return (
    <div>
      <Card style={{ width: "185px" }}>
        <Card.Img
          height="278px"
          variant="top"
          src={
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + props.posterUrl
          }
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Movie;
