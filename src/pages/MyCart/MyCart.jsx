import BasicTable from "../../components/shared/productListTable/BasicTable";
import OrderSummary from "../../components/shared/OrderSummary/OrderSummary";
import Invoice from "../../components/shared/Invoice/Invoice";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { Stack, Box } from "@mui/material";

const OrderDetails = [
  { label: "Sub Total", amount: 119.69 },
  { label: "Discount", amount: -13.4 },
  { label: "Delivery Fee", amount: 0.0 },
  { label: "Grand Total", amount: 106.29 },
];
export default function MyCary({}) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <BasicTable />
        <OrderSummary title={"order summery"}>
          <Stack sx={{ display: "flex", minWidth: "321px;" }}>
            <Invoice invoiceData={OrderDetails}></Invoice>
          </Stack>
        </OrderSummary>
      </Box>
    </>
  );
}
