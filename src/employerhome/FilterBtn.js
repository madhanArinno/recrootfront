import * as React from 'react';
import Box from '@mui/material/Box';
import { styles } from './employerhstyle';
import { Button, Divider, FormControl, IconButton, ListItemText, Popover, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function FilterBtn(users, id, handleClick, names, count, states, open, anchorEl, handleCloseFilter, handleCloseRes, handleFilterJob, setDropj, dropj, handleName, MenuProps, jobs, setDropc, dropc, handleCount, country, setDrops, drops, handleStatus, status) {
  return <>
    {users.length !== 0 ?
      <Button variant='contained' aria-describedby={id} onClick={handleClick} sx={styles.sortbtn}>
        <AddIcon />  Add Filter
        <Box sx={{ border: '1px solid #fff', borderRadius: '50%', ml: '3px' }}>
          <Typography variant='body2' sx={{ color: "#fff", p: '2px 8px 2px 8px' }}>
            {names.length + count.length + states.length}
          </Typography>
        </Box>
      </Button>
      :
      ''}
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleCloseFilter}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >

      <Box sx={{ width: '500px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: '0 20px 0 20px' }}>
          <Typography variant='h5' sx={{ fontWeight: 700, fontSize: '20px' }}>Filter</Typography>
          <Box> <Button sx={{ textTransform: 'capitalize' }} onClick={() => { handleCloseRes(); }}>Reset Filter</Button> <Button onClick={handleFilterJob} sx={{ textTransform: 'capitalize' }}>Save Filter</Button></Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ fontWeight: 700, fontSize: '16px', ml: '20px' }}>Filter By Jobs</Typography>
          <IconButton onClick={() => { setDropj(!dropj); }}>
            {dropj === true ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownOutlinedIcon />}
          </IconButton>
          <Box sx={{ border: '1px solid #4fa9ff', borderRadius: '50%' }}>
            <Typography variant='body2' sx={{ color: "#4fa9ff", p: '2px 8px 2px 8px' }}>
              {names.length}
            </Typography>
          </Box>
        </Box>

        <Divider />
        {dropj === true ? <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">By Jobs</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            // label="By Jobs"
            // sx={{ml:'20px'}}
            variant='outlined'
            value={names}
            onChange={handleName}
            input={<OutlinedInput label="By Jobs" />}
            renderValue={(selected) => selected.map((x) => x.jobTitle).join(', ')}
            MenuProps={MenuProps}
          >
            {jobs.map((variant) => (
              <MenuItem key={variant._id} value={variant}>
                <Checkbox
                  checked={names.findIndex((item) => item._id === variant._id) >= 0} />
                <ListItemText primary={variant.jobTitle} />
              </MenuItem>
            ))}
          </Select>

        </FormControl> : ''}
        {/*  <FormGroup sx={{ml:'25px'}}>
 {jobs && jobs.map((job)=>(
   <FormControlLabel key={job._id} control={names.includes(job._id) ? <Checkbox  defaultChecked/> : <Checkbox />} onChange={(e)=>{handleName(e)}} label={<span style={{textTransform:'capitalize'}}>{job.jobTitle}</span>} value={job._id}/>
 ))}
     </FormGroup> : ''} */}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ fontWeight: 700, fontSize: '16px', ml: '20px' }}>Filter By Location</Typography>
          <IconButton onClick={() => { setDropc(!dropc); }}>
            {dropc === true ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownOutlinedIcon />}
          </IconButton>
          <Box sx={{ border: '1px solid #4fa9ff', borderRadius: '50%' }}>
            <Typography variant='body2' sx={{ color: "#4fa9ff", p: '2px 8px 2px 8px' }}>
              {count.length}
            </Typography>
          </Box>
        </Box>
        <Divider />
        {dropc === true ? <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="mutiple-select-label">
            By country
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            label="By Country"
            // sx={{ml:'20px'}}
            variant='outlined'
            value={count}
            onChange={handleCount}
            renderValue={(selected) => selected.map((x) => x).join(', ')}
            MenuProps={MenuProps}
          >
            {country.map((variant) => (
              <MenuItem key={variant} value={variant}>
                <Checkbox
                  checked={count.findIndex((item) => item === variant) >= 0} />
                <ListItemText primary={variant} />
              </MenuItem>
            ))}
          </Select>

        </FormControl> : ''}
        {/* {dropc === true ? <FormGroup sx={{ml:'25px'}}>
{country && country.map((job)=>(
 <FormControlLabel key={job} control={count.includes(job) ? <Checkbox  defaultChecked/> : <Checkbox />} onChange={(e)=>{handleCount(e)}} label={<span style={{textTransform:'capitalize'}}>{job}</span>} value={job}/>
))}

   </FormGroup> : ''} */}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ fontWeight: 700, fontSize: '16px', ml: '20px' }}>Filter By status</Typography>
          <IconButton onClick={() => { setDrops(!drops); }}>
            {drops === true ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownOutlinedIcon />}
          </IconButton>
          <Box sx={{ border: '1px solid #4fa9ff', borderRadius: '50%' }}>
            <Typography variant='body2' sx={{ color: "#4fa9ff", p: '2px 8px 2px 8px' }}>
              {states.length}
            </Typography>
          </Box>
        </Box>
        <Divider />
        {drops === true ? <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="mutiple-select-label">
            By Status
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            label="By Status"
            // sx={{ml:'20px'}}
            variant='outlined'
            value={states}
            onChange={handleStatus}
            renderValue={(selected) => selected.map((x) => x).join(', ')}
            MenuProps={MenuProps}
          >
            {status.map((variant) => (
              <MenuItem key={variant} value={variant}>
                <Checkbox
                  checked={states.findIndex((item) => item === variant) >= 0} />
                <ListItemText primary={variant} />
              </MenuItem>
            ))}
          </Select>

        </FormControl> : ''}
        {/* {drops === true ? <FormGroup sx={{ml:'25px'}}>
{status && status.map((job)=>(
 <FormControlLabel key={job} control={states.includes(job) ? <Checkbox  defaultChecked/> : <Checkbox />} onChange={(e)=>{handleStatus(e)}} label={<span style={{textTransform:'capitalize'}}>{job}</span>} value={job}/>
))}

   </FormGroup> : ''} */}
      </Box>
    </Popover>
  </>;
}
