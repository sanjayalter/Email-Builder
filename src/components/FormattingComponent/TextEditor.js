import React, { useState, useContext } from "react";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import { renderToString } from "react-dom/server";
import { Contentcontext } from "../../context/Context";
import "./main.css"
import { useEffect } from "react";

const copyStringToClipboard = function (str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};



const facilityMergeFields = [
  "FacilityNumber",
  "FacilityName",
  "Address",
  "MapCategory",
  "Latitude",
  "Longitude",
  "ReceivingPlant",
  "TrunkLine",
  "SiteElevation",
];
const inspectionMergeFields = ["InspectionCompleteDate", "InspectionEventType"];
const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
  let optionGroupElement = document.createElement("optgroup");
  optionGroupElement.setAttribute("label", optionGrouplabel);
  for (let index = 0; index < mergeFields.length; index++) {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("class", "merge-field-select-option");
    optionElement.setAttribute("value", mergeFields[index]);
    optionElement.text = mergeFields[index];
    optionGroupElement.appendChild(optionElement);
  }
  return optionGroupElement;
};
const buttons = [
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "superscript",
  "subscript",
  "|",
  "align",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "|",
  "image",
  "link",
  "table",
  "|",
  "hr",
  "eraser",
  "copyformat",
  "|",
  "fullsize",
  "selectall",
  "print",
  "|",
  "source",
  "|",
  "undo",
  "redo",
  {
    name: "insertMergeField",
    tooltip: "Insert Merge Field",
    iconURL: "images/merge.png",
    popup: (editor, current, self, close) => {
      function onSelected(e) {
        let mergeField = e.target.value;
        if (mergeField) {
          console.log(mergeField);
          editor.selection.insertNode(
            editor.create.inside.fromHTML("{{" + mergeField + "}}")
          );
        }
      }
      let divElement = editor.create.div("merge-field-popup");

      let labelElement = document.createElement("label");
      labelElement.setAttribute("class", "merge-field-label");
      labelElement.text = "Merge field: ";
      divElement.appendChild(labelElement);

      let selectElement = document.createElement("select");
      selectElement.setAttribute("class", "merge-field-select");
      selectElement.appendChild(
        createOptionGroupElement(facilityMergeFields, "Facility")
      );
      selectElement.appendChild(
        createOptionGroupElement(inspectionMergeFields, "Inspection")
      );
      selectElement.onchange = onSelected;
      divElement.appendChild(selectElement);

      console.log(divElement);
      return divElement;
    },
  },
  {
    name: "copyContent",
    tooltip: "Copy HTML to Clipboard",
    iconURL: "images/copy.png",
    exec: function (editor) {
      let html = editor.value;
      copyStringToClipboard(html);
    },
  },
];

const editorConfig = {
  readonly: false,
  toolbar: true,

  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  askBeforePasteHTML: false,
  askBeforePasteFromWord: false,
  //defaultActionOnPaste: "insert_clear_html",
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: "423px",
  height: "400px",
};

export default function TextEditor() {


  let [fetchValue,setFetchValue]=useState("");


  const { setArr,id,arr } = useContext(Contentcontext);
  useEffect(()=>{
    arr.map(item=>{
    
      if(item.id===id){
       
        setFetchValue(`${item.componentValue}`)
        console.log("Fetch value",typeof fetchValue)
        return item;
      }
      else{
        return item
      }
     })
  },[id,arr,fetchValue])
  const setEditorValue=(value)=>{
   

    console.log(value.innerHTML,"value")
     let finalArray=arr.map(item=>{
    
      if(item.id===id){
        item.componentValue=value
        // fetchValue=item.componentValue
        // console.log("Fetch value",fetchValue)
        return item;
      }
      else{
        return item
      }
     })
console.log(finalArray, "Final Array");

     setArr(finalArray);
  }
console.log(arr);
 
  console.log(fetchValue,"I am the fetch Value");
  
let y=`<p>hello</p>`;
  
  return (
    <div
      className="App"
      style={{ maxWidth: editorConfig.width, margin: "0 auto" }}
    >
      <JoditEditor
        height="100px"
        className="jodit-container"
        value={fetchValue}
        config={editorConfig}
        onChange={(value) => setEditorValue(value) }
      />
       
      {/* <div>{data}</div> */}
    </div>
  );
}
