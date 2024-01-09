import React, { useState } from "react";
import "./Cosmetic.css";
import { addToDB, removeFromBD } from "../../utilities/fakeDB";
const Cosmetic = (props) => {
  const { _id, name, price } = props.cosmetic;
  const addTocart = (id) => {
    //   console.log('Item Added', id);
    addToDB(id);
  };

  const removeFromCart = (id) => {
    //    console.log('remove', id);
    removeFromBD(id);
  };
  return (
    <div className="product">
      <h1>Buy this : {name} </h1>
      <h2>Only for : ${price}</h2>
      <p>ID : {_id}</p>
      <button onClick={() => addTocart(_id)}>Add to cart</button>
      <button onClick={() => removeFromCart(_id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
