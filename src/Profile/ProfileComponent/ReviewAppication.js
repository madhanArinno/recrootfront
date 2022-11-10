import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { NEUTRAL, PRIMARY } from "../../Theme/Colors";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
  height: 120,
  lineHeight: "60px",
}));

const StyledBoxed = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 5px 10px 15px",
  fontSize: "14px",
  fontWeight: "700",
  backgroundColor: PRIMARY,
  color: NEUTRAL,
  alignItems: "center",
});

const StyledProjectBoxed = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 5px 10px 15px",
  fontSize: "14px",
  fontWeight: "700",
  backgroundColor: "gray",
  color: NEUTRAL,
  alignItems: "center",
});

const lightTheme = createTheme({ palette: { mode: "light" } });

function ReviewAppication(props) {
  const details = useSelector((state) => state.personal.data);
  const resumeSin = useSelector((state) => state.personal.resume);
  const CoverSin = useSelector((state) => state.personal.cover);
  const ids = useSelector((state) => state.personal.ids);

  // eslint-disable-next-line no-unused-vars
  const [final, setFinal] = React.useState({
    resumeId: resumeSin && resumeSin._id,
    coverId: CoverSin && CoverSin._id,
    candidateId: details && details._id,
    jobId: ids && ids.jobId,
    question: ids && ids.question,
    companyId: ids && ids.companyId,
  });

  const settingIndex = (index) => {
    props.Pages(index);
  };
  props.change(final);

  return (
    <>
      <Grid item xs={12} md={12} sx={{ margin: 2 }}>
        <Stack direction="row ">
          <Typography
            variant="h5"
            color="initial"
            sx={{ fontWeight: 700, fontSize: "24px" }}
          >
            Please review your information
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{ margin: 2 }}
        display={"flex"}
        fullWidth
        spacing={2}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: 550, fontSize: "18px", flex: 1 }}
        >
          Personal Information
        </Typography>
        <Link to="/myprofile" state={{ index: 1 }}>
          <Button
            variant="body1"
            color="initial"
            sx={{ fontSize: "14px", float: "right", color: PRIMARY }}
          >
            Edit
          </Button>
        </Link>
      </Grid>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} sx={{ margin: 2 }} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                borderRadius: "8px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#CACACA",
                boxShadow: "none",
                position: "relative",
              }}
            >
              <Item sx={{ boxShadow: "none" }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontSize: "16px",
                    flex: 1,
                    color: "#6A6A6A",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                >
                  Name
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontWeight: 550,
                    fontSize: { sm: "20px", xs: "15px" },
                    marginLeft: "20px",
                    flex: 1,
                  }}
                >
                  {details.firstName} {details.lastName}
                </Typography>
              </Item>
              <Divider variant="inset" sx={{ marginLeft: 0 }} />
              <Item sx={{ boxShadow: "none" }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontSize: "16px",
                    flex: 1,
                    color: "#6A6A6A",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontWeight: 550,
                    fontSize: { sm: "20px", xs: "15px" },
                    marginLeft: "20px",
                    flex: 1,
                  }}
                >
                  {details.email}
                </Typography>
              </Item>

              <Divider variant="inset" sx={{ marginLeft: 0 }} />
              <Item sx={{ boxShadow: "none" }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontSize: "16px",
                    flex: 1,
                    color: "#6A6A6A",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                >
                  Country
                </Typography>
                <Box sx={{ display: "flex" }}>
                  {details.resume.country.length === 0 ? (
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "18px",
                        marginLeft: "20px",

                        color: "#fe7171",
                      }}
                    >
                      No Data Provided
                    </span>
                  ) : (
                    details.resume.country &&
                    details.resume.country.map((country) => (
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{
                          fontWeight: 550,
                          fontSize: { sm: "20px", xs: "15px" },
                          ml: 2,
                        }}
                      >
                        {country.country}
                      </Typography>
                    ))
                  )}
                </Box>
              </Item>
              <Divider variant="inset" sx={{ marginLeft: 0 }} />
            </Box>

            {/* CV section */}
            <Card variant="outlined" sx={{ mt: "10px" }}>
              <StyledBoxed>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "19px",
                  }}
                >
                  CV
                </Typography>
                <Button
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: "14px", float: "right", color: NEUTRAL }}
                  onClick={() => {
                    settingIndex(0);
                  }}
                >
                  Edit
                </Button>
              </StyledBoxed>
              <CardContent>
                <Stack direction={"row"} spacing={2}>
                  <PictureAsPdfIcon
                    sx={{
                      color: PRIMARY,
                      display: "flex",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: PRIMARY,
                    }}
                  >
                    {resumeSin && resumeSin.resumeName}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>

            {/* CoverLetter */}
            <Card variant="outlined" sx={{ mt: "10px" }}>
              <StyledBoxed>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "19px",
                  }}
                >
                  Cover Letter
                </Typography>
                <Button
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: "14px", float: "right", color: NEUTRAL }}
                  onClick={() => {
                    settingIndex(0);
                  }}
                >
                  Edit
                </Button>
              </StyledBoxed>
              <CardContent>
                {CoverSin.coverName === undefined ? (
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      marginTop: "10px",
                      marginLeft: "20px",
                      color: "#fe7171",
                    }}
                  >
                    Cover Letter Is Not Attached
                  </span>
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      color: PRIMARY,
                    }}
                  >
                    {CoverSin && CoverSin.coverName}
                  </Typography>
                )}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card variant="outlined" sx={{ mt: "10px" }}>
              <StyledBoxed>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "19px",
                  }}
                >
                  Experience
                </Typography>
                <Link to="/myprofile">
                  <Button
                    variant="body1"
                    color="initial"
                    sx={{
                      fontSize: "14px",
                      float: "right",
                      color: NEUTRAL,
                    }}
                  >
                    Edit
                  </Button>
                </Link>
              </StyledBoxed>
              <CardContent>
                {details.resume.workExperience.length === 0 ? (
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      marginLeft: "20px",
                      color: "#fe7171",
                    }}
                  >
                    No Data Provided
                  </span>
                ) : (
                  <ul style={{ margin: "10px", paddingInlineStart: "0px" }}>
                    {details.resume.workExperience &&
                      details.resume.workExperience.map((experience) => (
                        <li
                          style={{ margin: "10px" }}
                        >{`${experience.role} at  ${experience.companyName} for ${experience.experience} years `}</li>
                      ))}
                  </ul>
                )}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card variant="outlined" sx={{ mt: "10px" }}>
              <StyledBoxed>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "19px",
                  }}
                >
                  Skills
                </Typography>
                <Link to="/myprofile">
                  <Button
                    variant="body1"
                    color="initial"
                    sx={{
                      fontSize: "14px",
                      float: "right",
                      color: NEUTRAL,
                    }}
                  >
                    Edit
                  </Button>
                </Link>
              </StyledBoxed>
              <CardContent>
                {details.resume.skills.length === 0 ? (
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      marginLeft: "20px",

                      color: "#fe7171",
                    }}
                  >
                    No Data Provided
                  </span>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {details.resume.skills &&
                      details.resume.skills.map((skills) => (
                        <Box
                          sx={{
                            background: "#EFF6FF",
                            width: { lg: "200px", xs: "150px" },
                            p: "10px",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "16px",
                            cursor: "pointer",
                            mt: "10px",
                          }}
                        >
                          <Typography
                            variant="body1"
                            color="initial"
                            sx={{
                              background: "#EFF6FF",
                              width: { lg: "200px", xs: "150px" },

                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-around",
                              borderRadius: "16px",
                              cursor: "pointer",
                              mt: "5px",
                            }}
                          >
                            {skills.skillName}
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                )}
              </CardContent>
            </Card>

            {/* Education */}
            <Card variant="outlined" sx={{ mt: "10px" }}>
              <StyledBoxed>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "19px",
                  }}
                >
                  Education
                </Typography>
                <Link to="/myprofile">
                  <Button
                    variant="body1"
                    color="initial"
                    sx={{
                      fontSize: "14px",
                      float: "right",
                      color: NEUTRAL,
                    }}
                  >
                    Edit
                  </Button>
                </Link>
              </StyledBoxed>
              <CardContent>
                {details.resume.education.length === 0 ? (
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      marginLeft: "20px",
                      color: "#fe7171",
                    }}
                  >
                    No Data Provided
                  </span>
                ) : (
                  <ul style={{ margin: "10px", paddingInlineStart: "0px" }}>
                    {details.resume.education &&
                      details.resume.education.map((education) => (
                        <li style={{ margin: "10px" }}>
                          {`${education.graduate} in ${
                            education.degreeName
                          } ${moment(education.fromDate).format(
                            "l"
                          )} - ${moment(education.toDate).format("l")}  ${
                            education?.collegeName
                          }`}
                        </li>
                      ))}
                  </ul>
                )}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card variant="outlined" sx={{ mt: "10px" }}>
              <StyledBoxed>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "19px",
                  }}
                >
                  Projects
                </Typography>
                <Link to="/myprofile">
                  <Button
                    variant="body1"
                    color="initial"
                    sx={{
                      fontSize: "14px",
                      float: "right",
                      color: NEUTRAL,
                    }}
                  >
                    Edit
                  </Button>
                </Link>
              </StyledBoxed>
              <CardContent>
                <Stack
                  sx={{
                    flexDirection: { xs: "column", md: "row" },
                    gap: "20px",
                  }}
                >
                  {details.resume.projects.length === 0 ? (
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "18px",
                        marginLeft: "20px",
                        color: "#fe7171",
                      }}
                    >
                      No Data Provided
                    </span>
                  ) : (
                    details.resume.projects &&
                    details.resume.projects.map((projects, index) => (
                      <Card
                        variant="outlined"
                        sx={{ minWidth: "260px", height: "150px" }}
                      >
                        <StyledProjectBoxed>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "19px",
                            }}
                          >
                            Project Name : {projects.ProjectName}
                          </Typography>
                        </StyledProjectBoxed>
                        <CardContent>
                          <Typography>
                            Organization : {projects.Organization}
                          </Typography>
                          <Typography sx={{ color: PRIMARY }}>
                            Project Link : {projects.portafolioLink}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </Stack>
              </CardContent>
            </Card>

            {/* Training */}
            <Card variant="outlined" sx={{ mt: "10px" }}>
              <StyledBoxed>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: "19px",
                  }}
                >
                  Training
                </Typography>
                <Link to="/myprofile">
                  <Button
                    variant="body1"
                    color="initial"
                    sx={{
                      fontSize: "14px",
                      float: "right",
                      color: NEUTRAL,
                    }}
                  >
                    Edit
                  </Button>
                </Link>
              </StyledBoxed>
              <CardContent>
                {details.resume.traning.length === 0 ? (
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      marginLeft: "20px",
                      color: "#fe7171",
                    }}
                  >
                    No Data Provided
                  </span>
                ) : (
                  <ul>
                    {details.resume.traning &&
                      details.resume.traning.map((traning) => (
                        <li>
                          {traning.title} for (
                          {moment(traning.fromDate).format("l")} -
                          {moment(traning.toDate).format("l")})
                          {traning.instituete}
                        </li>
                      ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </ThemeProvider>
        </Grid>
      ))}
    </>
  );
}

export default ReviewAppication;
