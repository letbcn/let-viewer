require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Home"
    ],
    function(Map, MapView, FeatureLayer, Home) {

        const renderer = {
            type: "simple", // autocasts as new SimpleRenderer()
            symbol: {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                style: "circle",
                size: 18,
                color: "#B0DBBF",
                outline: { // autocasts as new SimpleLineSymbol()
                    width: 0.5,
                    color: "#9abf9e"
                }
            },
            visualVariables: [{
                type: "size",
                field: "num",
                stops: [{
                        value: 5,
                        size: 10
                    },
                    {
                        value: 15,
                        size: 20
                    },
                    {
                        value: 30,
                        size: 30
                    }
                ]
            }]
        };

        const defaultPosition = [2.13, 41.40];

        function contentByCountryPopup(feature) {
            return "Institucions: <br><ul>" + institutions[feature.graphic.attributes.cntr_id].reduce(function(previous, current) {
                return previous + "<li>" + current + "</li>";
            }, "") + "</ul>";
        }

        var popupInfo = {
            title: "{country}",
            content: contentByCountryPopup
        };

        var layer = new FeatureLayer({
            url: "https://lablet.uab.cat:6443/arcgis/rest/services/webmaps/let_network/FeatureServer/0",
            renderer: renderer,
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