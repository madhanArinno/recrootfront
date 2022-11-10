import { Box,  Card, Grid,  Typography } from "@mui/material";
import React from "react";
import { styles } from "../mainpage/mainpagestyle";
function NoCandidate() {
  return (
    <div>
         <Box>
      <Card variant="outlined" sx={styles.maincard}>
        <Box>
          <Grid container spacing={2} style={{ paddingTop: "25%" }}>
            <Grid item md={12} xs={12}>
              <Box sx={styles.icorole}>
                <Box sx={styles.roletxt}>
                  <img
                    src="/assest/no_result.webp"
                    width={300}
                    alt=''
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Typography variant="h5" sx={styles.rolecomp}>
                No Candidates found.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
    </div>
  )
}

export default NoCandidate
