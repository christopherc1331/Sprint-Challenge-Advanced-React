import React from "react";
import Card from "react-bootstrap/Card";

const PlayerCard = props => {
  console.log(props);
  return (
    <div className="cardContainer">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.player.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.player.country}
          </Card.Subtitle>
          <Card.Text>{`# Of Searches: ${props.player.searches}`}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlayerCard;
