import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
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
        <DialogTitle>Name your session</DialogTitle>
        <DialogContent>
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
            variant="contained"
            onClick={() => {
              handleOpen(false);
              setSessionName("");
            }}
          >
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
