import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Avatar } from "@mui/material";
import { styles } from "./Recentstyle";
import "./recent.css/.";
import moment from "moment";

function Jobscard(props) {
  return (
    <Card
      sx={
        props.selectedId && props.selectedId === props.jobId
          ? [styles.card, styles.selectedBackgorund]
          : [styles.card]
      }
      variant="outlined"
    >
      <CardContent>
        <Box sx={styles.boxico}>
          <Avatar
            style={{ width: "80px", height: "40px", fontSize: "1.5rem" }}
            variant="rounded"
            src={`http://localhost:3000/api/getCompanyPhotos?compPhotos=${props.company.companyLogo.logo}`}
          />
        </Box>
        <Box>
          <Typography sx={styles.companytext} variant="a" component="div">
            {props.jobRole}
          </Typography>
          <Typography variant="h3" sx={styles.locationtxt}>
            {props.company.basicInformation.cmpname}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={styles.roletxt} variant="p">
            ({props.jobType})
          </Typography>
          {props.salary !== undefined ? (
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(115, 115, 115)",
              }}
              variant="p"
            >
              {props.salary.salaryCrrancy} {props.salary.minSalary} -{" "}
              {props.salary.maxSalary} /{" "}
              {props.salary.salaryType === "monthly" ? "Per Month" : ""}
              {props.salary.salaryType === "hourly" ? "Per Hour" : ""}
            </Typography>
          ) : (
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgb(115, 115, 115)",
              }}
              variant="p"
            >
              Salary - Negotiable
            </Typography>
          )}
        </Box>
        Expires {moment(props.applicationDedline).endOf("day").fromNow()}
      </CardContent>
      <CardActions sx={styles.actactionOfSalaryion}>
        <Typography sx={{ fontSize: "12px", color: "rgb(115, 115, 115)" }}>
          {moment(props.createdAt).fromNow()}
        </Typography>
        <div className="typejb">
          <h5 className="typetxt">{props.jobType}</h5>
        </div>
      </CardActions>
    </Card>
  );
}

export default Jobscard;
