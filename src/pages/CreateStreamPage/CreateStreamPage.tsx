import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// material components
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
// custom components
import InputText from "../../components/InputText/InputText";
import BackgroundDimmer from "../../components/BackgroundDimmer/BackgroundDimmer";
// services
import { createStreamFn } from "../../services/streamService";

const OPTIONS = ["Twitch", "YouTube", "TikTok", "Kick", "Rumble"];
const CreateStreamPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    platform: "Twitch",
    summary: "",
    description: "",
  });

  const [open, setOpen] = useState(false);

  const { mutate } = useMutation(createStreamFn, {
    onSuccess: (data) => {
      navigate("/streams");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleChange = (
    event: SelectChangeEvent<(typeof formData)["platform"]>
  ) => {
    setFormData({ ...formData, platform: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handelCreateStream = () => {
    mutate(formData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: "url(/assets/img01.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <BackgroundDimmer />
      <Box sx={{ zIndex: 1 }}>
        <Typography
          sx={{ mb: 3, textAlign: "center" }}
          variant="h4"
          color="secondary.main"
        >
          Create Stream
        </Typography>
        <InputText
          label="Stream Title"
          name="title"
          placeholder="Stream Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <FormControl
          sx={{
            mb: 4,
            minWidth: 120,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            width: " 100%",
          }}
        >
          <InputLabel sx={{ color: "rgba(250, 250, 250, 0.8)" }}>
            Platforms
          </InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={formData.platform}
            label="Age"
            onChange={handleChange}
            sx={{
              color: "#fff",
              "& .MuiSelect-icon": {
                color: "rgba(250, 250, 250, 0.54)",
              },
            }}
          >
            {OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <InputText
          label="Summary"
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleInputChange}
        />
        <InputText
          label="Description"
          name="description"
          placeholder="Description"
          multiline
          maxRows={4}
          value={formData.description}
          onChange={handleInputChange}
        />
        <Button
          sx={{ borderRadius: "50px" }}
          variant="contained"
          fullWidth
          size="large"
          color="secondary"
          onClick={handelCreateStream}
        >
          Create Stream
        </Button>
      </Box>
    </Box>
  );
};

export default CreateStreamPage;
