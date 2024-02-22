import React, { Fragment, useContext, useState } from "react";
import { Contentcontext } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { RiDragMove2Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

const Content = ({ indexVal, userValue, id, item }) => {
  const [show, setShow] = useState(true);

  const {
    setEditorBtn,
    setFormatting,
    data,
    arr,
    setArr,
    setId,
    indVal,
    setIndVal,
    selectedComponent,
    setSelectedComponent,
    showVal,
  } = useContext(Contentcontext);

  return (
    // <div style={{ border: "1px solid black" }}>
    <div
      style={{
        position: "relative",
        backgroundColor: "none",
        boxSizing: "border-box",
        // width: "600px",
        // height: show ? "calc(100% - 4px)" : "100%",
        // paddingTop: show ? "22px" : "24px",
        // paddingBottom: show ? "28px" : "30px",
        // paddingLeft: show ? "22px" : "24px",

        // border: show && showVal && "2px solid #74D1EA",
        // border: "2px solid #74D1EA",
      }}
      // draggable
      onDragOver={(e) => {
        e.preventDefault();
        // console.log(indexVal);
      }}
      onDragEnter={() => {
        // setIndVal(indexVal);
        setShow(true);
        // console.log(indVal);
      }}
      onDragLeave={() => {
        // setIndVal(-1);
        setShow(false);
        // console.log(indVal);
      }}
      onDrop={() => {
        // console.log("rop of Content");
        let temp = [...arr];
        temp.splice(indVal, 1);
        setArr(temp);
        temp.splice(indexVal, 0, selectedComponent);
        setArr(temp);
      }}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {show && showVal && (
        <div
          style={{
            position: "absolute",
            top: "2px",
            left: "68px",
            color: "#FFFFFF",
            backgroundColor: "#74D1EA",
            fontSize: "14px",
            lineHeight: "16px",
            padding: "4px",
            fontWeight: "500",
          }}
        >
          Content
        </div>
      )}
      {show && showVal && (
        <div
          style={{
            position: "absolute",
            top: "2px",
            right: "68px",
            backgroundColor: "#343435",
            opacity: "80%",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            jutifyContent: "center",
            gap: "7px",
            padding: "4px 2px",
            cursor: "pointer",
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setEditorBtn("s");
              let temp = [...arr];
              temp.splice(indexVal, 1);
              setArr(temp);
            }}
          >
            <AiFillDelete size="20px" />
          </div>
          <div
            onClick={(e) => {
              console.log("I am getting clicked edit button ");
              e.stopPropagation();
              setEditorBtn("f");
              setFormatting("texteditor");
              setId(id);
            }}
          >
            <MdModeEditOutline size="20px" />
          </div>
          <div
            draggable="true"
            onDragStart={() => {
              setIndVal(indexVal);
              // console.log("dragging start");
              setSelectedComponent(item);
              // console.log(selectedComponent);
            }}
            onDragEnd={() => {
              setIndVal(-1);
              // console.log("dragging stop");
              // let temp = [...arr];
              // temp.splice(indexVal, 1);
              // setArr(temp);
            }}
          >
            <RiDragMove2Line size="21px" />
          </div>
        </div>
      )}

      {/* <div dangerouslySetInnerHTML={{__html:data}} />
    
  </div> */}

      <table
        style={{
          backgroundColor: "white",
          width: "600px",
          textAlign: "center",

          borderSpacing: "none",
          border: show && showVal && "2px solid #74D1EA",
        }}
        cellPadding="0"
        cellSpacing="0"
        width="600"
        align="center"
      >
        <tr>
          <td
            align="center"
            style={{
              paddingTop: (show && showVal) ? "22px" : "24px",
              paddingBottom: (show && showVal) ? "22px" : "24px",
              paddingLeft: (show && showVal) ? "22px" : "24px",
              paddingRight: (show && showVal) ? "22px" : "24px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                width: "552px",
                textAlign: "left",
                boxSizing: "border-box",
              }}
              dangerouslySetInnerHTML={{ __html: userValue || data }}
            ></div>
          </td>
        </tr>
      </table>
    </div>
    // </div>
  );
};

export default Content;
