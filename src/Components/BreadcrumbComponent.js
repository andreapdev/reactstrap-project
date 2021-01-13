import React from "react";
import { Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

const BreadcrumbComponent = (props) => {
  const breadStyle = {
    backgroundColor: "#32021F",
    padding: "1rem",
    alignItems: "center",
    lineHeight: "100%",
  };

  return (
    <Col xs={props.xs} style={breadStyle}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>React</BreadcrumbItem>
        <BreadcrumbItem>Reactstrap</BreadcrumbItem>
      </Breadcrumb>
    </Col>
  );
};

export default BreadcrumbComponent;
