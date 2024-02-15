import React from "react";

const DataScience = ({ DS }) => {
  return (
    <div className="container">
      <h1>Data Science</h1>
      <p>
        One of the most propelling careers on the planet today, Data Science is
        a vast arena of diverse technologies and techniques. Are you ready to
        step into the world of Data? Then you probably should not miss this
        corner of articles that is an assorted curation out of tedious research
        & exploration.
      </p>
      <p>
        The GUVI Blog’s Data Science category is here to help you steer through
        a lot of opinions that float on the internet. High-Quality content
        curated by experts!
      </p>
      <div className="container">
        {DS.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.head}</h5>
                    <p className="card-text">{item.content}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DataScience;
