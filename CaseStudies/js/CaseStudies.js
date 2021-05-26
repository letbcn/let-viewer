require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Home"
    ],
    function(Map, MapView, FeatureLayer, Home) {

        const defaultPosition = [2.13, 41.40];

        function studyCasesPopup(feature) {
            if (cases[feature.graphic.attributes.Name_2] == null) {
                return cases["Qazvín (Iran)"]
            }
            return cases[feature.graphic.attributes.Name_2];
        }

        var popupInfo = {
            title: "{Name_2}",
            content: studyCasesPopup
        };

        var layer = new FeatureLayer({
            url: "https://openlab.uab.cat:6443/arcgis/rest/services/webmaps/estudis_publicacions_v2/FeatureServer/0",
            outFields: ["*"],
            popupTemplate: popupInfo
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

        var homeBtn = new Home({
            view: view
        });

        view.ui.add(homeBtn, "top-left");

        view.surface.addEventListener("wheel", function(event) {
            event.stopImmediatePropagation();
        }, true);
    });