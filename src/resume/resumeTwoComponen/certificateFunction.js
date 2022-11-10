import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";

import { Box } from "@mui/system";



export function CertificateFunction({inputCertificate,handleChange}) {



  return <Grid container spacing={2} sx={{ marginTop: 2 }}>
    <Card sx={{
      width: '650px',
      padding: '15px',
      boxShadow: '4px 4px 60px rgba(193, 200, 209, 0.25);',
      borderRadius: '8px',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }} variant="outlined">
  
      <>
      <Box sx={{display:'flex',gap:'20px',flexWrap:{xs:'wrap',sm:'noWrap'}}}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="cerificate_title"
            label="Title"
            name="title"
            value={inputCertificate.title}
            onChange={(e)=>{handleChange(e)}}
            autoComplete="user-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="certificate_organization"
            label="Organization"
            value={inputCertificate.organization}
            name="organization"
            onChange={(e)=>{handleChange(e)}}
            autoComplete="user-name" />
        </Grid>

      </Box>
 <Box sx={{display:'flex',gap:'20px',alignItems:'center'}}>
        <Button variant="contained"
        sx={{height:'fit-content'}}
  component="label">
  Upload Certificate
  <input
    type="file"
    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf" 
    hidden
    name="certificate"
    // value={certificate}
    onChange={(e)=>{handleChange(e)}}
  />
</Button>
  <p>{inputCertificate.certificate === null ? inputCertificate.certificateName  : inputCertificate.certificate.name}</p>

 </Box>
</>
    </Card>
  </Grid>;
}
