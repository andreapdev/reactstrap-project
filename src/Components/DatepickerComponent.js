import React from "react";
import { Input, Label } from "reactstrap";

const DatepickerComponent = (props) => {
  const datepickerStyle = {
    backgroundColor: "#77A0A9",
    padding: "1rem",
    lineHeight: "100%"
  };
  return (
    <div className={props.className} style={datepickerStyle}>
      <Label />
      Pick a date
      <Input type="date" />
    </div>
  );
};

export default DatepickerComponent;