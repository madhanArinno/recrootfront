import { Box, Typography } from '@mui/material';
import React from 'react';
import { styles } from './Companyprofilestyle';
import { useSelector } from 'react-redux/es/exports';
// import { storeMembers } from '../redux/slice/companyslice';

export function Bluememcard() {

  const member = useSelector(state => state.company.members);
 
  return (
    <Box sx={{display:'flex',flexWrap:'wrap',gap:'15px'}}>
    {member.map((mem)=>(
      <Box sx={styles.memscard} key={mem.id}>
      <Typography variant='h5' sx={styles.memtitle}>
        Account Members
      </Typography>      
          <Box sx={styles.bluboxmem}>
                <Box sx={{ background: '#EFF6FF', p: '5px', width: '137px', color: '#4fa9ff', borderRadius: '8px' }}>
                  <Typography sx={styles.bluememtext}>{mem.fname}</Typography>
                </Box>
                <Box sx={{ background: '#EFF6FF', p: '5px', width: '137px', color: '#4fa9ff', borderRadius: '8px' }}>
                  <Typography sx={styles.bluememtext}>{mem.role}</Typography>
                </Box> 
          </Box>
    </Box>
    ))}
    </Box>
  );
}
