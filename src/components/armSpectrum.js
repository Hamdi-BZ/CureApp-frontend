import React, { Component } from "react";
import { Link } from "react-router-dom";
//---Services
import AuthService from "../services/auth-service";
//import OrderDataService from "../services/Order.service";
//---BootStrap Components --------
import { Container, Row, Col } from "react-bootstrap";
//---Components
import LeftCover from "./childComponents/LeftCover";
import RightCover from "./childComponents/RightCover";
import HandPalm from "./childComponents/HandPalmList";
import WristCover from "./childComponents/WristCover";
//--------------------------------
export default class armSpectrum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      coverid: "Spectrum Cover",
      selectedpart: "",
      side: "left",
      size: "small",
      setModalShow: false,
    };
  }

  openModal = () => {
    this.setState({ setModalShow: true });
  };
  closeModal = () => {
    this.setState({
      setModalShow: false,
      confirmingChoice: false,
    });
  };
  //---Methods
  handleLeftSideClick = () => {
    this.setState({
      side: "left",
    });
  };
  handleRightSideClick = () => {
    this.setState({
      side: "right",
    });
  };
  handleSmallSizeClick = () => {
    this.setState({
      size: "small",
    });
  };
  handleMediumSizeClick = () => {
    this.setState({
      size: "medium",
    });
  };
  handleLargeSizeClick = () => {
    this.setState({
      size: "large",
    });
  };
  LeftArmClickHandle = () => {
    this.setState({
      selectedpart: "left",
    });
  };
  RightArmClickHandle = () => {
    this.setState({
      selectedpart: "right",
    });
  };
  WristCoverClickHandle = () => {
    this.setState({
      selectedpart: "wrist",
    });
  };
  HandCoverClickHandle = () => {
    this.setState({
      selectedpart: "hand",
    });
  };
  ConfirmClickHandler = () => {
    if (this.state.currentUser === null) {
      this.setState({
        setModalShow: true,
      });
    } else {
      localStorage.setItem("size", this.state.size);
      localStorage.setItem("side", this.state.side);
      //console.log(JSON.stringify(this.state));
    }
  };
  render() {
    const selectedpart = this.state.selectedpart;
    let Images;
    if (selectedpart === "left") {
      Images = <LeftCover />;
    } else if (selectedpart === "right") {
      Images = <RightCover />;
    } else if (selectedpart === "wrist") {
      Images = <WristCover />;
    } else {
      Images = <HandPalm />;
    }
    return (
      <div>
        <img
          className="coverimage"
          src={`${process.env.PUBLIC_URL}/assets/images/storecover.png`}
          alt="Store Cover"
        />
        <Container fluid className="containercustom">
          <Row className="justify-content-md-center ">
            <Col md="auto">
              <h3 className="title">Spectrum</h3>
            </Col>
          </Row>
          <Row className="justify-content-md-center ">
            <Col sm={8} className="cadre">
              <div className="containerform">
                <Row className="justify-content-md-center fixing size">
                  <Col md="auto" className="containercustomrow size">
                    <h3 className="secondtitle colored">
                      {" "}
                      Customize your super arm cover
                    </h3>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col md="auto" className="containercustomrow">
                    <h4 className="sectiontitle middle">
                      {" "}
                      choose your arm side
                    </h4>
                    <Row>
                      <Col md="auto" className="containerbtngroup sidebtngroup">
                        <button
                          className={
                            this.state.side === "left"
                              ? "btns left active"
                              : "btns left "
                          }
                          onClick={this.handleLeftSideClick}
                        >
                          Left Hand
                        </button>
                        <button
                          className={
                            this.state.side === "right"
                              ? "btns right active"
                              : "btns right "
                          }
                          onClick={this.handleRightSideClick}
                        >
                          Right Hand
                        </button>
                      </Col>{" "}
                    </Row>
                  </Col>
                </Row>
                <Row
                  className="justify-content-md-center containercustomrow size fixing"
                  md="auto"
                >
                  <h4 className="sectiontitle colored ">
                    {" "}
                    choose your arm size
                  </h4>
                </Row>
                <Row
                  className="justify-content-md-center sizebtngroup size containersize"
                  md="auto"
                >
                  <button
                    className={
                      this.state.size === "small"
                        ? "btns btn-size s active"
                        : "btns btn-size s"
                    }
                    onClick={this.handleSmallSizeClick}
                  >
                    Small
                  </button>
                  <button
                    className={
                      this.state.size === "medium"
                        ? "btns btn-size m active"
                        : "btns btn-size m"
                    }
                    onClick={this.handleMediumSizeClick}
                  >
                    Medium
                  </button>
                  <button
                    className={
                      this.state.size === "large"
                        ? "btns btn-size l active"
                        : "btns btn-size l"
                    }
                    onClick={this.handleLargeSizeClick}
                  >
                    Large
                  </button>{" "}
                </Row>
                <Row>
                  <Col>
                    <Row className="justify-content-md-center">
                      <Col md="auto">
                        {" "}
                        <h4 className="sectiontitle middle">
                          {" "}
                          choose the part you want to customize
                        </h4>{" "}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row className="justify-content-md-center">
                          <Col md="auto" className="partbtns">
                            <button
                              className={
                                this.state.selectedpart === "left"
                                  ? "btns btnpart leftarmbtn active"
                                  : "btns btnpart leftarmbtn"
                              }
                              onClick={this.LeftArmClickHandle}
                            >
                              left arm cover
                            </button>
                            <button
                              className={
                                this.state.selectedpart === "right"
                                  ? "btns btnpart rightarmbtn active"
                                  : "btns btnpart rightarmbtn"
                              }
                              onClick={this.RightArmClickHandle}
                            >
                              right arm cover
                            </button>
                          </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                          <Col md="auto" className="partbtns part">
                            <button
                              className={
                                this.state.selectedpart === "wrist"
                                  ? "btns btnpart wristcoverbtn active"
                                  : "btns btnpart wristcoverbtn"
                              }
                              onClick={this.WristCoverClickHandle}
                            >
                              wrist cover
                            </button>
                            <button
                              className={
                                this.state.selectedpart === "hand"
                                  ? "btns btnpart handcoverbtn active"
                                  : "btns btnpart handcoverbtn"
                              }
                              onClick={this.HandCoverClickHandle}
                            >
                              hand cover
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>{Images}</Row>
              </div>
            </Col>
            <Col sm={4} className="sideimage">
              <img
                className="imgspectrum"
                src={`${process.env.PUBLIC_URL}/assets/images/spectrum.png`}
                alt="Ironman Cover"
              />
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Link to="/cart">
                    <button
                      className="btns"
                      id="x"
                      onClick={this.ConfirmClickHandler}
                    >
                      Confirm
                    </button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="auto">
              <Link to="/shop">
                <button className="backbtn">Back to Store</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
