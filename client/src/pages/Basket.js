import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Image, Col } from "react-bootstrap";
import { fetchBasketDevices, fetchOneDevice } from "../http/deviceAPI";
import { deleteDeviceBasket } from "../http/deviceAPI";

const Basket = () => {
  const [alldeviceId, setDevicesId] = useState();

  useEffect(() => {
    fetchBasketDevices(JSON.parse(localStorage.getItem("userInfo")).id).then(
      (data) => {
        setDevicesId(data);
      }
    );
  }, []);

  const deleteDev = async (id) => {
    try {
      await deleteDeviceBasket(id);
      const data = await fetchBasketDevices(
        JSON.parse(localStorage.getItem("userInfo")).id
      );
      setDevicesId(data);
    } catch (err) {
      alert(err.response.data.massage);
    }
  };

  return (
    <Container>
      <Row className="d-flex flex-column m-3">
        <h1>Your devices:</h1>
        <br />
        {alldeviceId ? (
          alldeviceId.map((el, index) => (
            <Row
              key={el.id}
              style={{
                background: index % 2 === 0 ? "lightgray" : "transparent",
                padding: 10,
              }}
            >
              <Col xs={3}>
                <Image
                  width={100}
                  height={100}
                  // src={el ? process.env.REACT_APP_API_URL + el.img : ""}
                     src={el ? "/" + el.img : ""}
                ></Image>
              </Col>
              <Col>
                {" "}
                <div>name : {el.name}</div>
                <div>price : {el.price}</div>
              </Col>
              <Col className="m-4" xs={2}>
                <Button
                  variant={"outline-dark"}
                  onClick={() => deleteDev(el.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))
        ) : (
          <div>No info available</div>
        )}
      </Row>
    </Container>
  );
};

export default Basket;
