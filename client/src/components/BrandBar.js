import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Row, Card } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="d-flex">
      {device.brands.map((el) => (
        <Card
          style={{ cursor: "pointer" }}
          border={el.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => device.setSelectedBrand(el)}
          className="p-3 mt-2"
          key={el.id}
        >
          {el.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
