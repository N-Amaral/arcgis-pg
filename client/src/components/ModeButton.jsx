import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const ModeButton = () => {
  const { state, dispatch } = useContext(DarkModeContext);
  function handleClick(e) {
    e.preventDefault();
    state === "light" ? dispatch("dark") : dispatch("light");
  }
  return (
    <>
      <button
        className={`${
          state === "light"
            ? "bg-blue-500 border-blue-200 hover:bg-blue-200 hover:border-blue-200"
            : "bg-red-500 border-red-200 hover:bg-red-200 hover:border-red-200"
        }  rounded-lg  w-[65px] h-[35px] m-4 `}
        onClick={(e) => handleClick(e)}
      >
        Mode
      </button>
    </>
  );
};

export default ModeButton;
