import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Button, Card } from "react-bootstrap";

const DevicePage = () => {
  const device = {
    id: 6,
    name: "12pro",
    price: 25000,
    rating: 5,
    img: `https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2021%2F09%2Fiphone-13_vs_iphone-12_compare.jpg`,
  };
  const description = [
    { id: 1, title: "system memory", description: "24gb" },
    { id: 2, title: "system memory", description: "24gb" },
    { id: 3, title: "system memory", description: "24gb" },
    { id: 4, title: "system memory", description: "24gb" },
    { id: 5, title: "system memory", description: "24gb" },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={4} className="d-flex flex-column align-items-center">
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col xs={4}>
          <div className="d-flex flex-column align-items-center">
            <h3>{device.name}</h3>
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
              {device.rating}
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
            <h3>from: {device.price} dollars. </h3>
            <Button variant={"outline-dark"}>add basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Informations device</h1>
        {description.map((el, index) => (
          <Row
            key={el.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {el.title}: {el.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
