import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/system";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export function CertificateFunc(
  inputCertificate,
  addCertUi,
  removeCert,
  handleCertificate
) {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Card
        sx={{
          width: "650px",
          padding: "15px",
          boxShadow: "4px 4px 60px rgba(193, 200, 209, 0.25);",
          borderRadius: "8px",
          border: "none",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        variant="outlined"
      >
        {inputCertificate.map((cer) => (
          <>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexWrap: { xs: "wrap", sm: "noWrap" },
              }}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="cerificate_title"
                  label="Title"
                  name="title"
                  value={cer.title}
                  onChange={(e) => {
                    handleCertificate(e, cer.id);
                  }}
                  autoComplete="user-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="certificate_organization"
                  label="Organization"
                  value={cer.organization}
                  name="organization"
                  onChange={(e) => {
                    handleCertificate(e, cer.id);
                  }}
                  autoComplete="user-name"
                />
              </Grid>
            </Box>
            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Button
                variant="contained"
                sx={{ height: "fit-content" }}
                component="label"
              >
                Upload Certificate
                <input
                  type="file"
                  accept=".pdf"
                  hidden
                  name="certificate"
                  onChange={(e) => {
                    handleCertificate(e, cer.id);
                  }}
                />
              </Button>
              <p>
                {cer.certificate === null || cer.certificate === undefined
                  ? ""
                  : cer.certificate && cer.certificate.name}
              </p>
              {inputCertificate.length === 1 ? (
                ""
              ) : (
                <IconButton
                  sx={{ mr: "auto" }}
                  onClick={() => {
                    removeCert(cer.id);
                  }}
                >
                  <ClearRoundedIcon sx={{ color: "#1976d2" }} />
                </IconButton>
              )}
            </Box>
          </>
        ))}
      </Card>
      <Button
        startIcon={<AddCircleOutlineIcon />}
        variant="outlined"
        size="large"
        spacing={2}
        sx={{ marginTop: 2, ml: 2, height: "3.4375em", maxWidth: 250 }}
        onClick={addCertUi}
      >
        Add Certification
      </Button>
    </Grid>
  );
}
