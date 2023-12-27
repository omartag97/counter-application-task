import { useDispatch, useSelector } from "react-redux";

import {
  incrementCounter,
  decrementCounter,
  incrementCounterIfOdd,
  asyncIncrement,
  clearCounter,
  counterSelector,
} from "../state/index";

import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "../components/Button";
import InputForm from "./inputForm";
function Counter() {
  const { t } = useTranslation("counter");

  const dispatch = useDispatch();
  const { counter } = useSelector(counterSelector);

  return (
    <div style={{ display: "flex" }}>
      <Container fluid className="w-75 mx-auto">
        <Row className="justify-content-center align-items-center">
          <Col xs="auto">
            <Button
              color="error"
              variant="outlined"
              onClick={() => dispatch(decrementCounter())}
            >
              {t("decrementByOne")}
            </Button>
          </Col>
          <Col xs="auto"> {counter}</Col>
          <Col xs="auto">
            <Button
              color="primary"
              variant="outlined"
              onClick={() => dispatch(incrementCounter())}
            >
              {t("incrementByOne")}
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-md-center align-items-center">
          <Col xs="auto">
            <Button
              color="primary"
              variant="contained"
              onClick={() => dispatch(incrementCounterIfOdd())}
            >
              {t("incrementIfOddByOne")}
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-md-center align-items-center">
          <Col xs="auto">
            <Button
              color="secondary"
              variant="contained"
              onClick={() => dispatch(asyncIncrement())}
            >
              {t("incrementAsyncByTwo")}
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-md-center align-items-center">
          <Col xs="auto">
            <Button
              color="warning"
              variant="outlined"
              onClick={() => dispatch(clearCounter())}
            >
              {t("clearCounter")}
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center mt-3">
          <Col xs="auto">
            <InputForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Counter;
