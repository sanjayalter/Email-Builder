import React, { useState, useContext } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { Contentcontext } from "../context/Context";

export default function Footer() {
  const [display, setDisplay] = useState(false);
  const { setEditorBtn, setFormatting, footerTheme, preview } =
    useContext(Contentcontext);
  return (
    <div
      style={{
        // border: "solid green",
        position: "relative",
      }}
      onMouseEnter={() => {
        setDisplay(true);
      }}
      onMouseLeave={() => {
        setDisplay(false);
      }}
    >
      {!preview && display && (
        <div
          style={{
            border: "2px solid rgba(0,0,0,0)",
            position: "absolute",
            width: "596px",
            height: "144px",
            left: "66px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              backgroundColor: "#74D1EA",
              width: "fit-content",
              fontSize: "14px",
              lineHeight: "16px",
              padding: "4px",
              fontWeight: "500",
              height: "fit-content",
            }}
          >
            Footer
          </div>
          {/* <div> */}
          <div
            style={{
              color: "#ffffff",
              padding: "4px 4px",
              width: "fit-content",
              height: "fit-content",
              backgroundColor: "#343435",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setEditorBtn("f");
              setFormatting("footerformatting");
            }}
          >
            <MdModeEditOutline size="20px" />
          </div>
          {/* </div> */}
        </div>
      )}
      <table
        align="center"
        style={{
          textAlign: "center",
          minWidth: "600px",
          backgroundColor: footerTheme ? "#1E1E1E" : "#ffffff",
          verticalAlign: "top",
          boxSizing: "border-box",
          border: display && !preview ? "2px solid #74D1EA" : "",
        }}
        width="600"
      >
        <tbody>
          <tr>
            <td
              width="600"
              align="center"
              style={{
                width: display && !preview ? "596px" : "600px",
                verticalAlign: "top",
              }}
            >
              <div
                style={{
                  color: "#ffffff",
                  alignContent: "center",
                }}
              >
                <div
                  style={{
                    marginTop: display && !preview ? "18px" : "20px",
                    marginBottom: display && !preview ? "14px" : "16px",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/company/cginfinity"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/email-builder-demo-1e3fd.appspot.com/o/linkedin.png?alt=media&token=71005fbb-7517-4551-aa59-970ac3fd1213&_gl=1*de6xnv*_ga*NDA1ODcxNS4xNjc2OTYwNzgw*_ga_CW55HF8NVT*MTY4NTY4NjkxOC4yMC4xLjE2ODU2ODgyNDYuMC4wLjA."
                      alt="LinkedIn Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.youtube.com/CGInfinityInc"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/email-builder-demo-1e3fd.appspot.com/o/youtube.png?alt=media&token=b36e3844-8bc6-4572-b616-603453826d5f&_gl=1*an5zw4*_ga*NDA1ODcxNS4xNjc2OTYwNzgw*_ga_CW55HF8NVT*MTY4NTY4NjkxOC4yMC4xLjE2ODU2ODgyNzkuMC4wLjA."
                      alt="Youtube Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.facebook.com/cginfinityinc/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/email-builder-demo-1e3fd.appspot.com/o/facebook.png?alt=media&token=54dc4f58-d85a-4bf7-8e55-70083a5d6d10&_gl=1*vl15w*_ga*NDA1ODcxNS4xNjc2OTYwNzgw*_ga_CW55HF8NVT*MTY4NTY4NjkxOC4yMC4xLjE2ODU2ODgzMDUuMC4wLjA."
                      alt="Facebook Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.instagram.com/cginfinityinc/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/email-builder-demo-1e3fd.appspot.com/o/instagram%20(1).png?alt=media&token=f2bb865c-0fa7-4828-92ad-0d2773310bb0&_gl=1*1g3lkog*_ga*NDA1ODcxNS4xNjc2OTYwNzgw*_ga_CW55HF8NVT*MTY4NTY4NjkxOC4yMC4xLjE2ODU2ODgzMjguMC4wLjA."
                      alt="Facebook Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://twitter.com/cginfinityinc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/email-builder-demo-1e3fd.appspot.com/o/twitter.png?alt=media&token=aa72d3d3-f5fa-4d00-8577-85feb21fe1e5&_gl=1*6uo8up*_ga*NDA1ODcxNS4xNjc2OTYwNzgw*_ga_CW55HF8NVT*MTY4NTY4NjkxOC4yMC4xLjE2ODU2ODgzNDguMC4wLjA."
                      alt="Twitter Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div style={{ border: "1px solid rgba(0,0,0,0)" }}>
                  <a
                    href="https://cginfinity.com/"
                    style={{
                      textDecoration: "none",
                      fontSize: "16px",
                      marginTop: display && !preview ? "2px" : 0,
                      display: "block",
                      color: footerTheme ? "#ffffff" : "#1E1E1E",
                      fontWeight: 400,
                      marginBottom: "8px",
                      letterSpacing: 0.5,
                      width: "fit-content",
                    }}
                  >
                    www.cginfinity.com
                  </a>
                </div>
                <div
                  style={{
                    marginBottom: display && !preview ? "18px" : "20px",
                  }}
                >
                  <span
                    style={{
                      // marginTop: 0,
                      // marginBottom: 0,
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      textDecoration: "none",
                      color: footerTheme ? "#ffffff" : "#1E1E1E",
                      letterSpacing: 1,
                    }}
                  >
                    © 2023 CG Infinity. All rights reserved
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
