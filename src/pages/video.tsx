import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/system/Box";
import SpeakerCard from "../components/SpeakerCard";
import TranscriptTable from "../components/TranscriptTable";
import MainTemplate from "../template/main-template";
import LightBackground from "../images/lighterbg.png";
import GlobalStyles from "@mui/styled-engine-sc/GlobalStyles";
import { useParams } from "react-router-dom";

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
          borderRadius: 5,
          backgroundColor: "#D9D9D9",
          "&:hover": {
            backgroundColor: "#C2C2C2",
          },
          textAlign: "center",
          verticalAlign: "bottom",
        }}
        component="a"
        href="#simple-list"
      >
        <Box
          sx={{
            height: "100%",
          }}
        />
        <ListItemText
          sx={{ color: "#A4A4A4", paddingTop: 20 }}
          primary={title}
        />
      </ListItemButton>
    </ListItem>
  );
};

const Video = () => {
  const arrOfTimestamps = [
    { thumbnailLink: "blah", title: "01:10:30 - 01:17:20" },
    { thumbnailLink: "blah2", title: "01:02:30 - 01:04:20" },
    { thumbnailLink: "blah2", title: "01:02:30 - 01:04:20" },
    { thumbnailLink: "blah2", title: "01:02:30 - 01:04:20" },
    { thumbnailLink: "blah2", title: "01:02:30 - 01:04:20" },
  ];

  const { videoId } = useParams();

  return (
    <MainTemplate>
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `url(${LightBackground})`,
            backgroundSize: "100%",
          },
        }}
      />
      <Grid container>
        <Typography component="span" variant="h5" fontWeight={"bold"}>
          Video {videoId}
        </Typography>
      </Grid>
      <Grid container columnSpacing={4} columns={12}>
        <Grid item xs={8}>
          <Box
            sx={{
              height: "100%",
              backgroundColor: "#D9D9D9",
              borderRadius: 5,
            }}
          />
        </Grid>
        <Grid item xs={4} maxHeight={350} style={{ overflow: "auto" }}>
          <nav aria-label="timestamps">
            <List
              sx={{
                "li:first-child": {
                  paddingTop: 0,
                },
                li: {
                  paddingTop: 4,
                },
              }}
            >
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
      <Grid container columnSpacing={4} columns={12} pt={2}>
        <Grid item xs={8}>
          <TranscriptTable />
        </Grid>
        <Grid item xs={4}>
          <SpeakerCard />
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default Video;
