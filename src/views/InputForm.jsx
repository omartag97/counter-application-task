import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Col, Container, Row } from "react-bootstrap";

import Input from "../components/Input";
import Button from "../components/Button";
import { addCounterValue, counterSelector, setIsInputFocused } from "../state";
function InputForm() {
  const { t } = useTranslation("counter");

  const dispatch = useDispatch();

  const { isFocused } = useSelector(counterSelector);

  const formik = useFormik({
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      inputValue: 1,
    },
    validationSchema: Yup.object().shape({
      inputValue: Yup.number()
        .required(t("requiredField"))
        .typeError(t("mustBeNumber"))
        .min(1, t("minValue"))
        .max(12, t("maxValue12")),
    }),
    onSubmit: (values) => {
      dispatch(addCounterValue(values));
      formik.resetForm();
    },
  });

  const { values, handleSubmit } = formik;
  return (
    <Container>
      <Row>
        <Col xs="auto">
          <Input
            name="inputValue"
            color={
              values.inputValue > 1 && !formik.errors.inputValue
                ? "secondary"
                : formik.errors.inputValue
                ? "error"
                : "primary"
            }
            value={values.inputValue}
            onChange={({ target }) =>
              formik.setFieldValue("inputValue", target.value)
            }
            focus={isFocused}
            onFocus={() => dispatch(setIsInputFocused(true))}
            onBlur={() => dispatch(setIsInputFocused(false))}
            error={formik.touched.inputValue && !!formik.errors.inputValue}
            helperText={formik.touched.inputValue && formik.errors.inputValue}
          />
        </Col>
        <Col xs="auto">
          <Button
            color="primary"
            variant="contained"
            type="button"
            onClick={handleSubmit}
          >
            {t("addToCounter")}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default InputForm;
