import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import { useState, useContext } from "react";
import SessionDialog from "../components/SessionDialog";
import Checkbox from "@mui/material/Checkbox";
import { StartRecording, StopRecording } from "../components/Button";
import axios from "axios";
import { Context } from "../states/Provider";
import { useReactMediaRecorder } from "react-media-recorder";
import { injectMetadata } from "../utils/injectMetadata";

export const RecordingSection = () => {
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
          )
            .then(() => {
              // After transcription, reload page
              window.location.reload();
            })
            .catch((error) => {
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
