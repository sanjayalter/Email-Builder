import React from "react";



import { IoMdAlert } from "react-icons/io";


import { useContext } from "react";
import { Contentcontext } from "../context/Context";

const Confirmation = ({ msg1,msg2,handler,type }) => {
  const { setArr, setEditorBtn } = useContext(Contentcontext);
  const col = "red";


  

  const cancelbuttonStyle = {
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
  };

  const savebuttonStyle = {
    padding: "4px 16px",

    alignItems: "center",
    cursor: "pointer",

    boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",

    borderRadius: "4px",

    fontSize: "14px",

    lineHeight: "32px",

    fontWeight: "600",

    border: "none",

    backgroundColor: "#E03E2D",

    width: "11.5rem",

    color: "#ffffff",
  };

  return (
    <div
      style={{
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
        width: "30rem",
        zIndex: "100",
        position: "fixed",
        top: "20vh",
        left: "calc(50% - 15rem)",
      }}
    >
      <div style={{ textAlign: "right", marginBottom: "16px" }}></div>
      <div
        style={{
          width: "25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginBottom: "32px", 
        }}
      >
        <div style={{ color: col }}>
          <IoMdAlert size="72" /> 
        </div>
        <div
          style={{
            fontSize: "20px",
            lineHeight: "150%",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
         {msg1}
        </div>
        <div
          style={{
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: "center", 
            width: "23rem",
            marginBottom: "24px",
          }}
        >
        {msg2 }
        </div>

        {type==="clearConfirmation" ?   <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",

            justifyContent: "right", 
          }}
        >


          
          <button
            variant="outlined"
            style={cancelbuttonStyle}
            onClick={() => {
              handler(false);
              
            }}
          >
            Cancel
          </button>
          <button
            style={savebuttonStyle}
            onClick={() => {
              setArr([]);
              setEditorBtn("s");
              handler(false);
            }}
          >
            Clear
          </button>
        </div> : <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",

            justifyContent: "right", 
          }}
        >


          
          <button
            variant="outlined"
            style={cancelbuttonStyle}
            onClick={() => {
              handler(false);
            
            }}
          >
            Continue
          </button> </div>}
      
      </div>
    </div>
  );
};

export default Confirmation;
