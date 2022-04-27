import React, { useState, useEffect } from "react";
import http from "axios";
import { getHospitals, getStockValue } from "../api/hospital_api"

function Ordering() {
  const currentUser = sessionStorage.getItem("user")
    ? sessionStorage.getItem("user")
    : "defaultUser";

  const [hospitalList, setHospitalList] = useState([]);

  const [stockLeft, setStockLeft] = useState("no data");

  const [maskQuantity, setMaskQuantity] = useState(0);
  const [hospitalID, setHospitalID] = useState("");


  const handleGetHospitals = async () => {

    const response = await getHospitals()

    if (!response) return alert('network error')

    if (response.status === 400) return alert('client error')

    setHospitalList(hospitalList);
  };


  const handleGetStockValue = async () => {
    const response = await getStockValue()

    if (!response) return alert('network error')

    if (response.status === 418) return alert('client error')

    setStockLeft(response.data[0].stock);
  };

  const orderMasks = async () => {
    const today = new Date().toISOString().split("T")[0];

    function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

    const weekFromNow = addDays(today, 7).toISOString().split("T")[0];

    const data = {
      username: currentUser,
      partner_id: hospitalID,
      block_id: "146443", // BLOCK_ID
      bank_account_id: "121759", //ACCOUNT_ID
      type: "advance",
      fulfillment_date: today,
      due_date: weekFromNow,
      payment_method: "bankcard",
      language: "hu",
      currency: "HUF",
      electronic: false,
      paid: false,
      items: [
        {
          product_id: "10121398", //MASK_ID
          quantity: maskQuantity,
        },
      ],
      comment: "here comes the invoice comment",
    };

    try {

      const response = await http.post(
      `http://localhost:4000/api/orders/f53c7090-c0aa-11ec-9c9f-0adb4fd9a356`,
      data
      );
    } catch (err) {
      console.log(err)


    }



    getStockValue();
  };

  useEffect(() => {
    handleGetStockValue()
    handleGetHospitals()
  }, []);

  return (
    <div id="container">
      <h1>Order to put in place</h1>
      <p>{stockLeft}</p>
      <form>
        <select
          value={hospitalID}
          onChange={(e) => setHospitalID(e.target.value)}
        >
          <option value="" disabled selected>
            Select your option
          </option>
          {hospitalList.map((hospital, key) => (
            <option value={hospital.id} key={key}>
              {hospital.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="quantity"
          value={maskQuantity}
          onChange={(e) => setMaskQuantity(e.target.value)}
        />
        {(!hospitalID || !maskQuantity) && (
          <p>choose hospital and mask quantity!</p>
        )}
      </form>
      <button
        className="link"
        onClick={orderMasks}
        disabled={!hospitalID || !maskQuantity}
      >
        Order
      </button>
    </div>
  );
}

export default Ordering;
