import { Box } from "@mui/material";
import BackgroundDimmer from "../../components/BackgroundDimmer/BackgroundDimmer";

const StreamDetailPage = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        position: "relative",
        backgroundImage: "url(/assets/img01.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        padding: 4,
        mt: 8,
      }}
    >
      <BackgroundDimmer />
      <Box sx={{ zIndex: 1 }}>StreamDetailPage</Box>
    </Box>
  );
};

export default StreamDetailPage;
