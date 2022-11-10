import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {  styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const MyProfileUserCard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Item elevation={1}>sdfdsfsdfsd</Item>
          <Item elevation={1}>sdfdsfsdfsd</Item>
        </Box>
      </Grid>
      {/* <Grid item xs={7}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Item elevation={1}>sdfdsfsdfsd</Item>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default MyProfileUserCard;
