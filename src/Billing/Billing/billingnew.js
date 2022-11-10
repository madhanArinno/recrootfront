import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Planimage from "./Assets/Group 7739.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Divider from "@mui/material/Divider";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { DataGrid } from "@mui/x-data-grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
const columns = [
  { field: "id", headerName: "Billed To", width: 200 },
  { field: "bill id", headerName: "Bill ID", width: 200 },
  {
    field: "total",
    headerName: "Total",
    width: 130,
  },
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (parms) => (
      <Button className="editButton" id="basic-button">
        Edit
      </Button>
    ),
  },
];
const rows = [
  {
    id: "Billed to name",
    billid: "Mv234",
    total: "$72",
    action: "View Invoice",
  },
  {
    id: "Billed to name",
    billid: "Mv234",
    total: "$72",
    action: "View Invoice",
  },
];
export default function Certificates() {
  return (
    <Grid container Spacing={3}>
      <Grid item xs={12} sm={12} md={8}>
        <div
          style={{ display: "flex", justifyContent: "row" }}
          container
          Spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            Spacing={3}
            style={{ backgroundImage: `url(${Planimage})` }}
          >
            <Item>
              Certificates
              <Grid>
                <Grid container className="">
                  <Grid item xs={6}>
                    <b>Title</b>
                  </Grid>
                  <Grid item xs={6}>
                    Title
                  </Grid>
                </Grid>
                <Grid container className="">
                  <Grid item>
                    <b>Organization</b>
                  </Grid>
                  <Grid item>
                    <Button variant="contained">Manage Payments</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Item>
              next payment
              <Grid>
                <Grid>
                  <Grid item>
                    <b>$ 20.00</b>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid item>
                    <b>On next Jan 20</b>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid item>
                    <b>On next Jan 20</b>
                  </Grid>
                  <Grid item>
                    <Button variant="contained">Manage Payments</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </div>
        <Grid>
          <h3>Billing History</h3>
        </Grid>
        <Paper style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
          {/* <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3}>
                <p>Billed To</p>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <p>Bill ID</p>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <p>Total</p>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <p>Action</p>
              </Grid>
            </Grid>
          </Box> */}
          <div>
            <DataGrid
              rows={rows}
              columns={columns}
              hideFooterPagination={true}
            />
          </div>
        </Paper>
        {/* <Paper
          style={{
            marginTop: "10%",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3}>
                <p>Billed To name</p>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <p>Mv5266</p>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <p>$72</p>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Button variant="contained">View Invoice</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <ExpandMoreIcon
                  style={{
                    backgroundColor: "rgba(248, 248, 248, 1)",
                    color: "rgba(79, 154, 255, 1)",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper> */}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Item>
          Invoice Information
          <Grid>
            <Grid container className="">
              <Grid item xs={6}>
                <b>Invoice</b>
              </Grid>
              <Grid item xs={6}>
                fr1652
              </Grid>
            </Grid>
            <Grid container className="">
              <Grid item xs={6}>
                <b>Date</b>
              </Grid>
              <Grid item xs={6}>
                22 Jan 2022
              </Grid>
            </Grid>
            <Grid container className="">
              <Grid item xs={6}>
                <b>Description</b>
              </Grid>
              <Grid item xs={6}>
                Gold Package Monthly
              </Grid>
            </Grid>
            <Grid container className="">
              <Grid item xs={6}>
                <b>Amount</b>
              </Grid>
              <Grid item xs={6}>
                20$
              </Grid>
            </Grid>
            <Grid container className="">
              <Grid item xs={6}>
                <b>Due</b>
              </Grid>
              <Grid item xs={6}>
                0$
              </Grid>
              <Divider variant="middle" />
            </Grid>
            <Grid container className="">
              <Grid item xs={6}>
                <Button variant="contained">View Invoice</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" endIcon={<SaveAltIcon />}>
                  Download Invoice
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Grid>
  );
}
