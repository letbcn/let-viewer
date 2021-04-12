require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/layers/MapImageLayer",
      "esri/widgets/Legend",
      "esri/core/watchUtils",
      "esri/widgets/Expand",
      "esri/widgets/Home",
      "esri/layers/WMSLayer",
      "esri/config",
      "esri/layers/support/Field",
      "esri/tasks/support/Query",
      "esri/tasks/QueryTask",
      "dojo/dom",
      "dojo/dom-construct",
      "dojo/dom-attr",
      "esri/tasks/support/StatisticDefinition",
],
      function (Map, MapView, FeatureLayer, MapImageLayer, Legend, watchUtils, Expand, Home, WMSLayer, esriConfig, Field, Query, QueryTask, Chart, dom, domConstruct, domAttr, StatisticDefinition) {

            //configuració portal
            //esriConfig.portalUrl = "https://uab.maps.arcgis.com";
            //esriConfig.request.proxyUrl = "proxy.jsp";


            const sym = {
                  type: "simple",  // autocasts as new SimpleRenderer()
                  symbol: {
                        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                        style: "circle",
                        size: 18,
                        color: "#B0DBBF",
                        outline: {  // autocasts as new SimpleLineSymbol()
                              width: 0.5,
                              color: "black"
                        }
                  }
            };

            const defaultPosition = [2.13, 41.40];

            var layer = new FeatureLayer({
                  url: "https://openlab.uab.cat:6443/arcgis/rest/services/colaboradors_let/FeatureServer/0",
                  outFields: ["country", "institutio", "num"],
                  renderer: sym,
                  popupTemplate: {
                        title: "{conutry}, {num}",
                        content: "{institutio}"
                  }
                  /*
                  renderer: {
                        type: "class-breaks",
                        field: "a1a_c_0",
                        legendOptions: {
                              title: "Eficiència energètica (EFEROI)"
                        },
                        defaultSymbol: {
                              type: "simple-fill",
                              style: "none",
                              outline: {
                                    width: 0
                              }
                        }
                  }*/
            });

            const map = new Map({
                  basemap: "topo",
                  layers: [layer]
            });

            const view = new MapView({
                  container: "viewDiv",
                  map: map,
                  center: defaultPosition,
                  zoom: 5
            });

            //view.ui._removeComponents(["attribution"]);

      });