import { Box, TextField, TextFieldProps, Typography } from "@mui/material";

const InputText = (props: TextFieldProps) => {
  return (
    <Box
      sx={{
        width: "350px",
        my: 2,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: "50px",
      }}
    >
      <TextField
        fullWidth
        InputProps={{ sx: { borderRadius: "50px", color: "#fff" } }}
        InputLabelProps={{ sx: { color: "white" } }}
        {...props}
      />
    </Box>
  );
};

export default InputText;
