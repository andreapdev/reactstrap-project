import React from "react";
import { Col, Card, CardBody, CardImg } from "reactstrap";
// import image from "/home/andrea/Documentos/IT Academy/React/reactstrap-project/src/img/blue-flowers.jpg";


const CardComponent = (props) => {
  const cardStyle = {
    backgroundColor: "#4B2E39",
    padding: "1rem",
    lineHeight: "100%"
  };

  return (
    <Col xs={props.xs} style={cardStyle}>
      <Card>
        {/* <CardImg src={require(image)} alt="blue flowers"/> */}
        <CardBody>Blue Flowers</CardBody>
      </Card>
    </Col>
  );
};

export default CardComponent;