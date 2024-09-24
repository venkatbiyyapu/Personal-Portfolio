import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logos/logo.jpeg"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import openNewWindow from "./Utils";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" class="logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon" id="social">
                <a href="https://www.linkedin.com/in/venkat-biyyapu/" onClick={openNewWindow("https://www.linkedin.com/in/venkat-biyyapu/")} target="_blank" ><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/venkatbiyyapu" onClick={openNewWindow("https://github.com/venkatbiyyapu")} target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/venkat_biyyapu/" onClick={openNewWindow("https://www.instagram.com/venkat_biyyapu/")} target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
