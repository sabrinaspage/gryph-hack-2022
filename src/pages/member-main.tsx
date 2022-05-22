import Grid from "@mui/material/Grid";
import MainTemplate from "../template/main-template";
import Typography from "@mui/material/Typography";
import LightBackground from "../images/lighterbg.png";
import GlobalStyles from "@mui/material/GlobalStyles";
import { FillerSection } from "../components/FillerSection";
import { ThumbnailCard } from "../components/ThumbnailCard";
import { RecordingSection } from "../components/RecordingSection";
import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer;

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
