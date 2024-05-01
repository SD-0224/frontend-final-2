import React from "react";
import BasicTabs from "../shared/CustomTabPanel/CustomTabPanel";
import OrderList from "./OrderList";

export default function MyOrdersSection() {
  const orders = [
    {
      orderID: 874522648,
      userID: 21,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      addressID: 1,
      grandTotal: 26.98,
      isPaid: false,
      createdAt: "2024-04-28T08:17:25.000Z",
      updatedAt: "2024-04-28T08:17:25.000Z",
      paymentID: null,
    },
    {
      orderID: 874522648,
      userID: 21,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      addressID: 1,
      grandTotal: 26.98,
      isPaid: false,
      createdAt: "2024-04-28T08:17:25.000Z",
      updatedAt: "2024-04-28T08:17:25.000Z",
      paymentID: null,
    },
    {
      orderID: 874522648,
      userID: 21,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      addressID: 1,
      grandTotal: 26.98,
      isPaid: false,
      createdAt: "2024-04-28T08:17:25.000Z",
      updatedAt: "2024-04-28T08:17:25.000Z",
      paymentID: null,
    },
  ];

  const tabsData = [
    {
      label: "Completed",
      content: <OrderList orders={orders} />,
    },
    {
      label: "Processing",
      content: <OrderList orders={orders} />,
    },
    {
      label: "Cancelled",
      content: <OrderList orders={orders} />,
    },
  ];

  return <BasicTabs tabs={tabsData} />;
}
