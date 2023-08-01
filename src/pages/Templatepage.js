import template1 from "../Images/image 359.svg";

import template2 from "../Images/image 360.svg";

import template3 from "../Images/image 361.svg";

import { AiFillEye } from "react-icons/ai";

import { RxCross1 } from "react-icons/rx";

import { RiPencilFill } from "react-icons/ri";

import { FcInfo } from "react-icons/fc";

import React, { useState, useContext, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Contentcontext } from "../context/Context";

import Preview_template from "../components/preview_template";
import { IoMdAlert } from "react-icons/io";
import Icon from "../Images/Icon-1.svg";
import Icon2 from "../Images/Icon-2.svg";
import Icon3 from "../Images/Icon-3.svg";
import frame from "../Images/frame.svg";
import "./Templatepage.css";
import { useEmailTemplate } from "../context/email-template";

export default function Templatepage() {
  const navigate = useNavigate();
  const { emailTemplateDispatcher } = useEmailTemplate();

  const [value, setvalue] = useState(false);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [indexVal, setIndexVal] = useState(-1);
 const [editFileData,setEditFileData]=useState([]);
  const {
    setArr,
    setarr1,
    setShowVal,
    preview,
    setPreview,
    setEditorBtn,
    setFooterTheme,
    setAlignment,
  } = useContext(Contentcontext);

  const [state, setstate] = useState(false);

  const [previewIndex, setPreviewIndex] = useState();

  const data = JSON.parse(localStorage.getItem("templateArray"));

  useEffect(() => {
    setEditorBtn("s");
  }, []);

  const editClickHandler = (index) => {
console.log(editFileData);
    if(editFileData.length!==0){

      if (data && data.length !== 0) {
        setstate(true);
      }
      else{
        setArr(editFileData);
        navigate("/template")
      }
    
      return;
    }
    if (data && data.length !== 0) {
      // console.log(
      //   "this is the console value",
      //   localStorage.getItem("templateArray")
      // );
      console.log("this is index value" + index);
      setArr(pre_template[index]);
      setstate(true);
    } else {
      console.log("entering");
      setArr(pre_template[index]);
      navigate("/template");
    }
  };

  const handleClick = () => {
    if (data && data.length !== 0) {
      setArr([]);
      setstate(true);
    } else {
      setArr([]);
      navigate("/template");
    }
  };
  const previewClickHandler = (index) => {
    setShowVal(false);

    setPreview(true);

    setarr1([]);

    setarr1(pre_template[index]);
  };
  const handleFileChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result;
        const commentRegex = /<!--(.*?)-->/gs;
        const match = commentRegex.exec(content);

        if (match) {
          const seperatedArray = match[1].split("seperate");
          setFooterTheme(() => (seperatedArray[2] === "true" ? true : false));
          const headerArray = seperatedArray[0].split("+");
          setAlignment(headerArray[1]);
          emailTemplateDispatcher({
            type:
              headerArray[0] === "dark"
                ? "CHANGE_HEADER_DARK"
                : "CHANGE_HEADER_WHITE",
            payload: {
              darkMode: headerArray[0],
              libtype: "Image",
              values: {
                alignment: "center",
                bgColor: "#FFFFFF",
                width: 200,
                src: "https://cginfinity.com/wp-content/uploads/2022/04/logo-footer.svg",
              },
            },
          });
          const parsedData = JSON.parse(seperatedArray[1]);
          setShowVal(false);
          setPreview(true);
          setarr1([]);
          setarr1(parsedData);
          setEditFileData(parsedData);
          file = {};
          // navigate("/template");
        } else {
          setFileUploadError(true);
          return;
        }
      };
      reader.readAsText(file);
    }
  };

  const arr = [
    {
      name: "Cricket Tournament",

      image: template1,
    },

    {
      name: "Win Announcement",

      image: template2,
    },

    {
      name: "Onboarding",

      image: template3,
    },
  ];

  const pre_template = [
    [
      {
        id: "d7087bc5-4410-40c5-b474-8d257f6ff89b",
        component: "Image",
        componentValue:
          "https://firebasestorage.googleapis.com/v0/b/email-builder--product.appspot.com/o/Cricket%20Tournament%20(1).png?alt=media&token=c259db01-b002-4195-980b-8198205776db",
        imgName: "",
        isUploaded: false,
        imgBtnUrl: "",
        disableUrl: true,
      },
      {
        id: "4f76e683-3ab8-4d65-85d6-8e394ffe3be1",
        component: "Content",
        componentValue: "<h1><strong>Win Announcement!</strong><br></h1>",
      },
      {
        id: "57bcfb36-b0f3-46a9-856a-a03570c8227c",
        component: "Content",
        componentValue:
          "<p>Dear CG Team, </p><p><br></p><p>It gives me immense pleasure to announce that we won the following project and added the new team members. It gives me immense pleasure to announce that we won the following project and added the new team members.</p>",
      },
      {
        id: "2c9dfa6c-cf9e-4aaa-900f-20171ac09adc",
        component: "Call to Action",
        buttonText: "Hey There",
        buttonUrl: "https://cginfinity.com/",
        buttonColor: "#002C3F",
      },
    ],

    [
      {
        id: "d7087bc5-4410-40c5-b474-8d257f6ff89b",
        component: "Image",
        componentValue:
          "https://firebasestorage.googleapis.com/v0/b/email-builder--product.appspot.com/o/image%201%20(1).png?alt=media&token=1ce0b4cd-917b-468a-9e3b-8ff75e685063",
        imgName: "",
        isUploaded: false,
        imgBtnUrl: "",
        disableUrl: true,
      },
      {
        id: "4f76e683-3ab8-4d65-85d6-8e394ffe3be1",
        component: "Content",
        componentValue: "<h1>Win Announcement!</h1>",
      },
      {
        id: "57bcfb36-b0f3-46a9-856a-a03570c8227c",
        component: "Content",
        componentValue:
          "<p>Dear CG Team, </p><p><br></p><p>It gives me immense pleasure to announce that we won the following project and added the new team members. It gives me immense pleasure to announce that we won the following project and added the new team members.</p>",
      },
      {
        id: "2c9dfa6c-cf9e-4aaa-900f-20171ac09adc",
        component: "Call to Action",
        buttonText: "Hey There",
        buttonUrl: "https://cginfinity.com/",
        buttonColor: "#002C3F",
      },
    ],

    [
      {
        id: "d7087bc5-4410-40c5-b474-8d257f6ff89b",
        component: "Image",
        componentValue:
          "https://firebasestorage.googleapis.com/v0/b/email-builder--product.appspot.com/o/Template%203%20(1).png?alt=media&token=54af247d-4ad2-43ac-b1ac-439a5a1edb30",
        imgName: "",
        isUploaded: false,
        imgBtnUrl: "",
        disableUrl: true,
      },
      {
        id: "4f76e683-3ab8-4d65-85d6-8e394ffe3be1",
        component: "Content",
        componentValue: "<h1>Offer Letter</h1>",
      },
      {
        id: "57bcfb36-b0f3-46a9-856a-a03570c8227c",
        component: "Content",
        componentValue:
          "<p>Congratulations !</p><br><p>We are pleased to offer you a position of <strong>Intern</strong> at <strong>Cyber Group India Private Limited</strong>. We expect you to join us on <strong>10th October 2022</strong>.</p><p>We request you to confirm your availability along with acceptance mail to this offer.</p><p>Your detailed Offer Letter is enclosed to this email. We all are excited and look forward to welcome you as a part of our team.</p><br><p>In case of any concern or query please feel free to contact us.</p>",
      },
      {
        id: "2c9dfa6c-cf9e-4aaa-900f-20171ac09adc",
        component: "Call to Action",
        buttonText: "Hey There",
        buttonUrl: "https://cginfinity.com/",
        buttonColor: "#002C3F",
      },
    ],
  ];

  return (
    <>
      {fileUploadError && (
        <div
          className="background-preview-wrapper"
          style={{
            display: "",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.75)",

              display: "flex",

              justifyContent: "center",

              position: "fixed",

              width: "100vw",

              height: "100vh",

              zIndex: 100,

              top: 0,

              paddingTop: "30px",

              paddingBottom: "30px",

              alignItems: "center",
            }}
          >
            <div
              style={{
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                backgroundColor: "#ffffff", // textAlign: "center",
                width: "30rem",
                zIndex: "100",
                position: "fixed",
                top: "20vh",
                left: "calc(50% - 15rem)",
              }}
            >
              <div style={{ padding: "8px" }}>
                <RxCross1
                  style={{ marginLeft: "444px", cursor: "pointer" }}
                  onClick={() => setFileUploadError(false)}
                />
              </div>
              <div style={{ marginLeft: "211px" }}>
                <IoMdAlert
                  style={{
                    width: "60px",
                    height: "60px",
                    alignSelf: "center",
                    color: "red",
                  }}
                />
              </div>
              <div style={{ textAlign: "right", marginBottom: "16px" }}></div>

              <div
                style={{
                  width: "25rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  marginBottom: "32px", // border: "1px solid black",
                }}
              >
                <div style={{ color: "red" }}>
                  {/* <IoMdAlert size="72" /> <BsFillCheckCircleFill size={size} /> */}
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    lineHeight: "150%",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  Error!
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    textAlign: "center", //374px
                    width: "23rem",
                    marginBottom: "24px",
                  }}
                >
                  Edit Option is only available for templates created using ver
                  2.0.1
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",

                    justifyContent: "right", // border: "1px solid green",
                  }}
                >
                  <button
                    style={{
                      padding: "4px 16px",

                      alignItems: "center",
                      cursor: "pointer",

                      boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

                      borderRadius: "4px",

                      fontSize: "14px",

                      lineHeight: "32px",

                      fontWeight: "600",

                      border: "none",

                      backgroundColor: "#FFB81C",

                      width: "11.5rem",

                      color: "#000000",
                    }}
                    onClick={() => {
                      // setArr([]);
                      // console.log(setIndexVal);
                      setFileUploadError(false);
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="background-preview-wrapper"
        style={{
          display: state ? "" : "none",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",

            display: "flex",

            justifyContent: "center",

            position: "fixed",

            width: "100vw",

            height: "100vh",

            zIndex: 100,

            top: 0,

            paddingTop: "30px",

            paddingBottom: "30px",

            alignItems: "center",
          }}
        >
          <div
            style={{
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              backgroundColor: "#ffffff", // textAlign: "center",
              width: "30rem",
              zIndex: "100",
              position: "fixed",
              top: "20vh",
              left: "calc(50% - 15rem)",
            }}
          >
            <div style={{ padding: "8px" }}>
              <RxCross1
                style={{ marginLeft: "444px", cursor: "pointer" }}
                onClick={() => {
                  setArr(data);
                  setstate(false);
                }}
              />
            </div>
            <div style={{ marginLeft: "211px" }}>
              <FcInfo
                style={{ width: "60px", height: "60px", alignSelf: "center" }}
              />
            </div>
            <div style={{ textAlign: "right", marginBottom: "16px" }}></div>

            <div
              style={{
                width: "25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                marginBottom: "32px", // border: "1px solid black",
              }}
            >
              <div style={{ color: "red" }}>
                {/* <IoMdAlert size="72" /> <BsFillCheckCircleFill size={size} /> */}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  lineHeight: "150%",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Template saved
              </div>
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center", //374px
                  width: "23rem",
                  marginBottom: "24px",
                }}
              >
                Your previous template will be overwritten and lost. Do you want
                to continue?
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",

                  justifyContent: "right", // border: "1px solid green",
                }}
              >
                <button
                  variant="outlined"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    cursor: "pointer",
                    padding: "4px 16px",
                    background: "none",
                    border: "1px solid black",
                    borderRadius: "4px",
                    fontSize: "14px",
                    lineHeight: "32px",
                    width: "11.5rem",
                  }}
                  onClick={() => {
                    setArr(data);
                    setstate(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  style={{
                    padding: "4px 16px",
                    alignItems: "center",
                    cursor: "pointer",
                    boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",
                    borderRadius: "4px",
                    fontSize: "14px",
                    lineHeight: "32px",
                    fontWeight: "600",
                    border: "none",
                    backgroundColor: "#FFB81C",
                    width: "11.5rem",
                    color: "#000000",
                  }}
                  onClick={() => {
                    // setArr([]);
                    // console.log(setIndexVal);
                    setstate(false);
                    navigate("/template");
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="background-preview-wrapper"
        style={{
          display: preview ? "" : "none",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",

            display: "flex",

            justifyContent: "center",

            position: "fixed",

            width: "100vw",

            height: "100vh",

            zIndex: 100,

            top: 0,

            paddingTop: "30px",

            paddingBottom: "30px",

            alignItems: "center",
          }}
          onClick={() => {
            setShowVal(true);

            setPreview(false);
          }}
        >
          <div style={{}}>
            <div
              style={{
                height: "35px",

                background: "rgb(244, 245, 245)",

                // display: "flex",

                // justifyContent: "right",
              }}
            >
              <RxCross1
                style={{
                  marginTop: "9px",

                  marginRight: "14px",

                  cursor: "pointer",

                  marginLeft: "574px",
                }}
                onClick={() => {
                  setShowVal(true);

                  setPreview(false);
                }}
              />
            </div>

            <div
              style={{
                height: "400px",

                overflowY: "auto",

                overflowX: "hidden",
              }}
            >
              <Preview_template />
            </div>

            <div
              style={{
                height: "55px",

                background: "rgb(244, 245, 245)",

                gap: "15px",
              }}
            >
              <div
                style={{ display: "flex", gap: "15px", marginLeft: "405px" }}
              >
                <button
                  style={{
                    display: "flex",

                    width: "85px",

                    cursor: "pointer",

                    justifyContent: "center",

                    alignItems: "center",

                    height: "40px",

                    boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

                    borderRadius: "4px",

                    fontSize: "14px",

                    lineHeight: "16px",

                    fontWeight: "600",

                    paddingRight: "12px",

                    backgroundColor: "#FFFFFF",

                    opacity: "1",

                    marginTop: "8px",

                    border: "1px solid #343435",
                  }}
                  onClick={() => {
                    setShowVal(true);

                    setPreview(false);
                  }}
                >
                  <p style={{ color: "#343435", fontSize: "14px" }}>Close</p>
                </button>

                <div
                  // to="/template"
                  style={{
                    display: "flex",

                    width: "75px",

                    cursor: "pointer",

                    justifyContent: "center",

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

                    opacity: "1",

                    marginTop: "8px",

                    marginRight: "10px",
                  }}
                  onClick={() => {
                    editClickHandler(previewIndex);
                  }}
                >
                  <RiPencilFill
                    style={{ marginRight: "4px", color: "#343435" }}
                  />

                  <p style={{ color: "#343435", fontSize: "14px" }}>Edit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="createEmail-layout">
          <div className="templatePage-Card">
            <div className="image-container">
              <img src={Icon} alt="icon" className="templatepage-icon" />
              <img src={frame} alt="frame" />
            </div>

            <div className="text-container">
              <h2>Create new Template</h2>
              <p>
                Create and personalize every aspect of your email to suit your
                preferences.
              </p>

              <button
                className="templatepage-button"
                onClick={() => {
                  handleClick();
                }}
              >
                {" "}
                Start Creating
              </button>
            </div>
          </div>

          <div className="templatePage-Card">
            <div className="image-container">
              <img src={Icon2} alt="icon" className="templatepage-icon" />
              <img src={frame} alt="frame" style={{ visibility: "hidden" }} />
            </div>

            <div className="text-container">
              <h2>Edit Email Template</h2>
              <p>
                Upload your existing email template and make edits with ease.
              </p>
              <label className="templatepage-label" htmlFor="select-file">
                Choose File
              </label>
              <input
                type="file"
                accept=".eml, .emltpl"
                id="select-file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                value=""
              />
              {/* <button className="templatepage-button"> Choose File</button> */}
            </div>
          </div>

          {data && data.length != 0 ? (
            <div className="templatePage-Card">
              <div className="image-container">
                <img src={Icon3} alt="icon" className="templatepage-icon" />
                <img src={frame} alt="frame" style={{ visibility: "hidden" }} />
              </div>

              <div className="text-container">
                <h2>Continue Where you left</h2>
                <p>
                  You can resume your editing from where you left off. &nbsp;
                  &nbsp; &nbsp; &nbsp;
                </p>

                <Link
                  style={{ marginTop: "20px", display: "block" }}
                  to="/template"
                >
                  {" "}
                  <button className="templatepage-button"> Continue </button>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div style={{ overflowY: "auto" }}>
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                marginTop: "-22px",

                marginBottom: "-20px",

                display: "flex",

                flexDirection: "column",

                alignItems: "flex-start",

                padding: "30px",

                gap: "24px",

                height: "24",

                fontWeight: "bold",

                color: "#343435",
              }}
            >
              <h1>Template</h1>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",

                flexWrap: "wrap",

                overflowY: "scroll",

                height: "fit-content",
              }}
            >
              {arr.map((data, index) => (
                <div key={index}>
                  <div
                    className="card-body"
                    style={{
                      width: "270px",

                      height: "285px",

                      left: "0px",

                      top: "0px",

                      background: "#FFFFFF",

                      boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

                      marginLeft: "30px",

                      padding: "0px",

                      position: "relative",

                      // zIndex: "1",
                    }}
                    onMouseEnter={(e) => {
                      setIndexVal(index);

                      setvalue(true);
                    }}
                    onMouseLeave={(e) => {
                      setIndexVal(-1);

                      setvalue(false);
                    }}
                  >
                    {indexVal === index && value && (
                      <div>
                        <div
                          style={{
                            width: "271px",

                            height: "190px",

                            display: "flex",

                            flexDirection: "column",

                            position: "absolute",

                            alignItems: "center",

                            paddingTop: "95px",

                            marginLeft: "55px",

                            // opacity: "0.5",

                            backgroundColor: "rgb(0,0,0, 0.5)",

                            right: "-1px",

                            top: "0px",

                            zIndex: "1",
                          }}
                        >
                          <div
                            // to="/template"
                            style={{
                              display: "flex",

                              width: "116px",

                              cursor: "pointer",

                              justifyContent: "center",

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

                              opacity: "1",
                            }}
                            onClick={() => editClickHandler(index)}
                          >
                            <RiPencilFill
                              style={{ marginRight: "4px", color: "#343435" }}
                            />

                            <p style={{ color: "#343435", fontSize: "14px" }}>
                              Edit
                            </p>
                          </div>

                          <button
                            style={{
                              display: "flex",

                              width: "130px",

                              cursor: "pointer",

                              justifyContent: "center",

                              alignItems: "center",

                              height: "40px",

                              boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

                              borderRadius: "4px",

                              fontSize: "14px",

                              lineHeight: "16px",

                              fontWeight: "600",

                              paddingRight: "12px",

                              // border: "none",

                              backgroundColor: "#FFFFFF",

                              opacity: "1",

                              marginTop: "11px",

                              border: "1px solid #343435",
                            }}
                            onClick={() => {
                              setPreviewIndex(index);
                              previewClickHandler(index);
                            }}
                          >
                            <AiFillEye
                              style={{ marginRight: "4px", color: "#343435" }}
                            />

                            <p style={{ color: "#343435", fontSize: "14px" }}>
                              Preview
                            </p>
                          </button>
                        </div>
                      </div>
                    )}

                    <div
                      style={{
                        boxSizing: "border-box",

                        width: "268px",

                        height: "284px",
                      }}
                    >
                      <img
                        src={data.image}
                        style={{
                          width: "268px",

                          height: "273px",

                          position: "absolute",

                          top: "12px",
                        }}
                        alt="template"
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      width: "271px",

                      height: "55px",

                      top: "254px",

                      background: "#343435",

                      marginLeft: "31px",

                      position: "relative",

                      right: "1px",

                      top: "-71px",

                      zIndex: "5",
                    }}
                  >
                    <p
                      style={{
                        color: "#FFFFFF",

                        padding: "15px",

                        fontWeight: "600",
                      }}
                    >
                      {data.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="version-banner">
            <p>
              Ver <span className="version-info">2.0.1</span> Updated on{" "}
              <span className="version-info">27-07-2023</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
