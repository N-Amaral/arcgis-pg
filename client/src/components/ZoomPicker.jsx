import React, { useContext, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { randomize } from "../scripts/randomZoom";
import { view } from "../scripts/mapScripts";
const ZoomPicker = () => {
  const { state, dispatch } = useContext(DarkModeContext);
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  function HandleRandomize() {
    const values = randomize();
    setCoordinates((prev) => values);
  }

  function handleGoTo(e, coordinates) {
    e.preventDefault();
    const { longitude, latitude } = coordinates;
    view
      .goTo(
        {
          center: [longitude, latitude],
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
    <div className="flex">
      <div>
        <form id="lat-lon" onSubmit={(e) => handleGoTo(e, coordinates)}>
          <div className="flex flex-col gap-1 mx-1 ">
            <label htmlFor="latitude" className="font-bold text-[24px]">
              Latitude
            </label>
            <input type={"text"} name="latitude" id="latitude" required disabled value={coordinates.latitude} />
            <label htmlFor="longitude" className="font-bold text-[24px]">
              Longitude
            </label>
            <input type={"text"} name="longitude" id="longitude" required disabled value={coordinates.longitude} />
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-1 mx-1 my-8">
        <button
          type="submit"
          form="lat-lon"
          formAction="/"
          className={`${
            state === "light"
              ? "bg-blue-500 border-blue-200 hover:bg-blue-200 hover:border-blue-200"
              : "bg-red-500 border-red-200 hover:bg-red-200 hover:border-red-200"
          }  rounded-lg  w-[auto] h-[35px] mb-8 p-2`}
        >
          Zoom to
        </button>
        <button
          type="button"
          form="lat-lon"
          formAction="/"
          className={`${
            state === "light"
              ? "bg-blue-500 border-blue-200 hover:bg-blue-200 hover:border-blue-200"
              : "bg-red-500 border-red-200 hover:bg-red-200 hover:border-red-200"
          }  rounded-lg  w-[auto] h-[35px] p-2`}
          onClick={HandleRandomize}
        >
          Randomize
        </button>
      </div>
    </div>
  );
};

export default ZoomPicker;
