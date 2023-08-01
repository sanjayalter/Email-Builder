import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { renderToStaticMarkup } from "react-dom/server";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

// import DownloadIcon from "@mui/icons-material/Download";
import { BsWindows } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

import { BsFileEarmarkTextFill } from "react-icons/bs";
import { useEmailTemplate } from "../context/email-template";
import axios from "axios";
import Footer from "../emailLib/Footer";
import TextContentFinal from "../emailLib/TextContent";
import { Contentcontext } from "../context/Context";
import { useContext } from "react";
import Confirmation from "./Confirmation";
import Background from "./Background";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
  // width: "105px",
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
  // const filename = useRef("Untitled");
  const [filename, setFileName] = useState("Untitled");
  const { emailTemplate } = useEmailTemplate();
  const { setShowVal, arr, setConfirmation, footerTheme, alignment,setFileNameError } =
    useContext(Contentcontext);
  // function onChangeHandler(e) {
  //   setFileName(e.target.value);
  // };
  useEffect(() => {
    return setFileName((prev) => prev);
  }, [filename]);

  const sendEmail = async (platform) => {
    await setShowVal(false);
    let fileType;
console.log(filename)
    if( (filename==='Untitled') || (filename===''))
    {
      console.log("I am here")
      setFileNameError(true)
      await setShowVal(true);
      return
    }
    // try {
    //   const useOs = navigator.userAgentData.platform;

    //
    // } catch {
    //   fileType = navigator.platform === "Windows" ? "eml" : "emltpl";
    // }
    fileType = platform === "Win" ? "eml" : "emltpl";
    // console.log("Sendign email");
    // console.log(document.querySelector("#finalTemplate").innerHTML);
    let emailData = document.querySelector("#finalTemplate").innerHTML;
    // console.log(emailData);
    // setShowVal(false);
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
    // console.log(emlCont, "i am the emCont");
    let textFile = null;
    let EMLFileData_12 = null;
    EMLFileData_12 = new Blob([emlCont], { type: "text/plain" });
    // console.log(EMLFileData_12, "I am the data");
    if (textFile !== null) {
      window.URL.createObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(EMLFileData_12);
    console.log(textFile);

    let a = document.createElement("a"); //make a link in document
    let linkText = document.createTextNode("fileLink");
    a.appendChild(linkText);

    a.href = textFile;

    a.id = "fileLink";
    a.download = emailsubject + ` (${platform})` + `.${fileType}`; //'filenameTest.eml' ;
    a.style.visibility = "hidden";

    document.body.appendChild(a);

    document.getElementById("fileLink").click();
    document.getElementById("fileLink").remove();

    //  console.log(mailHtm)
    EMLFileData_12 = null;
    textFile = null;

    setShowVal(true);
  };

  return (
    <>
      {/* <Confirmation />
      <Background /> */}
      <div
        style={{
          // border: "1px solid blue",
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
          {/* <span style={{ fontSize: "18px", fontWeight: "500" }}>
          Win Announcement
        </span> */}
          <input
            type="text"
            // ref={filename}
         
            value={filename}
            placeholder="Win Announcement"
            style={inputStyle}
            onChange={(e) => {
              setFileName(e.target.value);
              // filename.current = e.target.ref;
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
                // setArr([]);
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
