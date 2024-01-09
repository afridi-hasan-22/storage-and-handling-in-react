import React, { useEffect, useState } from "react";
import { add, getTotal } from "../../utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const cosmetics = [
    {
      _id: "659b85dc87fea31d4fb8da93",
      price: 237,
      name: "Clara Whitehead",
    },
    {
      _id: "659b85dcf9d10c1fe50a7d16",
      price: 345,
      name: "Leticia Woodward",
    },
    {
      _id: "659b85dc15de99c2a61a45ce",
      price: 335,
      name: "Dale Farley",
    },
    {
      _id: "659b85dc88314110dc366fb5",
      price: 78,
      name: "Rose York",
    },
    {
      _id: "659b85dc0ad2076540672c64",
      price: 290,
      name: "Dianne Shannon",
    },
    {
      _id: "659b85dc4201055fbfa091bf",
      price: 99,
      name: "Marianne Ferguson",
    },
  ];
  const [cosmeticss, setcosmetics] = useState(cosmetics);
const handle = (_id) => {
   const filtereddata = cosmeticss.filter(d => d._id !== _id)
   setcosmetics(filtereddata)
}
useEffect(()=> {
  console.log(cosmeticss);
},[cosmeticss])

const total = getTotal(cosmeticss)
  return (
    <div>
      <h1>Money Needed {total}</h1>
      {cosmeticss && cosmeticss.map((cosmetic) => {
        return(
        <>
        <Cosmetic cosmetic={cosmetic} key={cosmetic._id}></Cosmetic>
        {/* <button onClick={()=> handle(cosmetic._id)}>Remove THIS item</button> */}
    </>
)})}
      {/* <button onClick={() => setcosmetics([])}>Remove All</button> */}
    </div>
  );
};

export default Cosmetics;
