import { Button, Typography, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import logoLight from "../../Images/CG-logo-light.svg";
import logoDark from "../../Images/CG-logo-dark.svg";
import { BsFilterLeft, BsFilter, BsFilterRight } from "react-icons/bs";
import React from "react";
import { useEmailTemplate } from "../../context/email-template";
import { useContext } from "react";
import { Contentcontext } from "../../context/Context";
const Selecttheme = () => {
  const typeStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "18px",
    marginBottom: "12px",
  };

  const btnStyle = {
    color: "black",
    backgroundColor: "#FBFBFB",
    border: "none",
    borderRadius: "4px",
  };

  const { emailTemplateDispatcher } = useEmailTemplate();
  const { setAlignment } = useContext(Contentcontext);

  return (
    <Box
      sx={{
        marginLeft: "32px",
        width: "91.6%",
        margin: "auto",
        // border: "1px solid black",
      }}
    >
      <Typography sx={typeStyle} variant="h6">
        Select Theme
      </Typography>
      <Box mb="32px">
        <Stack direction="row" justifyContent="center" gap="16px">
          <Button
            sx={{ color: "black" }}
            onClick={() =>
              emailTemplateDispatcher({
                type: "CHANGE_HEADER_WHITE",
                payload: {
                  darkMode: "light",
                  libtype: "Image",
                  values: {
                    alignment: "center",
                    bgColor: "#FFFFFF",
                    width: 200,
                    src: "https://cginfinity.com/wp-content/uploads/2022/04/logo-footer.svg",
                  },
                },
              })
            }
          >
            <Stack sx={{ padding: "16px" }}>
              <Box width="156px" height="46.33px">
                <img
                  style={{ marginTop: "16px" }}
                  width="62.29px"
                  height="14.33px"
                  src={logoDark}
                  alt="Light Mode"
                />
              </Box>
              <Typography variant="text">Light Mode</Typography>
            </Stack>
          </Button>
          <Button
            sx={{ color: "black" }}
            onClick={() =>
              emailTemplateDispatcher({
                type: "CHANGE_HEADER_DARK",
                payload: {
                  darkMode: "dark",
                  libtype: "Image",
                  values: {
                    alignment: "center",
                    bgColor: "#002C3F",
                    width: 200,
                    src: "https://cginfinity.com/wp-content/uploads/2022/04/cgi-logo.svg",
                  },
                },
              })
            }
          >
            <Stack sx={{ padding: "16px" }}>
              <Box
                sx={{ backgroundColor: "#002C3F" }}
                width="156px"
                height="46.33px"
              >
                <img
                  style={{ marginTop: "16px" }}
                  width="62.29px"
                  height="14.33px"
                  src={logoLight}
                  alt="Dark Mode"
                />
              </Box>
              <Typography variant="text">Dark Mode</Typography>
            </Stack>
          </Button>
          {/* this is the code for  */}
          {/* <Button
            sx={{ color: "black" }}
            onClick={() =>
              emailTemplateDispatcher({
                type: "CHANGE_HEADER_BLACK",
                payload: {
                  darkMode: "black",
                  libtype: "Image",
                  values: {
                    alignment: "center",
                    bgColor: "#000000",
                    width: 200,
                    src: "https://cginfinity.com/wp-content/uploads/2022/04/cgi-logo.svg",
                  },
                },
              })
            }
          >
            <Stack sx={{ padding: "16px" }}>
              <Box
                sx={{ backgroundColor: "#002C3F" }}
                width="156px"
                height="46.33px"
              >
                <img
                  style={{ marginTop: "16px" }}
                  width="62.29px"
                  height="14.33px"
                  src={logoLight}
                  alt="Black Mode"
                />
              </Box>
              <Typography variant="text">Black Mode</Typography>
            </Stack>
          </Button> */}
        </Stack>
      </Box>
      <Typography sx={typeStyle} variant="h6">
        Alignment
      </Typography>
      <Stack direction="row" justifyContent="center" gap="16px" mb="28px">
        <button style={btnStyle}>
          <Stack
            width="120px"
            height="90px"
            justifyContent="center"
            alignItems="center"
            onClick={() => setAlignment("left")}
          >
            <BsFilterLeft size="28.5px" />
            <Typography style={typeStyle}>Left</Typography>
          </Stack>
        </button>
        <button style={btnStyle}>
          <Stack
            width="120px"
            height="90px"
            justifyContent="center"
            alignItems="center"
            onClick={() => setAlignment("center")}
          >
            <BsFilter size="28.5px" />
            <Typography style={typeStyle}>Center</Typography>
          </Stack>
        </button>
      </Stack>
    </Box>
  );
};

export default Selecttheme;
