import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/system/Box";
import TranscriptTable from "../components/TranscriptTable";
import MainTemplate from "../template/main-template";

// refactor with video and link to video when time comes
// video thumbnail will be in a clickable button, yay
interface TimestampVideoCardProps {
  thumbnailLink: string;
  title: string;
}
const TimestampVideoCard = ({
  thumbnailLink,
  title,
}: TimestampVideoCardProps) => {
  console.log(thumbnailLink);
  return (
    <ListItem disablePadding sx={{ display: "list-item" }}>
      <ListItemButton
        sx={{
          height: 200,
          backgroundColor: "#A3A3A3",
          "&:hover": {
            backgroundColor: "#C2C2C2",
          },
        }}
        component="a"
        href="#simple-list"
      >
        <Box
          sx={{
            height: "100%",
          }}
        />
      </ListItemButton>
      <ListItemText sx={{ color: "#A4A4A4" }} primary={title} />
    </ListItem>
  );
};

const Video = () => {
  const arrOfTimestamps = [
    { thumbnailLink: "blah", title: "01:10:30 - 01:17:20" },
    { thumbnailLink: "blah2", title: "01:02:30 - 01:04:20" },
  ];

  return (
    <MainTemplate>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Video Title</Typography>
        </Grid>
        <Grid container columns={{ xs: 3 }}>
          <Grid item xs={2}>
            <Card>
              <Box
                sx={{
                  height: 280,
                  backgroundColor: "#A3A3A3",
                }}
              />
            </Card>
            <Box py={2} />
            <TranscriptTable />
          </Grid>
          <Grid item xs={1} px={6}>
            <nav aria-label="timestamps">
              <Typography variant="h5">Timestamps</Typography>
              <List>
                {arrOfTimestamps.map((timestamp, index) => (
                  <TimestampVideoCard
                    key={index}
                    thumbnailLink={timestamp.thumbnailLink}
                    title={timestamp.title}
                  />
                ))}
              </List>
            </nav>
          </Grid>
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default Video;
