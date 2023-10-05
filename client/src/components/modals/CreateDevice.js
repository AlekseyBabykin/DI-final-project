import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Dropdown, Row, Col } from "react-bootstrap";

import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((el) => el.number !== number));
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          to add new Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>choice type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((el) => (
                <Dropdown.Item key={el.id}>{el.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>choice brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((el) => (
                <Dropdown.Item key={el.id}>{el.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className="mt-3" placeholder="write name device" />
          <Form.Control
            className="mt-3"
            type="number"
            placeholder="write price device"
          />
          <Form.Control className="mt-3" type="file" />
          <hr />
          <Button onClick={addInfo} variant={"outline-dark"}>
            to add new proporties
          </Button>
          {info.map((el) => (
            <Row className="mt-2" key={el.number}>
              <Col xs={4}>
                <Form.Control placeholder="Write name proporty" />
              </Col>
              <Col xs={4}>
                <Form.Control placeholder="Write description proporty" />
              </Col>
              <Col xs={4}>
                <Button
                  onClick={() => removeInfo(el.number)}
                  variant={"outline-danger"}
                >
                  delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Close
        </Button>
        <Button variant={"outline-success"} onClick={onHide}>
          add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
