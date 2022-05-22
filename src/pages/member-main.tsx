import Grid from "@mui/material/Grid";
import MainTemplate from "../template/main-template";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";
import SessionDialog from "../components/SessionDialog";
import CardActionArea from "@mui/material/CardActionArea";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import { LightTooltip } from "../components/Tooltip";
import LightBackground from "../images/lighterbg.png";
import Checkbox from "@mui/material/Checkbox";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  StartRecording,
  StopRecording,
  StopSession,
} from "../components/Button";
import { ClickAwayListener } from "@mui/material";

const FillerSection = () => {
  const now = new Date();
  const timeNow = now.toLocaleTimeString();
  const dayOfWeek = now.toLocaleDateString("default", { weekday: "long" });
  const month = now.toLocaleDateString("default", { month: "long" });
  const dateNow = `${dayOfWeek}, ${month} ${now.getDay()}, ${now.getFullYear()}`;

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
              {timeNow} EST
            </Typography>
            <Typography variant="h5" fontWeight="thin" color="#F3694D">
              {dateNow}
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

interface RecordingSectionProps {
  handleStartRecording?: () => void;
  handleManualRecording?: () => void;
}

const RecordingSection = ({
  handleStartRecording,
  handleManualRecording,
}: RecordingSectionProps) => {
  const [session, setSession] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tooltipOpen, setToolTipOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [recording, setRecording] = useState(false);

  console.log(handleStartRecording, handleManualRecording);

  return (
    <>
      <SessionDialog
        videoId={123}
        isOpen={dialogOpen}
        handleOpen={setDialogOpen}
        handleNameChange={() => null}
      />
      <Grid item xs={6} md={12} justifyContent="center" textAlign="center">
        {!session && (
          <>
            <Box py={2} />
            <Box
              component={AddIcon}
              boxShadow={3}
              onClick={() => setSession(true)}
              style={{
                height: 200,
                width: "100%",
                color: "#F3694D",
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: 50,
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              }}
            />
            <Typography component="span" display="block" pt={1}>
              Start Session
              <LightTooltip
                title={
                  <Box sx={{ maxHeight: 200, maxWidth: 200, color: "black" }}>
                    <Checkbox
                      checked={checked}
                      onClick={() => setChecked(!checked)}
                    />
                    Record Manually
                  </Box>
                }
                open={tooltipOpen}
                arrow
              >
                <IconButton onClick={() => setToolTipOpen(!tooltipOpen)}>
                  <ClickAwayListener onClickAway={() => setToolTipOpen(false)}>
                    <Box component={KeyboardArrowDownIcon} />
                  </ClickAwayListener>
                </IconButton>
              </LightTooltip>
            </Typography>
          </>
        )}
        {session && checked && !recording && (
          <>
            <Box py={5} />
            <StartRecording
              handleClick={() => {
                setRecording(true);
              }}
            />
            <Box py={1} />
            <StopSession
              handleClick={() => {
                setDialogOpen(true);
                setSession(false);
              }}
            />
          </>
        )}
        {session && checked && recording && (
          <>
            <Box py={5} />
            <StopRecording
              handleClick={() => {
                setRecording(false);
              }}
            />
            <Box py={1} />
            <StopSession
              handleClick={() => {
                setDialogOpen(true);
                setSession(false);
              }}
            />
          </>
        )}
        {session && !checked && (
          <>
            <Box py={5} />
            <StopSession
              handleClick={() => {
                setDialogOpen(true);
                setSession(false);
              }}
            />
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
  const onStartRecording = () => null;
  const onManualRecording = () => null;
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
            {
              <RecordingSection
                handleStartRecording={onStartRecording}
                handleManualRecording={onManualRecording}
              />
            }
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
