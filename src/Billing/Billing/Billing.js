import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Planimage from "./Assets/Group 7739.png";
import Paymentimage from "./Assets/Group 7765.png";
import Divider from "@mui/material/Divider";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { DataGrid } from "@mui/x-data-grid";
import "../Billing/Billing.css";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Visa from "./Assets/Group 7766.png";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import http from "../../http-common";
import moment from "moment";
require("jspdf-autotable");
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const usdPrice = {
  type: "number",
  width: 130,
  valueFormatter: ({ value }) => currencyFormatter.format(value),
  cellClassName: "font-tabular-nums",
};

let invoiceDownlode = [
  "Golden",
  "Yearly",
  "2022-2-4",
  30,
  "Yearly",
  "2022-2-4",
];
const columns = [
  { field: "id", headerName: "Payment Id", width: "250" },
  {
    field: "paymentAmount",
    headerName: "Amount ($)",
    width: "100",
    ...usdPrice,
  },
  {
    field: "paidPackage",
    headerName: "Package",
    width: "150",
  },
  {
    field: "status",
    headerName: "Status",
    width: "150",
  },
  {
    field: "paymentDate",
    headerName: "Payment Date",
    width: "150",
  },
  {
    field: "packageEndDate",
    headerName: "Package End Date",
    width: "150",
  },
  // {
  //   field: "action",
  //   headerName: "Action",
  //   width: "200",
  //   renderCell: (parms) => (
  //     <div style={{ display: "flex", gap: "0.5rem" }}>
  //       <Button
  //         style={{
  //           backgroundColor: "#4F9AFF",
  //           color: "white",
  //           borderRadius: "7px",
  //         }}
  //         id="basic-button"
  //       >
  //         View Invoice
  //       </Button>
  //       {/* <ExpandMoreOutlinedIcon
  //         style={{
  //           fontSize: "40px",
  //           backgroundColor: "#F8F8F8",
  //           borderRadius: "8px",
  //         }}
  //       /> */}
  //     </div>
  //   ),
  // },
];


