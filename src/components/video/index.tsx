import { DefaultUi, Player, Youtube } from "@vime/react";
import Styles from "./Video.module.scss";
import "@vime/core/themes/default.css";

const VideoPlayer = () => {
  const embedId: string = "rokGy0huYEA";
  return (
    <div className={Styles.videoContainer}>
      <Player controls={false}>
        <Youtube videoId="rokGy0huYEA" />
        <DefaultUi />
      </Player>
    </div>
  );
};

export default VideoPlayer;
