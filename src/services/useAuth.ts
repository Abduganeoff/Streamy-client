import { useMutation } from "@tanstack/react-query";
import { Form } from "../components/AuthForm/AuthForm.models";
import axios from "axios";

export const createAccountFn = async (form: Form) => {
  const { email, password, passwordConfirmation } = form;
  const response = await axios("http://localhost:5000/signup", {
    method: "POST",
    data: {
      email,
      password,
      passwordConfirmation,
    },
  });
  const data = await response.data;
  return data;
};

export const loginFn = async (form: Form) => {
  const { email, password } = form;
  const response = await axios("http://localhost:5000/signin", {
    method: "POST",
    data: {
      email,
      password,
    },
  });
  const data = await response.data;
  return data;
};
