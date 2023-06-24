import { useMutation } from "@tanstack/react-query";
import { Form } from "../components/AuthForm/AuthForm.models";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const createAccount = async (form: Form) => {
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

export const useCreateAccount = () => {
  const navigate = useNavigate();

  return useMutation(createAccount, {
    onSuccess: () => {
      navigate("/streams");
    },
    onError: () => {
      console.log("Something went wrong with creating an account");
    },
  });
};
