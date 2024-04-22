import React from "react";
import PopUp from "../Popup/Popup";
import WishlistDataContainer from "./WishlistDataContainer";

const WishlistData = [
  {
    image: "../../../../public/images/image.svg",
    title: "coach",
    subtitle: "Leather Coach Bag",
    price: "$665",
  },
  {
    image: "../../../../public/images/image.svg",
    title: "coach",
    subtitle: "Leather Coach Bag",
    price: "$33",
  },
  {
    image: "../../../../public/images/image.svg",
    title: "coach",
    subtitle: "Leather Coach Bag",
    price: "$225",
  },
];

export default function Wishlist() {
  return (
    <PopUp>
      <WishlistDataContainer WishlistData={WishlistData} />
    </PopUp>
  );
}
