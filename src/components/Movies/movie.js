import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Movie = props => {
  return (
    <Container>
      <Card style={{ width: "185px", margin: "1em" }}>
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
      </Card>
    </Container>
  );
};
export default Movie;
