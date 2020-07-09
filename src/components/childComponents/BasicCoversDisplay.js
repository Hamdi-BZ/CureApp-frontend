import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
//---Components
import Modal from "react-modal";
//---Services
import AuthService from "../../services/auth-service";
//import OrderDataService from "../../services/Order.service";
//---BootStrap Components --------
import { Container, Row, Col, Button } from "react-bootstrap";
//--------------------------------
export default class CoversDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      coverid: "",
      side: "left",
      size: "small",
      setModalShow: false,
      confirmingChoice: false,
      submitted: false,
    };
  }

  openModal = () => {
    this.setState({ setModalShow: true });
  };
  closeModal = () => {
    this.setState({ setModalShow: false, confirmingChoice: false });
  };
  componentDidMount = () => {
    const id = window.location.pathname;
    this.setState({
      coverid: id.substring(6, id.length),
    });
  };
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
    if (this.state.currentUser === null) {
      this.setState({
        setModalShow: true,
      });
    } else {
      this.setState({
        confirmingChoice: true,
      });
      console.log(JSON.stringify(this.state));
    }
  };
  // Data Service
  saveOrder = () => {
    const data = {
      userid: this.state.currentUser.id,
      coverid: this.state.coverid,
      side: this.state.side,
      size: this.state.size,
      total: 450,
      status: "pending",
      category: "Super Hero Covers",
    };
    Axios.post("http://localhost:8080/api/test/orders", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //-------------
  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    const setModalShow = this.state.setModalShow;
    const confirmingChoice = this.state.confirmingChoice;
    const side = this.state.side;
    const size = this.state.size;
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
            <Col sm={7} className="cadre">
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
            <Col sm={5} className="sideimage">
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
        {/*---------- Login if Not*/}
        {setModalShow && (
          <Modal
            style={customStyles}
            isOpen={true}
            onAfterClose={this.closeModal}
          >
            <Button
              className="modalclose"
              variant="danger"
              onClick={this.closeModal}
            >
              X
            </Button>
            <div>
              <div>
                <p className="modaldesc">Login or Signup to get your Cover</p>
                <Link to="/login">
                  <Button className="modallogin" variant="primary">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="modalsignup" variant="outline-success">
                    Sign up{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </Modal>
        )}
        {/*-------------Modal Confirming Choice-----------------*/}
        {confirmingChoice && (
          <Modal
            className="modalconfirmingorder"
            isOpen={true}
            onAfterClose={this.closeModal}
          >
            <Button
              className="modalclose"
              variant="danger"
              onClick={this.closeModal}
            >
              X
            </Button>
            <div>
              <div>
                <Row>
                  <Col>
                    <img
                      className="img"
                      src={`${process.env.PUBLIC_URL}${this.props.imgpath}`}
                      alt={this.props.title}
                    />
                  </Col>
                  <Col className="order-infos">
                    <p>Side : {side}</p>
                    <p>Size : {size}</p>
                    <p>Price : X</p>
                  </Col>
                </Row>
                <Button
                  className="modalsignup"
                  variant="success"
                  onClick={this.saveOrder}
                >
                  Order{" "}
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
