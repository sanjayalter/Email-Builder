import React from "react";
import Header from "../components/header";
import Display from "../components/Display";
import Editor from "../components/Editor";
import Confirmation from "../components/Confirmation";
import Background from "../components/Background";
import { Contentcontext } from "../context/Context";
import { useContext } from "react";

const Selectedtemplate = () => {
  const { confirmation } = useContext(Contentcontext);
  return (
    <>
      {confirmation && <Confirmation /> && <Background />}
      <div style={{ position: "sticky", top: "0" }}>
        <Header />
      </div>
      <div
        style={{ height: "100%", display: "flex", border: "1px solid black" }}
      >
        <div style={{ width: "66%" }}>
          <Display />
        </div>
        <div
          style={{ width: "34%", display: "flex", justifyContent: "center" }}
        >
          <Editor />
        </div>
      </div>
    </>
  );
};

export default Selectedtemplate;