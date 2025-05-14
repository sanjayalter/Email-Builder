import { Button, Typography, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";

import React from "react";

const BgColor = () => {
  const typeStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "16px",
  };
  const buttonStyle = {
    color: "black",
    backgroundColor: "#FBFBFB",
    width: "119.67px",
    height: "136px",
  };
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "19px",
          fontSize: "14px",
          fontWeight: "bold",
          lineHeight: "19.6px",
          marginLeft: "32px",
        }}
      >
        Background Color:
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        gap="16px"
        mb="28px"
        // border="1px solid black"
      >
        <Button sx={buttonStyle}>
          <Stack>
            <Box
              width="84px"
              height="84px"
              mb="12px"
              sx={{ backgroundColor: "#F4F5F5", border: "1px solid #E9ECEB" }}
            ></Box>
            <Typography sx={typeStyle}>Mid Grey</Typography>
          </Stack>
        </Button>
        <Button sx={buttonStyle}>
          <Stack>
            <Box
              width="84px"
              height="84px"
              mb="12px"
              sx={{ backgroundColor: "#FAFAFA", border: "1px solid #E9ECEB" }}
            ></Box>
            <Typography sx={typeStyle}>Pale Grey</Typography>
          </Stack>
        </Button>
        <Button sx={buttonStyle}>
          <Stack>
            <Box
              width="84px"
              height="84px"
              mb="12px"
              sx={{ backgroundColor: "#FFFFFF", border: "1px solid #E9ECEB" }}
            ></Box>
            <Typography sx={typeStyle}>White</Typography>
          </Stack>
        </Button>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          width: "91.55%",
          justifyContent: "right",
          margin: "auto",
          // border: "1px solid green",
        }}
      >
        <button
          variant="outlined"
          style={{
            color: "black",
            fontWeight: "bold",
            padding: "4px 16px",
            background: "none",
            border: "1px solid black",
            borderRadius: "4px",
            fontSize: "14px",
            lineHeight: "32px",
          }}
        >
          Cancel
        </button>
        <button
          // href="#contained-buttons"
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
        >
          Save
        </button>
      </Box>
    </Box>
  );
};

export default BgColor;
