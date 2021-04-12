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
                  }
            };

            const defaultPosition = [2.13, 41.40];

            var layer = new FeatureLayer({
                  url: "https://openlab.uab.cat:6443/arcgis/rest/services/colaboradors_let/FeatureServer/0",
                  renderer: sym
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

            var zoom = new Zoom({
                  view: view
            });

            view.ui.add(zoom, "top-left");
      });