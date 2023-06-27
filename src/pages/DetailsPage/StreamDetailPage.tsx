import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
// material components
import { Box, Paper, Typography } from "@mui/material";
// custom components
import BackgroundDimmer from "../../components/BackgroundDimmer/BackgroundDimmer";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
// services
import { fetchStreamFn } from "../../services/streamService";

const StreamDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      // Redirect to login page if userId doesn't exist
      navigate("/403");
    }
  }, []);

  const { data, isLoading, isError } = useQuery(["stream", id], () =>
    fetchStreamFn(id || "")
  );

  if (isLoading) {
    return <CircularProgress />;
  }
  if (!data || isError) {
    return null;
  }

  const { title, summary, description, platform, upVotes, downVotes } = data;

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
      }}
    >
      <BackgroundDimmer />
      <Paper
        elevation={2}
        sx={{
          zIndex: 1,
          mt: -10,
          backgroundColor: "rgba(40, 40, 40, 0.6)",
          height: 300,
          width: 700,
          padding: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={1}
          justifyContent="center"
        >
          <img
            src="/assets/boy.png"
            alt="stream"
            width="200px"
            height="200px"
          />
          <Typography
            sx={{ fontFamily: "monospace" }}
            variant="subtitle2"
            color="white"
          >
            {`Up-votes: ${upVotes}`}
          </Typography>
          <Typography
            sx={{ fontFamily: "monospace" }}
            variant="subtitle2"
            color="white"
          >
            {`Down-votes: ${downVotes}`}
          </Typography>
        </Box>

        <Box mt={-17} ml={6} display="flex" gap={1} flexDirection="column">
          <Typography
            sx={{ fontFamily: "monospace" }}
            variant="h4"
            color="secondary"
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontFamily: "monospace" }}
            variant="h5"
            color="info.main"
          >
            {`Platform: ${platform}`}
          </Typography>
          <Typography
            sx={{ fontFamily: "monospace" }}
            variant="subtitle2"
            color="wheat"
          >
            {summary}
          </Typography>
          <Typography
            sx={{ fontFamily: "monospace" }}
            variant="h6"
            color="white"
          >
            {description}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default StreamDetailPage;
