import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryInfor } from "../slices/companyslice";
import { styles } from "./Companyprofilestyle";

export function Location(props) {
  const coun = useSelector((state) => state.company.locate);
  const errors = useSelector((state) => state.company.error);

  const dispatch = useDispatch();
  const [location, setLocation] = useState({
    country: coun && coun.country,
    state: coun && coun.state,
    city: coun && coun.city,
    address: coun && coun.address,
  });

  const addlocation = (e) => {
    const { name, value } = e.target;
    setLocation({ ...location, [name]: value });
    dispatch(countryInfor({ ...location, [name]: value }));
  };

  return (
    <>
      <form>
        <Box>
          <Typography variant="h5" sx={styles.addtxt}>
            Address
          </Typography>
          <Box sx={styles.inputgrp}>
            <Box sx={styles.infofldloc}>
              <Typography variant="p" sx={styles.sectxtloca}>
                Country
              </Typography>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={styles.naminput}
                id="outlined-basic"
                label="Country"
                placeholder="Enter Country"
                variant="outlined"
                name="country"
                onChange={(e) => addlocation(e)}
                value={coun !== null && coun !== undefined ? coun.country : " "}
                required
                error={errors.country ? true : false}
                helperText={errors.country}
              />
            </Box>
            <Box sx={styles.infofldloc}>
              <Typography variant="p" sx={styles.sectxtloca}>
                State
              </Typography>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={styles.naminput}
                id="outlined-basic"
                label="State"
                placeholder="Enter State"
                variant="outlined"
                name="state"
                onChange={(e) => addlocation(e)}
                value={coun !== null && coun !== undefined ? coun.state : " "}
                required
                error={errors.state ? true : false}
                helperText={errors.state}
              />
            </Box>
            <Box sx={styles.infofldloc}>
              <Typography variant="p" sx={styles.sectxtloca}>
                City
              </Typography>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={styles.naminput}
                id="outlined-basic"
                placeholder="Enter City"
                name="city"
                label="City"
                onChange={(e) => addlocation(e)}
                value={coun !== null && coun !== undefined ? coun.city : " "}
                required
                error={errors.city ? true : false}
                helperText={errors.city}
              />
            </Box>
          </Box>

          <Box sx={styles.infofldadd}>
            <Typography variant="p" sx={styles.sectxtloca1}>
              Company Address
            </Typography>
            <TextField
              multiline
              aria-label="minimum height"
              minRows={10}
              placeholder="Add Address"
              style={{ width: "auto", marginRight: "50px" }}
              name="address"
              onChange={(e) => addlocation(e)}
              value={coun !== null && coun !== undefined ? coun.address : " "}
              required
              error={errors.address ? true : false}
              helperText={errors.address}
            />
          </Box>
        </Box>
      </form>
    </>
  );
}
