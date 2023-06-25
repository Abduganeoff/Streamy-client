import { Box, TextField, TextFieldProps, Typography } from "@mui/material";

const InputText = ({ helperText, multiline, ...rest }: TextFieldProps) => {
  const inputCommon = {
    borderRadius: "50px",
    color: "#fff",
  };
  const inputHeight = multiline ? { height: "150px" } : {};

  const inputPropsMerged = { ...inputCommon, ...inputHeight };

  return (
    <Box mb={helperText !== "" ? 4 : 7}>
      <Box
        sx={{
          width: "350px",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderRadius: "50px",
        }}
      >
        <TextField
          autoComplete="off"
          fullWidth
          multiline={multiline}
          color={helperText !== "" ? "error" : "primary"}
          InputProps={{ sx: inputPropsMerged }}
          InputLabelProps={{ sx: { color: "white" } }}
          {...rest}
        />
      </Box>
      {helperText && (
        <Typography sx={{ ml: 3 }} variant="caption" color="error">
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default InputText;
