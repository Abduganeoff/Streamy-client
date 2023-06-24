import { Box, Button } from "@mui/material";
import React from "react";
import InputText from "./InputText";

const AuthForm = () => {
  return (
    <Box
      sx={{
        zIndex: 1,
      }}
    >
      <InputText label="Username" />
      <InputText label="Password" />
      <InputText label="Confirm password" />
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ borderRadius: "50px", mt: 2 }}
      >
        Sign up
      </Button>
    </Box>
  );
};

export default AuthForm;
