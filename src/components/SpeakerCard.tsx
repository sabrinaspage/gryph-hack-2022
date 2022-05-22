import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import { Answer } from "@tensorflow-models/qna/dist/question_and_answer";
import { useEffect, useState } from "react";
import {
  ClickAwayListener,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface SpeakerCardProps {
  fullTranscript: string;
}

export default function SpeakerCard({ fullTranscript }: SpeakerCardProps) {
  const [result, setResult] = useState<Answer>({
    text: "",
    score: 0,
    startIndex: 0,
    endIndex: 0,
  });
  const [question, setQuestion] = useState("What is the max count of team?");
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    const fetchAnswer = async () => {
      const answers = await handleAsk();
      console.log(answers);
      setResult(answers[0]);
    };

    fetchAnswer();
  }, [dialog]);

  const handleAsk = async () => {
    console.log("Loading Model");
    const model = await qna.load();
    console.log("Loading Answers");
    console.log(fullTranscript);
    const answers = await model.findAnswers(question, fullTranscript);
    return answers;
  };

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
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
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
        <CardActionArea
          onClick={() => {
            handleAsk();
            setDialog(true);
          }}
        >
          <Typography variant="h6" component="div">
            Ask
          </Typography>
        </CardActionArea>
      </CardContent>
      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <DialogTitle>Your answer is...</DialogTitle>
        <DialogContent>
          <Typography variant="h2"> {result.text} </Typography>
          <Typography variant="h5">
            With accuracy... {result["score"].toFixed(2)}%
          </Typography>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
