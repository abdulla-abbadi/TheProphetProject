import React from "react";
import { useContext } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { DictionaryContext } from "../../Contexts/DictionaryContext";
import {
  split_on_matched_words,
  add_definations_for_matched_words,
} from "../../utils/MatchingWords";
export default function Text({ text }) {
  const dict = useContext(DictionaryContext);
  return (
    <div>
      {dict !== null ? (
        add_definations_for_matched_words(
          split_on_matched_words(text, Object.keys(dict)),
          Object.keys(dict),
          dict
        ).map((segment) => {
          return typeof segment === "string" ? (
            segment
          ) : (
            <OverlayTrigger
              key={`${segment[0]}_${Math.floor(Math.random(0, 100) * 1000)}`}
              placement="top"
              overlay={
                <Popover id={segment[0]}>
                  <Popover.Body>
                    <div className="card-body">
                      <p className="card-text">{segment[1]}</p>
                    </div>
                  </Popover.Body>
                </Popover>
              }
            >
              <span type="button" className=" text-primary">
                {segment[0]}
                <span className=" text-dark">{""}</span>
              </span>
            </OverlayTrigger>
          );
        })
      ) : (
        <span>Loading data...</span>
      )}
    </div>
  );
}
