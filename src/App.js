import React from "react";
import {Container, Col, Row} from 'reactstrap';
import BreadcrumbComponent from "./Components/BreadcrumbComponent";
import CardComponent from "./Components/CardComponent";
import CheckboxComponent from "./Components/CheckboxComponent";
import SliderComponent from "./Components/SliderComponent";
import FormComponent from "./Components/FormComponent";
import DatepickerComponent from "./Components/DatepickerComponent";
import DropdownComponent from "./Components/DropdownComponent";
import "./App.css";

 function App() {
  return (
    <Container className="App container">
      <Row className="p-0 m-0" style={{position:"absolute", top:0, bottom:0, left:0, right:0}}>
        <Col md="6" className="h-100">
          <Row className="h-50">
            <BreadcrumbComponent xs="7" />
            <CardComponent xs="5" />
          </Row>
          <Row className="h-50">
            <DatepickerComponent xs="4" />
            <DropdownComponent xs="8" />
          </Row>
        </Col>
        <FormComponent xs="6" md="3" />
        <Col sm="6" md="3" className="h-100 m-0 p-0">
          <Row className="h-50 m-0 p-0">
            <SliderComponent />
          </Row>
          <Row className="h-50 m-0 p-0">
            <CheckboxComponent/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;