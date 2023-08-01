import React from "react";
import LoginImage from "../Images/LoginImage.svg";
import CGLogoDark from "../Images/CG-logo-dark.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const spanStyle = {
    fontSize: "13px",
    lineHeight: "16px",
    color: "#343435",
    fontWeight: "600",
    marginBottom: "6px",
  };
  const inputStyle = {
    width: "376px",
    height: "32px",
    border: "1px solid #E9ECEB",
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
        fontFamily: "Lato",
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
              //   border: "1px solid black",
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
              }}
            >
              Welcome to Email Portal
            </p>
          </div>
          <div style={{ marginTop: "40px" }}>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <span style={spanStyle}>Email ID</span>
              <input
                style={inputStyle}
                type="email"
                placeholder="Enter Your Email Id"
                required
              />
              <div style={{ height: "24px" }}></div>
              <span style={spanStyle}>Password</span>
              <input
                style={inputStyle}
                type="password"
                placeholder="Enter Password"
                required
              />
              <button style={loginButtonStyle}>
                <span style={spanStyle}>Sign Up</span>
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
            <Link to={"/login"} style={linkStyle}>
              Already have an account Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
