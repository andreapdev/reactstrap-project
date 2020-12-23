import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const BreadcrumbComponent = (props) => {
  const breadStyle = {
    backgroundColor: "#32021F",
    padding: "1rem",
    alignItems: "center",
    lineHeight: "100%",
  };

  return (
    <div className={props.className} style={breadStyle}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>React</BreadcrumbItem>
        <BreadcrumbItem>Reactstrap</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
