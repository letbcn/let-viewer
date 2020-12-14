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
          url: "https://openlab.uab.es:6443/arcgis/rest/services/models/malla_v2/FeatureServer/0",
		  renderer: {
					  type: "class-breaks", // autocasts as new ClassBreaksRenderer()
					  field: "a1_c_0",
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
		renderer_max_A1.valueExpression = "Max($feature.a1_c_0,$feature.a1_c_1,$feature.a1_c_2,$feature.a1_c_3)";
		
		
		layer3 = new FeatureLayer({
		  id:'optim',
          url:"https://openlab.uab.cat:6443/arcgis/rest/services//models/malla_v2/FeatureServer/0",
          renderer: {
					  type: "class-breaks", // autocasts as new ClassBreaksRenderer()
					  field: "a1_c_0",
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
          url:"https://openlab.uab.cat:6443/arcgis/rest/services//models/malla_v2/FeatureServer/0",
          renderer: {
					  type: "class-breaks", // autocasts as new ClassBreaksRenderer()
					  field: "a1_c_0",
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
		
		
		indicador_principal = "fields" + document.getElementById("field-select").value;
		

        map = new Map({
          basemap: "gray",
          layers: [layerEscenari]
        });
		
        view1 = new MapView({
          container: "viewDiv",
          map: map,
          center: [2.13, 41.40],
          zoom: 10
        });
		
		const map2 = new Map({
          basemap: "gray",
          layers: [layer3]
        });
		
		mapDif = new Map({
          basemap: "gray",
          layers: [layer4]
        });
		
        view2 = new MapView({
          container: "viewDivtend",
          map: map2,
          center: [2.13, 41.40],
          zoom: 10
        });

		const viewDif = new MapView({
          container: "viewDivdif",
          map: mapDif,
          center: [2.13, 41.40],
          zoom: 10
        });

        /******************************************************************
         *
         * Add layers to layerInfos on the legend
         *
         ******************************************************************/

        legend1 = new Legend({
          view: view1,
		  layerInfos: [{
			layer: layerEscenari,
			title: ""
		  }],
		  style: "classic"
        });
		legend2 = new Legend({
          view: view2,
		  layerInfos: [{
			layer: layer3,
			title: ""
		  }],
		  style: "classic"
        });
		legendDif = new Legend({
          view: viewDif,
		  layerInfos: [{
			layer: layer4,
			title: ""
		  }],
		  style: "classic"
        });
		var bgExpand1 = new Expand({
          view: view1,
          content: legend1,
		  expanded:false
        });
		var bgExpand2 = new Expand({
          view: view2,
          content: legend2,
		  expanded:false
        });
		var bgExpandDif = new Expand({
          view: viewDif,
          content: legendDif,
		  expanded:false
        });
		
		 var homeBtn = new Home({
          view: view1
        });

	 // view.ui.add(legend, "bottom-right");
	   view1.ui.add(homeBtn, "top-left");
	  view1.ui.add(bgExpand1, "bottom-right");
	  view2.ui.add(bgExpand2, "bottom-right");
	  viewDif.ui.add(bgExpandDif, "bottom-right");
	  view1.ui.add("infoDiv", "top-right");
	  view2.ui.add("escenariDiv", "top-right");
	  viewDif.ui.add("escenariDif","top-right");
	  view1.ui._removeComponents(["attribution"]);
	  view2.ui._removeComponents(["attribution"]);
	  viewDif.ui._removeComponents(["attribution"]);
	  

			
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
        synchronizeViews([view1, view2, viewDif]);
});
	  
	 