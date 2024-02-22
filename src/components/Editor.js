import { Box, Stack, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Contentcontext } from "../context/Context";
import Structure from "./Structure";
import {
  TextEditor,
  Linkbutton,
  BgColor,
  Imageformatting,
  Selecttheme,
} from "./FormattingComponent";
import Footerformatting from "./FormattingComponent/Footerformatting";

const Editor = () => {
  const { editorBtn, setEditorBtn, formatting } = useContext(Contentcontext);
  const parentWrapper = {
    width: "100%",
    // 836px
    height: "calc(100vh - 80px)",
    background: "#ffffff",
    borderRight: "2px solid #E9ECEB",
    paddingTop: "9px",
  };
  const structurestyle = {
    fontWeight: "bold",
    fontSize: "16px",
    width: "211.5px",
    height: "41px",
    padding: "11px 12px",
    color: "black",
    cursor: "pointer",
    borderRadius: "4px 0 0 4px",
    border: "1px #E9ECEB solid", //#E9ECEB
  };
  const structureStyleOnClick = {
    fontWeight: "bold",
    fontSize: "16px",
    width: "211.5px",
    height: "41px",
    padding: "11px 12px",
    color: "white",
    cursor: "pointer",
    backgroundColor: "#28519E",
    borderRadius: "4px 0 0 4px",
    border: "1px #E9ECEB solid", //#E9ECEB
  };
  const formattingstyle = {
    fontWeight: "bold",
    fontSize: "16px",
    width: "211.5px",
    height: "41px",
    padding: "11px 12px",
    color: "black",
    cursor: "pointer",
    borderRadius: "0 4px 4px 0",
    border: "1px #E9ECEB solid", //#E9ECEB
  };
  const formattingStyleOnClick = {
    fontWeight: "bold",
    fontSize: "16px",
    width: "211.5px",
    height: "41px",
    padding: "11px 12px",
    color: "white",
    cursor: "pointer",
    backgroundColor: "#28519E",
    borderRadius: "0 4px 4px 0",
    border: "1px #E9ECEB solid", //#E9ECEB
  };

  // const structureOnClick = {color : val == "s" ? 'white' : 'black', ...buttonstyle}
  // const buttonOnClick = {color : val == "f" ? 'white' : 'black', ...buttonstyle}

  const onClickHandlerStr = () => {
    setEditorBtn("s");
  };
  const onClickHandlerFor = () => {
    setEditorBtn("f");
  };
  return (
    <Box sx={parentWrapper}>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ marginBottom: "24px" }}
      >
        <button
          style={editorBtn === "s" ? structureStyleOnClick : structurestyle}
          onClick={onClickHandlerStr}
        >
          Widget
        </button>
        <button
          style={editorBtn === "f" ? formattingStyleOnClick : formattingstyle}
          onClick={onClickHandlerFor}
        >
          Formatting
        </button>
      </Stack>
        {editorBtn === "s" && <Structure />}
        {editorBtn === "f" && formatting === "texteditor" && <TextEditor />}
        {editorBtn === "f" && formatting === "imageformatting" && (
          <Imageformatting />
        )}
        {editorBtn === "f" && formatting === "bgcolor" && <BgColor />}
        {editorBtn === "f" && formatting === "linkbutton" && <Linkbutton />}
        {editorBtn === "f" && formatting === "selecttheme" && <Selecttheme />}
        {editorBtn === "f" && formatting === "footerformatting" && <Footerformatting />}
    </Box>
  );
};

export default Editor;
