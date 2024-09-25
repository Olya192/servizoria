import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";
import "./Authorization.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ValuesType = {
  email: string;
  password: string;
};

export const Authorization = () => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const validate = (values: ValuesType) => {
    const errors: FormikErrors<ValuesType> = {};

    if (!values.email) {
      errors.email = "обязательное поле";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "введите адрес электронной почты";
    }

    if (!values.password) {
      errors.password = "обязательное поле";
    }
    console.log(errors);
    return errors;
  };

  const hendelSubmit = () => {
    setDisabled(true);
    console.log("1");
    setTimeout(() => {
      setDisabled(false);
      navigate("/home");
      console.log("2");
    }, 5000);
  };

  return (
    <div className="author">
      <Formik
        validate={validate}
        initialValues={{ email: "", password: "" }}
        onSubmit={(a) => {
          console.log(a);
          localStorage.setItem("name", a.email);
          hendelSubmit();
        }}
      >
        {() => (
          <Form className="form">
            <div className="form-group">
              <ErrorMessage
                component="div"
                name="email"
                className="invalid-feedback"
              />
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="введите email"
                disabled={disabled}
              />
            </div>
            <div className="form-group">
              <ErrorMessage
                component="div"
                name="password"
                className="invalid-feedback"
              />
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="введите пароль"
                disabled={disabled}
              />
            </div>
            <button type="submit" className="form-button" disabled={disabled}>
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
