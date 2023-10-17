import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    // fetchOneDevice(id).then((data) => setDevice(data));
    fetchOneDevice(id)
      .then((data) => {
        return data;
      })
      .then((data2) => {
        setDevice(data2);
      });
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col xs={4} className="d-flex flex-column align-items-center">
          <Image
            width={300}
            height={300}
            src={device[0] ? process.env.REACT_APP_API_URL + device[0].img : ""}
          />
        </Col>
        <Col xs={4}>
          <div className="d-flex flex-column align-items-center">
            <h3>{device[0] ? device[0].name : ""}</h3>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundImage: `url(
              "https://www.pngitem.com/pimgs/m/135-1353166_star-icon-good-icon-png-transparent-png.png") no-repeat center  center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device[0] ? device[0].rating : ""}
            </div>
          </div>
        </Col>

        <Col xs={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 38,
              border: "4px solid lightgray",
            }}
          >
            <h3>from: {device[0] ? device[0].price : ""} dollars. </h3>
            <Button variant={"outline-dark"}>add basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Informations device</h1>
        {device[0] && device[0].info > 0 ? (
          device[0].info.map((el, index) => (
            <Row
              key={el.id}
              style={{
                background: index % 2 === 0 ? "lightgray" : "transparent",
                padding: 10,
              }}
            >
              {el.title}: {el.description}
            </Row>
          ))
        ) : (
          <div>No info available</div>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;
