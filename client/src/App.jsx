import { useEffect, useRef, useState, useContext } from "react";
import Map from "./components/Map";
import Layout from "./pages/layout";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  return (
    <div className="app h-[100%] flex justify-center items-center bg-slate-400">
      <Layout children={<Map />} />
    </div>
  );
}

export default App;
