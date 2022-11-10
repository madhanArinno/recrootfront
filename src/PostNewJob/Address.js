import { Box, Typography } from "@mui/material";
import React from "react";
import { styles } from "./postjobstyle";
import { useSelector, useDispatch } from "react-redux";
import { addressSet } from "../slices/job";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export function Address() {
  const addrss = useSelector((state) => state.jobs.location);

  let dispatch = useDispatch();

  return (
    <>
      <Box>
        <Box>
          <Typography variant="h5" sx={styles.addtxt}>
            Job Location
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "85%" }}>
              <GooglePlacesAutocomplete
                apiKey="AIzaSyChTcMUCY9Zw3j00st0uKkqTz0RGlOpea8"
                selectProps={{
                  isClearable: true,
                  placeholder: "Enter Your Location",
                  value: addrss,
                  onChange: (val) => {
                    dispatch(addressSet(val));
                  },
                  styles: {
                    input: (provided) => ({
                      ...provided,
                      boxShadow: 0,
                      height: "40px",
                      "&:hover": {
                        border: "1px solid purple",
                      },
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      boxShadow: 0,
                      "&:hover": {
                        border: "1px solid purple",
                      },
                    }),
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
