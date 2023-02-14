import React from "react";
import { Link } from "react-router-dom";
export default function Book({ cover, title, id }) {
  return (
    <div className="col-md-3 col-lg-3 col-xl-3 col-6 mt-3 mb-4">
      <h5 className=" fw-light ms-2 title">{title}</h5>
      <Link to={`/${id}`}>
        <div className="card shadow ">
          <img src={cover} alt={title} className="card-img-bottom rounded" />
        </div>
      </Link>
    </div>
  );
}
