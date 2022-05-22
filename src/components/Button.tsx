import Button from "@mui/material/Button";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StopIcon from "@mui/icons-material/Stop";
import { styled } from "@mui/material/styles";

interface ButtonProps {
  handleClick?: () => void;
}

const StyledButton = styled(Button)({
  fontSize: 20,
  borderRadius: 50,
  textTransform: "lowercase",
  width: 240,
  height: 60,
  justifyContent: "flex-start",
});

export const StopRecording = ({ handleClick }: ButtonProps) => (
  <StyledButton
    variant="contained"
    color="error"
    onClick={handleClick}
    startIcon={
      <FiberManualRecordIcon
        sx={{ color: "#D9D9D9", transform: "scale(1.1)" }}
      />
    }
    sx={{
      color: "white",
      backgroundColor: "#FF5353",
    }}
  >
    stop recording
  </StyledButton>
);

export const StartRecording = ({ handleClick }: ButtonProps) => (
  <StyledButton
    variant="contained"
    color="success"
    onClick={handleClick}
    startIcon={
      <FiberManualRecordIcon
        sx={{ color: "#D9D9D9", transform: "scale(1.1)" }}
      />
    }
    sx={{
      color: "white",
      backgroundColor: "#0DBD3E",
    }}
  >
    start recording
  </StyledButton>
);

export const StopSession = ({ handleClick }: ButtonProps) => (
  <StyledButton
    variant="contained"
    onClick={handleClick}
    startIcon={<StopIcon sx={{ color: "#D9D9D9", transform: "scale(1.2)" }} />}
    sx={{
      color: "black",
      backgroundColor: "white",
    }}
  >
    stop session
  </StyledButton>
);
