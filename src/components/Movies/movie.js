import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Movie = props => {
  return (
    <a style={{ textDecoration: "none", color: "black" }} href="#">
      <Card
        style={{
          boxShadow: "5px 5px 7px #7F7F7F",
          width: "185px",
          margin: ".75em",
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
        <Button variant="secondary" size="lg" block>
          Review
        </Button>
      </Card>
    </a>
  );
};
export default Movie;
