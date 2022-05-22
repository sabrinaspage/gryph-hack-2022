import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ThumbnailCardProps {
  imageUrl?: string;
  videoId: string;
  title: ReactNode;
}

export const ThumbnailCard = ({
  title,
  videoId,
  imageUrl,
}: ThumbnailCardProps) => {
  console.log(videoId);
  return (
    <Card
      sx={{
        height: 80,
        backgroundColor: "#ededed",
      }}
    >
      <CardActionArea
        sx={{ height: "100%", display: "flex", alignItems: "center" }}
        href={"/video/" + videoId}
      >
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
