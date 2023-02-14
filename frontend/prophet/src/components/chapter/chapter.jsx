import React from "react";
import HadithList from "../hadithList/HadithList";
const Chapter = ({ id, index, title, hadiths }) => {
  return (
    <div className="accordion-item shadow-sm">
      <h2 className="accordion-header kufi-font" id={`heading_${id}`}>
        <button
          className={`accordion-button fs-4   ${
            index === 0 ? "" : "collapsed"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse_${id}`}
          aria-expanded={`${index === 0 ? "true" : "false"}`}
          aria-controls={`collapse_${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse_${id}`}
        className={`accordion-collapse collapse  container text-dark ${
          index === 0 ? "show" : ""
        }`}
        aria-labelledby={`heading_${id}`}
        data-bs-parent="#accordionExample"
      >
        <HadithList hadiths={hadiths} chapterID={id} />
      </div>
    </div>
  );
};

export default Chapter;
