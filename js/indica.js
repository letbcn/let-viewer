      
      require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
		"esri/layers/MapImageLayer",
        "esri/widgets/Legend",
       "esri/core/watchUtils",
	   "esri/widgets/Expand",
	   "esri/widgets/Home",
	   "esri/renderers/smartMapping/creators/univariateColorSize",
	   "esri/layers/support/Field"
      ], function(Map, MapView, FeatureLayer, MapImageLayer, Legend,watchUtils,Expand,Home,colorAndSizeRendererCreator,Field) {
      

	
        layerEscenari = new FeatureLayer({
          url: "https://openlab.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
		  renderer: {
					  type: "class-breaks", // autocasts as new ClassBreaksRenderer()
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
					 }
        });
		
		//layerEscenari.renderer = renderer_A1;
		renderer_max_A1 = {type: "class-breaks"};
		renderer_max_A1.classBreakInfos = renderer_A1.classBreakInfos;
		renderer_max_A1.valueExpression = "Max($feature.a1a_c_0,$feature.a1a_c_1,$feature.a1a_c_2,$feature.a1a_c_3)";
		
		
		layer3 = new FeatureLayer({
		  id:'optim',
          url:"https://openlab.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
          renderer: {
					  type: "class-breaks", // autocasts as new ClassBreaksRenderer()
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
					 }
        });
		
		layer4 = new FeatureLayer({
          url:"https://openlab.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
          renderer: {
					  type: "class-breaks", // autocasts as new ClassBreaksRenderer()
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
					 }
        });


      layerEscenariTendencial = new FeatureLayer({
          url: "https://openlab.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
          renderer: {
                type: "class-breaks", // autocasts as new ClassBreaksRenderer()
                field: "a1a_c_1",
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
              }
        });

        layerDiferenciaEscenariTendencial = new FeatureLayer({
          url:"https://openlab.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
          renderer: {
					  type: "class-breaks", // autocasts as new ClassBreaksRenderer()
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
					 }
        });
		
		const mapOptimitzation = new Map({
          basemap: "gray",
          layers: [layer3]
        });
		
    const viewOptimitzation = new MapView({
          container: "viewDiv",
          map: mapOptimitzation,
          center: [2.13, 41.40],
          zoom: 10
        });
		
		const mapActual = new Map({
          basemap: "gray",
          layers: [layerEscenari]
        });
		
		const mapDifActual = new Map({
          basemap: "gray",
          layers: [layer4]
        });
		
    const viewActual = new MapView({
          container: "viewDivActual",
          map: mapActual,
          center: [2.13, 41.40],
          zoom: 10
        });

		const viewDifActual = new MapView({
          container: "viewDivDifActual",
          map: mapDifActual,
          center: [2.13, 41.40],
          zoom: 10
        });


    const mapTendencial = new Map({
          basemap: "gray",
          layers: [layerEscenariTendencial]
        });
		
		const mapDifTendencial = new Map({
          basemap: "gray",
          layers: [layerDiferenciaEscenariTendencial]
        });
		
    const viewTendencial = new MapView({
          container: "viewDivTendencial",
          map: mapTendencial,
          center: [2.13, 41.40],
          zoom: 10
        });

		const viewDifTendencial = new MapView({
          container: "viewDivDifTendencial",
          map: mapDifTendencial,
          center: [2.13, 41.40],
          zoom: 10
        });

        /******************************************************************
         *
         * Add layers to layerInfos on the legend
         *
         ******************************************************************/

        legend1 = new Legend({
          view: viewOptimitzation,
		  layerInfos: [{
			layer: layerEscenari,
			title: ""
		  }],
		  style: "classic"
        });
		legend2 = new Legend({
          view: viewActual,
		  layerInfos: [{
			layer: layer3,
			title: ""
		  }],
		  style: "classic"
        });
    legend2Tendencial = new Legend({
          view: viewTendencial,
		  layerInfos: [{
			layer: layerEscenariTendencial,
			title: ""
		  }],
		  style: "classic"
        });
		legendDif = new Legend({
          view: viewDifActual,
		  layerInfos: [{
			layer: layer4,
			title: ""
		  }],
		  style: "classic"
        });
    legendDifTendencial = new Legend({
          view: viewDifTendencial,
		  layerInfos: [{
			layer: layerDiferenciaEscenariTendencial,
			title: ""
		  }],
		  style: "classic"
        });
		var bgExpand1 = new Expand({
          view: viewOptimitzation,
          content: legend1,
		  expanded:false
        });
		var bgExpand2 = new Expand({
          view: viewActual,
          content: legend2,
		  expanded:false
        });
    var bgExpand2Tendencial = new Expand({
          view: viewActual,
          content: legend2Tendencial,
		  expanded:false
        });
		var bgExpandDif = new Expand({
          view: viewDifActual,
          content: legendDif,
		  expanded:false
        });
    var bgExpandDifTendencial = new Expand({
          view: viewDifTendencial,
          content: legendDifTendencial,
		  expanded:false
        });
		
		 var homeBtn = new Home({
          view: viewOptimitzation
        });

	  viewOptimitzation.ui.add(homeBtn, "top-left");
	  viewOptimitzation.ui.add(bgExpand1, "bottom-right");
	  viewActual.ui.add(bgExpand2, "bottom-right");
    viewTendencial.ui.add(bgExpand2Tendencial, "bottom-right");
	  viewDifActual.ui.add(bgExpandDif, "bottom-right");
    viewDifTendencial.ui.add(bgExpandDifTendencial, "bottom-right");
	  viewDifActual.ui.add("escenariDif","top-right");
    viewDifTendencial.ui.add("escenariDifTendencial","top-right");
	  viewOptimitzation.ui._removeComponents(["attribution"]);
	  viewActual.ui._removeComponents(["attribution"]);
    viewTendencial.ui._removeComponents(["attribution"]);
	  viewDifActual.ui._removeComponents(["attribution"]);
    viewDifTendencial.ui._removeComponents(["attribution"]);
	  

			
		//queryLayerViewStats(layer3,0,"A");
		
	
 /**
         * utility method that synchronizes the viewpoint of a view to other views
         */
        var synchronizeView = function(view, others) {
          others = Array.isArray(others) ? others : [others];

          var viewpointWatchHandle;
          var viewStationaryHandle;
          var otherInteractHandlers;
          var scheduleId;

          var clear = function() {
            if (otherInteractHandlers) {
              otherInteractHandlers.forEach(function(handle) {
                handle.remove();
              });
            }
            viewpointWatchHandle && viewpointWatchHandle.remove();
            viewStationaryHandle && viewStationaryHandle.remove();
            scheduleId && clearTimeout(scheduleId);
            otherInteractHandlers = viewpointWatchHandle = viewStationaryHandle = scheduleId = null;
          };

          var interactWatcher = view.watch("interacting,animation", function(
            newValue
          ) {
            if (!newValue) {
              return;
            }
            if (viewpointWatchHandle || scheduleId) {
              return;
            }

            // start updating the other views at the next frame
            scheduleId = setTimeout(function() {
              scheduleId = null;
              viewpointWatchHandle = view.watch("viewpoint", function(
                newValue
              ) {
                others.forEach(function(otherView) {
                  otherView.viewpoint = newValue;
                });
              });
            }, 0);

            // stop as soon as another view starts interacting, like if the user starts panning
            otherInteractHandlers = others.map(function(otherView) {
              return watchUtils.watch(
                otherView,
                "interacting,animation",
                function(value) {
                  if (value) {
                    clear();
                  }
                }
              );
            });

            // or stop when the view is stationary again
            viewStationaryHandle = watchUtils.whenTrue(
              view,
              "stationary",
              clear
            );
          });

          return {
            remove: function() {
              this.remove = function() {};
              clear();
              interactWatcher.remove();
            }
          };
        };

        /**
         * utility method that synchronizes the viewpoints of multiple views
         */
        var synchronizeViews = function(views) {
          var handles = views.map(function(view, idx, views) {
            var others = views.concat();
            others.splice(idx, 1);
            return synchronizeView(view, others);
          });

          return {
            remove: function() {
              this.remove = function() {};
              handles.forEach(function(h) {
                h.remove();
              });
              handles = null;
            }
          };
        };

        // bind the views
        synchronizeViews([viewOptimitzation, viewActual, viewDifActual, viewTendencial, viewDifTendencial]);
});
	  
	 