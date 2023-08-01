import React, { useState, useContext, useEffect } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { Contentcontext } from "../../context/Context";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import UploadIcon from "@mui/icons-material/Upload";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { v4 as uuid } from "uuid";

const Imageformatting = () => {
  const [link, setLink] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [imgButtonLink, setImgButtonLink] = useState("");
  const [disabledBtn, setDisabledBtn] = useState();

  const { arr, setArr, id, setEditorBtn } = useContext(Contentcontext);

  const iOSStyleSwitchStyles = {
    width: "42px",
    height: "26px",
    padding: "0",
    "& .MuiSwitch-switchBase": {
      padding: "0",
      margin: "2px",
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: "1",
          border: "0",
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: "0.5",
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "#E9E9EA",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.7",
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: "22px",
      height: "22px",
    },
    "& .MuiSwitch-track": {
      borderRadius: "13px",
      backgroundColor: "#E9E9EA",
      opacity: "1",
      transition: "background-color 500ms",
    },
  };

  useEffect(() => {
    arr.map((item) => {
      if (item.id === id) {
        setImgTitle(item.imgName);
        setImgButtonLink(item.imgBtnUrl);
        setDisabledBtn(item.disableUrl);
        if (!item.isUploaded) {
          setLink(item.componentValue);
        } else {
          setLink("");
        }
      }
    });
  }, [id, arr]);

  const saveChanges = () => {
    let finalArray = arr.map((item) => {
      if (item.id === id) {
        item.isUploaded = true;
        item.imgBtnUrl = imgButtonLink;
        item.disableUrl = disabledBtn;
        return item;
      } else {
        return item;
      }
    });

    setArr(finalArray);
    setEditorBtn("s");
  };

  function getCurrentDateAndTime() {
    const currentDateAndTime = new Date();

    const day = String(currentDateAndTime.getDate()).padStart(2, "0");
    const month = String(currentDateAndTime.getMonth() + 1).padStart(2, "0");
    const year = currentDateAndTime.getFullYear();

    const hours = String(currentDateAndTime.getHours()).padStart(2, "0");
    const minutes = String(currentDateAndTime.getMinutes()).padStart(2, "0");
    const seconds = String(currentDateAndTime.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year}_${hours}-${minutes}-${seconds}`;
  }
  const upoloadImage = (data) => {
    if (data == null) {
      return;
    }

    const imageRef = ref(
      storage,
      `${
        data.target.files[0].name.split(".")[0]
      }-${uuid()}-${getCurrentDateAndTime()}.${
        data.target.files[0].name.split(".")[1]
      }`
    );

    uploadBytes(imageRef, data.target.files[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        let finalArray = arr.map((item) => {
          if (item.id === id) {
            item.componentValue = url;
            item.imgName = data.target.files[0].name;
            setImgTitle(item.imgName);
            return item;
          } else {
            return item;
          }
        });
        setArr(finalArray);

        console.log(url);
      });
    });
  };

  const handleChange = (e) => {
    upoloadImage(e);
  };

  return (
    <Box
      sx={{
        marginLeft: "32px",
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      
      }}
    >
      <button
        style={{
          color: "black",
          fontWeight: "bold",
          backgroundColor: "#E9ECEB",
          width: "81.6%",
          height: "48px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
          border: "1px solid #B2B2B2",
        }}
      >
        <label
          htmlFor="upload-button"
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <UploadIcon />
          {imgTitle === "Image" ? "Upload Image" : imgTitle}
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </button>
      <Box
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "24px",
          marginBottom: "24px",
          width: "100%",
       
        }}
      >
        OR
      </Box>
      <Box
        sx={{
          width: "81.6%",
          marginBottom: "24px",
       
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            fontSize: "16px",
            lineHeight: "19px",
          }}
        >
          Image Link:
        </Typography>
        <input
          style={{
            color: "black",
            fontWeight: "bold",
            backgroundColor: "#F5F5F5",
            border: "1px solid #B2B2B2",
            width: "-webkit-fill-available",
            height: "48px",
            borderRadius: "8px",
            fontSize: "16px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
          type="text"
          value={link}
          onChange={(e) => {
            let finalArray = arr.map((item) => {
              if (item.id === id) {
                item.componentValue = e.target.value;
                item.isUploaded = false;
                setLink(item.componentValue);
                return item;
              } else {
                return item;
              }
            });
            setArr(finalArray);
          }}
          placeholder="https://imagelinkexample.example.com"
        />
      </Box>
      <hr
        style={{
          width: "81.6%",
          marginBottom: "35.5px",
          border: "1px solid #E9ECEB",
        }}
      />
      <Box
        className="urltoimage-wrapper"
        sx={{
          width: "81.6%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            fontSize: "16px",
            lineHeight: "19px",
        
          }}
        >
          Add Url to image
        </Typography>
        <FormControlLabel
          control={
            <Switch
              sx={{ m: 1, ...iOSStyleSwitchStyles }}
              checked={!disabledBtn}
              onChange={() => {
                setDisabledBtn((prevVal) => {
                  return !prevVal;
                });
              }}
            />
          }
        />
      </Box>
      <Box
        sx={{
          width: "81.6%",
          marginBottom: "24px",
        
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            fontSize: "16px",
            lineHeight: "19px",
          }}
        >
          Url
        </Typography>
        <input
          style={{
            color: "black",
            fontWeight: "bold",
            backgroundColor: "#F5F5F5",
            border: "1px solid #B2B2B2",
            width: "-webkit-fill-available",
            height: "48px",
            borderRadius: "8px",
            fontSize: "16px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
          value={imgButtonLink}
          onChange={(e) => {
            setImgButtonLink(e.target.value);
          }}
          disabled={disabledBtn}
          type="text"
          placeholder="https://example.example.com"
        />
      </Box>

      <Box
        className="save-button-container"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          width: "91.55%",
          justifyContent: "right",
        }}
      >
       
        <button
          className="imageformatting-save-button"
          style={{
            backgroundColor: "#FFB81C",
            color: "black",
            fontWeight: "bold",
            padding: "4px 22px",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            lineHeight: "32px",
          }}
          onClick={saveChanges}
        >
          Save
        </button>
      </Box>
    </Box>
  );
};

export default Imageformatting;
