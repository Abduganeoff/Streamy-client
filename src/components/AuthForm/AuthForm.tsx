import { ChangeEvent, FC, useState } from "react";
// mui components
import { Box, Button } from "@mui/material";
// custom components
import InputText from "../InputText/InputText";
// models
import { AuthFormProps } from "./AuthForm.models";
import { useValidate } from "../../hooks/useValidate";
import { on } from "events";

const AuthForm: FC<AuthFormProps> = ({ form, onHandleForm }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const { email, password, confirmPassword } = form;
  const { errorMessage, isAnyError } = useValidate(form);

  const handleChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onHandleForm({ inputName: e.target.name, inputVal: e.target.value });
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
          name="confirmPassword"
          label="Confirm password"
          value={confirmPassword}
          onChange={handleChanges}
          helperText={errorMessage.confirmPassword}
        />
      )}
      <Button
        disabled={isAnyError}
        variant="contained"
        fullWidth
        size="large"
        sx={{
          borderRadius: "50px",
          my: 2,
          backgroundColor: isAnyError
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
    </Box>
  );
};

export default AuthForm;
