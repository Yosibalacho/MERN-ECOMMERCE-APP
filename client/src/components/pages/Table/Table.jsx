import React, { useContext } from "react";
import { DataContext } from "../../../contexts/OrderContext";
import Table from "react-bootstrap/Table";

const TableOrders = () => {
  const { orders } = useContext(DataContext);
  return (
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>profit</th>
          <th>products</th>
          <th>time</th>
          <th>address</th>
          <th>name</th>
          <th>number</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item) => {
          return (
            <tr>
              <td>{item.profit}</td>
              <td>{item.orderQuantity}</td>
              <td>{item.orderTime}</td>
              <td>{item.orderAddress}</td>
              <td>{item.orderName}</td>
              <td>{item.orderNum}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableOrders;
