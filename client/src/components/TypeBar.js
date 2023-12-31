import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";

import React, { useContext } from "react";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((el) => (
        <ListGroup.Item
          className="mt-2"
          style={{ cursor: "pointer" }}
          active={el.id === device.selectedType.id}
          onClick={() => device.setSelectedType(el)}
          key={el.id}
        >
          {el.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
