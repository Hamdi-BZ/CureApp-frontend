import React, { Component } from "react";
import Chart from "react-google-charts";
import { Container, Row, Col } from "react-bootstrap";
export default class Statics extends Component {
  render() {
    const pieOptions = {
      title: "",
      pieHole: 0.6,
      slices: [
        {
          color: "#2BB673",
        },
        {
          color: "#d91e48",
        },
        {
          color: "#007fad",
        },
        {
          color: "#e9a227",
        },
      ],
      legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
          color: "233238",
          fontSize: 14,
        },
      },
      tooltip: {
        showColorCode: true,
      },
      chartArea: {
        left: 0,
        top: 0,
        width: "100%",
        height: "80%",
      },
      fontName: "Roboto",
    };
    const data = [
      ["Year", "Sales", "Expenses"],
      ["2004", 1000, 400],
      ["2005", 1170, 460],
      ["2006", 660, 1120],
      ["2007", 1030, 540],
    ];
    const options = {
      chart: {
        title: "Company Performance",
        subtitle: "Sales & Expenses",
      },
    };
    return (
      <div>
        <Container style={{ marginTop: "4rem" }} fluid>
          <Row className="justify-content-center">
            <Col md="auto">
              <Chart
                style={{ width: "90%", marginTop: "5rem" }}
                chartType="PieChart"
                data={[
                  ["Orders", "Client"],
                  ["Clients", 100],
                  ["Employees", 10],
                  ["Orders", 60],
                ]}
                options={pieOptions}
                graph_id="PieChart"
                width={"100%"}
                height={"400px"}
                legend_toggle
              />
            </Col>
            <Col>
              <Chart
                style={{ width: "90%", marginTop: "3rem", float: "right" }}
                chartType="Line"
                width="100%"
                height="400px"
                data={data}
                options={options}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
