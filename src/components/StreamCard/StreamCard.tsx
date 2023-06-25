import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// material components
import {
  Badge,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
// material icons
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// models
import { StreamCardProps } from "./StreamCard.models";
// services
import { updateStreamVotesFn } from "../../services/streamService";

const StreamCard: FC<StreamCardProps> = ({
  title,
  shortDescription,
  upVotes,
  downVotes,
  streamId,
}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updateStreamVotesFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(["streams"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleUpVote = () => {
    mutate({ streamId, upVotes: 1 });
  };
  const handleDownVote = () => {
    mutate({ streamId, downVotes: 1 });
  };

  return (
    <Card
      sx={{
        minWidth: 345,
        maxWidth: 345,
        maxHeight: 390,
        backgroundColor: "rgba(20, 20, 20, 0.8)",
        color: "white",
        boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.5)",
      }}
      raised
    >
      <CardActionArea onClick={() => navigate(`/streams/${streamId}`)}>
        <CardMedia sx={{ height: 220 }} image="/assets/streamy.jpeg" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "monospace" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="wheat"
            sx={{ fontFamily: "monospace" }}
          >
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton color="primary" onClick={handleUpVote}>
          <Badge color="secondary" badgeContent={upVotes} max={99}>
            <ThumbUpIcon />
          </Badge>
        </IconButton>
        <IconButton color="primary" onClick={handleDownVote}>
          <Badge color="secondary" badgeContent={downVotes} max={99}>
            <ThumbDownIcon />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default StreamCard;
