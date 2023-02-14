import React, { useState } from "react";
import Hadith from "../hadith/Hadith";

export default function HadithList({ hadiths }) {
  const [hadithList, setHadithsList] = useState(hadiths);

  const handlePlayPause = (sequence) => {
    let updatedHadithList = hadithList.map((hadith) => {
      if (hadith.sequence === sequence) {
        return { ...hadith, playing: !hadith.playing };
      } else {
        return { ...hadith, playing: false };
      }
    });
    setHadithsList(updatedHadithList);
  };
  return (
    <>
      <div className="accordion-body  pt-3">
        {hadithList.map((hadith, i) => (
          // add haiths component here
          <Hadith
            key={hadith.sequence}
            sequence={hadith.sequence}
            hadithIndex={i}
            chapteSize={hadiths.length - 1}
            text={hadith.text}
            next={hadith.sequence + 1}
            link={hadith.audio}
            playing={hadith.playing}
            grade={hadith.grade}
            handlePlayPause={handlePlayPause}
          />
        ))}
      </div>
    </>
  );
}
