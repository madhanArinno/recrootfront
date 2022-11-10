import { Button, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import { styles } from './mainpagestyle';

function Skillcards() {
  return (
    <div>
        <Card sx={styles.card}>
            <Box sx={styles.icobox}>
                <AssignmentTurnedInOutlinedIcon /> <CancelSharpIcon />
            </Box>
            <Box sx={styles.contnt}>
            <Box sx={styles.txts}>
                <Typography variant='h5' sx={styles.cardttle}>
                 Add skill
                </Typography>
                <Box sx={{  width:'247px'}}>
                <Typography variant='p' sx={styles.cardpara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor.
                </Typography>
                </Box>
                </Box>
                <Button variant="contained" sx={styles.crdbtn}>
                Add Skill Now
                </Button>
            </Box>
        </Card>
    </div>
  )
}

export default Skillcards