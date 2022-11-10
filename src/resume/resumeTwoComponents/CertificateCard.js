import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Upload } from "../Upload";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function CertificateCard() {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="cerificate_title"
          label="Title"
          name="user"
          autoComplete="user-name" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="certificate_organization"
          label="Organization"
          name="user"
          autoComplete="user-name" />
      </Grid>
      <Grid item xs={12} sm={12} sx={{ display: "flex" }}>
      <Typography variant='h5' sx={{textAlign:'center'}}>Add Certicates</Typography>
           <Upload  />
          
     <> <Typography variant="h6">File Name : </Typography>
     <Typography variant="h7"></Typography></> : 
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <Button variant='contained' 
                sx={{mt:'10px',backgroundColor:'#4fa9ff'}}  >
                  Save
                </Button>
                <Button variant='outlined' 
                sx={{mt:'10px',ml:'5px',color:'#4fa9ff'}}  >
                  Cancel
                </Button>
                </Box>
      </Grid>
    </>
  );
}
