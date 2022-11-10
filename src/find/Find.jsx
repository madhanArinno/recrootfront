import React from "react";
import "./find.css/.";
import { styles } from "./Findstyle";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Find() {
  let navigate = useNavigate();

  useEffect(() => {
    const getUser = () => {
      fetch(" http://localhost:3000/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          return resObject;
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    getUser();
  }, []);

  return (
    <Paper style={styles.paperContainer}>
      <div className="findmain">
        <h1 className="title">Find Remote Tech Professionals</h1>
        <p className="bodytxt">
          Find great tech talent with customizable solutions from Recroot.jobs
        </p>
        <Button style={styles.btn} variant="contained">
          <p
            className="btntext"
            onClick={async () => {
              navigate("/signin", { replace: true });
            }}
          >
            Get Started
          </p>
        </Button>
      </div>
    </Paper>
  );
}

export default Find;
