import React from "react";
import { Card, Col } from "react-bootstrap";
import { BsStarHalf } from "react-icons/bs";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <Col
      xs={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={device.img} />
        <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
          <div>
            <div>bla bla bla</div>
          </div>
          <div className="d-flex align-items-center mt-1">
            <div>{device.rating}</div>
            <BsStarHalf style={{ width: 15, height: 15 }} />
          </div>
        </div>
        <dev>{device.name}</dev>
      </Card>
    </Col>
  );
};

export default DeviceItem;
