import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import submittedImage from "../../submittedImage.png";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { clearCoversin, clearSinResume, setJobID } from "../../slices/personal";
import { useDispatch } from "react-redux";

export default function Submitted() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clearF = () => {
    // dispatch(applyJobs(''))
    dispatch(clearCoversin("none")).then(
      dispatch(clearSinResume("none")),
      dispatch(
        setJobID({
          companyId: "",
          jobId: "",
          question: [],
        })
      ),
      navigate("/")
    );
  };

  return (
    <>
      <Grid
        item
        xs={12}
        md={12}
        sx={{ margin: 2, marginTop: 5, justifyContent: "center" }}
        display={"flex"}
        fullWidth
        spacing={2}
      >
        <Typography
          variant="h3"
          color="initial"
          sx={{
            float: "right",
            fontWeight: 700,
            fontSize: { md: "3rem", xs: "2rem" },
          }}
        >
          Your Application has been submitted
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{ margin: 2, marginTop: 5, justifyContent: "center" }}
        display={"flex"}
        fullWidth
        spacing={2}
      >
        <Box sx={{ width: { md: "400px", xs: "200px" } }}>
          <img
            src={submittedImage}
            alt="logo"
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 15,
              width: "inherit",
            }}
          />
        </Box>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={clearF}
          sx={{
            width: "400px",
            height: "80px",
            backgroundColor: "#4fa9ff",
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "20px",
            borderRadius: "18px",
            mt: "50px",
            mb: "100px",
          }}
        >
          Search for more Jobs
        </Button>
      </Box>
    </>
  );
}
