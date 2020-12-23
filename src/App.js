import React from "react";
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
    <main className="App container">
      <div className="row p-0 m-0" style={{position:"absolute", top:0, bottom:0, left:0, right:0}}>
        <div className="col-12 col-md-6 h-100">
          <div className="row h-50">
            <BreadcrumbComponent className="col-7" />
            <CardComponent className="col-5" />
          </div>
          <div className="row h-50">
            <DatepickerComponent className="col-4" />
            <DropdownComponent className="col-8" />
          </div>
        </div>
        <FormComponent className="col-6 col-md-3" />
        <div className="col-6 col-md-3 h-100 m-0 p-0">
          <div className="row h-50 m-0 p-0">
            <SliderComponent className="col" />
          </div>
          <div className="row h-50 m-0 p-0">
            <CheckboxComponent className="col" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;