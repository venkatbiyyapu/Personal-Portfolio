import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, technologies,description, imgUrl, flag}) => {
  const [bool,setBool]=useState(flag);
  function handleClick() {
    setBool((prevBool) => !prevBool);
  }
  const details = () => {
    return (
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="project-image"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{technologies}</span>
        </div>
      </div>
    );
  };

  const describe = () => {
    return (
      <div className="proj-imgbx">
        <div className="pcard">
          {description}
          <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{technologies}</span>
            </div>
        </div>
      </div>
    );
  };
  
  
  

  return (
    <Col size={12} sm={6} md={4}>
      <button onClick={handleClick} className="cardButton">
          {!bool && details()}
          {bool && describe()}
      </button>
    </Col>
  );
};
