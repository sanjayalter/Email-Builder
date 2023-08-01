// import { colors } from "@mui/material";

// import new_file_icon from "../Images/file_copy.svg";

// import template1 from "../Images/image 359.svg";

// import template2 from "../Images/image 360.svg";

// import template3 from "../Images/image 361.svg";

// import { RiSendPlaneFill } from "react-icons/ri";

// import { AiFillEye } from "react-icons/ai";

// import { ImFilesEmpty } from "react-icons/im";

// import { AiOutlineArrowRight } from "react-icons/ai";

// import { AiOutlinePlus } from "react-icons/ai";

// import { RxCross1 } from "react-icons/rx";

// import { RiPencilFill } from "react-icons/ri";

// import { FcInfo } from "react-icons/fc";

// import React, { useState, useContext, useEffect } from "react";

// import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

// import { Contentcontext } from "../context/Context";

// import Preview_template from "../components/preview_template";

// export default function Templatepage() {
//   const navigate = useNavigate();

//   const [value, setvalue] = useState(false);

//   const [indexVal, setIndexVal] = useState(-1);

//   const { setArr, setarr1, setShowVal, preview, setPreview, setEditorBtn } =
//     useContext(Contentcontext);

//   const [state, setstate] = useState(false);

//   const [previewIndex, setPreviewIndex] = useState();

//   const data = localStorage.getItem("templateArray");

//   useEffect(() => {
//     setEditorBtn("s");
//   }, []);

//   const editClickHandler = (index) => {
//     if (data !== "[]") {
//       // console.log(
//       //   "this is the console value",
//       //   localStorage.getItem("templateArray")
//       // );
//       console.log("this is index value" + index);
//       setArr(pre_template[index]);
//       setstate(true);
//     } else {
//       console.log("entering");
//       setArr(pre_template[index]);
//       navigate("/template");
//     }
//   };

//   const handleClick = () => {
//     if (data !== "[]") {
//       setArr([]);
//       setstate(true);
//     } else {
//       setArr([]);
//       navigate("/template");
//     }
//   };
//   const previewClickHandler = (index) => {
//     setShowVal(false);

//     setPreview(true);

//     setarr1([]);

//     setarr1(pre_template[index]);
//   };

//   const arr = [
//     {
//       name: "Cricket Tournament",

//       image: template1,
//     },

//     {
//       name: "Win Announcement",

//       image: template2,
//     },

//     {
//       name: "Onboarding",

//       image: template3,
//     },
//   ];

//   const pre_template = [
//     [
//       {
//         id: "d7087bc5-4410-40c5-b474-8d257f6ff89b",
//         component: "Image",
//         componentValue:
//           "https://firebasestorage.googleapis.com/v0/b/email-builder--product.appspot.com/o/Cricket%20Tournament%20(1).png?alt=media&token=c259db01-b002-4195-980b-8198205776db",
//         imgName: "",
//         isUploaded: false,
//         imgBtnUrl: "",
//         disableUrl: true,
//       },
//       {
//         id: "4f76e683-3ab8-4d65-85d6-8e394ffe3be1",
//         component: "Content",
//         componentValue: "<h1><strong>Win Announcement!</strong><br></h1>",
//       },
//       {
//         id: "57bcfb36-b0f3-46a9-856a-a03570c8227c",
//         component: "Content",
//         componentValue:
//           "<p>Dear CG Team, </p><p><br></p><p>It gives me immense pleasure to announce that we won the following project and added the new team members. It gives me immense pleasure to announce that we won the following project and added the new team members.</p>",
//       },
//       {
//         id: "2c9dfa6c-cf9e-4aaa-900f-20171ac09adc",
//         component: "Call to Action",
//         buttonText: "Hey There",
//         buttonUrl: "https://cginfinity.com/",
//         buttonColor: "#002C3F",
//       },
//     ],

