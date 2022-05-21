import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";

interface SessionDialogProps {
  videoId: number;
  isOpen: boolean;
  handleOpen: (value: boolean) => void;
  handleNameChange: (name: string) => void;
}

export default function SessionDialog({
  videoId,
  isOpen,
  handleOpen,
  handleNameChange,
}: SessionDialogProps) {
  const [sessionName, setSessionName] = useState<string>("");

  useEffect(() => {
    handleNameChange(sessionName);
  });

  return (
    <div>
      <Dialog
        key={videoId}
        open={isOpen}
        onClose={() => handleOpen(false)}
        fullWidth={true}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Name your session</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="meeting"
            label="Enter session name here"
            type="text"
            fullWidth
            variant="standard"
            value={sessionName}
            onChange={(e) => setSessionName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              handleOpen(false);
              setSessionName("");
            }}
          >
            Update name of session
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
