import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/profile.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import openNewWindow from "./Utils";

export const Banner = () => {
  const resume_link="https://drive.google.com/file/d/1hM7OV5oa1hC9cCC-W6PK6lhoasrjEM8b/view?usp=drive_link";
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [viewResume, setViewResume] = useState(false);
  const toRotate = [ "Software Engineer", "Automation Tester", "Backend Developer" ];
  const period = 500;

  useEffect(()=>{
  },[viewResume])

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">About Me 😉🤗</span>
                <h2>{`Hello there!! I'am Venkat Biyyapu`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Automation Tester", "Backend Developer" ]'><span className="wrap">{text}</span></span></h2>
                  <p className="about">
                    Experienced Software Engineer , Automation Tester and Data Analyst with a 
                    strong foundation in backend development, showcasing expertise in 
                    diverse coding languages and frameworks. Known for delivering high-quality, 
                    scalable solutions through meticulous coding and a keen focus on optimizing performance.
                  </p>
                  <a 
                    className="resume" 
                    href="https://drive.google.com/file/d/1B28t3zAy8JjijQtEBFg09sIFT5aQwPm1/view?usp=sharing" 
                    onClick={(e) => { e.preventDefault(); openNewWindow("https://drive.google.com/file/d/1B28t3zAy8JjijQtEBFg09sIFT5aQwPm1/view?usp=sharing") }}
                  >
                    View Resume
                  </a>

              </div>}
            </TrackVisibility>
          </Col>
          
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div class="profile-container">
                    <img src={profileImg} alt="Header Img" class="ripple" />
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

