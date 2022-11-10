import { Box, Button, Card, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { styles } from "./Companyprofilestyle";
import { Basicinfo } from "./Basicinfo";
import { Location } from "./Location";
import { Members } from "./Members";
import { Preview } from "./Preview";
import { useDispatch, useSelector } from "react-redux";
import { erroSet, updateFinaldetails } from "../slices/companyslice";
import { toast } from "react-toastify";
import { validator } from "./Validator";
import { logout } from "../slices/auth";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  "&:focus": {
    background:
      "linear-gradient(180deg, #4F9AFF 0%, #5CB6F2 99.99%, #5CB6F2 100%)",
    color: "white",
  },
  "&:active": {
    background:
      "linear-gradient(180deg, #4F9AFF 0%, #5CB6F2 99.99%, #5CB6F2 100%)",
    color: "#ffff",
  },
}));

function CompanyProfile() {
  const dispatch = useDispatch();
  const locate = useSelector((state) => state.company.locate);

  const matches = useMediaQuery("(max-width:360px)");

  const notify = () =>
    toast.success("Your Company Profile Was Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyError = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const final = useSelector((state) => state.company);

  const navigate = useNavigate();
  const dataSend = () => {
    dispatch(updateFinaldetails(final))
      .then((res) => {
        if (res.payload.message !== undefined) {
          res.payload.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          notify();
        }
      })
      .catch((error) => {
        if (
          error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
        ) {
          dispatch(logout()).then(() => {
            navigate("/signin", { state: true });
          });
        }
      });
  };

  function Pages(index, cal) {
    if (cal === "add" && index <= 2) {
      if (index === 0) {
        if (final.basicinformation === undefined) {
          notifyError("Please Fill Out the Basic Information");
        } else {
          const obj = validator(final.basicinformation);
          dispatch(erroSet(validator(final.basicinformation)));
          if (Object.keys(obj).length > 0) {
            return;
          }
          if (final.cmpinformation === undefined) {
            notifyError("Please Fill Out the Company Information");
          } else {
            const obj = validator(final.cmpinformation);
            dispatch(erroSet(validator(final.cmpinformation)));
            if (Object.keys(obj).length > 0) {
              return;
            } else {
              if (final.companylogo.logo === "check") {
                notifyError("Please Upload Company Logo");
              } else {
                setProfiletab({ index: 1, page: <Location /> });
              }
            }
          }
        }
      }
      if (index === 1) {
        if (final.locate === undefined) {
          if (index !== profiletab.index) {
            notifyError("Please Fill Out The Mandatory Details In This Page");
          } else {
            notifyError("Please Fill Out The Address");
          }
        } else {
          const obj = validator(final.locate);
          dispatch(erroSet(validator(final.locate)));
          if (Object.keys(obj).length > 0) {
            return;
          }
          setProfiletab({ index: 2, page: <Members /> });
        }
      }
      if (index === 2) {
        setProfiletab({ index: 3, page: <Preview Pages={PagesTwo} /> });
      }
    }
  }

  const PagesTwo = (index, cal) => {
    if (cal === "sub" && index > 0) {
      setProfiletab({ index: --index });
    }
    switch (index) {
      case 1:
        setProfiletab({
          index: index,
          page: <Location />,
        });

        break;
      case 2:
        setProfiletab({ index: index, page: <Members /> });
        break;

      case 3:
        setProfiletab({ index: index, page: <Preview Pages={PagesTwo} /> });
        break;
      default:
        setProfiletab({ index: index, page: <Basicinfo /> });
        break;
    }
  };
  const [profiletab, setProfiletab] = useState(
    (locate && locate.country) !== undefined || null
      ? { index: 3, page: <Preview Pages={PagesTwo} /> }
      : { index: 0, page: <Basicinfo /> }
  );

  return (
    <Box>
      <Box sx={styles.btns}>
        <ColorButton
          variant="contained"
          sx={profiletab.index === 0 ? styles.tabactive : styles.tabbtn}
          onClick={() => {
            setProfiletab({ index: 0, page: <Basicinfo /> });
          }}
        >
          Basic Info
        </ColorButton>

        <ColorButton
          variant="contained"
          sx={profiletab.index === 1 ? styles.tabactive : styles.tabbtn}
          onClick={() => {
            Pages(0, "add");
          }}
        >
          Location
        </ColorButton>

        <ColorButton
          variant="contained"
          sx={profiletab.index === 2 ? styles.tabactive : styles.tabbtn}
          onClick={() => {
            Pages(1, "add");
          }}
        >
          Members
        </ColorButton>

        <ColorButton
          variant="contained"
          sx={profiletab.index === 3 ? styles.tabactive : styles.tabbtn}
          onClick={() => {
            Pages(2, "add");
          }}
        >
          Preview
        </ColorButton>
      </Box>

      <Card
        sx={{
          mt: "35px",
          border: "1px solid #cacaca",
          width: { sm: "auto", xs: matches === true ? "300px" : "390px" },
          ml: "auto",
          mr: "auto",
        }}
      >
        {profiletab.index === profiletab.index + 0 ? profiletab.page : ""}
        <Box sx={styles.nxtbox}>
          {profiletab.index === 0 ? (
            <Button
              variant="outlined"
              disabled
              onClick={() => {
                Pages(profiletab.index, "sub");
              }}
              sx={styles.prvbtn}
            >
              Previous
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => {
                PagesTwo(profiletab.index, "sub");
              }}
              sx={styles.prvbtn}
            >
              Previous
            </Button>
          )}
          {profiletab.index === 3 ? (
            <Button variant="contained" sx={styles.nxtbtn} onClick={dataSend}>
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                Pages(profiletab.index, "add");
              }}
              sx={styles.nxtbtn}
            >
              Next
            </Button>
          )}
        </Box>
      </Card>
    </Box>
  );
}

export default CompanyProfile;
