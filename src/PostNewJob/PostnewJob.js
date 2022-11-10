/* eslint-disable no-unused-expressions */
import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styles } from "./postjobstyle";
import { Jobdetails } from "./Jobdetails";
import { EssentialInfo } from "./EssentialInfo";
import { useSelector, useDispatch } from "react-redux";
import { PreviewJob } from "./PreviewJob";
import { addJobs, errorJobs, queShow, updateJobs } from "../slices/job";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { applyJobsdet, getJobsfil } from "../slices/applyJobs";
import { validator } from "./Validator";
import { logout } from "../slices/auth";
import { getCompanyDetails } from "../slices/companyslice";

function PostnewJob() {
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const final = useSelector((state) => state.jobs);
  const locate = useSelector((state) => state.jobs.location);
  const showq = useSelector((state) => state.jobs.queshow);

  React.useEffect(() => {
    dispatch(queShow("true"));
    dispatch(getCompanyDetails())
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : navigate(1);
        } else {
          navigate(1);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postJobs = (final) => {
    dispatch(applyJobsdet());
    dispatch(addJobs(final))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : "";
        } else {
          if (res.payload.code) {
            notifyEroor(res.payload.message);
            if (
              res.payload.message ===
              "Subscribe for a pricing plan to activate the job!"
            ) {
              navigate("/Pricing");
            }
          } else {
            notify("Your Job Was Posted");
            setTimeout(() => {
              dispatch(getJobsfil()).then(
                navigate("/employerhome/dashboard", { replace: false })
              );
            }, 500);
          }
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
  var Cid = final._id;

  const handleEdit = () => {
    dispatch(updateJobs({ final, Cid }))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                navigate("/signin", { state: true });
              })
            : "";
        } else {
          navigate("/employerhome/dashboard", { replace: false });
          notify("Your Job Was Edited");
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

  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyEroor = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function Pages(index, cal) {
    if (cal === "add" && index <= 2) {
      if (index === 0) {
        const obj = validator(final);
        dispatch(errorJobs(validator(final)));
        if (Object.keys(obj).length > 0) {
          return;
        }
        if (final.details.requiredSkill.length === 0) {
          notifyEroor("Please Provide Required Skills");
          return;
        }
        if (final.location === undefined || final.location === null) {
          notifyEroor("Please Provide Job Location");
          return;
        }
        if (showq === "true") {
          var arryMem = final.question.map((mem) => {
            if (mem.questions === "" || mem.preferedAns === "") {
              return false;
            }
            return null;
          });
          if (arryMem.includes(false) === true) {
            notifyEroor("Please Provide Question And Answer");
            return;
          }
          setProfiletab({ index: 1, page: <EssentialInfo /> });
        }
        setProfiletab({ index: 1, page: <EssentialInfo /> });
      }
      if (index === 1) {
        if (Object.keys(final.essential).length === 0) {
          notifyEroor("Please Fill All Mandotary Details");
        } else {
          const obj3 = validator(final.essential);
          dispatch(errorJobs(validator(final.essential)));
          if (Object.keys(obj3).length > 0) {
            return;
          }
          const obj2 = validator(final.details);
          dispatch(errorJobs(validator(final.details)));
          if (Object.keys(obj2).length > 0) {
            return;
          }
          if (final.details.salary === undefined) {
            setProfiletab({ index: 2, page: <PreviewJob Pages={PagesTwo} /> });
          }
          if (!Object.values(final.details.salary).some((v) => v) === false) {
            const obj2 = validator(final.details.salary);
            dispatch(errorJobs(validator(final.details.salary)));
            if (Object.keys(obj2).length > 0) {
              return;
            }
          }
          setProfiletab({ index: 2, page: <PreviewJob Pages={PagesTwo} /> });
        }
      }
    }
  }
  const PagesTwo = (index, cal) => {
    if (cal === "sub" && index > 0) {
      setProfiletab({ index: --index });
    }
    switch (index) {
      case 0:
        setProfiletab({ index: index, page: <Jobdetails /> });
        break;
      case 1:
        setProfiletab({ index: index, page: <EssentialInfo /> });
        break;

      case 2:
        setProfiletab({ index: index, page: <PreviewJob Pages={PagesTwo} /> });
        break;
      default:
        setProfiletab({ index: index, page: "" });
        break;
    }
  };
  const [profiletab, setProfiletab] = useState(
    (locate && locate.label) !== undefined || null
      ? { index: 2, page: <PreviewJob Pages={PagesTwo} /> }
      : { index: 0, page: <Jobdetails /> }
  );

  return (
    <Box>
      <Card>
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
          {profiletab.index === 2 ? (
            <Button
              variant="contained"
              sx={styles.nxtbtn}
              onClick={
                (final && final._id) !== undefined || null
                  ? () => {
                      handleEdit();
                    }
                  : () => {
                      postJobs(final);
                    }
              }
            >
              {(final && final._id) !== undefined || null ? "Save" : "Submit"}
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

export default PostnewJob;
