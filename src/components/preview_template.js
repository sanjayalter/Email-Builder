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
  const { arr1, setEditorBtn, setFormatting } = useContext(Contentcontext);

  const bgc = "#ffffff";
  // let ind = -1;
  // const onDragEnter = (e) => {
  //   if (e.target.className === "template-class") {
  //     console.log("working");
  //   }
  // };
  // const onDragOver = (e) => {
  //   e.preventDefault();
  // };
  // const onDrop = (e) => {
  //   e.preventDefault();
  //   console.log("this is also working");
  // };

  const { emailTemplate } = useEmailTemplate();
  const { alignment, setAlignment } = useContext(Contentcontext);
  console.log(emailTemplate.darkMode, " I am the state");

  const [header, setHeader] = useState({
    alignment: "center",
    bgColor: "#FFFFFF",
    width: 200,
    subtitleColor: "#002C3F",

    src: "https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/CG-Logo_GoldNavy.png",
  });

  const [header2, setHeader2] = useState({
    alignment: "center",
    bgColor: "#002C3F",
    width: 200,
    subtitleColor: "#ffffff",
    src: "https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/CG-Logo_White.png",
  });

  console.log(arr1);

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
                      // paddingTop: "15px",
                      // paddingBottom: "15px",
                      // border: "1px solid blue",
                    }}
                  >
                    {alignment === "center" ? (
                      emailTemplate.darkMode ? (
                        <ImageContent {...header2} />
                      ) : (
                        <ImageContent {...header} />
                      )
                    ) : emailTemplate.darkMode ? (
                      <EmailHeader {...header2} />
                    ) : (
                      <EmailHeader {...header} />
                    )}

                    {/* {alignment==="left" && emailTemplate.darkMode ? (
                    <Header />
                  ) : (
                    <ImageContent {...header} />
                  )} */}
                  </td>
                </tr>
              </tbody>
            </table>

            {arr1 &&
              arr1?.map((item, index) => {
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
