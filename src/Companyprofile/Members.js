import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { styles } from "./Companyprofilestyle";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { memberPosting } from "../slices/companyslice";
import { registerMember } from "../slices/auth";
import { validator } from "../signup/Validator";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ReactPhoneInput from "react-phone-input-2";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
uuidv4();

export function Members() {
  const [errors, setErrors] = React.useState(true);
  const user = JSON.parse(localStorage.getItem("User"));

  const companyId = user.User.companyId;

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    firstName: "",
    lastName: "",
    sector: "",
    companyId: companyId,
    organization: "",
    recrootUserType: "Member",
    confirmPassword: "",
    checked: true,
  });
  const [phoneNumber, setphoneNumber] = useState("");
  const [confirmP, setconfirmP] = useState({
    confirmPassword: "",
    showConfirmPassword: false,
  });

  const toastyErrorFunction = (msg) => {
    toast.error(`${msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const toastySucessFunction = (msg) => {
    toast.success(`${msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChanges = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleConfirmPasswordChange = (prop) => (event) => {
    setconfirmP({ ...confirmP, [prop]: event.target.value });
    setValues({
      ...values,
      confirmPassword: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setconfirmP({
      ...confirmP,
      showConfirmPassword: !confirmP.showConfirmPassword,
    });
  };

  const handleMouseConfirmDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeTWo = (value) => {
    setphoneNumber(value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setErrors(validator(values));
    const obj = validator(values);

    if (Object.keys(obj).length > 0) {
      return phoneNumber;
    }

    dispatch(registerMember({ values }))
      .unwrap()
      .then((originalPromiseResult) => {
        toastySucessFunction("New Account Member Added Successfully");
        getMember();
        handleClose();
        setValues("");
        setconfirmP("");
      })
      .catch((error) => {
        toastyErrorFunction("User Already Exist");
        console.warn(error);
      });
  };
  const dispatch = useDispatch();

  const [result, setResult] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setValues("");
    setOpen(false);
    setconfirmP("");
  };

  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const style2 = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  const member = useSelector((state) => state.company.members);

  const getMember = () => {
    axios
      .get(`http://localhost:3000/api/getMember/${companyId}`, {
        headers: { "x-access-token": `${user.token}` },
      })
      .then((res) => setResult(res.data))
      .catch((error) => console.warn(error));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/getMember/${companyId}`, {
        headers: { "x-access-token": `${user.token}` },
      })
      .then((res) => setResult(res.data))
      .catch((error) => console.warn(error));
  }, [companyId, user.token]);

  const [memberrole, setMemberrole] = useState(member);

  useEffect(() => {
    if (member.length === 0) {
      setMemberrole([
        { memberId: "", role: "", id: new Date().getTime(), fname: "" },
      ]);
    }
  }, [member.length]);

  const handleAddInput = () => {
    setMemberrole([
      ...memberrole,
      { id: uuidv4(), memberId: "", role: "", fname: "" },
    ]);
  };

  const handleMemChange = (id, event) => {
    var name;
    if (event.target.name === "memberId") {
      name = result.filter((res) => res._id === event.target.value);
      const newMemChange = memberrole.map((i) => {
        if (id === i.id) {
          i = {
            ...i,
            [event.target.name]: event.target.value,
            fname: name[0].firstName,
          };

          i.id = id;
        }
        return i;
      });

      setMemberrole(newMemChange);
    }
    if (event.target.name === "role") {
      const newMemChange = memberrole.map((i) => {
        if (id === i.id) {
          i = { ...i, [event.target.name]: event.target.value };
          i.id = id;
        }
        return i;
      });

      setMemberrole(newMemChange);
    }
  };

  const handleMemRemove = (id) => {
    let updatedField = [...memberrole].filter((fiel) => fiel.id !== id);
    setMemberrole(updatedField);
  };

  useEffect(() => {
    dispatch(memberPosting(memberrole));
  }, [dispatch, memberrole]);

  return (
    <>
      <Box>
        <Typography variant="h5" sx={{ margin: "25px 0 0 40px" }}>
          Members
        </Typography>

        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ float: "right", mr: "10px", mt: "-26px" }}
        >
          add members <Add />
        </Button>

        <Box sx={styles.infofld}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form onSubmit={handleRegister}>
              <Box sx={style1}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "900", marginBottom: "15px" }}
                >
                  ADD ACCOUNT MEMBER
                </Typography>
                <Box sx={style2}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    placeholder="Enter First Name"
                    autoFocus
                    value={values.firstName}
                    onChange={handleChanges("firstName")}
                    error={errors.firstName ? true : false}
                    helperText={errors.firstName}
                  />
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Enter Last Name"
                    value={values.lastName}
                    onChange={handleChanges("lastName")}
                    error={errors.lastName ? true : false}
                    helperText={errors.lastName}
                  />

                  <TextField
                    fullWidth
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter E-mail"
                    value={values.email}
                    onChange={handleChanges("email")}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                  />

                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      required
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChanges("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      placeholder="Enter Password"
                      error={errors.password ? true : false}
                    />
                    {!!errors.password && (
                      <FormHelperText error id="accountId-error">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-confirm-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-confirm-adornment-password"
                      type={confirmP.showConfirmPassword ? "text" : "password"}
                      value={confirmP.confirmPassword}
                      name="confirmPassword"
                      onChange={handleConfirmPasswordChange("confirmPassword")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm-password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseConfirmDownPassword}
                            edge="end"
                          >
                            {confirmP.showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                      placeholder="Confirm Password"
                    />
                    {!!errors.confirmPassword && (
                      <FormHelperText error id="accountId-error">
                        {errors.confirmPassword}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <ReactPhoneInput
                    inputExtraProps={{
                      name: "phoneNumber",
                      required: true,
                      autoFocus: true,
                    }}
                    id="phoneNumber"
                    name="phoneNumber"
                    defaultCountry={"au"}
                    value={values.phoneNumber}
                    onChange={handleChangeTWo}
                    inputStyle={{
                      width: "100%",
                      height: "3.7375em",
                      fontSize: "16px",
                    }}
                  />
                </Box>
                <Button
                  size="medium"
                  type="submit"
                  align="center"
                  variant="contained"
                  sx={{
                    mt: 3,
                  }}
                >
                  Ok
                </Button>
                &nbsp;
                <Button
                  sx={{
                    mt: 3,
                  }}
                  variant="contained"
                  size="medium"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Modal>
        </Box>
        <Box>
          <>
            {memberrole.map((member, index) => (
              <Box sx={styles.membox} key={index}>
                <Box sx={styles.infofld}>
                  <Typography variant="p" sx={styles.sectxt}>
                    Account Members
                  </Typography>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">
                      <Box
                        sx={{
                          background: "#EFF6FF",
                          p: "5px",
                          color: "#4fa9ff",
                          borderRadius: "8px",
                        }}
                      >
                        Member Name
                      </Box>
                    </InputLabel>
                    <Select
                      name="memberId"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={member.memberId}
                      onChange={(e) => {
                        handleMemChange(member.id, e);
                      }}
                      label="Account Members"
                      sx={styles.naminput2}
                      error={errors.cmpemail ? true : false}
                      helperText={errors.cmpemail}
                    >
                      {result.map((res) => (
                        <MenuItem key={res.firstName} value={res._id}>
                          {res.firstName} {res.lastName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box sx={styles.infofld}>
                    <Typography variant="p" sx={styles.sectxt}>
                      Roles
                    </Typography>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">
                        Roles
                      </InputLabel>
                      <Select
                        name="role"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={member && member.role}
                        label="Roles"
                        sx={styles.naminput2}
                        onChange={(e) => {
                          handleMemChange(member.id, e);
                        }}
                      >
                        <MenuItem value="admin"> Admin </MenuItem>
                        <MenuItem value="jopPoster">Job Poster</MenuItem>
                        <MenuItem value="normalUser">Normal User</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ display: "flex", ml: "20px" }}>
                    {memberrole.length > 1 ? (
                      <IconButton
                        variant="contained"
                        sx={styles.addbtn}
                        onClick={() => {
                          handleMemRemove(member.id);
                        }}
                      >
                        <RemoveCircleOutlineIcon
                          sx={{
                            fontSize: { sm: "2.5rem", xs: "1.5rem" },
                            color: "#4fa9ff",
                          }}
                        />
                      </IconButton>
                    ) : (
                      ""
                    )}
                    {memberrole.length === index + 1 ? (
                      <IconButton
                        variant="contained"
                        sx={styles.addbtn}
                        onClick={handleAddInput}
                      >
                        <ControlPointIcon
                          sx={{
                            fontSize: { sm: "2.5rem", xs: "1.5rem" },
                            color: "#4fa9ff",
                          }}
                        />
                      </IconButton>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </>
        </Box>
      </Box>
    </>
  );
}
