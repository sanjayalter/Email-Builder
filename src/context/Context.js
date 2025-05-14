import React, { createContext, useState } from "react";

// import CallToAction from "./TemplateComponents/CallToAction";

export const Contentcontext = createContext();

const Context = ({ children }) => {
  const defaultVal =
    "Dear CG Team," +
    "" +
    "It gives me immense pleasure to announce that we won the following project and added the new team members. It gives me immense pleasure to announce that we won the following project and added the new team members.";
  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("templateArray")) ?? []
  );
  const [id, setId] = useState();
  const [ctaName, setCtaName] = useState("Click Here");
  const [editorBtn, setEditorBtn] = useState("s");
  const [formatting, setFormatting] = useState("selecttheme");
  const [data, setData] = useState(defaultVal);
  const [indVal, setIndVal] = useState(-1);
  const [selectedComponent, setSelectedComponent] = useState("");
  const [showVal, setShowVal] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const [alignment, setAlignment] = useState("left"); // header alignment
  const [footerTheme, setFooterTheme] = useState(true); // footer theme
  const [arr1, setarr1] = useState([]);
  const [preview, setPreview] = useState(false);
  const[fileNameError,setFileNameError]=useState(false); // to show the preview

  return (
    <Contentcontext.Provider
      value={{
        arr,
        setArr,
        setEditorBtn,
        editorBtn,
        formatting,
        setFormatting,
        ctaName,
        setCtaName,
        data,
        setData,
        indVal,
        setIndVal,
        selectedComponent,
        setSelectedComponent,
        setId,
        id,
        showVal,
        setShowVal,
        confirmation,
        setConfirmation,
        alignment,
        setAlignment,
        footerTheme,
        setFooterTheme,
        arr1,
        setarr1,
        preview,
        setPreview,
        setFileNameError,
        fileNameError
      }}
    >
      {children}
    </Contentcontext.Provider>
  );
};

export default Context;
