import shoppingList from "../Data/ShoppingList";
import { useState, useRef } from "react";
import AddToCart from "./AddToCart";

const ShoppingMenu = () => {
  const [cart, setCart] = useState([{ id: 1, quantity: 2 }]);

  function getItemID(id) {
    const itemID = shoppingList.find((shoppingItem) => id == shoppingItem.id);

    return itemID.id;
  }

  function addToCart(itemID) {
    const newCartItem = cart.find((cartItem) => cartItem.id == itemID);

    console.log({ newCartItem, cart });

    if (newCartItem === undefined) {
      const cartReplica = cart;
      setCart([...cartReplica, { id: itemID, quantity: 1 }]);
      console.log(cart);
    } else {
      console.log("exists");
      const cartReplica = cart;
      cartReplica.map((cartProduct) =>
        cartProduct.id == itemID
          ? setCart([{ ...cartProduct, quantity: cartProduct.quantity + 1 }])
          : cartProduct
      );
      console.log(cart);
    }
  }

  const mapShoppingMenu = shoppingList.map((shoppingItem) => {
    return (
      <div id={shoppingItem.id} className="item-card">
        <img src={shoppingItem.image} alt="" className="item-image" />
        <h2>{shoppingItem.name}</h2>
        <h3>${shoppingItem.price}</h3>
        <AddToCart />
        <button
          id={shoppingItem.id}
          onClick={(e) => {
            let itemID = getItemID(e.target.id);
            console.log(itemID);
            addToCart(itemID);
          }}
        >
          Add To Cart
        </button>
        {/* {console.log(cart)} */}
      </div>
    );
  });

  return <div className="shopping-list">{mapShoppingMenu}</div>;
};

export default ShoppingMenu;
