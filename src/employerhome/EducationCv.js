import React from 'react'
import { Box, Button, Collapse, Typography } from '@mui/material';
import { styles } from './employerhstyle';
import { useSelector } from 'react-redux';
import moment from 'moment';

function EducationCv() {
    const single = useSelector((data) =>data.apply.single && data.apply.single.userDetail)

    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };


  return (
    <Box>
    <Collapse in={checked} collapsedSize={220}>
    <Typography variant='h5' sx={styles.titleexp}>
      Education
    </Typography>
    {single && single.resume.education.map((exper)=>(
<Box sx={styles.mainsub} key={exper._id}>
<Box sx={styles.bodysub}>
 <Typography variant="body1" sx={styles.bdytitex}>
   Education
 </Typography>
 <Box>
 <Typography variant="body1" sx={styles.bdytitexsube}>
  {exper.graduate} In {exper.degreeName}
 </Typography>
 </Box>
</Box>
{/* <Box sx={styles.bodysub}>
 <Typography variant="body1" sx={styles.bdytitex}>
   Position
 </Typography>
 <Typography variant="body1" sx={styles.bdytitexsub}>
   {exper.role}
 </Typography>
</Box> */}
<Box sx={styles.bodysub}>
 <Typography variant="body1" sx={styles.bdytitex}>
   Duration
 </Typography>
 <Typography variant="body1" sx={styles.bdytitexsub}>
   {moment(exper.fromDate).format('YYYY')}-{moment(exper.toDate).format('YYYY')}
 </Typography>
</Box>
<Box sx={styles.bodysub}>
 <Typography variant="body1" sx={styles.bdytitex}>
   Organization
 </Typography>
 <Typography variant="body1" sx={styles.bdytitexsub}>
   {exper.collegeName}
 </Typography>
</Box>
</Box>
    ))}
    </Collapse>
   
     <Button onClick={handleChange} sx={styles.profbtn}>
        {checked === false ? "View More" : "View Less"}
      </Button>
  </Box>
  )
}

export default EducationCv