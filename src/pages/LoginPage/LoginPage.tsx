import { useState } from "react";
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

const INITIAL_FORM: Form = {
  email: "",
  password: "",
  confirmPassword: "",
};

const LoginPage = () => {
  const [form, setForm] = useState<Form>(INITIAL_FORM);

  const onHandleForm = ({ inputName, inputVal }: handleFormTypes) => {
    setForm((prev) => ({ ...prev, [inputName]: inputVal }));
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
      />
    </Box>
  );
};

export default LoginPage;
