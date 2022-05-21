import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MainTemplate from "../template/main-template";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import moment from "moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";
import SessionDialog from "../components/SessionDialog";
import CardActionArea from "@mui/material/CardActionArea";

interface FillerSectionProps {
  children: ReactNode;
}

const FillerSection = ({ children }: FillerSectionProps) => {
  return (
    <Grid item xs={12} md={8}>
      <Card
        sx={{ minWidth: 275, borderRadius: 10, backgroundColor: "#fff7f6" }}
      >
        <CardContent>
          <Typography variant="h3">{children}</Typography>
        </CardContent>
        <Box
          sx={{
            height: 200,
            backgroundColor: "transparent",
          }}
        />
      </Card>
    </Grid>
  );
};

interface RecordingSectionProps {
  handleStartRecording: () => void;
  handleManualRecording: () => void;
}

const RecordingSection = ({
  handleStartRecording,
  handleManualRecording,
}: RecordingSectionProps) => {
  const [session, setSession] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Grid item xs={12} md={4}>
      <Grid
        container
        rowSpacing={8}
        sx={{
          pt: {
            lg: 7,
            md: 7,
          },
          px: {
            lg: 10,
            md: 3,
          },
        }}
      >
        <SessionDialog
          videoId={123}
          isOpen={dialogOpen}
          handleOpen={setDialogOpen}
          handleNameChange={() => null}
        />
        <Grid item xs={6} md={12}>
          <Button
            onClick={() => handleStartRecording}
            variant="outlined"
            startIcon={<RadioButtonCheckedIcon style={{ color: "red" }} />}
          >
            start recording
          </Button>
        </Grid>
        <Grid item xs={6} md={12}>
          {!session ? (
            <Button
              onClick={() => {
                handleManualRecording;
                setSession(true);
              }}
              variant="outlined"
              startIcon={<RadioButtonCheckedIcon style={{ color: "red" }} />}
            >
              manual recording
            </Button>
          ) : (
            <Button
              onClick={() => {
                setDialogOpen(true);
                setSession(false);
              }}
              variant="outlined"
              startIcon={<RadioButtonCheckedIcon style={{ color: "red" }} />}
            >
              stop session
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

interface ThumbnailCardProps {
  children: ReactNode;
}

const ThumbnailCard = ({ children }: ThumbnailCardProps) => {
  return (
    <Card sx={{ height: 100, backgroundColor: "#ededed" }}>
      <CardActionArea sx={{ height: "100%" }} href="https://google.com">
        <CardContent>
          <Typography>{children}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const PrimaryVideo = () => {
  const onStartRecording = () => null;
  const onManualRecording = () => null;
  const now = moment(new Date());
  const thumbnailArray = Array.from(Array(8));

  return (
    <MainTemplate>
      <Grid container spacing={2}>
        {
          <RecordingSection
            handleStartRecording={onStartRecording}
            handleManualRecording={onManualRecording}
          />
        }
        {<FillerSection> {now.toString()} </FillerSection>}
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
                  <ThumbnailCard>{}</ThumbnailCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default PrimaryVideo;
