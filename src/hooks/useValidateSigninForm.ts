import { useState, useEffect } from "react";
import {
  isValidEmail,
  validateCharactersLimit,
  isEqualPassword,
} from "../utils/validationUtils";
import { Form } from "../components/AuthForm/AuthForm.models";

export const useValidate = (form: Form) => {
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const { email, password, passwordConfirmation } = form;

  useEffect(() => {
    const validateForm = () => {
      let updatedErrorMessage = {
        email: "",
        password: "",
        passwordConfirmation: "",
      };

      if (email !== "" && !isValidEmail(email)) {
        updatedErrorMessage = {
          ...updatedErrorMessage,
          email: "Invalid email",
        };
      }

      if (password !== "" && validateCharactersLimit(password)) {
        updatedErrorMessage = {
          ...updatedErrorMessage,
          password: "Password must be between 4 and 20 characters",
        };
      }

      if (
        passwordConfirmation !== "" &&
        passwordConfirmation &&
        !isEqualPassword(password, passwordConfirmation)
      ) {
        updatedErrorMessage = {
          ...updatedErrorMessage,
          passwordConfirmation: "Password must match",
        };
      }

      setErrorMessage(updatedErrorMessage);
    };

    validateForm();
  }, [email, password, passwordConfirmation]);

  const isAnyError = Object.values(errorMessage).some(
    (message) => message !== ""
  );
  return { errorMessage, isAnyError };
};
