import React from "react";

export default function Intro({ title, author, about, note }) {
  return (
    <div>
      <h1 className="display-4 mb-4 title">
        <span>
          <img src="images/book-icon.png" className=" me-3 pb-4" alt="" />
        </span>
        <span className="ms-2">{title}</span>
      </h1>
      <hr className=" w-25  align-content-center" />
      <div className="mt-4">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-2 bg-light">
              <h1 className="ps-5 pt-2 kufi-font">المؤلف</h1>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="fs-2 ">{author}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-2 bg-light">
              <h1 className="mt-5 ms-3 kufi-font">عن الكتاب</h1>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="fs-5">
                  <span dangerouslySetInnerHTML={{ __html: about }}></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
