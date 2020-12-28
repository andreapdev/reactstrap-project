import React from "react";
import { Col, Input, Label } from "reactstrap";

const DatepickerComponent = (props) => {
  const datepickerStyle = {
    backgroundColor: "#77A0A9",
    padding: "1rem",
    lineHeight: "100%"
  };
  return (
    <Col xs={props.xs} style={datepickerStyle}>
      <Label />
      Pick a date
      <Input type="date" />
    </Col>
  );
};

export default DatepickerComponent;