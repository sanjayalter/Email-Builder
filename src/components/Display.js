import React, { useContext, useEffect } from "react";
import { Contentcontext } from "../context/Context";
import { ActionBar } from "./actionbar";
import Template from "./Template";
const Display = () => {
  const { arr, setArr } = useContext(Contentcontext);
  // useEffect(() => {
  //   return console.log(arr);
  // }, [arr, setArr]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "9px",
        height: "calc(100vh - 80px)",
        // minHeight: "100%",
        // maxHeight: "100%",
        position: "relative",
        overflow: "hidden",
        // border: "1px solid black",
      }}
    >
      <div
        style={{
          minWidth: "753px",
          height: "72px",
          marginBottom: "9px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActionBar />
      </div>
      <div style={{ width: "736px",overflow:"auto" }}>
        <Template />
      </div>
    </div>
  );
};

export default Display;
