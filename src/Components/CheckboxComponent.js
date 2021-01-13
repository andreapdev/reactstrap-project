import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

const CheckboxComponent = (props) => {
  const checkboxStyle = {
      backgroundColor: "#77A0A9",
      padding: "1rem",
      height: "100%"
  }
  return (
    <Col style={checkboxStyle}>
      <Form>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Option 1
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Option 2
          </Label>
        </FormGroup>
      </Form>
    </Col>
  );
};

export default CheckboxComponent;