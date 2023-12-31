

export default function EmailHeader(props) {
  return (
    <>
      <table
        height="74"
        style={{
          width: "600px",

          height: "74px",
          textAlign: "left",
          paddingTop: "5px",
          paddingBottom: "5px",
          paddingLeft: "10px",
          paddingRight: "10px",
          backgroundColor: props.bgColor,
     
        }}
      >
        <tr style={{ width: "600px" }}>
          <td
            align={"left"}
            style={{ width: "600px", marginTop: "15px" }}
            width="600"
          >
            <img
              width={props.width}
              style={{
                border: 0,
                outline: "none",
                textDecoration: "none",
                display: "block",
              }}
              alt="Logo"
              src={props.src}
              align="center"
            />
          </td>
          <td align="right" width="100%">
            <p
              style={{
                color: props.subtitleColor,

                marginTop: "15px",

                fontWeight: 500,

                fontSize: "15px",

                letterSpacing: "1px",
              }}
            >
              People First{" "}
              <span style={{ color: "#FCB518", fontWeight: 900 }}>+</span>{" "}
              Driven to Transform{" "}
            </p>
          </td>
        </tr>
      </table>
    </>
  );
}
