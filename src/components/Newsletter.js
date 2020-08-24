import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Card } from "react-bootstrap";
export default class Newsletter extends Component {
  render() {
    const url =
      "https://gmail.us17.list-manage.com/subscribe/post?u=2041ec117a42d5d4c6cd5bf32&amp;id=d8c0cc8ad8";
    return (
      <div>
        <Card
          style={{
            textAlign: "center",
            background: "#343a40",
            width: "100%",
            boxShadow: "none",
          }}
        >
          <Card.Title style={{ color: "white", fontSize: "22px" }}>
            {" "}
            Subscribe To Newsletter{" "}
          </Card.Title>
          <Card.Body className="newsletter-form">
            <MailchimpSubscribe url={url} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
