import { Button, Typography, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import footer_logo_light from "../../Images/CG-footer-light.svg";
import footer_logo_dark from "../../Images/CG-footer-dark.svg";
import React, { useContext } from "react";
import { Contentcontext } from "../../context/Context";

const Footerformatting = () => {
  const { setFooterTheme } = useContext(Contentcontext);
  const typeStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "19px",
    marginBottom: "12px",
  };

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
          <Button sx={{ color: "black" }} onClick={() => setFooterTheme(false)}>
            <Stack sx={{ padding: "16px" }}>
              <Box>
                <img
                  src={footer_logo_light}
                  alt="Light Mode"
                />
              </Box>
              <Typography variant="text">Light Mode</Typography>
            </Stack>
          </Button>
          <Button sx={{ color: "black" }} onClick={() => setFooterTheme(true)}>
            <Stack sx={{ padding: "16px" }}>
              <Box>
                <img
                  src={footer_logo_dark}
                  alt="Dark Mode"
                />
              </Box>
              <Typography variant="text">Dark Mode</Typography>
            </Stack>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footerformatting;
