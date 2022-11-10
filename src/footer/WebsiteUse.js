import { Box, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../navbar/Navbar";

function WebsiteUse() {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Container maxWidth="md">
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 750 }}>
            WEBSITE TERMS OF USE
          </Typography>
          <br></br>

          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            INTRODUCTION
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            These Website Standard Terms And Conditions (these “Terms” or these
            “Website Standard Terms And Conditions”) contained herein on this
            webpage, shall govern your use of this website, including all pages
            within this website (collectively referred to herein below as this
            “Website”). These Terms apply in full force and effect to your use
            of this Website and by using this Website, you expressly accept all
            terms and conditions contained herein in full. You must not use this
            Website, if you have any objection to any of these Website Standard
            Terms And Conditions.
            <br />
            This Website is not for use by any minors (defined as those who are
            not at least 18 years of age), and you must not use this Website if
            you a minor.
          </Typography>
          <br></br>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            RESTRICTIONS
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            You are expressly and emphatically restricted from all of the
            following:
            <br />
            1. publishing any Website material in any media;
            <br />
            2. selling, sublicensing and/or otherwise commercializing any
            Website material;
            <br />
            3. publicly performing and/or showing any Website material;
            <br />
            4. using this Website in any way that is, or may be, damaging to
            this Website;
            <br />
            5. using this Website in any way that impacts user access to this
            Website;
            <br />
            6. using this Website contrary to applicable laws and regulations,
            or in a way that causes, or may cause, harm to the Website, or to
            any person or business entity;
            <br />
            7. engaging in any data mining, data harvesting, data extracting or
            any other similar activity in relation to this Website, or while
            using this Website;
            <br />
            8. using this Website to engage in any advertising or marketing;
            <br />
            Certain areas of this Website are restricted from access by you and
            Recroot may further restrict access by you to any areas of this
            Website, at any time, in its sole and absolute discretion. Any user
            ID and password you may have for this Website are confidential and
            you must maintain confidentiality of such information.
            <br />
          </Typography>
          <br />

          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            NO WARRANTIES
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            This Website is provided “as is,” with all faults, and Recroot makes
            no express or implied representations or warranties, of any kind
            related to this Website or the materials contained on this Website.
            Additionally, nothing contained on this Website shall be construed
            as providing consult or advice to you.
          </Typography>
          <br />

          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            LIMITATION OF LIABILITY
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            In no event shall Recroot, nor any of its officers, directors and
            employees, be liable to you for anything arising out of or in any
            way connected with your use of this Website, whether such liability
            is under contract, tort or otherwise, and Recroot, including its
            officers, directors and employees shall not be liable for any
            indirect, consequential or special liability arising out of or in
            any way related to your use of this Website.
          </Typography>
          <br />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            INDEMNIFICATION
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            You hereby indemnify to the fullest extent Recroot from and against
            any and all liabilities, costs, demands, causes of action, damages
            and expenses (including reasonable attorney’s fees) arising out of
            or in any way related to your breach of any of the provisions of
            these Terms.
          </Typography>
          <br />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            SEVERABILITY
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            If any provision of these Terms is found to be unenforceable or
            invalid under any applicable law, such unenforceability or
            invalidity shall not render these Terms unenforceable or invalid as
            a whole, and such provisions shall be deleted without affecting the
            remaining provisions herein.
          </Typography>
          <br />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            VARIATION OF TERMS
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            Recroot is permitted to revise these Terms at any time as it sees
            fit, and by using this Website you are expected to review such Terms
            on a regular basis to ensure you understand all terms and conditions
            governing use of this Website.
          </Typography>
          <br />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            ASSIGNMENT
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            Recroot shall be permitted to assign, transfer, and subcontract its
            rights and/or obligations under these Terms without any notification
            or consent required. However, you shall not be permitted to assign,
            transfer, or subcontract any of your rights and/or obligations under
            these Terms.
          </Typography>
          <br />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            ENTIRE AGREEMENT
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            These Terms, including any legal notices and disclaimers contained
            on this Website, constitute the entire agreement between Recroot and
            you in relation to your use of this Website, and supersede all prior
            agreements and understandings with respect to the same.
          </Typography>
          <br />
        </Box>
      </Container>
    </div>
  );
}

export default WebsiteUse;
