import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const DevicePage = () => {
  const device = {
    id: 6,
    name: "12pro",
    price: 25000,
    rating: 5,
    img: `https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2021%2F09%2Fiphone-13_vs_iphone-12_compare.jpg`,
  };
  return (
    <Container className="mt-3">
      <Col xs={4}>
        <Image width={300} height={300} src={device.img} />
      </Col>
      <Col xs={4}>
        <Row>
          <h3>{device.name}</h3>
          <div className="d-flex align-items-center justify-content-center">
            {device.rating}
          </div>
        </Row>
      </Col>
      <Col xs={4}></Col>
    </Container>
  );
};

export default DevicePage;
