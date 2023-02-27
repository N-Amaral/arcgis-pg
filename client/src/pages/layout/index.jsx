import React, { useContext, useEffect } from "react";
import ZoomPicker from "../../components/ZoomPicker";
import ModeButton from "../../components/ModeButton";
import { DarkModeContext } from "../../context/DarkModeContext";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        state === "light" ? "bg-blue-300 border-blue-200 shadow-blue-200" : "bg-red-300 border-red-200 shadow-red-200"
      } border-solid border-2 rounded-lg h-[90%] w-[90%] pt-3 pl-3 pb-0 mb-0 justify-start flex-col shadow-lg  bg-blend-darken `}
    >
      <div className="h-[80%] w-[90%]">{children}</div>
      <div className="h-auto w-auto flex">
        <ZoomPicker />
        <ModeButton />
      </div>
    </div>
  );
};

export default Layout;
