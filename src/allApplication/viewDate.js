import React, { useState } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

const ViewDate = (props) => {
  const [progressColor, setColor] = useState("#1ddc3b");

  const changeUploadState = () => {
    props.fileWithMeta.cancel();
    setColor("#DE071C");
    setTimeout(() => {
      props.fileWithMeta.remove();
    }, 2000);
  };

  return (
    <div style={{ width: "100%" }}>
      {props.status !== "done" ? (
        <div style={{ width: "100%" }} className="progress_div">
          <div>
            <div style={{ align: "center", width: "100%" }}>
              <img
                style={{
                  width: "25px",
                  height: "35px",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
                alt=""
                src="https://www.pngfind.com/pngs/m/520-5203556_file-or-document-icon-icons-png-certificate-of.png"
              />
              &nbsp;&nbsp;&nbsp;
              <div
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  color: "#8f8f8f",
                }}
              >
                {props.name}
              </div>
            </div>

            <div style={{ width: "100%", display: "inline-block" }}>
              <Progress
                width={7}
                percent={props.percent}
                status="success"
                theme={{
                  success: {
                    symbol: props.percent + "%",
                    color: progressColor,
                  },
                }}
              />
            </div>
          </div>

          <div style={{ display: "inline-block", paddingLeft: 15 }}>
            <button
              className="attachment-icon-button"
              onClick={changeUploadState}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%" }} className="progress_div">
          <div>
            <div style={{ align: "center", width: "100%" }}>
              <img
                style={{
                  width: "25px",
                  height: "35px",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
                alt=""
                src="https://www.pngfind.com/pngs/m/520-5203556_file-or-document-icon-icons-png-certificate-of.png"
              />
              &nbsp;&nbsp;&nbsp;
              <div
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  color: "#8f8f8f",
                }}
              >
                {props.name}
              </div>
            </div>

            <div style={{ width: "100%", display: "inline-block" }}>
              <Progress
                width={7}
                percent={props.percent}
                status="success"
                theme={{ success: { color: progressColor } }}
              />
            </div>
          </div>

          <div style={{ display: "inline-block", paddingLeft: 15 }}>
            <button
              className="attachment-icon-button"
              onClick={changeUploadState}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
      <ReactTooltip
        id="main"
        effect={"float"}
        multiline={true}
        className="customeTooltip"
      />
    </div>
  );
};

export default ViewDate;
