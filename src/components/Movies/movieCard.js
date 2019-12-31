import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MovieReviews from "../MovieReviews/movieReviews";

const MovieCard = ({ title, description, posterUrl, id }) => {
  // const [showReviews, setShowReviews] = useState(false);
  // const clickHandler = event => {
  //   event.preventDefault();
  //   setShowReviews(true);
  // };

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
          src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + posterUrl}
        />
        <Card.Body
          style={{
            overflow: "hidden",
            overflowY: "scroll",
            height: "278px"
          }}
        >
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        {/* <Button>Reviews</Button> */}
      </Card>
    </a>
  );
};
export default MovieCard;
