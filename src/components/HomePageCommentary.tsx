import { Grid, List, ListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface SmallCommentaryProps {
  listofstuff: string[];
  title: string;
}
const SmallCommentary = ({ listofstuff, title }: SmallCommentaryProps) => (
  <Grid item xs={1}>
    <Typography variant="h4" fontWeight="bold">
      {title}
    </Typography>
    <List>
      {listofstuff.map((item, index) => (
        <ListItem key={index} sx={{ py: 0, pl: 1 }}>
          &#9652; {item}
        </ListItem>
      ))}
    </List>
  </Grid>
);

const HomePageCommentary = () => {
  const usefulFor = [
    "Taking notes",
    "Practice quizzes",
    "Lectures and meetings",
    "and more!",
  ];
  const comingSoon = ["admin and member login", "stats page", "and more!"];
  return (
    <Box position="absolute" right={0} width={500} pt={3}>
      <Typography variant="h2" fontWeight="bold">
        Replay moments
      </Typography>
      <Typography variant="h6">
        Grabbing a quick coffee? Feeling tired? We got you! Automatically or
        manually record snippets of your meeting without the hassel.
        Transcripts, video and an AI bot will be generated, allowing you to
        quickly see what you have missed with going back to check the hour long
        videos.
      </Typography>
      <Grid container columns={2} columnSpacing={1} pt={1}>
        <SmallCommentary title="Useful for:" listofstuff={usefulFor} />
        <SmallCommentary title="Coming soon:" listofstuff={comingSoon} />
      </Grid>
    </Box>
  );
};

export default HomePageCommentary;
