import * as React from "react";
import { useState, useEffect } from "react";
import { BsWindows } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { useEmailTemplate } from "../context/email-template";
import { Contentcontext } from "../context/Context";
import { useContext } from "react";

const sendButtonStyle = {
  display: "flex",
  cursor: "pointer",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "40px",
  boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",
  borderRadius: "4px",
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: "600",
  paddingRight: "12px",
  border: "none",
  backgroundColor: "#FFB81C",
};

const inputStyle = {
  fontSize: "18px",
  border: "none",
  fontWeight: "500",
  backgroundColor: "#f5f5f5",
};

const buttonText = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "2px",
};

const buttonSpan = {
  fontSize: "11px",
  lineHeight: "13px",
};

export function ActionBar() {
  const [filename, setFileName] = useState("Untitled");
  const { emailTemplate } = useEmailTemplate();
  const {
    setShowVal,
    arr,
    setConfirmation,
    footerTheme,
    alignment,
    setFileNameError,
  } = useContext(Contentcontext);

  useEffect(() => {
    return setFileName((prev) => prev);
  }, [filename]);

  const sendEmail = async (platform) => {
    await setShowVal(false);
    let fileType;

    if (filename === "Untitled" || filename === "") {
      setFileNameError(true);
      await setShowVal(true);
      return;
    }

    fileType = platform === "Win" ? "eml" : "emltpl";

    let emailData = document.querySelector("#finalTemplate").innerHTML;

    let mailHtm = null;
    let emailto = null;
    let emailsubject = null;
    let emlCont = null;
    mailHtm = `${emailData}`;

    emailto = "";
    emailsubject = filename;

    emlCont = "To: " + emailto + "\n";

    emlCont += "Subject: " + " " + "\n";
    emlCont += "X-Unsent: 1" + "\n";

    emlCont += "Content-Type: text/html;charset=UTF-8" + "\n";
    emlCont += "" + "\n";

    emlCont += mailHtm;
    emlCont += "" + "\n";
    const jsonContent = JSON.stringify(arr, null, 2);
    emlCont += `<!--${emailTemplate.darkMode}+${alignment}seperate${jsonContent}seperate${footerTheme}-->`;

    let textFile = null;
    let EMLFileData_12 = null;
    EMLFileData_12 = new Blob([emlCont], { type: "text/plain" });

    if (textFile !== null) {
      window.URL.createObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(EMLFileData_12);

    let a = document.createElement("a");
    let linkText = document.createTextNode("fileLink");
    a.appendChild(linkText);

    a.href = textFile;

    a.id = "fileLink";
    a.download = emailsubject + ` (${platform})` + `.${fileType}`;
    a.style.visibility = "hidden";

    document.body.appendChild(a);

    document.getElementById("fileLink").click();
    document.getElementById("fileLink").remove();

    EMLFileData_12 = null;
    textFile = null;

    setShowVal(true);
  };

  return (
    <>
      <div
        style={{
          height: "40px",
          width: "737px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{ fontSize: "14px", fontWeight: "400", color: "#B2B2B3" }}
          >
            File Name <span style={{ color: "red" }}> * </span>:
          </span>

          <input
            type="text"
            value={filename}
            placeholder="Win Announcement"
            style={inputStyle}
            onChange={(e) => {
              setFileName(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          {arr.length >= 1 && (
            <button
              style={{
                color: "#E03E2D",

                fontWeight: "bold",

                padding: "4px 16px",

                background: "none",

                border: "1px solid #E03E2D",

                borderRadius: "4px",

                fontSize: "14px",

                lineHeight: "32px",

                boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

                cursor: "pointer",
              }}
              onClick={() => {
                setConfirmation(true);
              }}
            >
              Clear
            </button>
          )}
          <button
            style={sendButtonStyle}
            onClick={() => {
              sendEmail("Win");
            }}
          >
            <div style={buttonText}>
              <span>Download</span>
              <span style={buttonSpan}>For Win</span>
            </div>
            <BsWindows size="20px" style={{ marginLeft: "19px" }} />
          </button>
          <button
            style={sendButtonStyle}
            onClick={() => {
              sendEmail("Mac");
            }}
          >
            <div style={buttonText}>
              <span>Download</span>
              <span style={buttonSpan}>For Mac</span>
            </div>
            <BsApple size="20px" style={{ marginLeft: "19px" }} />
          </button>
        </div>
      </div>
    </>
  );
}
