import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxShadow: "none",
        borderRadius: 2,
        backgroundColor: "transparent",
      }}
    >
      <TextField
        id="outlined-textarea"
        label="What did you miss?"
        placeholder="Ask away..."
        rows={3}
        multiline
        sx={{
          backgroundColor: "white",
          width: "96%",
          mx: 1,
          mt: 1,
          borderRadius: 2,
        }}
      />

      <CardContent
        sx={{
          backgroundColor: "#F3694D",
          height: 20,
          mx: 1,
          my: 1,
          borderRadius: 2,
          textAlign: "center",
          verticalAlign: "center",
        }}
      >
        <CardActionArea href="#">
          <Typography variant="h6" component="div">
            Ask
          </Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
