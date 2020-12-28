import React from "react";
import { Col, Input, Label } from "reactstrap";

const SliderComponent = (props) => {
  const sliderStyle = {
    backgroundColor: "#6F7D8C",
    padding: "1rem",
    lineHeight: "100%",
  };
  return (
    <Col style={sliderStyle}>
      <Label for="slider-1">
        Slider 1
        <Input type="range" id="slider-1" />
      </Label>
      <Label for="slider-2">
        Slider 2
        <Input type="range" id="slider-2" />
      </Label>
    </Col>
  );
};

export default SliderComponent;
