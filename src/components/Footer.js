import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHome,
  faQuestionCircle,
  faMoneyBill,
  faHandshake,
  faBriefcase,
  faUsers,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <Container className="footer">
          <Row className="footer-row">
            <Col sm={3}>
              <h3>Navigation</h3>{" "}
              <Row>
                <Col className="footer-home">
                  <p>
                    <FontAwesomeIcon className="icon-follow-us" icon={faHome} />{" "}
                    HOME
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="footer-details" style={{ marginLeft: "3rem" }}>
                  <p>SUPER ARM</p>
                </Col>
              </Row>
              <Row>
                <Col className="footer-details" style={{ marginLeft: "3rem" }}>
                  <p>ARM COVERS</p>
                </Col>
              </Row>
              <Row>
                <Col className="footer-details" style={{ marginLeft: "3rem" }}>
                  <p>ABOUT US</p>
                </Col>
              </Row>
              <Row>
                <Col className="footer-details" style={{ marginLeft: "3rem" }}>
                  <p>MEDIA AND NEWS</p>
                </Col>
              </Row>
              <Row>
                <Col className="footer-details" style={{ marginLeft: "3rem" }}>
                  <p>STORE</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <FontAwesomeIcon
                      className="icon-follow-us icon-footer"
                      icon={faQuestionCircle}
                    />{" "}
                    FAQ
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <FontAwesomeIcon
                      className="icon-follow-us icon-footer"
                      icon={faMoneyBill}
                    />{" "}
                    INVEST
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <FontAwesomeIcon
                      className="icon-follow-us icon-footer"
                      icon={faBriefcase}
                    />{" "}
                    CAREER
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <FontAwesomeIcon
                      className="icon-follow-us icon-footer"
                      icon={faHandshake}
                    />{" "}
                    PARTNERS
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <FontAwesomeIcon
                      className="icon-follow-us icon-footer"
                      icon={faUsers}
                    />{" "}
                    OUR BIONIC FAMILY
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              sm={6}
              className="footer-details"
              style={{ marginLeft: "3rem" }}
            >
              <h3>Contact Us</h3>
              <Row className="footer-home row-footer">
                <Col sm={2}>
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faMapMarkedAlt}
                  />{" "}
                </Col>
                <Col>
                  POLE TECHNOLOGIQUE DE SOUSSE, ROUTE DE CEINTURE SAHLOUL, 4054,
                  SOUSSE, TUNISIA
                </Col>
              </Row>
              <Row className="row-footer">
                <Col sm={2}>
                  <FontAwesomeIcon className="icon-follow-us" icon={faPhone} />{" "}
                </Col>
                <Col>(+216) 20 88 38 55</Col>
              </Row>
              <Row className="row-footer">
                <Col sm={2}>
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faEnvelope}
                  />{" "}
                </Col>
                <Col>CONTACT@CUREBIONICS.COM</Col>
              </Row>
              <Row className="row-footer">
                <Col>
                  <h5>SIGN UP TO OUR NEWSLETTER</h5>{" "}
                </Col>
              </Row>
              <Row className="row-footer">
                <Col>Newsletter Form here </Col>
              </Row>
            </Col>
            <Col sm={2} style={{ marginLeft: "3rem" }}>
              <h3 className="follow-us-title">Follow Us</h3>
              <Row className="follow-us-footer">
                <Col>
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faFacebook}
                  />{" "}
                </Col>
              </Row>
              <Row className="follow-us-footer">
                <Col>
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faYoutube}
                  />{" "}
                </Col>
              </Row>
              <Row className="follow-us-footer">
                <Col>
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faLinkedin}
                  />{" "}
                </Col>
              </Row>
              <Row className="follow-us-footer">
                <Col>
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faInstagram}
                  />{" "}
                </Col>
              </Row>
              <Row className="follow-us-footer">
                <Col>
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faTwitter}
                  />{" "}
                </Col>
              </Row>
              <Row>
                <Col className="curebionics">CUREBIONICS 2020 </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
