import { Form } from "../components/AuthForm/AuthForm.models";
import api from "./api";

export const createAccountFn = async (form: Form) => {
  const { email, password, passwordConfirmation } = form;
  const response = await api("/signup", {
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
  const response = await api("/signin", {
    method: "POST",
    data: {
      email,
      password,
    },
  });
  const data = await response.data;
  return data;
};

export const logoutFn = async () => {
  const response = await api("/signout", {
    method: "GET",
  });
  const data = await response.data;
  return data;
};
