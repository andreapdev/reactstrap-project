import React from 'react';
import {Form, Input, Label} from 'reactstrap';

const FormComponent = props => {
    const formStyle = {
        backgroundColor:"#6C596E",
        padding: "1rem",
        lineHeight: "100%"
    };
    return(
        <div className={props.className} style={formStyle}>
            <Form>
                <Label><Input type="text" placeholder="Name"></Input></Label>
                <Label><Input type="text" placeholder="Last Name"></Input></Label>
                <Label><Input type="email" placeholder="Email"></Input></Label>
            </Form>
        </div>
    );
};

export default FormComponent;