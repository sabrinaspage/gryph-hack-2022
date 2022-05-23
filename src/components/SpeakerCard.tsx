import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import { Answer } from "@tensorflow-models/qna/dist/question_and_answer";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { makeStyles, createStyles, Container } from "@material-ui/core";
import RotateRightTwoToneIcon from "@mui/icons-material/RotateRightTwoTone";

interface SpeakerCardProps {
  fullTranscript: string | undefined;
}

const useStyles = makeStyles(() =>
  createStyles({
    rotateIcon: {
      animation: "$spin 2s linear infinite",
      color: "white",
    },
    "@keyframes spin": {
      "0%": {
        transform: "rotate(-360deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
  })
);

export default function SpeakerCard({ fullTranscript }: SpeakerCardProps) {
  const [result, setResult] = useState<Answer | undefined>({
    text: "",
    score: 0,
    startIndex: 0,
    endIndex: 0,
  });
  const [question, setQuestion] = useState("");
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    console.log("Loading Model");
    setLoading(true);
    const model = await qna.load();
    let answers;
    if (fullTranscript) {
      answers = await model.findAnswers(question, fullTranscript);
    }
    setDialog(!!answers);
    return answers;
  };

  const classes = useStyles();

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
        label="Looking for an answer?"
        placeholder="Ask away..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={3}
        multiline
        sx={{
          backgroundColor: "white",
          width: "96%",
          mx: 1,
          borderRadius: 2,
        }}
      />
      <CardContent
        sx={{
          backgroundColor: "#F3694D",
          maxHeight: 10,
          mx: 1,
          my: 1,
          py: 1,
          borderRadius: 2,
          textAlign: "center",
          verticalAlign: "center",
        }}
      >
        <CardActionArea
          onClick={async () => {
            setLoading(true);
            const answers = await handleAsk();
            setDialog(!!answers);
            if (answers) {
              setResult(answers[0]);
            }
            setLoading(false);
          }}
        >
          <Container style={{ marginTop: 0, alignItems: "top" }} maxWidth="sm">
            {loading ? (
              <RotateRightTwoToneIcon className={classes.rotateIcon} />
            ) : (
              <Typography textTransform="none" variant="h6" color="white">
                Ask
              </Typography>
            )}
          </Container>
        </CardActionArea>
      </CardContent>
      <Dialog open={dialog && !loading} onClose={() => setDialog(false)}>
        <DialogTitle>Your answer is...</DialogTitle>
        <DialogContent>
          {result ? (
            <>
              <Typography variant="h2">{result.text}</Typography>
              <Typography variant="h5">
                With accuracy... {result["score"].toFixed(2)}%
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h4">No answer!</Typography>
              <Typography variant="h6">Enter a new question.</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
}
