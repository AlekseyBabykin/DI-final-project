import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pages = [1, 2, 3, 4, 5];
  return (
    <Pagination className="mt-5">
      {" "}
      {pages.map((el) => (
        <Pagination.Item>{el}</Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
