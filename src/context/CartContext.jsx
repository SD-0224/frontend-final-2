import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const user = false;

export const CartProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [showCart, setShowcart] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (user) {
      fetch(`${environment.baseUrl}/cart/${user.id}`)
        .then((data) => {
          setCart(data);
        })
        .catch((error) => {
          console.error("Failed to fetch cart items:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    if (user) {
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function addCartItem(item) {
    if (!detectCartItem(item.productID)) {
      setCart([...cart, makeItem(item)]);
    }
  }

  function detectCartItem(itemID) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productID === itemID) {
        return true;
      }
    }
    return false;
  }

  function removeCartItem(itemID) {
    setCart(cart.filter((cartItem) => cartItem.productID !== itemID));
  }

  function setCartItemQuantity(itemID, amount) {
    if (amount < 1) {
      removeCartItem(itemID);
      return;
    }
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productID === itemID) {
        cart[i].productQuantity = amount;
        cart[i].subTotal = (
          (cart[i].productPrice - cart[i].productPrice * cart[i].productDiscount) *
          cart[i].productQuantity
        ).toFixed(2);
        break;
      }
    }
    setCart([...cart]); // Update the cart state to trigger a re-render
  }

  function getCartItemQuantity(itemID) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productID === itemID) {
        return cart[i].productQuantity;
      }
    }
    return 1;
  }

  function getInvoice() {
    const taxRate = 0.05;
    const subTotal = cart.reduce((total, item) => total + Number(item.subTotal), 0);
    const tax = subTotal * taxRate;
    const total = subTotal + tax;
    return [
      { label: "Subtotal:", amount: subTotal },
      { label: "Tax:", amount: tax },
      { label: "Total:", amount: total },
    ];
  }

  const toggleCart = () => {
    setShowcart((showCart) => !showCart);
  };
  const openCart = () => {
    setShowcart(true);
  };
  const closeCart = () => {
    setShowcart(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        addCartItem,
        showCart,
        toggleCart,
        openCart,
        closeCart,
        removeCartItem,
        setCartItemQuantity,
        getCartItemQuantity,
        detectCartItem,
        getInvoice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}

function makeItem(item) {
  const { productID, title, subTitle, price, discount, images } = item;

  const discountAmount = price * item.discount;

  return {
    productID: productID,
    productTitle: title,
    productSubtitle: subTitle,
    productPrice: price,
    productDiscount: discount,
    productQuantity: 1,
    subTotal: (price - discountAmount).toFixed(2),
    imgPath: images[0].imgPath,
  };
}
