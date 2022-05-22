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
import { useEffect, useState } from "react";
import axios from "axios";

export type SessionType = {
  end_time: string;
  id: string;
  name: string;
  session_id: string;
  start_time: string;
  transcript: string;
  video_order: string;
};

interface TimestampVideoCardProps {
  title: string;
}
const TimestampVideoCard = ({ title }: TimestampVideoCardProps) => {
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
  const { sessionId } = useParams();
  const [sessionInfo, setSessionInfo] = useState<SessionType[]>();
  const [thisSession, setThisSession] = useState<SessionType>();
  console.log(sessionId);

  const fullTranscript = sessionInfo
    ?.slice(1)
    .map((session) => {
      return session.transcript;
    })
    .join(" ");

  useEffect(() => {
    const listOfSessions = () => {
      if (sessionId != undefined) {
        axios
          .get(
            `https://gryph-hack-2022.herokuapp.com/sessions/videos/${sessionId}/`
          )
          .then(async (res: any) => {
            console.log(res.data);
            setSessionInfo(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    const thisSession = () => {
      if (sessionId != undefined) {
        axios
          .get(
            `https://gryph-hack-2022.herokuapp.com/sessions/data/${sessionId}/`
          )
          .then(async (res: any) => {
            console.log(res.data);
            setThisSession(res.data[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    thisSession();
    listOfSessions();
  }, []);
  console.log(sessionInfo);

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
          {thisSession?.name}
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
                "li:first-of-type": {
                  paddingTop: 0,
                },
                li: {
                  paddingTop: 4,
                },
              }}
            >
              {sessionInfo?.slice(1).map((timestamp, index) => (
                <TimestampVideoCard key={index} title={timestamp.name} />
              ))}
            </List>
          </nav>
        </Grid>
      </Grid>
      <Grid container columnSpacing={4} columns={12} pt={2}>
        <Grid item xs={8}>
          <TranscriptTable transcriptRows={sessionInfo} />
        </Grid>
        <Grid item xs={4}>
          <SpeakerCard {...{ fullTranscript }} />
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default Video;
