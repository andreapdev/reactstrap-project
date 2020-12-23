import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";

const CardComponent = (props) => {
  const cardStyle = {
    backgroundColor: "#4B2E39",
    padding: "1rem",
    lineHeight: "100%"
  };

  return (
    <div className={props.className} style={cardStyle}>
      <Card>
        <CardImg src="/reactstrap-project/assets/blue-flowers.jpg" alt="blue flowers"/>
        <CardBody>Blue Flowers</CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;