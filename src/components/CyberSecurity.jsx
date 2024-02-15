import React from 'react';

const CyberSecurity = ({CS}) => {
    return (
      <div className="container">
        {CS.map((item, index) => {
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
    );
};

export default CyberSecurity;