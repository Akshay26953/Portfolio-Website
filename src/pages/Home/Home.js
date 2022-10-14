import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function Home() {
  return (
    <div className="containerHome">
      <div className="home">
        <h3>Hello! I'm</h3>
        <h1>AKSHAY KHARAT</h1>
        <div className="typing">
          <p>I</p>
          <Typed strings={["am a Front End Developer ", "build Front End for Web "]} typeSpeed={70} backSpeed={30} loop />
        </div>
        <div className="btns">
          <Link to="/about">
            <button className="btn btnAbout">About Me</button>
          </Link>
          <Link to="/projects">
            <button className="btn btnProject">List of Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
