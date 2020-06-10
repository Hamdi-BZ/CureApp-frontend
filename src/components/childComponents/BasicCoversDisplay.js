import React, { Component } from "react";
import { Link } from "react-router-dom";

//---BootStrap Components --------
import { Container, Row, Col } from "react-bootstrap";
//--------------------------------
export default class CoversDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverid: "",
      side: "left",
      size: "small",
    };
  }
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
  handleConfirmClick = () => {
    if (this.state.side === "" && this.state.size === "") {
      alert("please make a choice before confirming");
    } else if (this.state.side === "") {
      alert("please select a Side");
    } else if (this.state.size === "") {
      alert("please select a Size");
    } else {
      console.log(JSON.stringify(this.state));
    }
  };

  render() {
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
              <h3 className="title">{this.props.title}</h3>
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
                              : "btns right"
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
              </div>
            </Col>
            <Col sm={4} className="sideimage">
              <img
                className="img"
                src={`${process.env.PUBLIC_URL}${this.props.imgpath}`}
                alt="Ironman Cover"
              />
              <Row className="justify-content-md-center confirmation">
                <Col md="auto">
                  <button
                    className="btns btn-confirm"
                    onClick={this.handleConfirmClick}
                  >
                    Confirm
                  </button>
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
