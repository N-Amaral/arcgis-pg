import { useEffect, useRef, useState } from "react";
import { view, initializeMap } from "../scripts/mapScripts";

function Map() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      initializeMap(mapDiv.current);

      return () => {
        view && view.destroy;
      };
    }
  }, []);

  return <div className="h-[90%] w-[80%] shadow-xl shadow-slate-100 bg-blend-darken " id="mapContainer" ref={mapDiv} />;
}

export default Map;
