import Grid from "@mui/material/Grid";
import MainTemplate from "../template/main-template";
import Typography from "@mui/material/Typography";
import LightBackground from "../images/lighterbg.png";
import GlobalStyles from "@mui/material/GlobalStyles";
import { FillerSection } from "../components/FillerSection";
import { ThumbnailCard } from "../components/ThumbnailCard";
import { RecordingSection } from "../components/RecordingSection";
import { Buffer } from "buffer";
import axios from "axios";
import { Context } from "../states/Provider";
import { useContext, useEffect, useState } from "react";

window.Buffer = window.Buffer || Buffer;

type Video = {
  id: string;
  user_id: string;
  name: string;
};

const MemberMain = () => {
  const [state] = useContext(Context);
  const [videoList, setVideoList] = useState<Video[]>([]);

  useEffect(() => {
    const listOfSessions = () => {
      axios
        .get(
          `https://gryph-hack-2022.herokuapp.com/sessions/${state.userData.id}/`
        )
        .then(async (res: any) => {
          setVideoList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    listOfSessions();
  }, []);

  console.log(videoList);

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
              {videoList.map((video, index) => (
                <Grid item xs={1} sm={1} md={1} key={index}>
                  <ThumbnailCard title={video.name} videoId={video.id} />
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
