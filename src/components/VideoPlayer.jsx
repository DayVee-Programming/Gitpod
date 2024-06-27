import { useContext } from "react";
import video from "../assets/videos/gitpod.mp4";
import { GitPodContext } from "../context/gitPodContext";

const VideoPlayer = () => {
  const { setIsPlaying } = useContext(GitPodContext);

  return (
    <div className="videoplayer" onClick={() => setIsPlaying(false)}>
      <video
        className="videoplayer__video"
        src={video}
        controls
        autoPlay
        muted
        onClick={(e) => e.stopPropagation()}
      ></video>
    </div>
  );
};

export default VideoPlayer;
