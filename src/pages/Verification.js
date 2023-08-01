import React from "react";
import LoginImage from "../Images/LoginImage.svg";
import CGLogoDark from "../Images/CG-logo-dark.svg";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";

const Verification = () => {
  const spanStyle = {
    fontSize: "13px",
    lineHeight: "16px",
    color: "#8A8A8A",
    fontWeight: "600",
    marginBottom: "16px",
  };
  const inputStyle = {
    width: "100%",
    fontSize: "16px",
    height: "48px",
    border: "none",
  };
  const loginButtonStyle = {
    width: "100%",
    height: "40px",
    marginTop: "36px",
    backgroundColor: "#FFB81C",
    boxShadow: "0px 2px 10px rgba(34,62,73,0.1)",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#343435",
  };
  const linkStyle = {
    textDecoration: "none",
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: "600",
    color: "#28519E",
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#f5f5f5",
        // fontFamily: "Lato",
      }}
    >
      <div
        style={{
          width: "880px",
          height: "552px",
          backgroundColor: "#ffffff",
          display: "flex",
          borderRadius: "8px",
        }}
      >
        <div>
          <img src={LoginImage} alt="login img" />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            // border: "1px solid red",
          }}
        >
          <div
            style={{
              //   marginLeft: "89.5px",
              marginTop: "92px",
              //   width: "261px",
              //   height: "95px",
              // border: "1px solid black",
            }}
          >
            <img src={CGLogoDark} alt="logo" height="50px" width="248px" />

            <p
              style={{
                margin: "0",
                marginTop: "16px",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "29px",
                color: "#343435",
                textAlign: "center",
              }}
            >
              Welcome to Email Portal
            </p>
          </div>
          <div
            style={{
              width: "376px",
              marginTop: "40px",
              // border: "1px solid black",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <BiLeftArrowAlt size="20px" color="#28519E" />
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  // fontFamily: "Roboto",
                }}
              >
                email@email.com
              </span>
            </div>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", margin: "16px 0 16px 0" }}>
                <strong>Enter Code</strong>
              </span>
              <span style={spanStyle}>
                Please type the Six digit code we have sent on your Microsoft
                account.
              </span>
              <input
                style={inputStyle}
                type="email"
                placeholder="Code"
                required
              />
              <div
                style={{
                  border: "1px solid rgba(30, 36, 50, 0.42)",
                  width: "100%",
                }}
              ></div>
              <button style={loginButtonStyle}>
                <span style={loginButtonStyle}>Verify</span>
              </button>
            </form>
          </div>
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
              //   border: "1px solid black",
            }}
          >
            <Link to={"/"} style={linkStyle}>
              Use Another Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
