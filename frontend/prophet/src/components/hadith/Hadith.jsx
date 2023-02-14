import React from "react";
import SoundButton from "./SoundButton";
import Text from "./Text";
export default function Hadith({
  sequence,
  hadithIndex,
  chapteSize,
  text,
  next,
  link,
  playing,
  handlePlayPause,
  grade,
}) {
  return (
    <div
      className={`row fs-5  mb-2 pb-2 
      ${hadithIndex === chapteSize ? "" : "border-bottom"} `}
      key={sequence}
    >
      <div className="col-3 col-md-2  col-lg-1  border-end p-0 ">
        <span className="ps-4 ps-md-5 ps-lg-3 ps-xl-5">{sequence}</span>

        <br />
        <div className=" ps-3 pt-3 ps-md-4 ms-md-3 pt-md-3 ps-lg-1 pt-xl-2 ps-xl-4 ms-xl-2">
          <SoundButton
            sequence={sequence}
            link={link}
            playing={playing}
            next={next}
            handlePlayPause={handlePlayPause}
          />
        </div>
        <br />
        <span
          className={`ps-0 ps-md-3 ps-lg-0 ps-xl-3 text-${
            grade === "S" ? "success" : grade === "G" ? "warning" : "danger"
          }`}
        >
          ({grade === "S" ? "صحيح" : grade === "G" ? "حسن" : "ضعيف"})
        </span>
      </div>
      <div className=" col-9 col-md-10 col-lg-9 mt-3">
        <Text text={text} />
      </div>
    </div>
  );
}
