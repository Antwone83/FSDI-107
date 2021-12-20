import "./quantityPicker.css";
import { useState } from "react";

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    console.log("example");
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    console.log("Decrement the value");
    if(quantity>1)
    setQuantity(quantity - 1);
  };

  return (
    <div className="quantityPicker">
      <button className="btn btn-sm btn-info" onClick={decrement}> - </button> 
      <label> {quantity} </label>
      <button className="btn btn-sm btn-info" onClick={increment}> + </button>
    </div>
  );
}

export default QuantityPicker;
