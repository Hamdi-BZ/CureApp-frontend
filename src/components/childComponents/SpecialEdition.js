import React, { Component } from "react";
import { Card, Button, Col, Container, Row, Figure } from "react-bootstrap";
import Axios from "axios";

export default class SpecialEdition extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      specialEdition: [],
      typeId: null,
      products: [],
    };
  }
  componentDidMount = () => {
    Axios.get(`http://localhost:8080/api/test/category`)
      .then((Response) => {
        let data = Response.data;
        var i;
        for (i = 0; i < data.length; i++) {
          if (data[i].title === "Special Covers") {
            this.setState({
              specialEdition: data[i],
            });
          }
        }
        Axios.get(
          `http://localhost:8080/api/test/type/${this.state.specialEdition.id}`
        )
          .then((response) => {
            this.setState({
              specialEdition: response.data,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getProductByType = (variable) => {
    Axios.get(`http://localhost:8080/api/products/${variable}`)
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    var specialEdition = this.state.specialEdition;
    var products = this.state.products;
    return (
      <div>
        <Card className="category-prod-display">
          <Container fluid>
            <h2 className="special-edition-title" variant="light">
              Special Edition Covers
            </h2>

            <Row>
              {specialEdition.length
                ? specialEdition.map((type) => (
                    <Col className="types-displa">
                      <Figure>
                        <Figure.Image
                          width={"80%"}
                          height={"auto"}
                          alt="171x180"
                          src={`${process.env.PUBLIC_URL}/assets/images/arm3.png`}
                        />
                        <Button
                          variant="outline-light"
                          onClick={this.getProductByType(type.id)}
                        >
                          {type.title}
                        </Button>
                      </Figure>
                    </Col>
                  ))
                : null}
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}
