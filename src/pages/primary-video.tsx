import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MainTemplate from "../template/main-template";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import moment from "moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

const PrimaryVideo = () => {
  const now = moment(new Date());

  return (
    <MainTemplate>
      <Grid container spacing={2}>
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
            <Grid item xs={6} md={12}>
              <Button
                variant="outlined"
                startIcon={<RadioButtonCheckedIcon style={{ color: "red" }} />}
              >
                start recording
              </Button>
            </Grid>
            <Grid item xs={6} md={12}>
              <Button
                variant="outlined"
                startIcon={<RadioButtonCheckedIcon style={{ color: "red" }} />}
              >
                manual recording
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h2">{now.toString()}</Typography>
            </CardContent>
            <Box
              sx={{
                height: 100,
                backgroundColor: "white",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export default PrimaryVideo;
