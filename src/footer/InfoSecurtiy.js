import { Box, Link, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../navbar/Navbar";

function InfoSecurity() {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Container maxWidth="md">
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 750 }}>
            Information security policy
          </Typography>
          <br></br>

          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Policy summary
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            Recroot takes information security seriously. We at Recroot
            understand that our professionals working for various clients might
            be provided access to sensitive information. Some of this
            information may also be regulated under different jurisdictions.
            <br />
            We at Recroot take all reasonable measures to protect sensitive
            client and candidate information stored within our network and
            handled by our professionals.
          </Typography>
          <br></br>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Applicability
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            This policy applies to all employees and contractors of Recroot.
            This policy also applies to third party employees working for the
            organization whether they are explicitly bound (e.g. by contractual
            terms and conditions) or implicitly bound (e.g. by generally held
            standards of ethics and acceptable behavior) to comply with our
            information security policies.
          </Typography>
          <br />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Responsibilities
          </Typography>
          <br />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Recroot Responsibilities
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            Information Security is the shared responsibility of Recroot,
            clients and candidates. Recroot is responsible for
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            1) Establishing and implementing reasonable measures to protect
            client and candidate information stored within Recroot network
            <br />
            2) Provide periodic information security awareness training for our
            staff
            <br />
            3) Conduct appropriate background checks for our staff
            <br />
            4) Ensure the staff devices are patched and secured using
            appropriate anti-virus software
            <br />
            5) Ensure that third parties employed by Recroot comply with
            Recroot’s information security policy
          </Typography>
          <br />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Client Responsibilities
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            Scope of Recroot’s information security measures is limited to
            Recroot staff having access to client information, securing the
            infrastructure that hold client information and taking reasonable
            measures to comply with client’s information security policies.
            Recroot is not responsible for client’s information security
            capabilities including the security of the software implemented by
            the client on staff devices issued by Recroot. Client
            responsibilities include:
            <br />
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            1) Implementing appropriate and reasonable measures to protect their
            information and personal information belonging to Recroot <br />
            2) Securing the software installed on Recroot staff devices
            <br />
            3) Clearly articulating their information security policies to
            Recroot
            <br />
            4) Complying with appropriate cyber regulations
          </Typography>
          <br />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Detailed policy requirements
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            1) Cybersecurity is largely a matter of mitigating cyber-risks
            through conventional information security controls, especially ICT
            security controls intended to prevent or mitigate (reduce)
            cyber-incidents. <br />
            2) While conventional information security controls to prevent or
            mitigate cyber-incidents take priority, we must not neglect
            detective and corrective controls since cyber-incidents cannot be
            entirely negated. We are unlikely to identify and fully comprehend,
            mitigate or avoid all our cyber-risks in this dynamic area, hence
            cyber-incidents are almost inevitable.
            <br />
            3) Detective cybersecurity controls include:
            <br />
            • Maintaining a widespread awareness of cybersecurity, coupled with
            policies and procedures for spotting, reporting and responding
            effectively and efficiently to possible or confirmed
            cyber-incidents;
            <br />
            • Effective IT system and network security monitoring, and
            responding to indications of possible or actual cyber-incidents as
            effectively and efficiently as possible;
            <br />
            • Management assessing and responding to reports of cyber-risks,
            cybersecurity events, incidents, suspicions etc. including relevant
            metrics.
            <br />
            4) Corrective cybersecurity controls include:
            <br />
            • Business continuity management involving the adoption of
            appropriate resilience, recovery and contingency measures to protect
            critical business activities, including the associated ICT, against
            excessive interruptions;
            <br />
          </Typography>
          <br />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Further information
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "1.1em", lineHeight: "2" }}
          >
            For any queries on our information security policy or know more,
            please reach out to us through
          </Typography>
          <Link
            href="mailto:privacy@arinnovate.io"
            variant="body1"
            sx={{ fontSize: "23px", mb: "25px" }}
          >
            privacy@arinnovate.io
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default InfoSecurity;
