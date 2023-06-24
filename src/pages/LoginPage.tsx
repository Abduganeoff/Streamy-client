// mui components
import { Box } from "@mui/material";
// custom components
import InputText from "../components/InputText";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "relative",
        backgroundImage: "url(assets/img01.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <AuthForm />
    </Box>
  );
};

export default LoginPage;
