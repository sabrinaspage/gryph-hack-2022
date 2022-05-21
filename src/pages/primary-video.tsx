import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MainTemplate from "../template/main-template";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const PrimaryVideo = () => {
  return (
    <MainTemplate>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            startIcon={<RadioButtonCheckedIcon style={{ color: "red" }} />}
          >
            hey
          </Button>
          <Button
            variant="outlined"
            startIcon={<RadioButtonCheckedIcon style={{ color: "red" }} />}
          >
            hi{" "}
          </Button>
        </Grid>
        <Grid item xs={8}>
          stuff
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default PrimaryVideo;
