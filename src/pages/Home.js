import React from "react";
import Context, { Contentcontext } from "../context/Context";
import Header from "../components/header";
import Display from "../components/Display";
import Editor from "../components/Editor";
import Confirmation from "../components/Confirmation";
import Background from "../components/Background";
import { useContext } from "react";

const Home = () => {
  const { confirmation,fileNameError ,setFileNameError,  setConfirmation,} = useContext(Contentcontext);
  console.log(confirmation);
  return (
    <>
      {confirmation  && <Background />}
      {confirmation  && <Confirmation type={"clearConfirmation"} msg1={"Are you sure?"} msg2={"Your data will be permanently deleted. Are you sure you want to proceed?"} handler={  setConfirmation}/>}

      {fileNameError  && <Background  />}
      {fileNameError  && <Confirmation type={"fileNameError"} msg1={"Error "} msg2={"Please Change file Name"} handler={setFileNameError} />}

      <div style={{ height: "100%", display: "flex" }}>
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

export default Home;