//     [
//       {
//         id: "d7087bc5-4410-40c5-b474-8d257f6ff89b",
//         component: "Image",
//         componentValue:
//           "https://firebasestorage.googleapis.com/v0/b/email-builder--product.appspot.com/o/image%201%20(1).png?alt=media&token=1ce0b4cd-917b-468a-9e3b-8ff75e685063",
//         imgName: "",
//         isUploaded: false,
//         imgBtnUrl: "",
//         disableUrl: true,
//       },
//       {
//         id: "4f76e683-3ab8-4d65-85d6-8e394ffe3be1",
//         component: "Content",
//         componentValue: "<h1>Win Announcement!</h1>",
//       },
//       {
//         id: "57bcfb36-b0f3-46a9-856a-a03570c8227c",
//         component: "Content",
//         componentValue:
//           "<p>Dear CG Team, </p><p><br></p><p>It gives me immense pleasure to announce that we won the following project and added the new team members. It gives me immense pleasure to announce that we won the following project and added the new team members.</p>",
//       },
//       {
//         id: "2c9dfa6c-cf9e-4aaa-900f-20171ac09adc",
//         component: "Call to Action",
//         buttonText: "Hey There",
//         buttonUrl: "https://cginfinity.com/",
//         buttonColor: "#002C3F",
//       },
//     ],

//     [
//       {
//         id: "d7087bc5-4410-40c5-b474-8d257f6ff89b",
//         component: "Image",
//         componentValue:
//           "https://firebasestorage.googleapis.com/v0/b/email-builder--product.appspot.com/o/Template%203%20(1).png?alt=media&token=54af247d-4ad2-43ac-b1ac-439a5a1edb30",
//         imgName: "",
//         isUploaded: false,
//         imgBtnUrl: "",
//         disableUrl: true,
//       },
//       {
//         id: "4f76e683-3ab8-4d65-85d6-8e394ffe3be1",
//         component: "Content",
//         componentValue: "<h1>Offer Letter</h1>",
//       },
//       {
//         id: "57bcfb36-b0f3-46a9-856a-a03570c8227c",
//         component: "Content",
//         componentValue:
//           "<p>Congratulations !</p><br><p>We are pleased to offer you a position of <strong>Intern</strong> at <strong>Cyber Group India Private Limited</strong>. We expect you to join us on <strong>10th October 2022</strong>.</p><p>We request you to confirm your availability along with acceptance mail to this offer.</p><p>Your detailed Offer Letter is enclosed to this email. We all are excited and look forward to welcome you as a part of our team.</p><br><p>In case of any concern or query please feel free to contact us.</p>",
//       },
//       {
//         id: "2c9dfa6c-cf9e-4aaa-900f-20171ac09adc",
//         component: "Call to Action",
//         buttonText: "Hey There",
//         buttonUrl: "https://cginfinity.com/",
//         buttonColor: "#002C3F",
//       },
//     ],
//   ];

//   return (
//     <>
//       <div
//         className="background-preview-wrapper"
//         style={{
//           display: state ? "" : "none",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "rgba(0,0,0,0.75)",

//             display: "flex",

//             justifyContent: "center",

//             position: "fixed",

//             width: "100vw",

//             height: "100vh",

//             zIndex: 100,

//             top: 0,

//             paddingTop: "30px",

//             paddingBottom: "30px",

//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
//               backgroundColor: "#ffffff", // textAlign: "center",
//               width: "30rem",
//               zIndex: "100",
//               position: "fixed",
//               top: "20vh",
//               left: "calc(50% - 15rem)",
//             }}
//           >
//             <div style={{ padding: "8px" }}>
//               <RxCross1
//                 style={{ marginLeft: "444px", cursor: "pointer" }}
//                 onClick={() => {
//                   setstate(false);
//                 }}
//               />
//             </div>
//             <div style={{ marginLeft: "211px" }}>
//               <FcInfo
//                 style={{ width: "60px", height: "60px", alignSelf: "center" }}
//               />
//             </div>
//             <div style={{ textAlign: "right", marginBottom: "16px" }}></div>

//             <div
//               style={{
//                 width: "25rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 margin: "auto",
//                 marginBottom: "32px", // border: "1px solid black",
//               }}
//             >
//               <div style={{ color: "red" }}>
//                 {/* <IoMdAlert size="72" /> <BsFillCheckCircleFill size={size} /> */}
//               </div>
//               <div
//                 style={{
//                   fontSize: "20px",
//                   lineHeight: "150%",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                 }}
//               >
//                 Template saved
//               </div>
//               <div
//                 style={{
//                   fontSize: "16px",
//                   lineHeight: "20px",
//                   textAlign: "center", //374px
//                   width: "23rem",
//                   marginBottom: "24px",
//                 }}
//               >
//                 Your previous template will be overwritten and lost. Do you want
//                 to continue?
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   gap: "16px",

