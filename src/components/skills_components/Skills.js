import React from 'react';
import colorSharp from "../../assets/img/color-sharp.png";
import htmlLogo from "../../assets/img/logos/html-1.svg";
import cssLogo from "../../assets/img/logos/css-3.svg";
import cPlus from "../../assets/img/logos/c++.svg";
import cLogo from "../../assets/img/logos/c-1.svg";
import reactLogo from "../../assets/img/logos/react-2.svg";
import hadoopLogo from "../../assets/img/logos/hadoop.svg";
import jsLogo from "../../assets/img/logos/logo-javascript.svg";
import javaLogo from "../../assets/img/logos/java-4.svg";
import mongoDBLogo from "../../assets/img/logos/mongodb-icon-2.svg";
import mySqlLogo from "../../assets/img/logos/mysql-3.svg";
import nodeJsLogo from "../../assets/img/logos/nodejs.svg";
import powerBiLogo from "../../assets/img/logos/power_bi.png";
import rLogo from "../../assets/img/logos/r-lang.svg";
import expressLogo from "../../assets/img/logos/expressjs.svg";
import pySparkLogo from "../../assets/img/logos/apache_spark.svg";
import pythonLogo from "../../assets/img/logos/python-5.svg"
import seleniumLogo from "../../assets/img/logos/selenium-1.svg";
import numpyLogo from "../../assets/img/logos/numpy-1.svg";
import pandasLogo from "../../assets/img/logos/pandas.png";
import postmanLogo from "../../assets/img/logos/postman-icon-svgrepo-com.svg";

export const Skills = () => {
  const skillsList = [
    { id: 1, imgSrc: htmlLogo, alt: 'HTML' },
    { id: 2, imgSrc: cssLogo, alt: 'CSS' },
    { id: 3, imgSrc: jsLogo, alt: 'JavaScript' },
    { id: 4, imgSrc: reactLogo, alt: 'React' },
    { id: 5, imgSrc: expressLogo, alt: 'Express.js' },
    { id: 6, imgSrc: nodeJsLogo, alt: 'Node.js' },
    { id: 7, imgSrc: pythonLogo, alt: 'Python' },
    { id: 8, imgSrc: cPlus, alt: 'C++' },
    { id: 9, imgSrc: cLogo, alt: 'C' },
    { id: 10, imgSrc: javaLogo, alt: 'Java' },
    { id: 11, imgSrc: mySqlLogo, alt: 'MySQL' },
    { id: 12, imgSrc: mongoDBLogo, alt: 'MongoDB' },
    { id: 13, imgSrc: hadoopLogo, alt: 'Hadoop' },
    { id: 14, imgSrc: pySparkLogo, alt: 'PySpark' },
    { id: 15, imgSrc: powerBiLogo, alt: 'Power BI' },
    { id: 16, imgSrc: rLogo, alt: 'R Language' },
    { id: 17, imgSrc: seleniumLogo, alt: 'Selenium' },
    { id: 18, imgSrc: numpyLogo, alt: 'NumPy' },
    { id: 19, imgSrc: pandasLogo, alt: 'Pandas' },
    { id: 20, imgSrc: postmanLogo, alt: 'Postman' }
  ];
  

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have extensive experience and expertise in various technologies, 
                enabling me to contribute effectively to diverse projects. My skills are:
              </p>
              <div className="skills-container">
                {skillsList.map(skill => (
                  <div key={skill.id} className="item">
                    <img src={skill.imgSrc} alt={skill.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
