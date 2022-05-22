import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import { Answer } from "@tensorflow-models/qna/dist/question_and_answer";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

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
  const [question, setQuestion] = useState("");
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    console.log("Loading Model");
    setLoading(true);
    const model = await qna.load();
    const answers = await model.findAnswers(question, fullTranscript);
    setDialog(!!answers);
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
          onClick={async () => {
            setLoading(true);
            const answers = await handleAsk();
            setDialog(!!answers);
            setResult(answers[0]);
            setLoading(false);
          }}
        >
          <Typography variant="h6" component="div">
            Ask
          </Typography>
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
              <Typography variant="h2">No answer!</Typography>
              <Typography variant="h5">Enter a new question.</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
}
