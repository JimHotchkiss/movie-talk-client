import React from "react";
import Card from "react-bootstrap/Card";

import ReviewsButton from "./reviewsButton";

const MovieCard = props => {
  return (
    <a style={{ textDecoration: "none", color: "black" }} href="#">
      <Card
        style={{
          boxShadow: "5px 5px 7px #7F7F7F",
          width: "185px",
          margin: ".85em",
          textAlign: "center"
        }}
      >
        <Card.Img
          height="278px"
          variant="top"
          src={
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + props.posterUrl
          }
        />
        <Card.Body
          style={{
            overflow: "hidden",
            overflowY: "scroll",
            height: "278px"
          }}
        >
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <ReviewsButton />
      </Card>
    </a>
  );
};
export default MovieCard;
