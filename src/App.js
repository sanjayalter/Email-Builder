/*global chrome*/
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Templatepage from "./pages/Templatepage";
import Header from "./components/header";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Verification from "./pages/Verification";
// import ForgotPassword from "./pages/ForgotPassword";
// import CreateNewPassword from "./pages/CreateNewPassword";

function App() {
  // console.log(browser.downloads.showDefaultFolder());
  // chrome.downloads.onChanged.addListener(function (detail){
  //   console.log("Detail",detail); //Save log for debugging

  //       //if file download finished
  //      if(detail.state.current == "complete"){

  //          var downloadId = detail.id; //Download ID

  //          console.log("Download ID",downloadId); //Save log for debugging
  //          /*
  //          Do Something
  //           */

  //      }
  //   });

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: "0",
        }}
      >
        <Header />
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/" element={<Templatepage />} />
        <Route path="/template" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
