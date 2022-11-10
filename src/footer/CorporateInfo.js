import { Box, Link, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../navbar/Navbar";

function CorporateInfo() {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <Container maxWidth="md">
        <Box sx={{ display: "flex", flexDirection: "column", gap: "35px" }}>
          <Typography variant="h4" sx={{ fontWeight: 750 }}>
            Corporate Info
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Company:
              </Typography>
            </span>
            <Typography variant="body1" sx={{ fontSize: "23px" }}>
              Recroot is a business of AR Innovations Pty Ltd (ABN: 58652722337)
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ alignSelf: "start" }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Overview:
              </Typography>
            </span>
            <Typography variant="body1" sx={{ fontSize: "23px" }}>
              Recroot is a specialised recruitment platform connecting
              organisations with remote tech professionals through temporary,
              contract and permanent recruitment solutions
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ alignSelf: "start" }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Founded:{" "}
              </Typography>
            </span>{" "}
            <Typography variant="body1" sx={{ fontSize: "23px" }}>
              2022
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ alignSelf: "start" }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Headquarters:
              </Typography>
            </span>{" "}
            <Typography variant="body1" sx={{ fontSize: "23px" }}>
              Sydney, Australia
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ alignSelf: "start" }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Management:
              </Typography>
            </span>{" "}
            <Typography variant="body1" sx={{ fontSize: "23px" }}>
              Gokul Srinivasan, CEO Suji Gokul, COO
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ alignSelf: "start" }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Website:
              </Typography>
            </span>{" "}
            <Link
              href="https://recroot.jobs/"
              variant="body1"
              sx={{ fontSize: "23px" }}
            >
              Recroot.io
            </Link>
          </Box>
          <Box>
            <span style={{ alignSelf: "start" }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Locations:
              </Typography>
            </span>
            <Box sx={{ mt: "15px" }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "navy" }}>
                Australia
              </Typography>
              <Typography sx={{ fontSize: "23px" }} variant="body2">
                AR Innovations Pty Ltd
                <br />
                107, College Street, Cambridge Park, Sydney, 2747
                <br />
                Australian Business Number (ABN): 58652722337
              </Typography>
            </Box>
            <Box sx={{ mt: "15px" }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "navy" }}>
                India
              </Typography>
              <Typography sx={{ fontSize: "23px" }} variant="body2">
                AR Innovations India Pty Ltd
                <br />
                251, Pilla Reddy Layout, Dodda Banaswadi, Bangalore – 43
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ alignSelf: "start" }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Email:
              </Typography>
            </span>{" "}
            <Link
              href="mailto:grow@arinnovate.io"
              variant="body1"
              sx={{ fontSize: "23px" }}
            >
              grow@arinnovate.io
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default CorporateInfo;
