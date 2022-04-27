import React, { useState, useEffect } from "react";
import http from "axios";

function History(props) {
  const setMessage = props.setMessage;

  const [orders, setOrders] = useState(null);
  const [clicked, setClicked] = useState(false);

  const loadOrders = async () => {
    let username = sessionStorage.getItem("user");
    console.log(username);
    try {
      const response = await http.get(
        `http://localhost:4000/api/orders/username/${username}`
      );
      setMessage("Data is loaded");
      console.log(response.data);
      setOrders(response.data);
      setClicked(true);
    } catch (err) {
      setMessage("Ooops... something went wrong");
    }
  };

  return (
    <div className="history">
      <h1>History of previous orders</h1>
      <button className="link" disabled={clicked} onClick={() => loadOrders()}>
        Load previous orders
      </button>
      {orders
        ? orders.map((order, index) => {
            return (
              <div key={index}>
                <h3>Order ID: {order.orderID}</h3>
                <div>Order date: {order.date}</div>
                <div>Ordered amount: {order.amount}</div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default History;
