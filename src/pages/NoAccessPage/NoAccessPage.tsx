import { Box } from "@mui/material";

const NoAccessPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/assets/error-page.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    />
  );
};

export default NoAccessPage;
