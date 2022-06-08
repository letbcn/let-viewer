      
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
	   "esri/layers/support/Field",
     "esri/widgets/ScaleBar",
     "esri/widgets/BasemapGallery/support/PortalBasemapsSource",
     "esri/widgets/BasemapGallery",
     "esri/portal/Portal"
      ], function(Map, MapView, FeatureLayer, MapImageLayer, Legend,watchUtils,Expand,Home,colorAndSizeRendererCreator,Field, ScaleBar, PortalBasemapsSource, BasemapGallery, Portal) {
      

	
        layerEscenari = new FeatureLayer({
          url: "https://lablet.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
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
          url:"https://lablet.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
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
          url:"https://lablet.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
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
          url: "https://lablet.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
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
          url:"https://lablet.uab.cat:6443/arcgis/rest/services/models/malla_model_15_12/FeatureServer/0",
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

    const defaultPosition = [2.13, 41.40];
    const defaultZoom = 10;
    const minZoom = 10;
    const maxZoom = 14;
		
		const mapOptimitzation = new Map({
          basemap: "topo",
          layers: [layer3]
        });
		
    const viewOptimitzation = new MapView({
          container: "viewDiv",
          map: mapOptimitzation,
          center: defaultPosition,
          zoom: 11,
          constraints: {
            minZoom: minZoom,
            maxZoom: maxZoom
          }
        });
		// Add the expand instance to the ui
		var element = document.createElement('div');
        element.className = "esri-icon-left-arrow esri-widget--button esri-widget esri-interactive";
        element.addEventListener('click', function(evt){
          var cajaLateral = document.getElementById("control-panel") ;
		  cajaLateral.classList.toggle("slided");
		  var cajaviewDiv = document.getElementById("divMainMap") ;
		  cajaviewDiv.classList.toggle("slided");
		  this.classList.toggle("esri-icon-left-arrow");
		  this.classList.toggle("esri-icon-right-arrow");
        })
        viewOptimitzation.ui.add(element, "top-left");
		const mapActual = new Map({
          basemap: "topo",
          layers: [layerEscenari]
        });
		
		const mapDifActual = new Map({
          basemap: "topo",
          layers: [layer4]
        });
		
    const viewActual = new MapView({
          container: "viewDivActual",
          map: mapActual,
          center: defaultPosition,
          zoom: defaultZoom,
          constraints: {
            minZoom: minZoom,
            maxZoom: maxZoom
          }
        });

		const viewDifActual = new MapView({
          container: "viewDivDifActual",
          map: mapDifActual,
          center: defaultPosition,
          zoom: defaultZoom,
          constraints: {
            minZoom: minZoom,
            maxZoom: maxZoom
          }
        });


    const mapTendencial = new Map({
          basemap: "topo",
          layers: [layerEscenariTendencial]
        });
		
		const mapDifTendencial = new Map({
          basemap: "topo",
          layers: [layerDiferenciaEscenariTendencial]
        });
		
    const viewTendencial = new MapView({
          container: "viewDivTendencial",
          map: mapTendencial,
          center: defaultPosition,
          zoom: defaultZoom,
          constraints: {
            minZoom: minZoom,
            maxZoom: maxZoom
          }
        });

		const viewDifTendencial = new MapView({
          container: "viewDivDifTendencial",
          map: mapDifTendencial,
          center: defaultPosition,
          zoom: defaultZoom,
          constraints: {
            minZoom: minZoom,
            maxZoom: maxZoom
          }
        });

        /******************************************************************
         *
         * Add layers to layerInfos on the legend
         *
         ******************************************************************/

        legend1 = new Legend({
          view: viewOptimitzation,
		  layerInfos: [{
			layer: layer3,
			title: ""
		  }],
		  style: "classic"
        });
		legend2 = new Legend({
          view: viewActual,
		  layerInfos: [{
			layer: layerEscenari,
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
          view: viewTendencial,
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
		
    var homeBtnOptimitzation = new Home({
      view: viewOptimitzation
    });
    var homeBtnActual = new Home({
      view: viewActual
    });
    var homeBtnDifActual = new Home({
      view: viewDifActual
    });
    var homeBtnTendencial = new Home({
      view: viewTendencial
    });
    var homeBtnDifTendencial = new Home({
      view: viewDifTendencial
    });


    var scaleBarOptimitzation = new ScaleBar({
      view: viewOptimitzation,
      unit: "metric"
    });
    var scaleBarActual = new ScaleBar({
      view: viewActual,
      unit: "metric"
    });
    var scaleBarDifActual = new ScaleBar({
      view: viewDifActual,
      unit: "metric"
    });
    var scaleBarTendencial = new ScaleBar({
      view: viewTendencial,
      unit: "metric"
    });
    var scaleBarDifTendencial = new ScaleBar({
      view: viewDifTendencial,
      unit: "metric"
    });

    let portalEsri = new Portal({
		  url: "https://www.arcgis.com"
		});

    var sourceMap = new PortalBasemapsSource({
			portal: portalEsri
			});

    basemapGalleryOptimitzation = new BasemapGallery({
		  view: viewOptimitzation,
		  source: sourceMap,
		  container: document.createElement("div")
		});

    var bgExpandBaseMapOptimitzation = new Expand({
		  view: viewOptimitzation,
		  content: basemapGalleryOptimitzation
		});

    basemapGalleryActual = new BasemapGallery({
		  view: viewActual,
		  source: sourceMap,
		  container: document.createElement("div")
		});

    var bgExpandBaseMapActual = new Expand({
		  view: viewActual,
		  content: basemapGalleryActual
		});

    basemapGalleryDifActual = new BasemapGallery({
		  view: viewDifActual,
		  source: sourceMap,
		  container: document.createElement("div")
		});

    var bgExpandBaseMapDifActual = new Expand({
		  view: viewDifActual,
		  content: basemapGalleryDifActual
		});

    basemapGalleryTendencial = new BasemapGallery({
		  view: viewTendencial,
		  source: sourceMap,
		  container: document.createElement("div")
		});

    var bgExpandBaseMapTendencial = new Expand({
		  view: viewTendencial,
		  content: basemapGalleryTendencial
		});

    basemapGalleryDifTendencial = new BasemapGallery({
		  view: viewDifTendencial,
		  source: sourceMap,
		  container: document.createElement("div")
		});

    var bgExpandBaseMapDifTendencial = new Expand({
		  view: viewDifTendencial,
		  content: basemapGalleryDifTendencial
		});

	  viewOptimitzation.ui.add(homeBtnOptimitzation, "top-left");
    viewActual.ui.add(homeBtnActual, "top-left");
    viewDifActual.ui.add(homeBtnDifActual, "top-left");
    viewTendencial.ui.add(homeBtnTendencial, "top-left");
    viewDifTendencial.ui.add(homeBtnDifTendencial, "top-left");
	  viewOptimitzation.ui.add(bgExpand1, "bottom-right");
	  viewActual.ui.add(bgExpand2, "bottom-right");
    viewTendencial.ui.add(bgExpand2Tendencial, "bottom-right");
	  viewDifActual.ui.add(bgExpandDif, "bottom-right");
    viewDifTendencial.ui.add(bgExpandDifTendencial, "bottom-right");
	  //viewDifActual.ui.add("escenariDif","top-right");
    //viewDifTendencial.ui.add("escenariDifTendencial","top-right");
    viewOptimitzation.ui.add(scaleBarOptimitzation, {position: "bottom-left"});
    viewActual.ui.add(scaleBarActual, {position: "bottom-left"});
    viewDifActual.ui.add(scaleBarDifActual, {position: "bottom-left"});
    viewTendencial.ui.add(scaleBarTendencial, {position: "bottom-left"});
    viewDifTendencial.ui.add(scaleBarDifTendencial, {position: "bottom-left"});
    viewOptimitzation.ui.add(bgExpandBaseMapOptimitzation, "top-left");
    viewActual.ui.add(bgExpandBaseMapActual, "top-left");
    viewDifActual.ui.add(bgExpandBaseMapDifActual, "top-left");
    viewTendencial.ui.add(bgExpandBaseMapTendencial, "top-left");
    viewDifTendencial.ui.add(bgExpandBaseMapDifTendencial, "top-left");
	  viewOptimitzation.ui._removeComponents(["attribution"]);
	  viewActual.ui._removeComponents(["attribution"]);
    viewTendencial.ui._removeComponents(["attribution"]);
	  viewDifActual.ui._removeComponents(["attribution"]);
    viewDifTendencial.ui._removeComponents(["attribution"]);

    viewOptimitzation.surface.addEventListener("wheel", function(event) {   
        event.stopImmediatePropagation();  
    }, true);

    viewActual.surface.addEventListener("wheel", function(event) {   
      event.stopImmediatePropagation();  
  }, true);
    viewDifActual.surface.addEventListener("wheel", function(event) {   
      event.stopImmediatePropagation();  
  }, true);
    viewTendencial.surface.addEventListener("wheel", function(event) {   
      event.stopImmediatePropagation();  
  }, true);
    viewDifTendencial.surface.addEventListener("wheel", function(event) {   
      event.stopImmediatePropagation();  
  }, true);
					
	
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
	  
	 
function restaurar(){
  var inputs = document.getElementsByTagName("input");
  var resultrange = document.getElementsByClassName("resultRange");

  for( var i = 0; i<inputs.length; i++){

      if(inputs[i].type.toLowerCase() == "range"){
        inputs[i].value = 10;
        resultrange[i].textContent = "10";
      }

  }

  document.getElementById("myBar").style.height = 500+"px";
  document.getElementById("TotalRanges").textContent = "100";
}