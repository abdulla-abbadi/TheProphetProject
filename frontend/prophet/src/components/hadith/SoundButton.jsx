import React from "react";
import useSound from "use-sound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

export default function SoundButton({
  sequence,
  link,
  playing,
  next,
  handlePlayPause,
}) {
  const [play, { stop }] = useSound(link, {
    volume: 0.5,
    onend: () => {
      setTimeout((handlePlayPause(next), 1000));
    },
  });
  const player = () => {
    return playing ? play() : stop();
  };
  return (
    <FontAwesomeIcon
      icon={playing ? faPauseCircle : faPlayCircle}
      size="xl"
      type="button"
      className={playing ? "text-success" : ""}
      onClick={() => handlePlayPause(sequence)}
    >
      {player()}
    </FontAwesomeIcon>
  );
}
