import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/bookList/bookList";
import About from "./components/about/about";
import NavBar from "./components/navBar/navBar";
import BookDetail from "./components/bookDetail/bookDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/:id" element={<BookDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
