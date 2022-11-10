import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./mainpagestyle";

export function NoResult() {
  return (
    <Box>
      <Card variant="outlined" sx={styles.maincard}>
        <Box>
          <Grid container spacing={2} style={{ paddingTop: "25%" }}>
            <Grid item md={12} xs={12}>
              <Box sx={styles.icorole}>
                <Box sx={styles.roletxt}>
                  <img src="/assest/no_result.webp" alt="" width="400" />
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
                No matching jobs found.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
