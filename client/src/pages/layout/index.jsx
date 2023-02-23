import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { view } from "../../scripts/mapScripts";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(DarkModeContext);
  function handleClick(e) {
    e.preventDefault();
    state === "light" ? dispatch("dark") : dispatch("light");
  }

  function handleGoTo() {
    view
      .goTo(
        {
          center: [126, 49],
        },
        { animate: true, easing: "ease-in-out", duration: 10000 }
      )
      .catch((error) => {
        if (error.name != "AbortError") {
          console.error(error);
        }
      });
  }

  return (
    <div
      className={`${
        state === "light" ? "bg-blue-300 border-blue-200 shadow-blue-200" : "bg-red-300 border-red-200 shadow-red-200"
      } border-solid border-2 rounded-lg h-[90%] w-[90%] pt-3 pl-3 justify-start flex-col shadow-lg  bg-blend-darken `}
    >
      <div className="h-[90%] w-[90%]">{children}</div>

      <div>
        <button
          className={`${state === "light" ? "bg-blue-500 border-blue-200" : "bg-red-500 border-red-200"} rounded-full  w-[65px] m-4`}
          onClick={(e) => handleClick(e)}
        >
          Mode
        </button>
        <button
          className={`${state === "light" ? "bg-blue-500 border-blue-200" : "bg-red-500 border-red-200"} rounded-full  w-[65px] m-4`}
          onClick={handleGoTo}
        >
          Zoom to
        </button>
      </div>
    </div>
  );
};

export default Layout;
