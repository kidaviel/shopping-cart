import { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <button onClick={() => setQuantity((prev) => prev - 1)}>-</button>
      {quantity}{" "}
      <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default AddToCart;
