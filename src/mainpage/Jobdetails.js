import React from "react";
import { styles } from "./mainpagestyle";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import WorkOutlineSharpIcon from "@mui/icons-material/WorkOutlineSharp";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import { useEffect, useState } from "react";
import { searchKeys } from "../slices/search";
import { useDispatch } from "react-redux";
import axios from "axios";
function Jobdetails() {
  let dispatch = useDispatch();
  const [countDetails, setcountDetails] = useState({});
  useEffect(() => {
    dispatch(searchKeys({ keyword: "", location: "", type: "" }));

    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/api/getJobRelatetDataCounts`)
        .then((res) => {
          setcountDetails(res.data);
        });
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <Box sx={styles.jobdetail}>
        <Box sx={styles.cardsdtl}>
          <Box sx={styles.icocrd}>
            <WorkOutlineSharpIcon sx={styles.icojob} />
          </Box>
          <Box sx={styles.crdtxt}>
            <Typography variant="h5" sx={styles.numberjobs}>
              {countDetails.jobCount}
            </Typography>
            <Typography variant="p" sx={styles.txtjobs}>
              Total Jobs
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.cardsdtl}>
          <Box sx={styles.icocrd}>
            <ApartmentOutlinedIcon sx={styles.icojob} />
          </Box>
          <Box sx={styles.crdtxt}>
            <Typography variant="h5" sx={styles.numberjobs}>
              {countDetails.companyCount}
            </Typography>
            <Typography variant="p" sx={styles.txtjobs}>
              Total Companies
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.cardsdtl}>
          <Box sx={styles.icocrd}>
            <PeopleAltOutlinedIcon sx={styles.icojob} />
          </Box>
          <Box sx={styles.crdtxt}>
            <Typography variant="h5" sx={styles.numberjobs}>
              {countDetails.userCount}
            </Typography>
            <Typography variant="p" sx={styles.txtjobs}>
              Total Candidates
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.cardsdtl}>
          <Box sx={styles.icocrd}>
            <NoteAddOutlinedIcon sx={styles.icojob} />
          </Box>
          <Box sx={styles.crdtxt}>
            <Typography variant="h5" sx={styles.numberjobs}>
              {countDetails.jobsLastSevenDays}
            </Typography>
            <Typography variant="p" sx={styles.txtjobs}>
              New Jobs
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Jobdetails;