//                   justifyContent: "right", // border: "1px solid green",
//                 }}
//               >
//                 <button
//                   variant="outlined"
//                   style={{
//                     color: "black",

//                     fontWeight: "bold",
//                     cursor: "pointer",

//                     padding: "4px 16px",

//                     background: "none",

//                     border: "1px solid black",

//                     borderRadius: "4px",

//                     fontSize: "14px",

//                     lineHeight: "32px",

//                     width: "11.5rem",
//                   }}
//                   onClick={() => {
//                     // setConfirmation(false);
//                     // setArr([]);
//                     setstate(false);
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   style={{
//                     padding: "4px 16px",

//                     alignItems: "center",
//                     cursor: "pointer",

//                     boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

//                     borderRadius: "4px",

//                     fontSize: "14px",

//                     lineHeight: "32px",

//                     fontWeight: "600",

//                     border: "none",

//                     backgroundColor: "#FFB81C",

//                     width: "11.5rem",

//                     color: "#000000",
//                   }}
//                   onClick={() => {
//                     // setArr([]);
//                     // console.log(setIndexVal);
//                     setstate(false);
//                     navigate("/template");
//                   }}
//                 >
//                   OK
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         className="background-preview-wrapper"
//         style={{
//           display: preview ? "" : "none",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "rgba(0,0,0,0.75)",

//             display: "flex",

//             justifyContent: "center",

//             position: "fixed",

//             width: "100vw",

//             height: "100vh",

//             zIndex: 100,

//             top: 0,

//             paddingTop: "30px",

//             paddingBottom: "30px",

//             alignItems: "center",
//           }}
//           onClick={() => {
//             setShowVal(true);

//             setPreview(false);
//           }}
//         >
//           <div style={{}}>
//             <div
//               style={{
//                 height: "35px",

//                 background: "rgb(244, 245, 245)",

//                 // display: "flex",

//                 // justifyContent: "right",
//               }}
//             >
//               <RxCross1
//                 style={{
//                   marginTop: "9px",

//                   marginRight: "14px",

//                   cursor: "pointer",

//                   marginLeft: "574px",
//                 }}
//                 nClick={() => {
//                   setShowVal(true);

//                   setPreview(false);
//                 }}
//               />
//             </div>

//             <div
//               style={{
//                 height: "400px",

//                 overflowY: "auto",

//                 overflowX: "hidden",
//               }}
//             >
//               <Preview_template />
//             </div>

//             <div
//               style={{
//                 height: "55px",

//                 background: "rgb(244, 245, 245)",

//                 gap: "15px",
//               }}
//             >
//               <div
//                 style={{ display: "flex", gap: "15px", marginLeft: "405px" }}
//               >
//                 <button
//                   style={{
//                     display: "flex",

//                     width: "85px",

//                     cursor: "pointer",

//                     justifyContent: "center",

//                     alignItems: "center",

//                     height: "40px",

//                     boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

//                     borderRadius: "4px",

//                     fontSize: "14px",

//                     lineHeight: "16px",

//                     fontWeight: "600",

//                     paddingRight: "12px",

//                     backgroundColor: "#FFFFFF",

//                     opacity: "1",

//                     marginTop: "8px",

//                     border: "1px solid #343435",
//                   }}
//                   onClick={() => {
//                     setShowVal(true);

//                     setPreview(false);
//                   }}
//                 >
//                   <p style={{ color: "#343435", fontSize: "14px" }}>Close</p>
//                 </button>

//                 <div
//                   // to="/template"
//                   style={{
//                     display: "flex",

//                     width: "75px",

//                     cursor: "pointer",

//                     justifyContent: "center",

//                     alignItems: "center",

//                     height: "40px",

//                     boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

//                     borderRadius: "4px",

//                     fontSize: "14px",

//                     lineHeight: "16px",

//                     fontWeight: "600",

//                     paddingRight: "12px",

//                     border: "none",

//                     backgroundColor: "#FFB81C",

//                     opacity: "1",

//                     marginTop: "8px",

//                     marginRight: "10px",
//                   }}
//                   onClick={() => {
//                     editClickHandler(previewIndex);
//                   }}
//                 >
//                   <RiPencilFill
//                     style={{ marginRight: "4px", color: "#343435" }}
//                   />

//                   <p style={{ color: "#343435", fontSize: "14px" }}>Edit</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{ overflowY: "auto" }}>
//         <div className="card">
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <div
//               style={{
//                 marginTop: "-22px",

//                 marginBottom: "-20px",

//                 display: "flex",

//                 flexDirection: "column",

//                 alignItems: "flex-start",

//                 padding: "30px",

//                 gap: "24px",

//                 height: "24",

//                 fontWeight: "bold",

//                 color: "#343435",
//               }}
//             >
//               <h1>Template</h1>
//             </div>

//             <Link
//               to="/template"
//               style={{ padding: "32px", marginRight: "15px" }}
//             >
//               <button
//                 style={{
//                   width: "191px",

//                   gap: "8px",

//                   cursor: "pointer",

//                   background: "#28519E",

//                   display: "flex",

//                   justifyContent: "center",

//                   alignItems: "center",

//                   height: "40px",

//                   boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

//                   borderRadius: "4px",

//                   fontSize: "12px",

//                   lineHeight: "16px",

//                   fontWeight: "600",

//                   paddingRight: "12px",

//                   border: "none",

//                   backgroundColor: "#28519E",

//                   opacity: "1",
//                 }}
//               >
//                 <p style={{ color: "#FFFFFF" }}>Continue where you left</p>

//                 <AiOutlineArrowRight style={{ color: "#FFFFFF" }} />
//               </button>
//             </Link>
//           </div>

//           <div style={{ display: "flex" }}>
//             <div
//               style={{
//                 display: "flex",

//                 flexWrap: "wrap",

//                 overflowY: "scroll",

//                 height: "80vh",
//               }}
//             >
//               <div
//                 className="card-body"
//                 style={{
//                   width: "270px",

//                   height: "285px",

//                   left: "0px",

//                   top: "0px",

//                   background: "#FFFFFF",

//                   boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

//                   marginLeft: "30px",

//                   padding: "0px",
//                 }}
//               >
//                 <div
//                   style={{
//                     boxSizing: "border-box",

//                     width: "241px",

//                     height: "254px",

//                     border: "1px dashed #E9ECEB",

//                     display: "flex",

//                     justifyContent: "center",

//                     alignItems: "center",

//                     marginLeft: "15px",

//                     marginTop: "14px",
//                   }}
//                 >
//                   <div
//                     // to="/template"
//                     className="card-body_inner"
//                     style={{
//                       height: "137px",

//                       left: "0px",

//                       top: "0px",

//                       display: "flex",

//                       textAlign: "center",

//                       alignItems: "center",

//                       flexDirection: "column",

//                       cursor: "pointer",
//                     }}
//                     onClick={() => {
//                       handleClick();
//                     }}
//                   >
//                     <img
//                       src={new_file_icon}
//                       style={{ padding: "15px" }}
//                       alt="icon"
//                     />

//                     <button
//                       style={{
//                         width: "191px",

//                         gap: "8px",

//                         cursor: "pointer",

//                         background: "#FFB81C",

//                         display: "flex",

//                         justifyContent: "center",

//                         alignItems: "center",

//                         height: "40px",

//                         boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

//                         borderRadius: "4px",

//                         fontSize: "14px",

//                         lineHeight: "16px",

//                         fontWeight: "600",

//                         paddingRight: "12px",

//                         border: "none",

//                         backgroundColor: "#FFB81C",

//                         opacity: "1",
//                       }}
//                     >
//                       <AiOutlinePlus />

//                       <p style={{ color: "#343435" }}>Create New Template</p>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {arr.map((data, index) => (
//                 <div key={index}>
//                   <div
//                     className="card-body"
//                     style={{
//                       width: "270px",

//                       height: "285px",

//                       left: "0px",

//                       top: "0px",

//                       background: "#FFFFFF",

//                       boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

//                       marginLeft: "30px",

//                       padding: "0px",

//                       position: "relative",

//                       // zIndex: "1",
//                     }}
//                     onMouseEnter={(e) => {
//                       setIndexVal(index);

//                       setvalue(true);
//                     }}
//                     onMouseLeave={(e) => {
//                       setIndexVal(-1);

//                       setvalue(false);
//                     }}
//                   >
//                     {indexVal === index && value && (
//                       <div>
//                         <div
//                           style={{
//                             width: "271px",

//                             height: "190px",

//                             display: "flex",

//                             flexDirection: "column",

//                             position: "absolute",

//                             alignItems: "center",

//                             paddingTop: "95px",

//                             marginLeft: "55px",

//                             // opacity: "0.5",

//                             backgroundColor: "rgb(0,0,0, 0.5)",

//                             right: "-1px",

//                             top: "0px",

//                             zIndex: "1",
//                           }}
//                         >
//                           <div
//                             // to="/template"
//                             style={{
//                               display: "flex",

//                               width: "116px",

//                               cursor: "pointer",

//                               justifyContent: "center",

//                               alignItems: "center",

//                               height: "40px",

//                               boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

//                               borderRadius: "4px",

//                               fontSize: "14px",

//                               lineHeight: "16px",

//                               fontWeight: "600",

//                               paddingRight: "12px",

//                               border: "none",

//                               backgroundColor: "#FFB81C",

//                               opacity: "1",
//                             }}
//                             onClick={() => editClickHandler(index)}
//                           >
//                             <RiPencilFill
//                               style={{ marginRight: "4px", color: "#343435" }}
//                             />

//                             <p style={{ color: "#343435", fontSize: "14px" }}>
//                               Edit
//                             </p>
//                           </div>

//                           <button
//                             style={{
//                               display: "flex",

//                               width: "130px",

//                               cursor: "pointer",

//                               justifyContent: "center",

//                               alignItems: "center",

//                               height: "40px",

//                               boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

//                               borderRadius: "4px",

//                               fontSize: "14px",

//                               lineHeight: "16px",

//                               fontWeight: "600",

//                               paddingRight: "12px",

//                               // border: "none",

//                               backgroundColor: "#FFFFFF",

//                               opacity: "1",

//                               marginTop: "11px",

//                               border: "1px solid #343435",
//                             }}
//                             onClick={() => {
//                               setPreviewIndex(index);
//                               previewClickHandler(index);
//                             }}
//                           >
//                             <AiFillEye
//                               style={{ marginRight: "4px", color: "#343435" }}
//                             />

//                             <p style={{ color: "#343435", fontSize: "14px" }}>
//                               Preview
//                             </p>
//                           </button>
//                         </div>
//                       </div>
//                     )}

//                     <div
//                       style={{
//                         boxSizing: "border-box",

//                         width: "268px",

//                         height: "284px",
//                       }}
//                     >
//                       <img
//                         src={data.image}
//                         style={{
//                           width: "268px",

//                           height: "273px",

//                           position: "absolute",

//                           top: "12px",
//                         }}
//                         alt="template"
//                       />
//                     </div>
//                   </div>

//                   <div
//                     style={{
//                       width: "271px",

//                       height: "55px",

//                       top: "254px",

//                       background: "#343435",

//                       marginLeft: "31px",

//                       position: "relative",

//                       right: "1px",

//                       top: "-71px",

//                       zIndex: "5",
//                     }}
//                   >
//                     <p
//                       style={{
//                         color: "#FFFFFF",

//                         padding: "15px",

//                         fontWeight: "600",
//                       }}
//                     >
//                       {data.name}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div
//             className="continue-button-wrapper"
//             style={{
//               fontSize: "18px",

//               display: "flex",

//               flexDirection: "column",

//               alignItems: "flex-start",

//               padding: "30px",

//               gap: "24px",

//               height: "24",

//               fontWeight: "600",

//               color: "74d1ea",
//             }}
//           ></div>
//         </div>
//       </div>
//     </>
//   );
// }