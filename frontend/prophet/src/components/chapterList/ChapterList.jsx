import React from "react";
import Chapter from "../chapter/chapter";
export default function ChapterList({ chapters }) {
  return (
    <div className="accordion" id="accordionExample">
      {chapters.map((chapter, index) => (
        <Chapter
          key={chapter.sequence}
          id={chapter.sequence}
          title={chapter.title}
          hadiths={chapter.hadith_set}
          index={index}
        />
      ))}
    </div>
  );
}
