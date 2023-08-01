import React, { useContext, useEffect, useState } from "react";
import { Contentcontext } from "../context/Context";
import Content from "./TemplateComponents/Content";
import Images from "./TemplateComponents/Images";
import CallToAction from "./TemplateComponents/CallToAction";
import CG_Logo_GoldNavy_header from "../utils/CG_Logo_GoldNavy_header.svg";
import { useEmailTemplate } from "../context/email-template";
import ImageContent from "../emailLib/ImageContent";
import Footer from "../emailLib/Footer";
import EmailHeader from "../emailLib/EmailHeader";
// import Header from "./header";

const Template = () => {
  const { arr, setEditorBtn, setFormatting } = useContext(Contentcontext);
  useEffect(() => {
    localStorage.setItem("templateArray", JSON.stringify(arr));
  }, [arr]);

  const bgc = "#ffffff";

  const { emailTemplate } = useEmailTemplate();
  const { alignment } = useContext(Contentcontext);
  // console.log(emailTemplate.darkMode, " I am the state");

  const [headerLight, setHeaderLight] = useState({
    // alignment: "center",
    bgColor: "#FFFFFF",
    width: 200,
    subtitleColor: "#002C3F",
    src: "https://firebasestorage.googleapis.com/v0/b/email-builder-demo-1e3fd.appspot.com/o/CG-Logo_GoldNavy.png?alt=media&token=ad197cef-bf8c-41d3-84d9-3bcc2f4b2120&_gl=1*pvb0ik*_ga*NDA1ODcxNS4xNjc2OTYwNzgw*_ga_CW55HF8NVT*MTY4NTY4NjkxOC4yMC4xLjE2ODU2ODgwNzAuMC4wLjA.",
  });

  const [headerDark, setHeaderDark] = useState({
    // alignment: "center",
    bgColor: "#002C3F",
    width: 200,
    subtitleColor: "#ffffff",
    src: "https://firebasestorage.googleapis.com/v0/b/email-builder-demo-1e3fd.appspot.com/o/CG-Logo_White.png?alt=media&token=7ec56668-8b78-45fb-85d4-0296ff430049&_gl=1*1u1b9zb*_ga*NDA1ODcxNS4xNjc2OTYwNzgw*_ga_CW55HF8NVT*MTY4NTY4NjkxOC4yMC4xLjE2ODU2ODgxNDIuMC4wLjA.",
  });

  const [headerBlack, setHeaderBlack] = useState({
    // alignment: "center",
    bgColor: "#000000",
    width: 200,
    subtitleColor: "#ffffff",
    src: "https://firebasestorage.googleapis.com/v0/b/email-builder-demo-1e3fd.appspot.com/o/CG-Logo_White.png?alt=media&token=7ec56668-8b78-45fb-85d4-0296ff430049&_gl=1*1u1b9zb*_ga*NDA1ODcxNS4xNjc2OTYwNzgw*_ga_CW55HF8NVT*MTY4NTY4NjkxOC4yMC4xLjE2ODU2ODgxNDIuMC4wLjA.",
  });

  return (
    <div
      className="templateOuterLayer"
      style={{
        boxSizing: "border-box",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // border: "1px solid black",
        zIndex: "100",
      }}
    >
      <div
        className="templateInnerLayer"
        style={{
          textAlign: "center",
          // border: "1px solid black",
          width: "100%",
        }}
        id="finalTemplate"
      >
        <table
          align="center"
          style={{
            width: "100%",
            //  maxwidth: "100%",
            height: "100%",
            backgroundColor: "#F4F5F5",
            // backgroundColor: "aqua",
            //  border:'1px solid green'
          }}
        >
          <div>
            {/* <!-- Start container for logo --> */}

            <table
              align="center"
              style={{
                textAlign: "center",
                verticalAlign: "top",
                width: "600px",
                maxwidth: "600px",
                height: "74px",
                backgroundColor: "#ffffff",
                padding: "0",
                borderSpacing: "none",
                // border: "1px solid yellow",
              }}
              cellPadding="0"
              cellSpacing="0"
              onClick={(e) => {
                e.stopPropagation();
                setEditorBtn("f");
                setFormatting("selecttheme");
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      verticalAlign: "top",
                      paddingLeft: 0,
                      paddingRight: 0,
                      boxSizing: "border-box",
                    }}
                  >
                    {alignment === "center" &&
                      emailTemplate.darkMode === "light" && (
                        <ImageContent {...headerLight} />
                      )}
                    {alignment === "center" &&
                      emailTemplate.darkMode === "dark" && (
                        <ImageContent {...headerDark} />
                      )}
                    {alignment === "center" &&
                      emailTemplate.darkMode === "black" && (
                        <ImageContent {...headerBlack} />
                      )}
                    {alignment === "left" &&
                      emailTemplate.darkMode === "light" && (
                        <EmailHeader {...headerLight} />
                      )}
                    {alignment === "left" &&
                      emailTemplate.darkMode === "dark" && (
                        <EmailHeader {...headerDark} />
                      )}
                    {alignment === "left" &&
                      emailTemplate.darkMode === "black" && (
                        <EmailHeader {...headerBlack} />
                      )}

                    {/* {alignment === "center" && emailTemplate.darkMode == "dark" && (<)} */}
                  </td>
                </tr>
              </tbody>
            </table>

            {arr &&
              arr?.map((item, index) => {
                if (
                  item.component === "Content" ||
                  item.component === "↵Content↵"
                ) {
                  const componentvalue = (
                    <Content
                      item={item}
                      id={item.id}
                      userValue={item.componentValue}
                      key={index}
                      indexVal={index}
                    />
                  );

                  return componentvalue;
                } else if (item.component === "Image") {
                  const componentvalue = (
                    <Images
                      item={item}
                      id={item.id}
                      imgsrc={item.componentValue}
                      imgName={item.imgName}
                      key={index}
                      indexVal={index}
                      imgBtnUrl={item.imgBtnUrl}
                      disableUrl={item.disableUrl}
                    />
                  );

                  return componentvalue;
                } else {
                  const componentvalue = (
                    <CallToAction
                      key={index}
                      indexVal={index}
                      id={item.id}
                      buttonText={item.buttonText}
                      buttonUrl={item.buttonUrl}
                      buttonColor={item.buttonColor}
                      item={item}
                    />
                  );

                  return componentvalue;
                }
              })}
          </div>
          <Footer />
        </table>
      </div>
    </div>
  );
};

export default Template;
