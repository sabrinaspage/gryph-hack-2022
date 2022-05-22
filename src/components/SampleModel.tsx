import { useState } from "react";

import "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import { Answer } from "@tensorflow-models/qna/dist/question_and_answer";

export default function Home() {
  // Load the model.
  const [result, setResult] = useState<Answer>();
  const [question, setQuestion] = useState("What is the max count of team?");
  const [passage, setPassage] = useState(
    "Gryphhacks is a Canadian Hackathon. The max count of the team is capped at 4. Participants from across the globe is taking part in this. But the weather in Canada is not that good, hence the organizers have increased the deadline by 6 hours."
  );

  const handleAdd = async () => {
    console.log("Loading Model");
    const model = await qna.load();
    console.log("Loading Answers");
    const answers = await model.findAnswers(question, passage);
    setResult(answers[0]);
    console.log(result);
    console.log("Done!");
  };

  console.log(result ? result : null);

  return (
    <div className="flex flex-col justify-center items-center mt-2 gap-3">
      <textarea
        cols={72}
        rows={16}
        className="border w-9/12 h-96 p-2 rounded-md"
        defaultValue={passage}
        onChange={(e) => setPassage(e.target.value)}
      ></textarea>
      <input
        placeholder={question}
        value={question}
        className="border w-9/12 p-2 rounded-md"
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "50%",
        }}
      />
      <button
        className="border w-1/12 p-2 rounded-md"
        onClick={() => handleAdd()}
      >
        Go
      </button>
      {result ? (
        <div className="flex justify-center items-start flex-row">
          <h1 className="p-2">
            <span className="font-bold">Answer:</span> {result["text"]}
          </h1>
          <h1 className="p-2">
            <span className="font-bold">Confidence:</span>{" "}
            {result["score"].toFixed(2)}%
          </h1>
        </div>
      ) : null}
    </div>
  );
}
