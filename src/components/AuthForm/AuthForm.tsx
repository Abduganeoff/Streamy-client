import { ChangeEvent, FC, useEffect, useState } from "react";
// mui components
import { Box, Button, Typography } from "@mui/material";
// custom components
import InputText from "../InputText/InputText";
// models
import { AuthFormProps } from "./AuthForm.models";
import { useValidate } from "../../hooks/useValidate";
import { on } from "events";

const AuthForm: FC<AuthFormProps> = ({
  form,
  onHandleForm,
  handleCreateAccount,
  serverError,
  handleLogin,
}) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const { email, password, passwordConfirmation } = form;
  const { errorMessage, isAnyError } = useValidate(form);
  const [isEmptyField, setIsEmptyField] = useState<boolean>(true);

  useEffect(() => {
    if (isSignUp) {
      if (email && password && passwordConfirmation) {
        setIsEmptyField(false);
      } else {
        setIsEmptyField(true);
      }
    } else {
      if (email && password) {
        setIsEmptyField(false);
      } else {
        setIsEmptyField(true);
      }
    }
  }, [form]);

  const handleChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onHandleForm({ inputName: e.target.name, inputVal: e.target.value });
  };

  const handleSubmitButton = () => {
    if (isSignUp) {
      // create account
      handleCreateAccount();
    } else {
      // login
      handleLogin();
    }
  };

  return (
    <Box
      sx={{
        zIndex: 1,
      }}
    >
      <InputText
        name="email"
        label="Email"
        value={email}
        onChange={handleChanges}
        helperText={errorMessage.email}
      />
      <InputText
        name="password"
        label="Password"
        value={password}
        onChange={handleChanges}
        helperText={errorMessage.password}
      />
      {isSignUp && (
        <InputText
          name="passwordConfirmation"
          label="Confirm password"
          value={passwordConfirmation}
          onChange={handleChanges}
          helperText={errorMessage.passwordConfirmation}
        />
      )}
      <Button
        onClick={handleSubmitButton}
        disabled={isAnyError || isEmptyField}
        variant="contained"
        fullWidth
        size="large"
        sx={{
          borderRadius: "50px",
          my: 2,
          backgroundColor:
            isAnyError || isEmptyField
              ? "rgba(250, 250, 250, 0.5) !important"
              : undefined,
        }}
      >
        Sign {isSignUp ? "up" : "in"}
      </Button>

      <Box display="flex" justifyContent={"right"}>
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => setIsSignUp((prev) => !prev)}
        >
          {isSignUp ? "Do you have an account?" : "Create an account?"}
        </Button>
      </Box>
      {serverError && (
        <Box mb={1}>
          {serverError.map((err) => (
            <Typography key={err} color="error">
              {err}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AuthForm;
