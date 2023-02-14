import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DictionaryContext } from "../../Contexts/DictionaryContext";
import ChapterList from "../chapterList/ChapterList";
import objectListToDictionary from "../../utils/ObjectListToDictionary";
import "./bookDetail.css";
import Intro from "./Intro";
export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [dictionary, setDictionary] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL
    ? `https://${process.env.REACT_APP_API_URL}`
    : "http://127.0.0.1:8000";
  useEffect(() => {
    var config = {
      method: "get",
      url: `${API_URL}/api/books/${id}/`,
      headers: {},
    };
    axios(config)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/vocabularies/`)
      .then((res) => {
        setDictionary(objectListToDictionary(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!book || !dictionary) return <span> waiting...</span>;

  return (
    <DictionaryContext.Provider value={dictionary}>
      <div className="container book-detail justify-content-center ">
        <div className="row ">
          <Intro
            title={book.title}
            author={book.author}
            about={book.about_book}
            note={book.additional_notes}
          />
        </div>
        <div className="row ">
          <ChapterList chapters={book.chapter_set} />
        </div>
      </div>
    </DictionaryContext.Provider>
  );
}
