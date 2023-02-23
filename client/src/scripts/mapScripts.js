import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Home from "@arcgis/core/widgets/Home";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";

//Map config options
export const defaultMap = new Map({
  basemap: "dark-gray-vector",
});

//Map VIEW config options
const options = {
  map: defaultMap,
  center: [-118.805, 34.027],
  zoom: 10,
  ui: {
    components: ["zoom", "compass", "attribution"],
  },
};

export const view = new MapView(options);

const toggleBaseMap = new BasemapToggle({
  view: view,
  nextBasemap: "topo-vector",
});

const toggleHome = new Home({
  view: view,
});

// WORKING WITH POPUPS

const popupTrailheads = {
  title: "Trailhead",
  content:
    "<b>Trail:</b> {TRL_NAME}<br><b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft",
};

const trailheads = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
  outFields: ["TRL_NAME", "CITY_JUR", "X_STREET", "PARKING", "ELEV_FT"],
  popupTemplate: popupTrailheads,
});

defaultMap.add(trailheads);

const popupTrails = {
  title: "Trail Information",
  content: [
    {
      type: "media",
      mediaInfos: [
        {
          type: "column-chart",
          caption: "",
          value: {
            fields: ["ELEV_MIN", "ELEV_MAX"],
            normalizeField: null,
            tooltipField: "Min and max elevation values",
          },
        },
      ],
    },
  ],
};

const trails = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0",
  outFields: ["TRL_NAME", "ELEV_GAIN"],
  popupTemplate: popupTrails,
});

defaultMap.add(trails, 0);

// POPUP TABLE INFO
const popupOpenspaces = {
  title: "{PARK_NAME}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "AGNCY_NAME",
          label: "Agency",
          isEditable: true,
          tooltip: "",
          visible: true,
          format: null,
          stringFieldOption: "text-box",
        },
        {
          fieldName: "TYPE",
          label: "Type",
          isEditable: true,
          tooltip: "",
          visible: true,
          format: null,
          stringFieldOption: "text-box",
        },
        {
          fieldName: "ACESS_TYP",
          label: "Acess",
          isEditable: true,
          tooltip: "",
          visible: true,
          format: null,
          stringFieldOption: "text-box",
        },
        {
          fieldName: "GIS_ACRES",
          label: "Acres",
          isEditable: true,
          tooltip: "",
          visible: true,
          format: {
            places: 2,
            digitSeparator: true,
          },
          stringFieldOption: "text-box",
        },
      ],
    },
  ],
};

const openspaces = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0",
  outFields: ["TYPE", "PARK_NAME", "AGNCY_NAME", "ACCESS_TYP", "GIS_ACRES", "TRLS_MI", "TOTAL_GOOD", "TOTAL_FAIR", "TOTAL_POOR"],
  popupTemplate: popupOpenspaces,
});

defaultMap.add(openspaces, 0);

export function initializeMap(container) {
  view.container = container;
  view.ui.add([
    { component: toggleHome, position: "top-left" },
    { component: toggleBaseMap, position: "bottom-left" },
  ]);

  return view;
}
