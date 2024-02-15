import React from "react";

const FullStack = ({ FSD }) => {
  return (
    <div className="container ">
      <h1 className="text-center">Full Stack Development</h1>
      <p>
        Are you a curious geek with an unstoppable urge to develop? Then, your
        Full Stack Development knack would be sun-glazed with an innovative and
        informative piece of knowledge that comes from Top industrialists and
        Appreneurs!
        <p>
          The GUVI Blog’s Full Stack Development category is here to help you
          steer through a lot of opinions that float on the internet.
          High-Quality content curated by experts!
        </p>
      </p>
      <div className="container">
        {FSD.map((item, index) => {
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

export default FullStack;
