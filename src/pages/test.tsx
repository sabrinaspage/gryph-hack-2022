import { ReactMediaRecorder } from "react-media-recorder";
import { useRef } from "react";
import ReactPlayer from "react-player";

export default function RecordView() {
  const videoPlayer = useRef<any>(null);
  const onClickButton = () => {
    if (videoPlayer && videoPlayer.current) {
      videoPlayer.current.seekTo(5, "seconds");
    }
  };
  return (
    <div>
      <ReactPlayer
        ref={videoPlayer}
        playing
        controls
        url="https://storage.googleapis.com/gryph-hack-2022-ee/1653253527668-screen-record.mp4"
      />
      <button title="CLICK" onClick={onClickButton}>
        Click me
      </button>
    </div>
  );
}
