import { Box, BoxProps } from "@mui/material";

const BackgroundDimmer = (props: BoxProps) => {
  return (
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
  );
};

export default BackgroundDimmer;
