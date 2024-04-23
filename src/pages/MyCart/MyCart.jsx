import BasicTable from "../../components/shared/productListTable/BasicTable";
import OrderSummary from "../../components/shared/OrderSummary/OrderSummary";
import Invoice from "../../components/shared/Invoice/Invoice";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { Stack, Box, collapseClasses, colors, Typography } from "@mui/material";
import MyCartButtons from "./MuCartButtons";
// import { capitalizeSlug } from "../../utilities/helpers";
// import { useParams } from "react-router-dom";
// const { slug } = useParams();

const OrderDetails = [
  { label: "Sub Total", amount: 119.69 },
  { label: "Discount", amount: -13.4 },
  { label: "Delivery Fee", amount: 0.0 },
  { label: "Grand Total", amount: 106.29 },
];
export default function MyCary({}) {
  let breadcrumbList = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "MyCart",
      link: "/",
    },
  ];
  return (
    <>
      <Box sx={{ marginTop: "100px", marginLeft: "20px" }}>
        <Breadcrumb sx={{ marginTop: "200px" }} list={breadcrumbList} />
        <Typography
          sx={{ color: "#1B4B66", fontSize: "34px", fontWeight: "600" }}
        >
          My Cart
        </Typography>
        <Box
          sx={{ display: "flex", paddingTop: "100px", paddingBottom: "100px" }}
        >
          <BasicTable />
          <OrderSummary title={"order summery"}>
            <Stack sx={{ display: "flex", minWidth: "321px;" }}>
              <Invoice invoiceData={OrderDetails}></Invoice>
              <MyCartButtons />
            </Stack>
          </OrderSummary>
        </Box>
      </Box>
    </>
  );
}
