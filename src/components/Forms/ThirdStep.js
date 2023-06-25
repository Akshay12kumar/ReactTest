import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import "./../../App.css";

/* Component with text box for entering code */
const ThirdStep = ({ nextStep, handleData, values }) => {
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
            <Form.Label className="form-text">CODE</Form.Label>
            <input
              value={values.code}
              className="code-input"
              onChange={(event) => {
                handleData(event, "code");
                setError(false);
              }}
            />
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

export default ThirdStep;
