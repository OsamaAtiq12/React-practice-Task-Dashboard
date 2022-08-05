import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./Content/Content";
import Devices from "./Devices/Devices";
function Myroutes() {
  return (
    <div>
      <Routes>
        <Route path="/Devices" element={<Devices />} />
        <Route path="/Report" element={<Content />}></Route>
      </Routes>
    </div>
  );
}

export default Myroutes;
