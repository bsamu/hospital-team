import React from "react";

const Hospital = ({ hospital }) => {
  return (
    <div>
      <h3>{hospital.name}</h3>
      <p>
        Address:
        {hospital.country}, {hospital.postcode}-{hospital.city},{" "}
        {hospital.address}
      </p>
      <p>Tax num: {hospital.taxID}</p>
      <hr></hr>
    </div>
  );
};

export default Hospital;
