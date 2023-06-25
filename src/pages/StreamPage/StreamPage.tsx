import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// custom components
import StreamCard from "../../components/StreamCard/StreamCard";
import BackgroundDimmer from "../../components/BackgroundDimmer/BackgroundDimmer";
// material components
import { Box, Grid } from "@mui/material";
// services
import { fetchStreamsFn } from "../../services/streamService";

const StreamPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      // Redirect to login page if userId doesn't exist
      navigate("/403");
    }
  }, []);

  const { data } = useQuery({ queryKey: ["streams"], queryFn: fetchStreamsFn });
  console.log("data: ", data);
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
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        padding: 4,
        mt: 8,
      }}
    >
      <BackgroundDimmer />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columns={{ md: 3 }}
        rowGap={5}
        columnGap={4}
        sx={{ zIndex: 1 }}
      >
        {data?.map((stream: any) => (
          <StreamCard
            key={stream.id}
            title={stream.title}
            shortDescription={stream.summary}
            upVotes={stream.upVotes}
            downVotes={stream.downVotes}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default StreamPage;
