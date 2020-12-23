import React from "react";
import {Form, Input} from "reactstrap";

const DropdownComponent = (props) => {
  const dropdownStyle = {
    backgroundColor: "#6F7D8C",
    padding: "1rem",
    alignItems: "center",
    lineHeight: "100%"
  };
  return (
    <div className={props.className} style={dropdownStyle}>
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
    </div>
  );
};

export default DropdownComponent;