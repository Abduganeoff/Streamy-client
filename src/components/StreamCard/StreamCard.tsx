import { FC } from "react";
import { useNavigate } from "react-router-dom";
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

const StreamCard: FC<StreamCardProps> = ({
  title,
  shortDescription,
  upVote = 20,
  downVote = 2,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        zIndex: 1,
        minWidth: 345,
        maxWidth: 345,
        maxHeight: 368,
        backgroundColor: "rgba(20, 20, 20, 0.8)",
        color: "white",
        boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.5)",
      }}
      raised
    >
      <CardActionArea onClick={() => navigate(`/streams/${2}`)}>
        <CardMedia sx={{ height: 220 }} image="/assets/streamy.jpeg" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="wheat">
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
        <IconButton color="primary">
          <Badge color="secondary" badgeContent={upVote} max={99}>
            <ThumbUpIcon />
          </Badge>
        </IconButton>
        <IconButton color="primary">
          <Badge color="secondary" badgeContent={downVote} max={99}>
            <ThumbDownIcon />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default StreamCard;
