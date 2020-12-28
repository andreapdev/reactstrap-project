import React from "react";
import { Col, Form, Input } from "reactstrap";

const DropdownComponent = (props) => {
  const dropdownStyle = {
    backgroundColor: "#6F7D8C",
    padding: "1rem",
    alignItems: "center",
    lineHeight: "100%"
  };
  return (
    <Col xs={props.xs} style={dropdownStyle}>
        <Form>
            <Input type="select">
                <option selected>Location</option>
                <option>Europe</option>
                <option>Asia</option>
                <option>Africa</option>
                <option>Australia</option>
                <option>America</option>
            </Input>
        </Form>
    </Col>
  );
};

export default DropdownComponent;