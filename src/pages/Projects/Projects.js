import React from "react";
// import ProjectItems from '../../components/ProjectItems/ProjectItems'
import "../../utils.css";
import "./Projects.scss";
import Data from "./projectData.js";

function Projects() {
  const projectItem = Data.map((item, index) => {
    const tech =
      item.tech &&
      item.tech.map((e, index) => {
        let src;
        switch (e) {
          case "html":
            src = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
            break;
          case "css":
            src = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";
            break;
          case "javascript":
            src = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E";
            break;
          case "react":
            src = "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB";
            break;
          case "bootstrap":
            src = "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white";
            break;
          case "sass":
            src = "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white";
            break;
          case "nodejs":
            src = "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white";
            break;
          case "express":
            src = "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white";
            break;
          case "mongodb":
            src = "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white";
            break;
          default:
            break;
        }
        return (
          <img className="proTechImg" src={src} alt={e} key={index}/>
        );
      });

    return (
      <div className="box" key={index}>
        <img className="image" src={item.image ? item.image : "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"} alt="" />
        <div className="info">
          <div className="proTitle">{item.title}</div>
          <div className="proStack">{item.stack}</div>
          <div className="links">
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer">
                <button className="btn btnPro">Project Link</button>
              </a>
            )}
            {item.github && (
              <a href={item.github} target="_blank" rel="noreferrer">
                <button className="btn btnGit">Github</button>
              </a>
            )}
          </div>
          <div className="proTech">{tech}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="containerProject centerX">
      <p className="title heading centerX">PROJECTS</p>
      <div className="listItem">{projectItem}</div>
    </div>
  );
}

export default Projects;
