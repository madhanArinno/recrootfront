/* eslint-disable no-mixed-operators */
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styles } from "./postjobstyle";
import { Line } from "rc-progress";
import { useSelector, useDispatch } from "react-redux";
import { detailsSet, essentialSet, salarySet, skillSet } from "../slices/job";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import {
  CURRENCY,
  CAREER_LEVEL,
  USER_EXPERIENCES,
  EDUCATION_LEVELS,
} from "../constants";

export function EssentialInfo() {
  const essen = useSelector((state) => state.jobs.essential);
  const errors = useSelector((state) => state.jobs.error);
  const companyDet = useSelector((state) => state.company.companyDetl);
  const jobs = useSelector((state) => state.jobs.details);
  const roles = useSelector((state) => state.jobs.details.requiredSkill);

  const [value, setValue] = React.useState(new Date());
  const [salary, setSalary] = useState({
    salaryType: jobs.salary && jobs.salary.salaryType,
    minSalary: jobs.salary && jobs.salary.minSalary,
    maxSalary: jobs.salary && jobs.salary.maxSalary,
    salaryCrrancy: jobs.salary && jobs.salary.salaryCrrancy,
  });

  const [datas, setDatas] = useState({
    jobType: jobs && jobs.jobType,
    applicationDeadline: jobs && jobs.applicationDeadline,
  });

  const handleChangesChild = (e) => {
    let { name, value } = e.target;
    setDatas({
      ...datas,
      [name]: value,
      salary,
    });
    dispatch(detailsSet({ ...datas, [name]: value, salary }));
    dispatch(skillSet([...roles]));
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue);
    setDatas({
      ...datas,
      applicationDeadline: moment(newValue).format(),
    });
    dispatch(
      detailsSet({
        ...datas,
        applicationDeadline: moment(newValue).format(),
        salary,
        roles,
      })
    );
    dispatch(skillSet([...roles]));
  };

  const handleChangesSalary = (e) => {
    if (e.target.value === "noprovide") {
      dispatch(salarySet({}));
      dispatch(skillSet([...roles]));
    } else {
      let { name, value } = e.target;
      setSalary({
        ...salary,
        [name]: value,
      });
      dispatch(salarySet({ ...salary, [name]: value }));
      dispatch(skillSet([...roles]));
    }
  };
  var date1 = new Date();

  // eslint-disable-next-line no-extend-native
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  var date = new Date(
    moment(
      companyDet.package.package_end_date === undefined
        ? date1.addDays(30)
        : companyDet.package.package_end_date
    ).format("YYYY-MM-DD")
  );

  const [level, setLevel] = useState({
    careerlevel: essen && essen.careerlevel,
    experience: essen && essen.experience,
    qualification: essen && essen.qualification,
  });

  let dispatch = useDispatch();

  const handleChangeLevel = (e) => {
    let { name, value } = e.target;
    setLevel({
      ...level,
      [name]: value,
    });
    dispatch(essentialSet({ ...level, [name]: value }));
  };

  return (
    <Box>
      <Box sx={styles.progressbox}>
        <Typography variant="body1" sx={styles.progresstext}>
          2 of 3
        </Typography>

        <Box sx={styles.linebox}>
          <Line
            style={{ width: "300px", height: "8px", borderRadius: "8px" }}
            percent={70}
            strokeWidth={1}
            strokeColor="#4fa9ff"
          />
          <Typography variant="body2" sx={styles.linetext}>
            70%
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={styles.addtxt}>
        Essential Information
      </Typography>
      <Box sx={styles.essentialbox}>
        <Box sx={styles.infofld}>
          <Typography variant="p" sx={styles.sectxt}>
            Career Level
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Career Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Career Level"
              sx={styles.naminput2}
              value={level.careerlevel}
              name="careerlevel"
              onChange={(e) => {
                handleChangeLevel(e);
              }}
              error={errors.careerlevel ? true : false}
              helperText={errors.careerlevel}
            >
              {CAREER_LEVEL.map((CareerLevel) => (
                <MenuItem key={CareerLevel} value={CareerLevel}>
                  <Typography textAlign="center">{CareerLevel}</Typography>
                </MenuItem>
              ))}
            </Select>
            {!!errors.careerlevel && (
              <FormHelperText error id="accountId-error">
                {errors.careerlevel}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box sx={styles.infofld}>
          <Typography variant="p" sx={styles.sectxt}>
            Experience
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Experience</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Experience"
              sx={styles.naminput2}
              value={level.experience}
              name="experience"
              onChange={(e) => {
                handleChangeLevel(e);
              }}
              error={errors.experience ? true : false}
              helperText={errors.experience}
            >
              {USER_EXPERIENCES.map((Experiences) => (
                <MenuItem key={Experiences} value={Experiences}>
                  <Typography textAlign="center">{Experiences}</Typography>
                </MenuItem>
              ))}
            </Select>
            {!!errors.experience && (
              <FormHelperText error id="accountId-error">
                {errors.experience}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box sx={styles.infofld}>
          <Typography variant="p" sx={styles.sectxt}>
            Qualifications
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Qualifications
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Qualifications"
              sx={styles.naminput2}
              value={level.qualification}
              name="qualification"
              error={errors.qualification ? true : false}
              helperText={errors.qualification}
              onChange={(e) => {
                handleChangeLevel(e);
              }}
            >
              {EDUCATION_LEVELS.map((Qualifications) => (
                <MenuItem key={Qualifications} value={Qualifications}>
                  <Typography textAlign="center">{Qualifications}</Typography>
                </MenuItem>
              ))}
            </Select>
            {!!errors.qualification && (
              <FormHelperText error id="accountId-error">
                {errors.qualification}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        <Box sx={styles.infofldloc}>
          <Typography variant="p" sx={styles.sectxt}>
            Application Deadline
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="Deadline"
              name="applicationDeadline"
              inputFormat="dd/MM/yyyy"
              minDate={new Date()}
              maxDate={date}
              value={jobs === "" ? value : jobs && jobs.applicationDeadline}
              onChange={handleChangeDate}
              renderInput={(params) => (
                <TextField
                  error={errors.applicationDeadline ? true : false}
                  // helperText={errors.applicationDeadline}
                  {...params}
                  sx={{ width: "330px" }}
                />
              )}
            />
          </LocalizationProvider>
          {!!errors.applicationDeadline && (
            <FormHelperText error id="accountId-error">
              {errors.applicationDeadline}
            </FormHelperText>
          )}
        </Box>

        <Box sx={styles.infofld}>
          <Typography variant="p" sx={styles.sectxt}>
            Job Type
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jobs && jobs.jobType}
              onChange={(e) => {
                handleChangesChild(e);
              }}
              name="jobType"
              error={errors.jobType ? true : false}
              helperText={errors.jobType}
              label="Job Type"
              sx={styles.naminput2}
            >
              <MenuItem value={"Remote"}>Remote</MenuItem>
              <MenuItem value={"Onsite"}>Onsite</MenuItem>
              <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
            </Select>
            {!!errors.jobType && (
              <FormHelperText error id="accountId-error">
                {errors.jobType}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box sx={styles.salarymain}>
          <Box sx={styles.infofld}>
            <Typography
              variant="p"
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "18px",
                mb: "8px",
                mt: { xs: "20px" },
                color: "#4a4a4a",
              }}
            >
              Salary Type
            </Typography>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Salary Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={jobs.salary && jobs.salary.salaryType}
                name={"salaryType"}
                onChange={(e) => {
                  handleChangesSalary(e);
                }}
                label="Salary Type"
                error={errors.salaryType ? true : false}
                helperText={errors.salaryType}
                sx={styles.naminput2}
              >
                <MenuItem selected value={"noprovide"}>
                  Negotiable
                </MenuItem>
                <MenuItem value={"monthly"}>Monthly</MenuItem>
                <MenuItem value={"hourly"}>Hourly</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {(jobs.salary && jobs.salary.salaryType === undefined) ||
          jobs.salary === undefined ? (
            ""
          ) : (
            <>
              <Box sx={styles.infofld}>
                <Typography variant="p" sx={styles.sectxt}>
                  Salary Currency
                </Typography>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Salary Currency
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="salaryCrrancy"
                    value={jobs.salary && jobs.salary.salaryCrrancy}
                    label="Salary Currency"
                    onChange={(e) => {
                      handleChangesSalary(e);
                    }}
                    error={errors.salaryCrrancy ? true : false}
                    helperText={errors.salaryCrrancy}
                    sx={styles.naminput2}
                  >
                    {CURRENCY.map((cur, ind) => (
                      <MenuItem key={ind} value={cur.symbol}>
                        {cur.country}-{cur.symbol}
                      </MenuItem>
                    ))}
                  </Select>
                  {!!errors.salaryCrrancy && (
                    <FormHelperText error id="accountId-error">
                      {errors.salaryCrrancy}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Box sx={styles.salarybox}>
                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={styles.salarinput}
                  id="outlined-basic"
                  label="Min Salary"
                  value={jobs.salary && jobs.salary.minSalary}
                  onChange={(e) => {
                    handleChangesSalary(e);
                  }}
                  type="number"
                  name="minSalary"
                  error={errors.minSalary ? true : false}
                  helperText={errors.minSalary}
                  placeholder="Enter Min Salary"
                  variant="outlined"
                />
                <Box
                  sx={{ borderBottom: "3px solid black", width: "10px" }}
                ></Box>
                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={styles.salarinput}
                  id="outlined-basic"
                  value={jobs.salary && jobs.salary.maxSalary}
                  onChange={(e) => {
                    handleChangesSalary(e);
                  }}
                  label="Max Salary"
                  error={errors.maxSalary ? true : false}
                  helperText={errors.maxSalary}
                  type="number"
                  name="maxSalary"
                  placeholder="Enter Max Salary"
                  variant="outlined"
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
