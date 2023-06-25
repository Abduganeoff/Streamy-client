import { useState } from "react";
import { useNavigate } from "react-router-dom";
// service functions
import { createAccountFn, loginFn } from "../../services/useAuth";
// mui components
import { Box } from "@mui/material";
// custom components
import AuthForm from "../../components/AuthForm/AuthForm";
import BackgroundDimmer from "../../components/BackgroundDimmer/BackgroundDimmer";
// models
import {
  Form,
  handleFormTypes,
} from "../../components/AuthForm/AuthForm.models";
import { useMutation } from "@tanstack/react-query";

const INITIAL_FORM: Form = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string[] | undefined>();
  const [form, setForm] = useState<Form>(INITIAL_FORM);

  const { mutate: createAccount } = useMutation(createAccountFn, {
    onSuccess: (data) => {
      // Store the user ID in localStorage
      const userId = data.id;
      localStorage.setItem("userId", userId);

      navigate("/streams");
    },
    onError: (error: any) => {
      setServerError(error.response.data.map((err: any) => err.msg));
    },
  });

  const { mutate: login } = useMutation(loginFn, {
    onSuccess: (data) => {
      // Store the user ID in localStorage
      const userId = data.id;
      localStorage.setItem("userId", userId);

      navigate("/streams");
    },
    onError: (error: any) => {
      setServerError(error.response.data.map((err: any) => err.msg));
    },
  });

  const onHandleForm = ({ inputName, inputVal }: handleFormTypes) => {
    setForm((prev) => ({ ...prev, [inputName]: inputVal }));
  };

  const handleCreateAccount = () => {
    createAccount(form);
  };

  const handleLogin = () => {
    login(form);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "relative",
        backgroundImage: "url(assets/img04.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <BackgroundDimmer />
      <AuthForm
        form={form}
        onHandleForm={onHandleForm}
        handleCreateAccount={handleCreateAccount}
        serverError={serverError}
        handleLogin={handleLogin}
      />
    </Box>
  );
};

export default LoginPage;
