import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MainTemplate from "../template/main-template";

const PrimaryVideo = () => {
  return (
    <MainTemplate>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button>hey</Button>
          <Button>hi</Button>
        </Grid>
        <Grid item xs={8}>
          stuff
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default PrimaryVideo;
