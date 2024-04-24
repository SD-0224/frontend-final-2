import CartTable from "../../components/shared/CartTable/CartTable";
import OrderSummary from "../../components/shared/OrderSummary/OrderSummary";
import Invoice from "../../components/shared/Invoice/Invoice";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { Stack, Box, Typography, Container } from "@mui/material";
import MyCartButtons from "../../components/shared/Invoice/MuCartButtons";
import { useCartContext } from "../../context/CartContext";

export default function MyCary({}) {
  const { cart, getInvoice, removeCartItem } = useCartContext();

  const breadcrumbList = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "MyCart",
    },
  ];
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Breadcrumb sx={{ marginTop: "200px" }} list={breadcrumbList} />
      <Typography component="h1" sx={{ color: "primary.main", fontSize: "34px", fontWeight: "600" }}>
        My Cart
      </Typography>
      <Box sx={{ display: "flex", paddingTop: "100px", paddingBottom: "100px" }}>
        <CartTable cart={cart} removeCartItem={removeCartItem} />
        <OrderSummary title={"Order Summary"}>
          <Stack sx={{ display: "flex", minWidth: "321px;" }}>
            <Invoice invoiceData={getInvoice()}></Invoice>
            <MyCartButtons />
          </Stack>
        </OrderSummary>
      </Box>
    </Container>
  );
}
