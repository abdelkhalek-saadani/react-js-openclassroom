import { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const items = Object.keys(cart);
  const total = items.reduce(
    (acc, item) => acc + cart[item].amount * cart[item].price,
    0
  );
  // console.log('this is the cart variable ',cart)
  // console.log('this is the items variable ',items)
  useEffect(() => {
    document.title = `LMJ: ${total}€ in purchases`;
  }, [total]);

  useEffect(() => {
    //save item to localstorage
    localStorage.setItem('cart', JSON.stringify(cart))
    //getting the element from localstorage
    let cartFromLocalStorage = localStorage.getItem('cart');
    //print before parsing (string)
    console.log('this the item (cart) directly from local storage ', cartFromLocalStorage);
    //print after parsing
    console.log('this is the object from local storage', JSON.parse(cartFromLocalStorage))

  }, [cart]);

  useEffect(()=>{
    console.log("at first load we're getting the cart from localStorage ", localStorage.getItem('cart'));
  },[])

  return isOpen ? (
    <div className="jh-cart">
      <button
        className="jh-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Close
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Cart</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button onClick={() => updateCart([])}>Empty the cart</button>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  ) : (
    <div className="jh-cart-closed">
      <button className="jh-cart-toggle-button" onClick={() => setIsOpen(true)}>
        Open Cart
      </button>
    </div>
  );
}

export default Cart;
