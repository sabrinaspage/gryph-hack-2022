import {
  Button,
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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "../styles/player.css";

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
  handleClick: any;
}
const TimestampVideoCard = ({
  title,
  handleClick,
}: TimestampVideoCardProps) => {
  return (
    <ListItem disablePadding sx={{ display: "list-item" }}>
      <ListItemButton
        sx={{
          height: 200,
          borderRadius: 5,
          textAlign: "center",
          verticalAlign: "bottom",
        }}
        component="a"
        onClick={handleClick}
      >
        <Box
          component="img"
          src={`https://storage.googleapis.com/gryph-hack-2022-ee/${title}`}
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
  const navigate = useNavigate();

  const videoPlayer = useRef<any>(null);

  const onClickButton = (startTime: string) => {
    if (videoPlayer && videoPlayer.current) {
      videoPlayer.current.seekTo(parseInt(startTime), "seconds");
    }
  };

  const fullTranscript = sessionInfo
    ?.slice(1)
    .map((session) => {
      return session.transcript;
    })
    .join(" ");

  const deleteSession = async () => {
    if (sessionId != undefined) {
      axios
        .post("https://gryph-hack-2022.herokuapp.com/sessions/delete/", {
          session_id: sessionId,
        })
        .then(async (res: any) => {
          console.log(res.data);
          setThisSession(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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
  console.log(
    `https://storage.googleapis.com/gryph-hack-2022-ee/${sessionInfo?.[0].name}`
  );

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
        <Button
          onClick={async () => {
            await deleteSession();
            navigate("/member");
          }}
          sx={{ ml: 1, borderRadius: 50, textTransform: "none", mb: 1 }}
          variant="contained"
          color="error"
          href="/member"
        >
          delete this session
        </Button>
      </Grid>
      <Grid container columnSpacing={4} columns={12} maxHeight={400}>
        <Grid item xs={8} maxHeight={400}>
          <ReactPlayer
            ref={videoPlayer}
            width={"100%"}
            height={"100%"}
            playing
            controls
            url={`https://storage.googleapis.com/gryph-hack-2022-ee/${
              sessionInfo && sessionInfo.length > 0 ? sessionInfo[0].name : ""
            }`}
          />
        </Grid>
        <Grid item xs={4} maxHeight={400} style={{ overflow: "auto" }}>
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
              {sessionInfo?.slice(1).map((session, index) => (
                <TimestampVideoCard
                  handleClick={() => onClickButton(session.start_time)}
                  key={index}
                  title={session.name}
                />
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
