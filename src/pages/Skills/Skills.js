import React from "react";
import "../../utils.css";
import "./Skills.css";
import Typed from "react-typed";

function Skills() {
  return (
    <div className="skills centerX">
      <p className="title heading centerX">SKILLS</p>
      <p className="subhead centerX">
        <Typed strings={["Never Stop Learning ! ", "Our skills are our strength... ", "Learn Today For Better Tomorrow... "]} typeSpeed={70} backSpeed={30} loop />
      </p>
      <div className="basicTech">
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="sass" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodedotjs" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="Postman" />
        </div>
        <div className="spanExpand">
          <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="vscode" />
        </div>
        <div className="spanExpand">
        <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" alt="Canva"/> 
        </div>
        <div className="spanExpand">
        <img src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white" alt="Illustrator"/> 
        </div>
        {/*<img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" />  */}
      </div>
    </div>
  );
}

export default Skills;
