# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### TASK SUMMITION ....

### ROUTER PROJECT...

#### _* 1st step to create a empty folder for a project and create react project with in the folder`routerapp`*_

#### code to create a react `npm create vite@latest routerapp`

### follow the steps one by one atlast install router-dom `npm i react-router-dom`

### create a components as for recuirement

#### codes in `app.jsx`

```
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./components/All";
import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import Navbar from "./components/Navbar";

const App = () => {
  let data = [
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Backend-Frameworks-That-You-Should-Know.webp",
      head: "FULL STACK DEVELOPMENT",
      content: "Top 6 Backend Frameworks That You Should Know in 2024",
      date: "February 15, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA.webp",
      head: "FULL STACK DEVELOPMENT",
      content:
        "Backend development involves managing the server, the database, and the application. ",
      date: "February 15, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide.webp",
      head: "FULL STACK DEVELOPMENT",
      content: "What Does a Top Backend Developer Do? The Ultimate Guide",
      date: "February 15, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer-768x402.webp",
      head: "FULL STACK DEVELOPMENT",
      content:
        "What is Frontend Development? Roles, Responsibilities, Skills & Salary",
      date: "February 15, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp",
      head: "FULL STACK DEVELOPMENT",
      content: "Top Full Stack Development Trends for 2024: What to Expect",
      date: "February 15, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide.webp",
      head: "FULL STACK DEVELOPMENT",
      content:
        "Top 11 CSS Frameworks for Front-End Developers: A Comprehensive Guide",
      date: "February 8, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Complete-Guide-on-Backend-Development-Roles-Responsibilities-Skills-and-Salary.webp",
      head: "FULL STACK DEVELOPMENT",
      content:
        "Backend Developers: Roles, Responsibilities, Skills, and Salary",
      date: "February 8, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Comprehensive-Guide-to-HTML-and-CSS-Roadmap.webp",
      head: "FULL STACK DEVELOPMENT",
      content: "A Comprehensive Guide to HTML and CSS Roadmap [2024]",
      date: "February 8, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      head: "DATA SCIENCE",
      content: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      date: "November 28, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-768x384.webp",
      head: "DATA SCIENCE",
      content: "Impact of Certification Programs on Hiring Data Scientists",
      date: "November 15, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      head: "DATA SCIENCE",
      content: "Top Product-Based Companies for Data Science Freshers",
      date: "November 10, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      head: "DATA SCIENCE",
      content:
        "What is the Difference between Data Science and Data Engineering?",
      date: "November 8, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-768x402.png",
      head: "DATA SCIENCE",
      content: "Top 10 Data Science Tools in 2024",
      date: "November 1, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      head: "DATA SCIENCE",
      content: "Best Data Science Books to Learn in 2024",
      date: "October 26, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      head: "DATA SCIENCE",
      content: "Top Product-Based Companies for Data Scientists in 2024",
      date: "October 5, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      head: "DATA SCIENCE",
      content:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      date: "August 28, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      head: "CYBER SECURITY",
      content: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      date: "December 4, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      head: "CYBER SECURITY",
      content: "What Is Hacking? Types of Hacking & More",
      date: "September 25, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-768x432.png",
      head: "CYBER SECURITY",
      content: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      date: "December 27, 2022",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      head: "CYBER SECURITY",
      content:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      date: "December 20, 2022",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-768x432.png",
      head: "CYBER SECURITY",
      content: "8 Different Types of Cybersecurity and Threats Involved",
      date: "November 9, 2022",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      head: "CYBER SECURITY",
      content:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      date: "June 22, 2022",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact-768x240.jpg",
      head: "CYBER SECURITY",
      content: "Top 7 Cyber Security Attacks in Real Life",
      date: "June 10, 2022",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-945x495.png",
      head: "CYBER SECURITY",
      content:
        "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      date: "March 1, 2021",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners-768x366.webp",
      head: "CYBER SECURITY",
      content: "The Ultimate Cybersecurity Roadmap for Beginners",
      date: "March 1, 2021",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png",
      head: "CYBER SECURITY",
      content: "How Is Cyber Security Important To Our Lives?",
      date: "November 10, 2020",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-768x432.jpg",
      head: "CAREER",
      content:
        "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      date: "February 2, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      head: "CAREER",
      content:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      date: "January 19, 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description-768x403.jpg",
      head: "CAREER",
      content: "UI/UX Designer Job Description and Roles & Responsibilities",
      date: "December 13, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      head: "CAREER",
      content: "Top 5 IT Jobs for Economics Students",
      date: "December 4, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      head: "CAREER",
      content: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      date: "December 2, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      head: "CAREER",
      content:
        "Automation Test Engineer Resume: 10 Important Things To Consider",
      date: "December 1, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-768x402.webp",
      head: "CAREER",
      content:
        "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      date: "December 1, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-768x402.webp",
      head: "CAREER",
      content: "9 Best Product-Based Companies for Project Management",
      date: "December 1, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp",
      head: "CAREER",
      content: "Top 5 Product-Based Companies That Don’t Require Coding",
      date: "November 24, 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp",
      head: "CAREER",
      content:
        "Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
      date: "November 23, 2023",
    },
  ];

  let FSD = data.filter((item) => item.head === "FULL STACK DEVELOPMENT");
  let DS = data.filter((item) => item.head === "DATA SCIENCE");
  let CS = data.filter((item) => item.head === "CYBER SECURITY");
  let CA = data.filter((item) => item.head === "CAREER");

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstatck" element={<FullStack FSD={FSD} />} />
          <Route path="/datascience" element={<DataScience DS={DS} />} />
          <Route path="/cyber" element={<CyberSecurity CS={CS} />} />
          <Route path="/career" element={<Career CA={CA} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

```

#### codes in `Header.jsx`

```
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

```

#### codes in `Navbar.jsx`

```
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/">ALL</Link>
        <Link to="/fullstatck">FULL STACK DEVELOPMENT</Link>
        <Link to="/datascience">DATA SCIENCE</Link>
        <Link to="/cyber">CYBER SECURITY</Link>
        <Link to="/career">CAREER</Link>
      </div>
    </div>
  );
};

export default Navbar;

```

#### codes in `All.jsx`

```
import React from "react";
import "./style/All.css";

const All = ({ data }) => {
  return (
    <div className="container">
      {data.map((item, index) => {
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

export default All;

```

#### codes in `Fullstack.jsx`

```
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

```

#### codes in `Datascience.jsx`

```
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

```

#### codes in `Cybersecurity.jsx`

```
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
```

#### codes in `Career.jsx`

```
import React from 'react';

const Career = ({CA}) => {
    return (
      <div className="container">
        {CA.map((item, index) => {
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

export default Career;
```

#### codes in `css file `

### some external styles has been added...

-------------- end -----------
