import Grid from "@mui/material/Grid";
import MainTemplate from "../template/main-template";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import { ReactNode, useEffect, useState, useContext } from "react";
import SessionDialog from "../components/SessionDialog";
import CardActionArea from "@mui/material/CardActionArea";
import LightBackground from "../images/lighterbg.png";
import Checkbox from "@mui/material/Checkbox";
import GlobalStyles from "@mui/material/GlobalStyles";
import { StartRecording, StopRecording } from "../components/Button";
import axios from "axios";
import { Context } from "../states/Provider";
import { useReactMediaRecorder } from "react-media-recorder";
import { Buffer } from "buffer";
import { injectMetadata } from "../utils/injectMetadata";
window.Buffer = window.Buffer || Buffer;

const FillerSection = () => {
  const now = new Date();
  const dayOfWeek = now.toLocaleDateString("default", { weekday: "long" });
  const month = now.toLocaleDateString("default", { month: "long" });
  const cDate = `${dayOfWeek}, ${month} ${now.getDate()}, ${now.getFullYear()}`;

  const [cTime, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Grid item xs={12} md={8}>
      <Card
        sx={{
          minWidth: 275,
          borderRadius: 10,
          backgroundColor: "#fff7f6",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        }}
      >
        <CardContent>
          <Box color={"#F3694D"}>
            <Typography
              variant="h2"
              color="#F3694D"
              fontWeight="bold"
              component="div"
            >
              {cTime} EST
            </Typography>
            <Typography variant="h5" fontWeight="thin" color="#F3694D">
              {cDate}
            </Typography>
          </Box>
        </CardContent>
        <Box
          sx={{
            height: 150,
            backgroundColor: "transparent",
          }}
        />
      </Card>
    </Grid>
  );
};

const RecordingSection = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true, screen: true });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [recording, setRecording] = useState(false);
  const [state] = useContext(Context);

  const onStartRecording = () => {
    startRecording();
    setRecording(true);
  };

  const onStopRecording = () => {
    stopRecording();
    setRecording(false);
    setDialogOpen(true);
  };

  const onCreateSession = (session_name: string) => {
    axios
      .post("https://gryph-hack-2022.herokuapp.com/sessions/", {
        session_name,
        user_id: state.userData.id,
      })
      .then(async (res: any) => {
        const sessionId = res.data.id; // session Id

        // Done recording
        if (status == "stopped") {
          const mediaBlob = await fetch(mediaBlobUrl || "").then((response) =>
            response.blob()
          );

          const seekableBlob = await injectMetadata(mediaBlob);

          const fd = new FormData();

          fd.append("my-video", seekableBlob, "blobby.txt");

          await fetch(
            `https://gryph-hack-2022.herokuapp.com/sessions/upload-video?sessionId=${sessionId}`,
            {
              method: "POST",
              body: fd,
            }
          ).catch((error) => {
            console.log(error);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SessionDialog
        videoId={123}
        isOpen={dialogOpen}
        handleOpen={setDialogOpen}
        handleNameChange={() => null}
        onSubmitNameChange={onCreateSession}
      />
      <Grid item xs={6} md={12} justifyContent="center" textAlign="center">
        {!recording && (
          <>
            <Box py={5} />
            <StartRecording handleClick={onStartRecording} />
            <Box py={1} />
            <Box sx={{ maxHeight: 200, maxWidth: 250, color: "black", pl: 0 }}>
              <Typography variant="body1">
                <Checkbox
                  checked={checked}
                  onClick={() => setChecked(!checked)}
                />
                No facial recognition
              </Typography>
            </Box>
          </>
        )}
        {checked && recording && (
          <>
            <Box py={5} />
            <StopRecording handleClick={onStopRecording} />
          </>
        )}
        {!checked && recording && (
          <>
            <Box py={5} />
            <StopRecording handleClick={onStopRecording} />
          </>
        )}
      </Grid>
    </>
  );
};

interface ThumbnailCardProps {
  imageUrl?: string;
  videoId: string;
  title: ReactNode;
}

const ThumbnailCard = ({ title, videoId, imageUrl }: ThumbnailCardProps) => {
  console.log(imageUrl);
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

const MemberMain = () => {
  const thumbnailArray = Array.from(Array(8));

  return (
    <MainTemplate>
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `url(${LightBackground})`,
            backgroundSize: "100%",
          },
          "body::before": {
            opacity: 0.5,
          },
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Grid
            container
            rowSpacing={8}
            sx={{
              pt: {
                lg: 0,
                md: 7,
              },
              px: {
                lg: 10,
                md: 3,
              },
            }}
          >
            <RecordingSection />
          </Grid>
        </Grid>
        <FillerSection />
        <Grid item xs={12} py={1} />
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Typography variant="h4">Past Sessions</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 3, md: 4 }}
              pt={3}
            >
              {thumbnailArray.map((_, index) => (
                <Grid item xs={1} sm={1} md={1} key={index}>
                  <ThumbnailCard
                    title={`Video ${index.toString()}`}
                    videoId={index.toString()}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default MemberMain;
