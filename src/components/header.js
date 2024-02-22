import CG_Logo_GoldNavy_header from "../utils/CG_Logo_GoldNavy_header.svg";
import { MdAccountCircle } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundColor: "#002C3F",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}
      >
        <div
          style={{
            textAlign: "left",
            marginLeft: "28px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={CG_Logo_GoldNavy_header}></img>
        </div>
      </div>
    </>
  );
};

export default Header;
