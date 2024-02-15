import React from "react";

const Header = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"
            width="80"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Guvi
        </a>
      </nav>
      <div className="img">
        <img
          width="1300"
          src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
