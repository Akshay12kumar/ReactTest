import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FirstStep from "./components/Forms/FirstStep.js";
import SecondStep from "./components/Forms/SecondStep";
import ThirdStep from "./components/Forms/ThirdStep";
import Result from "./components/Forms/Result";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    make: "",
    color: "",
    code: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleFormData = (event, input) => {
    const { value } = event.target;

    setFormData((preState) => ({
      ...preState,
      [input]: value,
    }));
  };

  /* Conditional Operation for component selection */
  switch (step) {
    case 1:
      return (
        <div className="App">
          <h1 className="form-title">React Multi Step Form</h1>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <FirstStep
                  nextStep={nextStep}
                  handleData={handleFormData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <h1 className="form-title">React Multi Step Form</h1>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <SecondStep
                  nextStep={nextStep}
                  handleData={handleFormData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <h1 className="form-title">React Multi Step Form</h1>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <ThirdStep
                  nextStep={nextStep}
                  handleData={handleFormData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 4:
      return (
        <div className="App">
          <h1 className="form-title">React Multi Step Form</h1>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Result values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );

    default:
      return <div className="App"></div>;
  }
}

export default App;
