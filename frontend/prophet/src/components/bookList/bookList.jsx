import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Book from "../book/book";
import "./bookList.css";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL
    ? `https://${process.env.REACT_APP_API_URL}`
    : "http://127.0.0.1:8000";
  useEffect(() => {
    axios
      .get(`${API_URL}/api/books/`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" container-fluid books-section ">
      <div className="row">
        {books.map((book) => (
          <Book
            cover={book.cover}
            title={book.title}
            key={book.id}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
}
