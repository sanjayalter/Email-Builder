import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Templatepage from "./pages/Templatepage";
import Header from "./components/header";

function App() {
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
        <Route path="/" element={<Templatepage />} />
        <Route path="/template" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
