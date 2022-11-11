import {
  Autocomplete,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Line } from "rc-progress";
import { styles } from "./postjobstyle";
import { Close } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { descSet, errorJobs, quesSend, roleSet, skillSet,titleSet} from "../slices/job";
import { v4 as uuidv4 } from "uuid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import axios from "axios";
import "./style2.css";
import { Address } from "./Address";
import QuestionsScreen from "./QuestionsScreen";

uuidv4();

export function Jobdetails(props) {
  const user = JSON.parse(localStorage.getItem("User"));

  const handleRemove = (id) => {
    let values = [...roles].filter((fiel) => fiel.id !== id);
    setRoles(values);
    dispatch(skillSet(values));
  };
  let dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs.details);
  const descript = useSelector((state) => state.jobs.jobDescription);
  const level = useSelector((state) => state.jobs.jobRole);
  const title = useSelector((state) => state.jobs.jobTitle);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getTypesJobs", {
        headers: { "x-access-token": `${user.token}` },
      })
      .then((response) => setType(response.data));
  }, [user.token]);

  const errors = useSelector((state) => state.jobs.error);

  const [role, setRole] = useState({ skill: "", id: uuidv4() });
  const [roles, setRoles] = useState(jobs && jobs.requiredSkill);
  const [category, setCategory] = useState(false);

  const [jobDesc, setJobDesc] = useState(descript);
  const handleChangesRole = (e) => {
    const news = titleDesc.filter(i => i.rol.role === e.target.value);
    dispatch(roleSet(e.target.value));
    dispatch(errorJobs({ jobRole: "" }));
   
    if (news[0] !== undefined) {
      dispatch(quesSend(news[0].rol.ques))
  dispatch(titleSet(news[0].catg))
    }
    if (news.length !== 0) {
      setJobDesc(news[0].rol.desc)
      setCategory(false)
    } else {
      if (e.target.value.length === 0) {
        setCategory(false)
      setJobDesc('')
        return null
      }
      setCategory(true)
      setJobDesc(
        " <p>Are you looking for the next professional opportunity that will challenge you and advance your career? Join our team now!</p><p><strong>Requirements:</strong></p><ul><li>Collaborate with other team members and stakeholders</li><li>Contribute to team productivity, product quality, and tech adoption</li><li>Communicate technical design, requirements, functionality, and limitations</li><li>Be overall responsible for all the deliverables and for meeting targets</li><li>Recommend and execute improvements</li></ul><p><strong>Job Requirements:</strong></p><ul><li>Bachelor's degree</li><li>At least 1+ years of prior experience in a similar area</li><li>Ability to work effectively both individually and in a team environment</li><li>Excellent verbal and written communication skills</li><li>Great attention to detail</li><li>Organizational skills</li><li>Effective time management skills and the ability to meet deadlines</li></ul>"
      );
    }
  };

  const handleChangeDesc = (value) => {
    setJobDesc(value);
    dispatch(descSet(value));
  };
  const handleChangesTitle = (e) => {
    dispatch(titleSet(e))
  }
  const addSkil = () => {
    setRoles([...roles, role]);
    dispatch(skillSet([...roles, role]));
    setRole({ skill: "", id: "" });
  };
  const [type, setType] = useState([]);

  var titleDesc = [];
  
  type.map((typ) => {
    typ.roleAndDesc.map((rol) => {
      titleDesc.push({rol,catg:typ.jobNam})
      return null;
    });
    return null;
  });

  return (
    <Box>
      <Box sx={styles.progressbox}>
        <Typography variant="body1" sx={styles.progresstext}>
          1 of 3
        </Typography>

        <Box sx={styles.linebox}>
          <Line
            style={{ width: "300px", height: "8px", borderRadius: "8px" }}
            percent={35}
            strokeWidth={1}
            strokeColor="#4fa9ff"
          />
          <Typography variant="body2" sx={styles.linetext}>
            35%
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={styles.addtxt}>
        Job Details
      </Typography>

      <Box sx={styles.titlebox}>
        <Box>
          <Box sx={styles.infofld}>
            <Typography variant="p" sx={styles.sectxt}>
              Job Title
            </Typography>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              fullWidth
              name="jobRole"
              value={level}
              onBlur={( value) => {
                handleChangesRole(value);
              }}
              options={titleDesc.map((option) => option.rol.role)}
              renderInput={(params) => (
                <TextField
                  sx={{ width: "330px" }}
                  {...params}
                  label="Job Title"
                  error={errors.jobRole ? true : false}
                  helperText={errors.jobRole}
                  name="jobRole"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Box>
        {category === true ?
          <Box sx={styles.infofldloc}>
                    <Typography variant='p' sx={styles.sectxt}>Job Category</Typography>
                    <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        value={title}
        onInputChange={(event, value) => {handleChangesTitle(value)}}
        name='jobTitle'
        options={type.map((option) => option.jobNam)}
        renderInput={(params) => (
          <TextField
          sx={{width:'330px',textTransform:'capitalize'}}
          error={errors.jobTitle ? true : false}
          helperText={errors.jobTitle}
          value='hhhi'
          name='jobTitle'
            {...params}
            label="Job Category"
            placeholder="Please Provide Category"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
                 
                </Box> : ''}
          <Box sx={styles.applybox}>

          </Box>
        </Box>

        <Box sx={styles.infofld}>
          <Typography variant="p" sx={styles.sectxt}>
            Job Description
          </Typography>
          <Box
            sx={{
              width: { lg: "700px", md: "700px", sm: "600px", xs: "300px" },
            }}
          >
            <EditorToolbar />
            <ReactQuill
              placeholder="Add Description"
              theme="snow"
              value={jobDesc}
              onChange={handleChangeDesc}
              modules={modules}
              formats={formats}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.descpboxmain}></Box>
      <Box sx={styles.infofld}>
        <Typography variant="p" sx={styles.sectxt}>
          Required Skills
        </Typography>
      </Box>
      <Box sx={styles.rolesbox}>
        <TextField
          autoComplete="given-name"
          name="skill"
          required
          fullWidth
          id="Skills"
          label="Skills"
          value={role.skill}
          onChange={(e) => setRole({ skill: e.target.value, id: uuidv4() })}
          sx={{ width: "332px" }}
        />
        <Button
          variant="outlined"
          sx={styles.roleblue2}
          onClick={() => {
            addSkil();
          }}
        >
          + Add Skill
        </Button>
      </Box>
      <Box sx={styles.rolesbox}>
        {jobs.requiredSkill &&
          jobs.requiredSkill.map((role, index) => (
            <Box key={index} sx={styles.roleblue}>
              <Typography variant="body1" sx={styles.bluetxt}>
                {role.skill}
              </Typography>

              <IconButton
                onClick={() => {
                  handleRemove(role.id);
                }}
              >
                <Close />
              </IconButton>
            </Box>
          ))}
      </Box>

      <Address />
      <QuestionsScreen />
    </Box>
  );
}
