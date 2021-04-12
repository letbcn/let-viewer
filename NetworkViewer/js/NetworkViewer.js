require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/widgets/Zoom"
],
      function (Map, MapView, FeatureLayer, Zoom) {

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
                  },
                  popupTemplate: {
                        title: "Hola",
                        /*content: "{state_name}"*/
                  }
            };

            const defaultPosition = [2.13, 41.40];

            var popupInfo = {
                  title: "{country}",
                  content:
                        "Institut: {institutio}"
            };

            var layer = new FeatureLayer({
                  url: "https://openlab.uab.cat:6443/arcgis/rest/services/colaboradors_let/FeatureServer/0",
                  renderer: sym,
                  outFields: ["*"],
                  popupTemplate: popupInfo,
                  visualVariables: [
                        {
                              type: "size",
                              field: "num",
                              normalizationField: "num",
                              stops: [
                                    {
                                          value: 5,
                                          size: 12
                                    },
                                    {
                                          value: 15,
                                          size: 15
                                    },
                                    {
                                          value: 30,
                                          size: 18
                                    }
                              ]
                        }
                  ]
            });

            const map = new Map({
                  basemap: "topo",
                  layers: [layer]
            });

            const view = new MapView({
                  container: "viewDiv",
                  map: map,
                  center: defaultPosition,
                  zoom: 3,
                  constraints: {
                        minZoom: 3,
                        maxZoom: 7
                  }
            });
      });