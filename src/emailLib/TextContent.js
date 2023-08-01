import React from "react";

export default function TextContentFinal(props) {
  console.log("this is color", props.col);
  return (
    <div style={{width:"600px"}}>
    
      <div>
        <table
          style={{ backgroundColor: "white", width: 600, textAlign: 'left' }}
        >
          
         
          <tr>
            <td>
              <p style={{marginLeft:'24px',fontSize:'16px'}}>{props.textdata}</p>
            </td>
          </tr>
          {/* TODO: this is button code */}
          {/* <table  align="center">
                        <tr>
                            <td style={{borderRadius: "2px", backgroundColor:"#0C9A47" }}>
                                <a href="https://www.copernica.com" target="_blank" style={{padding: "8px 12px", border: "1px solid #0C9A47",borderRadius: "2px",fontFamily: 'Helvetica, Arial', fontSize: "14px", color: "#ffffff",textDecoration: "none",fontWeight:"bold",display: "inline-block"}} rel="noreferrer">
                                    Approve             
                                </a>
                                
                            </td>
                          
                          
                        </tr>

                    
                        
                    </table> */}
        </table>
      </div>
    </div>
  );
}
