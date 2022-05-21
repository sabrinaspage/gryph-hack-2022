import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 2,
        backgroundColor: "#D9D9D9",
      }}
    >
      <CardContent
        component="div"
        sx={{
          backgroundColor: "#8EBDA6",
          height: 100,
          mx: 1,
          mt: 1,
          borderRadius: 2,
        }}
      />
      <CardContent
        sx={{
          backgroundColor: "#B5AEAE",
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
            ask
          </Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
