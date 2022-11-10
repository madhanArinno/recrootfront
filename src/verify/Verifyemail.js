import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { styles } from './verifystyle'
import logo from "./logo/logo.svg";


function Verifyemail() {
  return (
    <div>
        <Box sx={styles.main}>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
        <Container maxWidth="xl">
        <Box sx={styles.img} >
             <img  src={logo} alt="" />
         </Box>

         <Typography
            sx={styles.sinup}
            >
              Verify Email
            </Typography>
              <Box sx={styles.verifytxt}>
              <Typography variant='h6'>
               Please verify your email 
              </Typography>
            
            <Typography variant='p'>
          If you didn't receive the verification mail , Click Here To <Link  href="#">Resend</Link> .
           </Typography>
              </Box>
             
             

        </Container>
        </Grid>
        <Grid item md={4} xs={12}>
            <Box sx={styles.blue}>
            
            </Box>
            </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Verifyemail