import UserAddress from "../../components/shared/Checkout/UserAddress";
import OrderSummary from "../../components/shared/OrderSummary/OrderSummary";
import Invoice from "../../components/shared/Invoice/Invoice";
import CardVertical from "../../components/shared/CardVertical/CardVertical";
import { Typography, Stack, Box, Container } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import PaymentComp from "../../components/shared/Checkout/PaymentComp";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import CheckoutButtons from "../../components/shared/Checkout/CheckoutButtons";

export default function Checkout({ item }) {
  const { cart, getInvoice, removeCartItem } = useCartContext();

  const breadcrumbList = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Checkout",
    },
  ];

  return (
    <>
      <Container sx={{ marginTop: "100px", marginLeft: "20px" }}>
        <Breadcrumb list={breadcrumbList} />
        <Typography
          component="h1"
          sx={{
            color: "primary.main",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          Checkout
        </Typography>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
        }}
      >
        <Box sx={{ width: { xs: "90%", sm: "66%" }, marginRight: "8%" }}>
          <UserAddress />
          <PaymentComp />
          <CheckoutButtons />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "26%" },
            marginTop: "50px",
            marginLeft: "20px",
          }}
        >
          <OrderSummary title={"Order Summary"}>
            <Box>
              {cart.map((item, index) => (
                <CardVertical key={index} cart={cart} item={item}>
                  <Typography sx={{ color: "#626262" }}>
                    Qty- {item.productQuantity}
                  </Typography>
                </CardVertical>
              ))}
            </Box>
          </OrderSummary>

          <OrderSummary title={"Order Details"}>
            <Stack sx={{ display: "flex", minWidth: "321px;" }}>
              <Invoice invoiceData={getInvoice()}></Invoice>
            </Stack>
          </OrderSummary>
        </Box>
      </Box>
    </>
  );
}
