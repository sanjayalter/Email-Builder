import React, { useContext } from "react";
import { Contentcontext } from "../context/Context";
import Content from "./TemplateComponents/Content";
import Images from "./TemplateComponents/Images";
import CallToAction from "./TemplateComponents/CallToAction";
import { useEmailTemplate } from "../context/email-template";
import ImageContent from "../emailLib/ImageContent";
import Footer from "../emailLib/Footer";
import EmailHeader from "../emailLib/EmailHeader";

const Template = () => {
  const { arr1, setEditorBtn, setFormatting } = useContext(Contentcontext);

  const { emailTemplate } = useEmailTemplate();
  const { alignment } = useContext(Contentcontext);

  let header = {
    alignment: "center",
    bgColor: "#FFFFFF",
    width: 200,
    subtitleColor: "#002C3F",

    src: "https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/CG-Logo_GoldNavy.png",
  };

  let header2 = {
    alignment: "center",
    bgColor: "#002C3F",
    width: 200,
    subtitleColor: "#ffffff",
    src: "https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/CG-Logo_White.png",
  };

  return (
    <div
      className="templateOuterLayer"
      style={{
        boxSizing: "border-box",
        display: "flex",

        alignItems: "center",
        flexDirection: "column",

        zIndex: "100",
      }}
    >
      <div
        className="templateInnerLayer"
        style={{
          textAlign: "center",

          width: "100%",
        }}
        id="finalTemplate"
      >
        <table
          align="center"
          style={{
            width: "100%",

            height: "100%",
            backgroundColor: "#F4F5F5",
          }}
        >
          <div>
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

export  {Template as PreviewTemplate};
