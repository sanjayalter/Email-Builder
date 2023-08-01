import React, { useContext, useState } from "react";
import { Contentcontext } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { RiDragMove2Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

const CallToAction = ({
  indexVal,
  item,
  id,
  buttonText,
  buttonUrl,
  buttonColor,
}) => {
  const [show, setShow] = useState(true);
  const {
    setEditorBtn,
    setFormatting,
    setArr,
    arr,
    indVal,
    setId,
    setIndVal,
    selectedComponent,
    setSelectedComponent,
    showVal,
  } = useContext(Contentcontext);

  return (
    <div
      style={{
        position: "relative",
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDragEnter={() => {
        setShow(true);
      }}
      onDragLeave={() => {
        setShow(false);
      }}
      onDrop={() => {
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
          Call to Action
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
              e.stopPropagation();
              setEditorBtn("f");
              setFormatting("linkbutton");
              setId(id);
            }}
          >
            <MdModeEditOutline size="20px" />
          </div>
          <div
            draggable="true"
            onDragStart={() => {
              setIndVal(indexVal);
              setSelectedComponent(item);
            }}
            onDragEnd={() => {
              setIndVal(-1);
            }}
          >
            <RiDragMove2Line size="21px" />
          </div>
        </div>
      )}
      <table
        align="center"
        width="600"
        style={{ backgroundColor: "#ffffff" }}
        cellPadding="0"
        cellSpacing="0"
      >
        <td
          style={{
            padding: show && showVal ? "18px" : "20px",
            border: show && showVal && "2px solid #74D1EA",
            width: show && showVal ? "calc(100% - 4px)" : "100%",
          }}
        >
          <table align="center" style={{ textDecoration: "none" }}>
            <tr>
              <td
                align="center"
                style={{
                  borderRadius: "2px",
                  backgroundColor: buttonColor,
                  border: buttonColor === "#ffffff" && "1px solid #000000",
                  textDecoration: "none",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                }}
              >
                <a
                  href={buttonUrl}
                  target="_blank"
                  style={{
                    padding: "8px 12px",
                    fontFamily: "Helvetica, Arial",
                    fontSize: "14px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    display: "block",
                  }}
                  rel="noreferrer"
                >
                  <font
                    color={buttonColor === "#ffffff" ? "#000000" : "#ffffff"}
                  >
                    <span
                      style={{ textDecoration: "none", textUnderline: "none" }}
                    >
                      {buttonText}
                    </span>
                  </font>
                </a>
              </td>
            </tr>
          </table>
        </td>
      </table>
    </div>
  );
};

export default CallToAction;
