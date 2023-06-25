import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// custom components
import StreamCard from "../../components/StreamCard/StreamCard";
import BackgroundDimmer from "../../components/BackgroundDimmer/BackgroundDimmer";
// material components
import { Box } from "@mui/material";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const StreamPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      // Redirect to login page if userId doesn't exist
      navigate("/403");
    }
  }, []);

  // const fetchStreams = (): Promise<any> =>
  //   api.get("/streams").then((response) => response.data);

  // const { data } = useQuery({ queryKey: ["streams"], queryFn: fetchStreams });

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        position: "relative",
        backgroundImage: "url(assets/img01.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <BackgroundDimmer />
      <StreamCard
        title="Stream"
        shortDescription="This is my short description, if you like it, pleases"
      />
    </Box>
  );
};

export default StreamPage;
