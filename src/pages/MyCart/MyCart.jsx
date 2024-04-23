import React from 'react'
import PopUp from '../../components/shared/Popup/Popup'
import MyCartDataContainer from '../../components/shared/Popup/MyCartDataContainer';

const cartData = [
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

const invoiceData = [
  { label: "Subtotal:", amount: 119.69 },
  { label: "Tax:", amount: -13.4 },
  { label: "Total:", amount: 0.0 },
];

export default function MyCart() {
  return (
    <PopUp>
        <MyCartDataContainer cartData={cartData} invoiceData={invoiceData} />
    </PopUp>
  )
}
