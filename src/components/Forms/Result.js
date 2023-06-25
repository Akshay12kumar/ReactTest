import React from "react";
import { Form, Card, FormText } from "react-bootstrap";
import "./../../App.css";

const Result = ({ values }) => {
  return (
    <Card className="card-style">
      <Card.Body className="card-body">
        <Form>
          <Form.Group className="mb-3">
            <FormText className="result-text">Generated Text</FormText>

            <FormText className="result-text">
              I have a {values.make} and the color is {values.color}
            </FormText>
            {values.color === "RED" ? (
              <FormText className="result-text">
                THE CAR IS RED! NICE!!
              </FormText>
            ) : (
              ""
            )}
            <FormText className="result-text">REF:{values.code}</FormText>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default Result;
