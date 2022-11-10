import React from "react";
import "../../src/AllApplicants/ApplicantProfile.css";
import { Card, Link } from "@mui/material";
import { useSelector } from "react-redux";

export default function MediaLinks() {
  const single = useSelector((data) => data.apply.sinDet);

  return (
    <div className="medialink-style">
      <Card>
        <h1 style={{ padding: "4%" }}>Social Media Links</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "4%",
            marginBottom: "5%",
          }}
        >
          {single.resume &&
            single.resume.socialMediaLink.map((soc) => (
              <Link
                href={soc.socialMediaLink}
                sx={{ textDecoration: "none" }}
                target="_blank"
                className="mediaiconstyle"
              >
                &nbsp; {soc.socialMediaLink}
              </Link>
            ))}
        </div>
      </Card>
    </div>
  );
}
