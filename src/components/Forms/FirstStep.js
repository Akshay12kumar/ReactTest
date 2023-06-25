import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import "./../../App.css";

const FirstStep = ({ nextStep, handleData, values }) => {
  const [error, setError] = useState(false);

  /* Next Step trigger to proceed further with empty validation */
  const submitData = (e) => {
    e.preventDefault();
    if (validator.isEmpty(values.make)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <Card className="card-style">
      <Card.Body className="card-body">
        <Form onSubmit={submitData}>
          <Form.Group className="mb-3">
            <Form.Label className="form-text">MAKE</Form.Label>
            <Form.Select
              aria-label="Default make of the Car"
              className="select-style"
              onChange={(event) => {
                handleData(event, "make");
                setError(false);
              }}
              value={values.make}
            >
              <option>Open this select menu</option>
              <option value="AUDI">AUDI</option>
              <option value="BMW">BMW</option>
              <option value="VAUXHAL">VAUXHAL</option>
              <option value="MERCEDES">MERCEDES</option>
              <option value="PEUGEOT">PEUGEOT</option>
              <option value="RENAULT">RENAULT</option>
            </Form.Select>
            {error ? (
              <Form.Text className="error-text">
                This value needs to be selected
              </Form.Text>
            ) : (
              ""
            )}
            <div className="div-style">
              <Button variant="primary" type="submit" className="button-style">
                Next
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FirstStep;
