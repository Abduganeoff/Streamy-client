import { ChangeEvent, FC, useState } from "react";
// mui components
import { Box, Button } from "@mui/material";
// custom components
import InputText from "../InputText/InputText";
// models
import { AuthFormProps } from "./AuthForm.models";

const AuthForm: FC<AuthFormProps> = ({ form, onHandleForm }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const { username, password, confirmPassword } = form;

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
        name="username"
        label="Username"
        value={username}
        onChange={handleChanges}
      />
      <InputText
        name="password"
        label="Password"
        value={password}
        onChange={handleChanges}
      />
      {isSignUp && (
        <InputText
          name="confirmPassword"
          label="Confirm password"
          value={confirmPassword}
          onChange={handleChanges}
        />
      )}
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ borderRadius: "50px", my: 2 }}
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