const generatePDF = () => {
  let company_logo = {
    w: 80,
    h: 50,
  };
  let comapnyJSON = {
    CompanyName: "ABCD TECHONOLOGIES",
    CompanyGSTIN: "37B76C238B7E1Z5",
    CompanyState: "KERALA (09)",
    CompanyPAN: "B76C238B7E",
    CompanyAddressLine1: "ABCDEFGD HOUSE,IX/642-D",
    CompanyAddressLine2: "ABCDEFGD P.O., NEDUMBASSERY",
    CompanyAddressLine3: "COCHIN",
    PIN: "683584",
    companyEmail: "xyz@gmail.com",
    companyPhno: "+918189457845",
  };

  let customer_BillingInfoJSON = {
    CustomerName: "Jidfdno dfdfgsv",
    CustomerGSTIN: "37B76C238B7E1Z5",
    CustomerState: "dsfdsfdsf (09)",
    CustomerPAN: "B76C238B7E",
    CustomerAddressLine1: "ABCDEFGD sdfsdf,df/sdfsd-D",
    CustomerAddressLine2: "sdf P.O., sdfsdfs",
    CustomerAddressLine3: "COCHIN",
    PIN: "683584",
    CustomerEmail: "abcd@gmail.com",
    CustomerPhno: "+918189457845",
  };

 

  let invoiceJSON = {
    InvoiceNo: "INV-120152",
    InvoiceDate: "03-12-2017",
    RefNo: "REF-78445",
    TotalAmnt: "$ 30",
    SubTotalAmnt: "$ 30",
  };
  let imgData =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAA3CAYAAACVZXFlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA20SURBVHgB7ZwLeBXFFcf/e3MDefEQMDSggFDlUa1FqShKwSK2xVrfflZEqVpb0VofoFURAmh9lKIVsbbqJ1ZjW7FWa23FgqISioKPBsHyMFAEeWNIQkhyc+/0/DOzZLPZe7M3JGj7ze/7jszdnZ2dnTlzzpmzGwGLxWKxWCwWi8VisVgsFovFYrF8kXGaHFHKQUtwHAWL5SDRREkzpy6e7Tg4BGmhEqLvuyLKWZOIOktjicjHKDyxgidgsbQBTRS3XWHxJqVUT7QYlXAQ2aCcxMJEAi/FYzVLcPdpu2CxtCJtoLheVJ3Y3HflJvfWRrq8jMKv1MJiaQUiaFOcqMS+QyVeeCoTu+/Dzxd0hcXSCrSx4hocJ1f+c220Nvu3eRPn58NiOUAOjuIShQxHqXNqc3In4ubFHWCxHAAHT3E1jorg2sws5+wWp90sFhx8xaXlzUZE3ZQ1bfHhsFhaSDSdyn0PycLwPh2Rn9sO2ytr8fqGPdhYVoO0UTg2rtQZUvo1LJYWENrijj02H/OH1WLm5icxaekMzNrxDF4fnsDlx3WXvRfSxok4Y3DDkmxYLC0glMUd1a8zHsgvRezRO1Fbtbf+WOzf7yH77QW45+KJ2DWgP178KL13DAqRvuhUI9kG7IPFkiahLO6UoV1QV/SL+up5Y29ElzuLkHvuVVDxOsSfn4NbBkWRGUnT7CZULiprD36Mbfm/oFmL26FdBgZXrkNF+W60//ooZH/rYtHfCHJ6HYX4plJUL1uIw3auxhFdCrBmZxrG01F70C3SggDZYgmhuO2jETi1WiEjHTvXK209jhzv3EWXa6qRHU3PeDpwSlBdXIHPn0yRfiJ8q1cmskYkhraB+eu+Iu1FPhXZjPAfIrGP3aD7WIq262NYOOGHiRSIVImsFmnNV/p5IgOhdZTjtNF7slnF3bWvDtu79UNWJAO1K5Yi/ul6ZBT0Qd26EtT+awmc7DxUHtITm0rSMZ4qLhu6IhQWJlJU4iS/7vkdF9ki8orIMyLlvvpcRY+LBKXZqIwToCfdhQp7ocgN0MrE31SG/4j8UuTpgHZOEpnt+c2J2iTyN5FnoScwCFnxuErkx9ALhFSKvCHCGOwDJFfg4SJTRI6FVniOw3rTR96zzlP3bpHRaJ7vi6xNcZ7PwzecXCAX+s4xJuQ43CwyVCTH9J2K9QD0uPkV+BiRR0z/Ced9m8gikSKRrb764tYxzfSB96PlXCAy1q3QrOIqpXD/WgczzhiHqpfm4rNp4xHp1BWJijKoveVoN+p8PF2ej11VWxAahWdrnC6vNVMrQ+T4gOPfEzkfevB3eI7zAblC+wdcw8Ft7/mdJfIrkcvRdAz4SedNCFbc7CR9Yn/OMX3yK++hIk+IjDL3delo6lMxuXj+hKbKe7XIvdCL2N/HuSIjRH4qUm2Od0/SPz/NzfvR0AYgy3ecYzxO5D5zLy9Uzsc8ffIaCc7lcQHtfUfk29Djt8cc+wa0AWLdCnOcln2Y98JQ/n3OO1vwRO/zkXfpJERyOiC+daP82xHZYydi3sBxmLl0K0Lj4O1YpO66NL8Umws9MLdDT+434Vl9Abwpcp1H7oIeBBcO7JXQE0hLQUs4RORckWJoa9Act5hrZkFPKPPSw3x1OL7TzTlOxDKRS0XOEnkK2lpyUpjP/rLvWlozWvcOph6tKSd6IrSFyjTPcIPnGlrgSUbuEfnMHF/lOT4p5PMFwTl4EFppOX+/EfmuyBXQnsoxz3crgv5IQcMx6mSeh3VOEznSc/5M6LHiM9MTHm7u+3dvI6HSYWJ0ceMr67FqwIBls867+viMTl0iYnErbt1c8N6cpRtGqLBRmuO8H0Pm2Sg8ZSfSgxPwIXRceAm0ZT0yRf0SNHbpXjhoP4JWqu0iY0RWmnPvirwoMhKp4RNvNfUZKtCdUgF7++oNEDnPlD+GVjw3b/iSuf+N0LHrD6HdrwsnP8OUaXkfM2WGSm+JvGqehSEIFb/MnHvF1DsC2qLTOq8TmYkDg325xtyT4QoX5F2e88vMvXuIXASt1KUB7fBahnkMk7jo6Am94Y5rYKibXBRzoed+greRtHZUW5YXv1/xyB2RsnuvQfnDtye2LX1tWSilVWAA/FCsOjEKhSekYZ6bwI1AD2jFWZ2i3gkihR45ynNuMBrc3Dxoa+SF8VdzYYwXd9PECfFPFN32oab8JBqUlvAZHhJxF/FJnnNUEjdWpSV73NcuF8xfTJlx4NfQ9jC0cT0K59D/1nOFyHOmTCs5MEk79GoMxeipaFmfh96DuHD/4qanGGLRew7xN5LWK9+Tq9a4cQhtfM6Iqo/K53Xg57bBbkFB7ZRN2Dwn4cypnX7KSrQcxrW0XidCr3huZn6fov4JRlyWo2FwONFuvLsKLfvzIj4vw43x0C6dE8AQY6mvXi9PuSSgHSolrc+hpl8u3GjmmPKHAX3kInHHsz0aFkdb4r3PJyK7A+q4z8jxSfbHCLd4yjQ+hWi8L6B3oJfiHoPjwD0Ax/V6kTkwYxFecR2o06tW7FdcuTpzUM3mTvLvFkdbwf03Vo7zKOLx4rqyyuWYPaY1crX9jJDF0A+2I0V9Dqp3t+iNbxmb0arSqh3I55XHecp0kdwJ+xPZ1Z5yXkAbVIZMT79cvGOWi2Dc9vgsByM1xvu4fWSfqJwqSZ9IsnlnyMO5Ox16DBeKnIrGno/xLA3VDOgQinM101z3R1ZII1RQGwpiexp9BJ4fLz9MXiSsb1TNQU/R8fK6GcOXtJLSEmYAXjXlQQhOeXmhuznaI294zjHWrDRlDl5OwPWZSA0njJucj8xvuuqgD+RpLeOmzFja75kYHnQzZe84lnt+08v4d/BUkFNNea/v2tYgyKDxPh+bMj3JYN95LsLTTZkLNlm67VGR26C9KGN8jtvFAfWopNw0M2TaZ9rfXy+04qr6vx1zjvYe65jY189RvlhT1aeMHoxOLS5sxW9uudqZhqGLovvgw6dSXtYp8Ij3T4aoTG5+mNkJ5he5kWEMRwW5ADpn2BwcdG7yGLd+CToObeerw/BhuSlzA/cT0xfmdZk2ouvjwqHFnOu79kHzL8OQv0IvWPaRm0DGxieb84sQHIakwm0nw3PMtaLcybsLxZvS2mv6yI0UwzXOwVDzLAwhuFkb7enTh0nuTaNAJTzCc3+vV2FW4SzTLuty/NxFsD+lGVpxI46zQmLWAd5jUYXuPWNlnzSprJApse2t0WmLp7ai8lJRfgY9cEzG34GmiuLCUGKFR2itD9vfO2AydDaAcEFwcBaJvA2dUuqBcPxT5H7ohUXLOMF3npadMR1DFVoxJugZr3HhMMk/0FxLDzHfdy135YtNeYgpLzR9vcwcZ5bFTRGGhfPBRcEY+To0eAGO5++gsyquXrzlu/bPIi+Y+9HN/8P06R1oD0RFo/Xnxqs8yf2ZBuMYc49Cb1Nt2nDpau7BTRnDAs7dV825/S+kQitu/+ptG+URC7zHRJFzRlatKgu8gMoL57botCVTWlF5aXlehu433cZFSepxZXb1CC2w17rQxTPpXQI9CTxP18d0FhUp1VslL1xE3F2/YdqfisaxL3nT9JULhePAfC1DC1paKjSVhWmwvb7r6B5ppTlxjC2Z1qICdzd9puLRO6xCekRMHzuafrjjQiViqtH1qtzMPuS7lsrITan7lrCDaasPdEhEI8E8cyqPxc0W01yclw3QC89bnyECn4+5W77UGWp+s46bEgy/ObtyzwIOnl8Bc0ZXrawr6nxKlShn01ix3vKq20V5UafU9DT/bzccmB+Ysjs5HDimUl4wv70bME40ByFow8Vze3zHaF1HQg8OXRxjLVp1rv7nEcxa0yc+hxs3cyN4LRqyGP77sy4XHFNYV5h6dP+rzXFakWQvY/h8ZxrhZDM82unpY6pvSXktd+KdzXO5UMEY4jDm/gMacqi0nr3MeVpQKsnmgHZp5cdDjxnb4ELkolsEPS8bAq5hpoCbLFffYuY5StB4Dgm9GEMqKmxP0zZDLoZ03qxWY4L+vwpiLytK115/fRbi/nyiWpvZffrI3pO58gchGQ5iMnt31hWePIOfhcFiOUBChQqi3StFaYPeVDkFdWU9Jf1VmrKB+rABk2XDNhkWSysQMsZVKyRMHRB0JlfV9JGNWPMxoVbeOzILl1wOi+UACae4jvOuE1HHBJ6C6psfK1+NcGRCJWZHC4tvxsT5ubBYWkgoxT28Zsc6sZi9g886eWfvXbZHf4oTihxR9inRvOxrrPJaWkoIxVWJWduLuOtNloHIGVG5NktCifAfzyjkOohMiXbInWCV19ISwljcjcOqSwuSn1Y5vWq3dZOWUm/QmlwmyqswNZqTPQGFy3NgsaRBs4qr4JRkQPVPXsOJ9IiX9XCUk/778nrL60yNotoqryUtmrh/lVB8Q9bwcYzjFMcV+qdqJEvV9ZBc7ztiQYchXSQl4STUpe0isdLaC559EfMujMNiaYYmihuL11yAzHae16PlZRmID4o7GWPEQn7JX1+UdXcMsYfrkFMCp/I5tIT61yCZVVZpLWEJ/Q3BrrGDB8X1hyG9PVevk7ds47sXfVAMi+UgEvojm65F769yErhMXLv7fny940SvzC/6YAksli86Oy45/oztYweX7LpkyGiVhsW2WD53KsYNy5fXDVZpLRaLxWKxWCwWi8VisVgs/2P8F90i1sN5/GIZAAAAAElFTkSuQmCC";
  let fontSizes = {
    HeadTitleFontSize: 18,
    Head2TitleFontSize: 16,
    TitleFontSize: 14,
    SubTitleFontSize: 12,
    NormalFontSize: 10,
    SmallFontSize: 8,
  };
  let lineSpacing = {
    NormalSpacing: 12,
  };

  let doc = new jsPDF("p", "pt");
  let rightStartCol1 = 400;
  let rightStartCol2 = 480;
  let startX = 40;
  let InitialstartY = 50;
  let startY = 0;
  doc.setFontSize(fontSizes.SubTitleFontSize);
  doc.setFont("helvetica");
  doc.setFont(undefined, "bold");
  doc.addImage(
    imgData,
    "JPEG",
    startX,
    (startY += 50),
    company_logo.w,
    company_logo.h
  );
  doc.text(
    comapnyJSON.CompanyName,
    startX,
    (startY += 15 + company_logo.h),
    "left"
  );
  let tempY = InitialstartY;
  doc.setFont(undefined, "bold");
  doc.text(
    "INVOICE NO: ",
    rightStartCol1,
    (tempY += lineSpacing.NormalSpacing)
  );
  doc.setFont(undefined, "normal");
  doc.text(invoiceJSON.InvoiceNo, rightStartCol2, tempY);
  doc.setFont(undefined, "bold");
  doc.text(
    "INVOICE Date: ",
    rightStartCol1,
    (tempY += lineSpacing.NormalSpacing)
  );
  doc.setFont(undefined, "normal");
  doc.text(invoiceJSON.InvoiceDate, rightStartCol2, tempY);
  doc.text("Total: ", rightStartCol1, (tempY += lineSpacing.NormalSpacing));
  doc.setFont(undefined, "normal");
  doc.text(invoiceJSON.TotalAmnt, rightStartCol2, tempY);
  doc.setFont(undefined, "normal");
  doc.setFontSize(fontSizes.Head2TitleFontSize);
  doc.setFont(undefined, "bold");

  doc.setFontSize(fontSizes.NormalFontSize);
  doc.setFont(undefined, "bold");

  //-------Customer Info Billing---------------------


  doc.text("", 80, startX);
  doc.text(
    customer_BillingInfoJSON.CustomerName,
    startX,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.text("Address", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFont(undefined, "normal");
  doc.text(customer_BillingInfoJSON.CustomerAddressLine1, 80, startY);
  doc.text(
    customer_BillingInfoJSON.CustomerAddressLine2,
    80,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.text(
    customer_BillingInfoJSON.CustomerAddressLine3,
    80,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.setFont(undefined, "bold");
  doc.text("STATE", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFont(undefined, "normal");
  doc.text(customer_BillingInfoJSON.CustomerState, 80, startY);
  doc.setFont(undefined, "bold");
  doc.text("EMAIL", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFont(undefined, "normal");
  doc.text(customer_BillingInfoJSON.CustomerEmail, 80, startY);
  doc.setFont(undefined, "bold");
  doc.text("Phone: ", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFont(undefined, "normal");
  doc.text(customer_BillingInfoJSON.CustomerPhno, 80, startY);

 
  doc.setFontSize(8);
  doc.setFont(undefined, "normal");

  // doc.autoTable(columns, rows, options);
  // autoTable(doc, { html: "#my-table" });

  // Or use javascript directly:
  autoTable(doc, {
    head: [
      [
        "Payment Id",
        "Amount",
        "Package",
        "Status",
        "Payment Date",
        "Package End Date",
      ],
    ],
    body: [invoiceDownlode],
    margin: {
      top: 50,
    },
    startY: (startY += 50),
  });
  //-------Invoice Footer---------------------
  const rightcol1 = 340;
  const rightcol2 = 430;

  startY = doc.autoTableEndPosY() + 30;
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.setFont(undefined, "bold");
  doc.text("Grand Total $.", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFont(undefined, "normal");
  doc.text(invoiceJSON.TotalAmnt, rightcol2 + 25, startY);
  doc.setFont(undefined, "bold");
  doc.text(
    "For " + comapnyJSON.CompanyName + ",",
    rightcol2,
    (startY += lineSpacing.NormalSpacing + 25)
  );
  doc.text(
    "Authorised Signatory",
    rightcol2,
    (startY += lineSpacing.NormalSpacing + 25)
  );
  doc.save("Invoice.pdf");
};
export default function Certificates() {

  const [invoiceInfo, setInvoiceInfo] = useState({
    currancyType: "",
    id: "",
    packageEndDate: "",
    paidPackage: "",
    paymentAmount: 0,
    paymentDate: "",
    paymentIntent: "",
    status: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    package: {
      subscription_package: "",
      package_time: "",
      package_end_date: "",
      payments: 0,
      currant_package_price: "",
    },
  });
  const [lastPaymentInfo, setLastPaymentInfo] = useState({});
  const [paymentRows, setPaymentRows] = useState([]);
  useEffect(() => {
    const rs = JSON.parse(localStorage.getItem("User"));
    if (rs) {
      http
        .get(`/getSuscribeDetails/${rs.User.companyId}`)
        .then(function (response) {
          setPaymentInfo(response.data);
          setPaymentRows(response.data.payments);
          const lastItem =
            response.data.payments[response.data.payments.length - 1];
          if (lastItem) {
            setLastPaymentInfo(lastItem);
            setInvoiceInfo(lastItem);
          }
        });
    }
  }, []);
  const handleRowClick = (params) => {
    setInvoiceInfo(params.row);
  };

  return (
    <div>
      <Grid
        container
        spacing={4}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Grid item xs={12} sm={12} md={8}>
          <Grid
            container
            spacing={4}
            style={{ display: "flex", justifyContent: "row" }}
          >
            <Grid item xs={12} sm={12} md={6} style={{ borderRadius: "16px" }}>
              <Item
                style={{ backgroundImage: `url(${Planimage})` }}
                className="cardbgi"
              >
                <Grid>
                  <Grid container>
                    <Grid className="firstcardtxtstyle-1">
                      <b>Current subscription Plan</b>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid className="firstcardtxtstyle-2">
                      <b>$ {paymentInfo.package.currant_package_price}</b>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid className="firstcardtxtstyle-3">
                      <b>
                        {paymentInfo.package.subscription_package} subscription
                      </b>
                    </Grid>
                    <Grid container>
                      <Button
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 1)",
                          color: "rgba(42, 42, 42, 1)",
                          marginTop: "4%",
                        }}
                      >
                        Change Plan
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Item
                style={{ backgroundImage: `url(${Paymentimage})` }}
                className="cardbgi"
              >
                <Grid container>
                  <Grid className="secondcardtxtstyle-1">
                    <b>Next payment</b>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid>
                    <Grid className="secondcardtxtstyle-2">
                      <b>$ {paymentInfo.package.currant_package_price}</b>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid className="secondcardtxtstyle-3">
                      <b>
                        On{" "}
                        {moment(paymentInfo.package.package_end_date).format(
                          // "MMMM d YYYY"
                          "L"
                        )}
                      </b>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid item>
                      <Button
                        style={{
                          backgroundColor: "rgba(79, 154, 255, 1)",
                          color: "rgba(255, 255, 255, 1)",
                          marginTop: "4%",
                          marginBottom: "3%",
                        }}
                      >
                        Manage Payments
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "3%" }}>
            <h3>Billing History</h3>
            <div
              style={{ height: 400, width: "100%" }}
              xs={12}
              sm={12}
              md={6}
              className="tablebillingstyle"
            >
              <DataGrid
                rows={paymentRows}
                columns={columns}
                hideFooterPagination={true}
                onRowClick={handleRowClick}
                {...paymentRows}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid>
            <Item>
              <Grid className="rightcardtxtstyle-1">Invoice Information</Grid>
              <Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-2"
                  >
                    <b>Invoice Id</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-1"
                  >
                    {invoiceInfo.id}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-2"
                  >
                    <b>Date</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-2"
                  >
                    {invoiceInfo.paymentDate}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-3"
                  >
                    <b>Description</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-3"
                  >
                    {invoiceInfo.paidPackage} Package
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-3"
                  >
                    <b>Transaction</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-3"
                  >
                    {invoiceInfo.status}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-4"
                  >
                    <b>Amount</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-4"
                  >
                    $ {invoiceInfo.paymentAmount}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-6"
                  >
                    <b>Total</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-2"
                  >
                    {invoiceInfo.status === "Incompleted" ? (
                      <p>$ 0</p>
                    ) : (
                      <p>${invoiceInfo.paymentAmount}</p>
                    )}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-7"
                  >
                    <b>Paid</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-2"
                  >
                    {invoiceInfo.status === "Incompleted" ? (
                      <p>$ 0</p>
                    ) : (
                      <p>${invoiceInfo.paymentAmount}</p>
                    )}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-5"
                  >
                    <b>Due</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-5"
                  >
                    {invoiceInfo.status === "Incompleted" ? (
                      <p>${invoiceInfo.paymentAmount}</p>
                    ) : (
                      <p>$ 0</p>
                    )}
                  </Grid>
                </Grid>
                <Grid>
                  <Divider constiant="middle" style={{ marginTop: "5%" }} />
                </Grid>
                <Grid container style={{ marginTop: "7%" }}>
                  {/* <Grid item xs={6}>
                    <Button
                      style={{
                        border: "1px solid rgba(79, 154, 255, 1)",
                        backgroundColor: "white",
                        color: "rgba(79, 154, 255, 1)",
                        borderRadius: "7px",
                      }}
                      endIcon={<OpenInNewOutlinedIcon />}
                    >
                      Go to Invoice
                    </Button>
                  </Grid> */}
                  <Grid item xs={12}>
                    <Button
                      style={{
                        border: " #4F9AFF",
                        backgroundColor: "#4F9AFF",
                        color: "white",
                        borderRadius: "7px",
                      }}
                      endIcon={<SaveAltIcon />}
                      onClick={() => generatePDF()}
                    >
                      Download Invoice
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid style={{ marginTop: "5%" }}>
            <Item>
              <Grid className="rightcardtxtstyle-1">Billing Information</Grid>
              <Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-2"
                  >
                    <b>Payment method</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginTop: "7%",
                      display: "flex",
                      justifyContent: "right",
                      gap: "1rem",
                    }}
                    className="rightcardtxt-2style-1"
                  >
                    Visa Card{" "}
                    <img src={Visa} alt='' style={{ width: "30px", height: "30px" }} />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-2"
                  >
                    <b>Next Change</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-1"
                  >
                    22 Jan 2022
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-2"
                  >
                    <b>Charge Amount</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-1"
                  >
                    ${lastPaymentInfo.paymentAmount}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-2"
                  >
                    <b>Billing Cycle</b>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-1"
                  >
                    Monthly
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} style={{ marginTop: "7%" }}>
                    <Button
                      constiant="contained"
                      style={{
                        border: "1px solid #4F9AFF",
                        backgroundColor: "white",
                        color: "rgba(79, 154, 255, 1)",
                      }}
                      endIcon={<OpenInNewOutlinedIcon />}
                    >
                      Change Billing cycle To Yearly
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          {/* <Grid style={{ marginTop: "5%" }}>
            <Item>
              <Grid className="rightcardtxtstyle-1">Invoice setting</Grid>
              <Grid>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxt-2style-6"
                  >
                    <b>
                      <Checkbox
                        {...label}
                        defaultChecked
                        className="checkboxstyle"
                      />
                      Include Company Name
                    </b>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-2"
                  >
                    <b>Company Name</b>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "2%" }}
                    className="rightcardtxtstyle-2"
                  >
                    <TextField
                      id="Name here"
                      label="Name here"
                      constiant="outlined"
                      className="inputstyle"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "7%" }}
                    className="rightcardtxtstyle-2"
                  ></Grid>
                </Grid>
              </Grid>
            </Item>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
