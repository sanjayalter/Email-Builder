import React from "react";

export default function ImageContent(props) {
  console.log(props);
  return (
    <table
      style={{
        width: "600px",
        height: "20px",
        textAlign: "center",
        paddingTop: "5px",
        paddingBottom: "5px",
        backgroundColor: props.bgColor,
      }}
    >
      <tr style={{ width: "600px" }}>
        <td align={"center"} style={{ width: "600px" }} width="600">
          <img
            width={props.width}
            style={{
              border: 0,
              outline: "none",
              textDecoration: "none",
              display: "block",
            }}
            alt="Logo"
            src={props.src}
            align="center"
            //TODO:
          />

          <p
            style={{
              color: props.subtitleColor,

              marginTop: "4px",

              fontWeight: 500,

              fontSize: "15px",

              lineHeight: "13px",

              letterSpacing: "1px",
            }}
          >
            People First{" "}
            <span style={{ color: "#FCB518", fontWeight: 900 }}>+</span> Driven
            to Transform{" "}
          </p>
        </td>
      </tr>
    </table>
  );
}
