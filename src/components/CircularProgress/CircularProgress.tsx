import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import BackgroundDimmer from "../BackgroundDimmer/BackgroundDimmer";

export default function CircularIndeterminate() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: "url(/assets/img04.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <BackgroundDimmer />
      <CircularProgress
        sx={{ zIndex: 1, mt: -20 }}
        color="secondary"
        size={100}
      />
    </Box>
  );
}
