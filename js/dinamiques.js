 require([    
		"esri/Map",
        "esri/views/MapView",
		"esri/views/SceneView",
        "esri/layers/GroupLayer",
        "esri/layers/MapImageLayer",
		"esri/layers/FeatureLayer",
		"esri/layers/WMSLayer",
		"esri/widgets/LayerList",
		"esri/widgets/Measurement",
		"esri/widgets/Legend",
		"esri/config",
		"esri/widgets/Expand",
		"esri/widgets/Search",
		"esri/widgets/Home",
		 "esri/widgets/BasemapGallery",
		 "esri/tasks/GeometryService",
      "esri/tasks/support/ProjectParameters",
	  "esri/widgets/Bookmarks",
	  "esri/widgets/TimeSlider",
	  "esri/portal/Portal",
	  "esri/widgets/BasemapGallery/support/PortalBasemapsSource",
	  "esri/tasks/IdentifyTask",
       "esri/tasks/support/IdentifyParameters",
	   "dojo/_base/array",
	   "dojo/dom-construct",
      "dojo/on",
      "dojo/dom",
      "dojo/promise/all",
      "dojo/domReady!"
      ], function(Map,MapView, SceneView, GroupLayer, MapImageLayer, FeatureLayer, WMSLayer, LayerList, Measurement, Legend, esriConfig, 
	  Expand, Search,Home,BasemapGallery,GeometryService,ProjectParameters,Bookmarks, TimeSlider, Portal,PortalBasemapsSource,IdentifyTask,IdentifyParameters, arrayUtils, domConstruct,on, dom, all) {
        
		
		
		//configuració portal
		esriConfig.portalUrl = "https://uab.maps.arcgis.com";
		esriConfig.request.proxyUrl = "proxy.jsp";
		
		capes = [];
		//capes d'àmbits Regions
		
		const sym = {
          type: "simple", // autocasts as new SimpleRenderer()
          symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0.8],
			outline:{color: [255, 255, 255, 0]}
          }
        };
		
		
		
		var AMBLayer = new FeatureLayer({
			url:
			  "https://openlab.uab.cat:6443/arcgis/rest/services/limits_administratius/cat/FeatureServer/0",
			renderer: sym,
			title: 'AMB',
			id:"AMB",
			visible:false,
			definitionExpression: "amb = 0"
			
		  });
		var RMBLayer = new FeatureLayer({
			url:
			  "https://openlab.uab.cat:6443/arcgis/rest/services/limits_administratius/cat/FeatureServer/0",
			renderer: sym,
			title: 'RMB',
			visible:true,
			id:"RMB",
			definitionExpression: "rmb = 0"
		  });
		  
		  var B30Layer = new FeatureLayer({
			url:
			  "https://openlab.uab.cat:6443/arcgis/rest/services/limits_administratius/cat/FeatureServer/0",
			renderer: sym,
			title: 'B30',
			visible:false,
			id:"B30",
			definitionExpression: "b30 = 0"
		  });
		
		
		//Grup de capes limits
		var regionsGroupLayer = new GroupLayer({
          visible: true,
		  title:gAmbits,
          visibilityMode: "independent",
          layers: [B30Layer,AMBLayer,RMBLayer],
          opacity: 0.90,
		  listMode:"hide"
        });
		
		
		
		
		//**********Limits Administratius ***********//
		//capes limits
			
		var comarquesLayer = new FeatureLayer({
		  portalItem: {  
			id: "b1cb0e81815b4557b977d9772dc52289"
		  },
		  id:"dff564bae81b4746a1b862a295261149",
		  visible: false,
		  title: "Comarques",
		  layerID: 0
		});

		var municipisLayer = new FeatureLayer({
		  portalItem: {  
			id: "3f51bf9674064661ace82a71da68de78"
		  },
		  id:"2b35430f24ca44f9806026d89a8c647c",
		  visible: true,
		  title: "Municipis",
		  layerID: 0
		});

		var seccionsLayer = new MapImageLayer({
		  portalItem: { 
			id: "130f774aa0764a388ed60362fe3f4739"
		  },
		  id:"c709a8d74f61439c9cd7df90a82a4d72",
		  visible: false,
		  title: lseccions,
		  listMode: "hide-children"
		});
		capes.push(seccionsLayer);
		
		//Grup de capes limits
		var limitsGroupLayer = new GroupLayer({
          title: gLimits,
          visible: true,
          visibilityMode: "independent",
          layers: [comarquesLayer, municipisLayer, seccionsLayer],
          opacity: 1
		});
		
		
		//**********Clima***********//
		//anomalies precipitació

		var anompp17Layer = new MapImageLayer({
			portalItem: { 
			  id: "fc8676ebbd8d4e84b6b1a7baf38f9a3a" 
			},
			id:"", //modificar
			visible: false,
			title: lAnomp17,
			listMode: "hide-children"
		  });
		
		var anompp18Layer = new MapImageLayer({
			portalItem: { 
			  id: "fd3b66281d8440939af2f294cea5a991" 
			},
			id:"", //modificar
			visible: false,
			title: lAnomp18,
			listMode: "hide-children"
		  });
		
		var anompp19Layer = new MapImageLayer({
			portalItem: { 
			  id: "ef969e48f1d9490289df93d7ec012db9" 
			},
			id:"", //modificar
			visible: false,
			title: lAnomp19,
			listMode: "hide-children"
		  });

		  var anomppGroupLayer = new GroupLayer({
			title: gAnompp,
			visible: true,
			visibilityMode: "independent",
			layers: [anompp19Layer, anompp18Layer, anompp17Layer],
			opacity: 1
		  });

		  var anomtmp16Layer = new MapImageLayer({
			portalItem: { 
			  id: "ca88fbf252f04c4ebd960565bb08ce37"
			},
			id:"", //modificar
			visible: false,
			title: lAnomt16, 
			listMode: "hide-children"
		  });
		  
		  var anomtmp17Layer = new MapImageLayer({
			portalItem: { 
			  id: "3f9fd56c17b94f29bc615936ab77609c"
			},
			id:"", //modificar
			visible: false,
			title: lAnomt17,
			listMode: "hide-children"
		  });

		  var anomtmp18Layer = new MapImageLayer({
			portalItem: { 
			  id: "e2723367c3d64836ab4825f32bb5b3fd"
			},
			id:"34b0da19e3e74aa88fc1f26f1bf763f3", 
			visible: false,
			title: lAnomt18,
			listMode: "hide-children"
		  });

		  var anomtmp19Layer = new MapImageLayer({
			portalItem: { 
			  id: "02f5aebf03b843d2a1f4e68bab29c3bb"
			},
			id:"78cca7bd8cb84eb887d20ed9ed3f3092",
			visible: false,
			title: lAnomt19,
			listMode: "hide-children"
		  });

		  
		    // adds the layer to the map
		
		
		  var anomtempGroupLayer = new GroupLayer({
			title: gAnomtemp,
			visible: true,
			visibilityMode: "independent",
			layers: [anomtmp19Layer, anomtmp18Layer, anomtmp17Layer, anomtmp16Layer],
			opacity: 1
		  });

		//grup de capes
		var climaGroupLayer = new GroupLayer({
          title: gClima,
          visible: true,
          visibilityMode: "independent",
          layers: [anomtempGroupLayer,anomppGroupLayer],
          opacity: 1
        });
		
		

		
		//capes d'usos
		var usos87Layer = new MapImageLayer({
          portalItem: { 
			id: "78e5e782c3ac40e8a8afd5154f679290"
		  },
		  id:"8178cd3d700d409b98c16385dcc15133",
		  visible: false,
          title: lusos87,
		  listMode: "hide-children"
        });
		capes.push(usos87Layer);
		
		var usos92Layer = new MapImageLayer({
          portalItem: { 
			id: "65f076e16cb44d0397ff40cfef2d560b"
		  },
		  id:"ad282a68bfb34eda9f14993b164f8037",
		  visible: false,
          title: lusos92,
		  listMode: "hide-children"
        });
		capes.push(usos92Layer);
		
		var usos97Layer = new MapImageLayer({
          portalItem: { 
			id: "ae7010f00bdc4ba3a7179179a8f6812e"
		  },
		  id:"ee2c7d4e0724403fa13ada858344118f",
		  visible: false,
          title: lusos97,
		  listMode: "hide-children"
        });
		capes.push(usos97Layer);
		
		var usos02Layer = new MapImageLayer({
          portalItem: { 
			id: "f069a959849a4b3281f16b5d8408a3b0"
		  },
		  id:"d8c7be6f3a2a4e37981d298e737b3b73",
		  visible: false,
          title: lusos02,
		  listMode: "hide-children"
        });
		capes.push(usos02Layer);
		
		var usos07Layer = new MapImageLayer({
          portalItem: { 
			id: "3e1111f02b6643d98d875e542c18bb2a"
		  },
		  id:"bb6de8743dae498bbdb8962e57df20b6",
		  visible: false,
          title: lusos07,
		  listMode: "hide-children"
        });
		capes.push(usos07Layer);
		
		var usos12Layer = new MapImageLayer({
          portalItem: { 
			id: "043ea7fcdb1f40ae938b0a9e412964e0"
		  },
		  id:"33ce419d22de4ae1b938b87a3b856172", 
		  visible: false,
          title: lusos12,
		  listMode: "hide-children"
        });
		capes.push(usos12Layer);
		
		var usos17Layer = new MapImageLayer({
          portalItem: { 
			id: "b84d225771574d3db930a808e893e134"
		  },
		  id:"1dc3aa4885dd40d287d3e6f1f0580b00",
		  visible: false,
          title: lusos17,
		  listMode: "hide-children"
        });
		capes.push(usos17Layer);

		//grup de capes
		var usosGroupLayer = new GroupLayer({
          title: gUsos,
          visible: true,
          visibilityMode: "independent",
          layers: [usos17Layer,usos12Layer,usos07Layer,usos02Layer,usos97Layer,usos92Layer,usos87Layer],
          opacity: 1
        });
		
		//Índex Vegetació

		var ndvi17Layer = new MapImageLayer({
          portalItem: { 
			id: "ca635e57c4f04f12b2c2aa10098d97cb"
		  },
		  id:"d982a6fc5923429abff4831f7a8681f5",
		  visible: false,
          title: lndvi17,
		  listMode: "hide-children"
        });
		capes.push(ndvi17Layer);
		
		var ndvi18Layer = new MapImageLayer({
          portalItem: { 
			id: "b425b61ef3f04446bc5e4369cff4206b"
		  },
		  id:"387fa0d8b85746919ea28f0e16280c35",
		  visible: false,
          title: lndvi18,
		  listMode: "hide-children"
        });
		capes.push(ndvi18Layer);
		
		var ndvi19Layer = new MapImageLayer({
          portalItem: { 
			id: "a8c82853a3044cdbac883617c7117d1a"
		  },
		  id:"c2a55bb4593b41ea9598be0f7786e11c",
		  visible: false,
          title: lndvi19,
		  listMode: "hide-children"
        });
		capes.push(ndvi19Layer);
		
		
		var ndviGroupLayer = new GroupLayer({
          title: gNdvi,
          visible: true,
          visibilityMode: "independent",
          layers: [ndvi19Layer,ndvi18Layer,ndvi17Layer],
          opacity: 1
        });
		
		// Variables biofisiques arbrat
		var biomassafoliarLayer = new MapImageLayer({
			portalItem: {  
			  id: "ab1c9082a5ef45ebaea40dbcdd75fe8b"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lbiofol,
			listMode: "hide-children"
		  });
		  capes.push(biomassafoliarLayer);

		  var biomassatotalLayer = new MapImageLayer({
			portalItem: {  
			  id: "bccc5bb1c60c42b39289b9a77f98457b"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lbiotot,
			listMode: "hide-children"
		  });
		  capes.push(biomassatotalLayer);

		  var hmitjaLayer = new MapImageLayer({
			portalItem: {  
			  id: "bccc5bb1c60c42b39289b9a77f98457b"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lhmitja,
			listMode: "hide-children"
		  });
		  capes.push(hmitjaLayer);

		var variarbratGroupLayer = new GroupLayer({
			title: gVarbrat,
			visible: true,
			visibilityMode: "independent",
			layers: [hmitjaLayer, biomassatotalLayer, biomassafoliarLayer],
			opacity: 1
		  });
		 

		// Estructura del paisatge	
		var ictLayer = new MapImageLayer({
			portalItem: {  
			  id: "b4a9c35ac42d4e31b056dc970fe88923"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lict,
			listMode: "hide-children"
		  });
		  capes.push(ictLayer);

		  var icecoLayer = new MapImageLayer({
			portalItem: {  
			  id: "c2cefa471cac464fbd2a81aa4aa55f2f"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lice,
			listMode: "hide-children"
		  });
		  capes.push(icecoLayer);

		  var estructuraGroupLayer = new GroupLayer({
			title: gEstict,
			visible: true,
			visibilityMode: "independent",
			layers: [ictLayer, icecoLayer],
			opacity: 1
		  });

		  	// Estat biodiversitat
		  var biodivsingLayer = new MapImageLayer({
			portalItem: {  
			  id: "0d53d67b5643450b9fb287127f318167"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lbiodsing,
			listMode: "hide-children"
		  });
		  capes.push(biodivsingLayer);

		  var biodivGroupLayer = new GroupLayer({
			title: gBiodiv,
			visible: true,
			visibilityMode: "independent",
			layers: [biodivsingLayer],
			opacity: 1
		  });

		 //Estat ecologic 
		  var ecorius07Layer = new MapImageLayer({
			portalItem: {  
			  id: "827c6d23a30146399900f06afc9693d1"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lecorius07,
			listMode: "hide-children"
		  });
		  capes.push(ecorius07Layer);

		  var ecorius13Layer = new MapImageLayer({
			portalItem: {  
			  id: "e31712f8f0494b5389d7f0aba19c2076"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lecorius13,
			listMode: "hide-children"
		  });
		  capes.push(ecorius13Layer);

		  var ecoriusGroupLayer = new GroupLayer({
			title: gEcorius,
			visible: true,
			visibilityMode: "independent",
			layers: [ecorius13Layer,ecorius07Layer],
			opacity: 1
		  });

		  var ecosub07Layer = new MapImageLayer({
			portalItem: {  
			  id: "ccb8bda20f9c4f689112b4da6c289694"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lecosub07,
			listMode: "hide-children"
		  });
		  capes.push(ecosub07Layer);

		  var ecosub13Layer = new MapImageLayer({
			portalItem: {  
			  id: "7fc5b670c4374738a7f79f2204fd51df"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lecosub13,
			listMode: "hide-children"
		  });
		  capes.push(ecosub13Layer);

		  var ecosubGroupLayer = new GroupLayer({
			title: gEcosub,
			visible: true,
			visibilityMode: "independent",
			layers: [ecosub13Layer, ecosub07Layer],
			opacity: 1
		  });

		  var ecoGroupLayer = new GroupLayer({
			title: gEco,
			visible: true,
			visibilityMode: "independent",
			layers: [ecosubGroupLayer, ecoriusGroupLayer],
			opacity: 1
		  });

		//Contaminació atmosferica
		var no2Layer = new MapImageLayer({
			portalItem: {  
			  id: "5a462b1cfc844cbda4ea2372e8a03d9e"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lno2,
			listMode: "hide-children"
		  });
		  capes.push(no2Layer);

		  var pm10Layer = new MapImageLayer({
			portalItem: {  
			  id: "67330ca65a95430f99e02ef8dc2cb9ee"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lpm10,
			listMode: "hide-children"
		  });
		  capes.push(pm10Layer);

		  var contmGroupLayer = new GroupLayer({
			title: gContm,
			visible: true,
			visibilityMode: "independent",
			layers: [pm10Layer, no2Layer],
			opacity: 1
		  });

		  //Consum aigüa

		  var aigua06Layer = new MapImageLayer({
			portalItem: {  
			  id: ""
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: laigua06,
			listMode: "hide-children"
		  });
		  capes.push(aigua06Layer);

		  var consumAiguaGroupLayer = new GroupLayer({
			title: gConaigua,
			visible: true,
			visibilityMode: "independent",
			layers: [aigua06Layer],
			opacity: 1
		  });


		  //Consum energia	 
		 
		  var energ11Layer = new MapImageLayer({
			portalItem: {  
			  id: "7e5c96c9674e442d89414df6e9baac15"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lenerg11,
			listMode: "hide-children"
		  });
		  capes.push(energ11Layer);
		  
		  var energ12Layer = new MapImageLayer({
			portalItem: {  
			  id: "ef7c39e7a977499a87e3d1c8e1ebbeb6"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lenerg12,
			listMode: "hide-children"
		  });
		  capes.push(energ12Layer);
		 
		  var energ13Layer = new MapImageLayer({
			portalItem: {  
			  id: "3697a88053574abab246d1ec96d3b137"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lenerg13,
			listMode: "hide-children"
		  });
		  capes.push(energ13Layer); 
		 
		  var energ14Layer = new MapImageLayer({
			portalItem: {  
			  id: "fe9179dd88304d46a5a08a26ac69a9ff"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lenerg14,
			listMode: "hide-children"
		  });
		  capes.push(energ14Layer);
		 
		  var energ15Layer = new MapImageLayer({
			portalItem: {  
			  id: "c7836456662b475199c809a42b96996c"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lenerg15,
			listMode: "hide-children"
		  });
		  capes.push(energ15Layer);

		  var consumEnergGroupLayer = new GroupLayer({
			title: gConenerg,
			visible: true,
			visibilityMode: "independent",
			layers: [energ15Layer,energ14Layer, energ13Layer, energ12Layer, energ11Layer],
			opacity: 1
		  });

		  var sostenibilitatGroupLayer = new GroupLayer({
			title: gSostUrb,
			visible: true,
			visibilityMode: "independent",
			layers: [ consumEnergGroupLayer, consumAiguaGroupLayer],
			opacity: 1
		  });

		  

		  //Riscos territorials
		var incendisLayer = new MapImageLayer({
			portalItem: {  
			  id: "0f08c9232808457fa2bc3e0c385fd9b6"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lincend,
			listMode: "hide-children"
		  });
		  capes.push(incendisLayer);

		  var inund10Layer = new MapImageLayer({
			portalItem: {  
			  id: "475589b7528c402db168280205110097"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: linund10,
			listMode: "hide-children"
		  });
		  capes.push(inund10Layer);

		  var inund100Layer = new MapImageLayer({
			portalItem: {  
			  id: "06d690a272ec4774aa7a9e7cd9bb1c11"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: linund100,
			listMode: "hide-children"
		  });
		  capes.push(inund100Layer);

		  var inund500Layer = new MapImageLayer({
			portalItem: {  
			  id: "33d39287a50c4085ba5e89d400de68af"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: linund500,
			listMode: "hide-children"
		  });
		  capes.push(inund500Layer);

		  var inundGroupLayer = new GroupLayer({
			title: gInund,
			visible: true,
			visibilityMode: "independent",
			layers: [inund500Layer, inund100Layer, inund10Layer],
			opacity: 1
		  });

		  var riscGroupLayer = new GroupLayer({
			title: gRisc,
			visible: true,
			visibilityMode: "independent",
			layers: [inundGroupLayer, incendisLayer],
			opacity: 1
		  });

		  var indsocioecoGroupLayer = new GroupLayer({
			title: gIndSocEco,
			visible: true,
			visibilityMode: "independent",
			layers: [riscGroupLayer, sostenibilitatGroupLayer, contmGroupLayer, ecoGroupLayer, biodivGroupLayer, estructuraGroupLayer, variarbratGroupLayer, ndviGroupLayer, 
				usosGroupLayer, climaGroupLayer],
			opacity: 1
		  });

		//Dinàmiques Socioeconòmiques

		//Demografia

		var poblacio15Layer = new MapImageLayer({
			portalItem: {  
			  id: "b7eb8a73c9ec41b895cb92cbc2004e8e"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lpobla15,
			listMode: "hide-children"
		  });
		  capes.push(poblacio15Layer);
		
		var poblacio20Layer = new MapImageLayer({
			portalItem: {  
			  id: "9bb5c44018ed4fb48877f80cf4c67787"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lpobla20,
			listMode: "hide-children"
		  });
		  capes.push(poblacio20Layer);

		  var densitat15Layer = new MapImageLayer({
			portalItem: {  
			  id: "555d8b1013cb4323923fe0bdaecd1293"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: ldensitat15,
			listMode: "hide-children"
		  });
		  capes.push(densitat15Layer);

		  var densiGroupLayer = new GroupLayer({
			title: gDensig,
			visible: true,
			visibilityMode: "independent",
			layers: [densitat15Layer],
			opacity: 1
		  });

		  var demoGroupLayer = new GroupLayer({
			title: gDemo,
			visible: true,
			visibilityMode: "independent",
			layers: [densiGroupLayer, poblacio20Layer, poblacio15Layer],
			opacity: 1
		  });
		  
		//Renda
		var rendabaixa15Layer = new MapImageLayer({
			portalItem: {  
			  id: "6dc97c6445d24082aa4996143b49a333"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lrendab15,
			listMode: "hide-children"
		  });
		  capes.push(rendabaixa15Layer);

		  var rendabaixa16Layer = new MapImageLayer({
			portalItem: {  
			  id: "88ecb060f60742868f8f29f450fe49ff"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lrendab16,
			listMode: "hide-children"
		  });
		  capes.push(rendabaixa16Layer);

		  var rendabaixa17Layer = new MapImageLayer({
			portalItem: {  
			  id: "16b3bb1ac4f349e8984367e6bb2cedcf"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lrendab17,
			listMode: "hide-children"
		  });
		  capes.push(rendabaixa17Layer);

		  var rendaint15Layer = new MapImageLayer({
			portalItem: {  
			  id: "fd8a6a88e957452c9cd0e889c0626023"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lrendai15,
			listMode: "hide-children"
		  });
		  capes.push(rendaint15Layer);

		  var rendaint16Layer = new MapImageLayer({
			portalItem: {  
			  id: "d5c02f45edef4ab8a66fe5755f7f5ca7"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lrendai16,
			listMode: "hide-children"
		  });
		  capes.push(rendaint16Layer);

		  var rendaint17Layer = new MapImageLayer({
			portalItem: {  
			  id: "d9b3aaba771c4c8d9c292b350452e7a2"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lrendai17,
			listMode: "hide-children"
		  });
		  capes.push(rendaint17Layer);

		  var rendaalt15Layer = new MapImageLayer({
			portalItem: {  
			  id: "addce5b2838943378d0befdde05de915"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lrendaa15,
			listMode: "hide-children"
		  });
		  capes.push(rendaalt15Layer);

		  var rendaalt16Layer = new MapImageLayer({
			portalItem: {  
			  id: "5e69b24c717243f286dabf456dc7473e"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lrendaa16,
			listMode: "hide-children"
		  });
		  capes.push(rendaalt16Layer);

		  var rendaalt17Layer = new MapImageLayer({
			portalItem: {  
			  id: "eb7558761663409d95e2c13ac8a8a427"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lrendaa17,
			listMode: "hide-children"
		  });
		  capes.push(rendaalt17Layer);

		  var ambest_rbaixaGroupLayer = new GroupLayer({
			title: gAmbestrbaix,
			visible: true,
			visibilityMode: "independent",
			layers: [rendabaixa17Layer, rendabaixa16Layer,rendabaixa15Layer],
			opacity: 1
		  });

		  var ambest_rintGroupLayer = new GroupLayer({
			title: gAmbestrint,
			visible: true,
			visibilityMode: "independent",
			layers: [rendaint17Layer, rendaint16Layer, rendaint15Layer],
			opacity: 1
		  });

		  var ambest_raltGroupLayer = new GroupLayer({
			title: gAmbestralt,
			visible: true,
			visibilityMode: "independent",
			layers: [rendaalt17Layer,rendaalt16Layer, rendaalt15Layer],
			opacity: 1
		  });

		  var ambest_rendaGroupLayer = new GroupLayer({
			title: gAmbestrenda,
			visible: true,
			visibilityMode: "independent",
			layers: [ambest_raltGroupLayer, ambest_rintGroupLayer, ambest_rbaixaGroupLayer],
			opacity: 1
		  });

		  //Atur

		  var atur17Layer = new MapImageLayer({
			portalItem: {  
			  id: "bf4cde5b54214c8093658e6f7701b293"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: latur17,
			listMode: "hide-children"
		  });
		  capes.push(atur17Layer);

		  var atur18Layer = new MapImageLayer({
			portalItem: {  
			  id: "bf4cde5b54214c8093658e6f7701b293"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: latur18,
			listMode: "hide-children"
		  });
		  capes.push(atur18Layer);

		  var atur19Layer = new MapImageLayer({
			portalItem: {  
			  id: "bf4cde5b54214c8093658e6f7701b293"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: latur19,
			listMode: "hide-children"
		  });
		  capes.push(atur19Layer);


		  var aturGroupLayer = new GroupLayer({
			title: gAtur,
			visible: true,
			visibilityMode: "independent",
			layers: [atur19Layer, atur18Layer, atur17Layer],
			opacity: 1
		  });

		  //Index vulnerabilitat

		  var vulne15Layer = new MapImageLayer({
			portalItem: {  
			  id: "bf4cde5b54214c8093658e6f7701b293"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lvulne15,
			listMode: "hide-children"
		  });
		  capes.push(vulne15Layer);

		  var vulne16Layer = new MapImageLayer({
			portalItem: {  
			  id: "0ecb128dae6545dcb1311bf5f736b04e"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lvulne16,
			listMode: "hide-children"
		  });
		  capes.push(vulne16Layer);

		  var vulne17Layer = new MapImageLayer({
			portalItem: {  
			  id: "ab7f57f97b0d4f97bcc87bc5621daa14"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lvulne17,
			listMode: "hide-children"
		  });
		  capes.push(vulne17Layer);

		  var ambest_rvulneGroupLayer = new GroupLayer({
			title: gAmbestvulne,
			visible: true,
			visibilityMode: "independent",
			layers: [vulne17Layer, vulne16Layer, vulne15Layer],
			opacity: 1
		  });

		  //Envelliment

		  var enve18Layer = new MapImageLayer({
			portalItem: {  
			  id: "e25a05976efd47828e27c2b8635de459"
			},
			id:'', //modificar
			visible: false,
			title: lenve18,
			listMode: "hide-children"
		  });
		  capes.push(enve18Layer);

		  var enve19Layer = new MapImageLayer({
			portalItem: {  
			  id: "aaee11c680f44a60bd4d06155e2ad976"
			},
			id:'', //modificar
			visible: false,
			title: lenve19,
			listMode: "hide-children"
		  });
		  capes.push(enve19Layer);

		  var index_enveGroupLayer = new GroupLayer({
			title: gAIndexEnve,
			visible: true,
			visibilityMode: "independent",
			layers: [enve19Layer, enve18Layer],
			opacity: 1
		  });

		  var majors15Layer = new MapImageLayer({
			portalItem: {  
			  id: "b5dd9f9e662c4cd2b2224d4db2256f05"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lmajors15,
			listMode: "hide-children"
		  });
		  capes.push(majors15Layer);

		  var majors16Layer = new MapImageLayer({
			portalItem: {  
			  id: "f28564d047124690b544884aa4f0c440"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lmajors16,
			listMode: "hide-children"
		  });
		  capes.push(majors16Layer);

		  var majors17Layer = new MapImageLayer({
			portalItem: {  
			  id: "d81005164bce4c0da3c0aaac69c51554"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lmajors17,
			listMode: "hide-children"
		  });
		  capes.push(majors17Layer);

		  var ambest_majorsGroupLayer = new GroupLayer({
			title: gAmbestmajors,
			visible: true,
			visibilityMode: "independent",
			layers: [majors17Layer, majors16Layer, majors15Layer],
			opacity: 1
		  });

		  var envellimentGroupLayer = new GroupLayer({
			title: gEnvelliment,
			visible: true,
			visibilityMode: "independent",
			layers: [ambest_majorsGroupLayer, index_enveGroupLayer],
			opacity: 1
		  });

		//Moviments migratoris

		var migrants20Layer = new MapImageLayer({
			portalItem: {  
			  id: "ff1d17ed5c2f4b09b1c0374ab9d57602"
			},
			id:'', //modificar
			visible: false,
			title: lmigra20,
			listMode: "hide-children"
		  });
		  capes.push(migrants20Layer);

		  var inmigracioGroupLayer = new GroupLayer({
			title: gMigrants,
			visible: true,
			visibilityMode: "independent",
			layers: [migrants20Layer],
			opacity: 1
		  });

		  var estrang15Layer = new MapImageLayer({
			portalItem: {  
			  id: "b5f9bbde0d8348a4b3b766f67e2e0be3"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lest15,
			listMode: "hide-children"
		  });
		  capes.push(estrang15Layer);

		  var estrang16Layer = new MapImageLayer({
			portalItem: {  
			  id: "c5631302c73e40e9ad35de701337d301"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lest16,
			listMode: "hide-children"
		  });
		  capes.push(estrang16Layer);
		 
		  var estrang17Layer = new MapImageLayer({
			portalItem: {  
			  id: "736553aabf154e06913692394d414b69"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lest17,
			listMode: "hide-children"
		  });
		  capes.push(estrang17Layer);

		  var ambest_estrangGroupLayer = new GroupLayer({
			title: gAmbestestrang,
			visible: true,
			visibilityMode: "independent",
			layers: [estrang17Layer, estrang16Layer, estrang15Layer],
			opacity: 1
		  });

		  var migraGroupLayer = new GroupLayer({
			title: gMigra,
			visible: true,
			visibilityMode: "independent",
			layers: [ambest_estrangGroupLayer, inmigracioGroupLayer],
			opacity: 1
		  });

		  //Saldo migratorio

		/*  var saldom19Layer = new MapImageLayer({
			portalItem: {  
			  id: ""
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lsaldomig19,
			listMode: "hide-children"
		  });
		  capes.push(saldom19Layer); */

		  //Habitatges
		  var esforçhabit18Layer = new MapImageLayer({
			portalItem: {  
			  id: "736553aabf154e06913692394d414b69"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lesfhabit18,
			listMode: "hide-children"
		  });
		  capes.push(esforçhabit18Layer);

		  var demandahabit19Layer = new MapImageLayer({
			portalItem: {  
			  id: "09d1b9ad8417420e8b55d67f883c4804"
			},
			id:'', //modificar
			visible: false,
			title: ldehabit19,
			listMode: "hide-children"
		  });
		  capes.push(demandahabit19Layer);

		  var demandahabit20Layer = new MapImageLayer({
			portalItem: {  
			  id: "4e810c8fb76e4a9db42e7ae8768a5305"
			},
			id:'', //modificar
			visible: false,
			title: ldehabit20,
			listMode: "hide-children"
		  });
		  capes.push(demandahabit20Layer);

		  var demandahabGroupLayer = new GroupLayer({
			title: gDemandhabitatge,
			visible: true,
			visibilityMode: "independent",
			layers: [demandahabit20Layer ],
			opacity: 1
		  });

			var habitatgeGroupLayer = new GroupLayer({
			title: gHabitatge,
			visible: true,
			visibilityMode: "independent",
			layers: [demandahabGroupLayer, esforçhabit18Layer],
			opacity: 1
		  });

		  //Formació
		  var formacio18Layer = new MapImageLayer({
			portalItem: {  
			  id: "736553aabf154e06913692394d414b69"
			},
			id:'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
			visible: false,
			title: lforma18,
			listMode: "hide-children"
		  });
		  capes.push(formacio18Layer);

			var formacioGroupLayer = new GroupLayer({
			title: gForma,
			visible: true,
			visibilityMode: "independent",
			layers: [formacio18Layer],
			opacity: 1
		  });


		  //Patents
		  var patentsLayer = new FeatureLayer({
			portalItem: {  
				id: "8b09cca17e9b486785ac9b8c9dd261c8"
			  },
			  id:"",
			  visible: false,
			  title: "Patents europees",
			  layerID: 0
			});

		  var sociopatentsGroupLayer = new GroupLayer({
			title: gSociopatents,
			visible: true,
			visibilityMode: "independent",
			layers: [patentsLayer],
			opacity: 1
		  });

		//grup de capes
		var socioGroupLayer = new GroupLayer({
          title: gSocio,
          visible: true,
          visibilityMode: "independent",
          layers: [sociopatentsGroupLayer,formacioGroupLayer, habitatgeGroupLayer, migraGroupLayer, envellimentGroupLayer, 
			ambest_rvulneGroupLayer, aturGroupLayer, ambest_rendaGroupLayer, demoGroupLayer],
          opacity: 1
        });
		
	
        // Create a map and add the group layer to it

       map = new Map({
          basemap: "topo",
		 layers: [socioGroupLayer,indsocioecoGroupLayer, regionsGroupLayer, limitsGroupLayer]
        });
		
		

			
        // Add the map to a MapView

        view = new MapView({
          center: [2.125369, 41.5007585],
          zoom: 10,
          container: "viewDiv",
          map: map
        });
		
        
        view.surface.addEventListener("wheel", function (event) {
			event.stopImmediatePropagation();
		}, true);
		/*const TimeSlider1 = new TimeSlider({
			container: "sliderDiv",
			
		  });
		  view.ui.add(TimeSlider1, "bottom-right");

		  let timeLayerView;
		view.whenLayerView(layer).then(function(layerView) {
			layer = layerView;
  		const fullTimeExtent = layerView.timeInfo.fullTimeExtent;
  		const start = fullTimeExtent.start;

		  // set up time slider properties based on layer timeInfo
  		TimeSlider1.fullTimeExtent = fullTimeExtent;
  		TimeSlider1.values = [start];
  		TimeSlider1.stops = {
    	interval: layer.timeInfo.interval
  	};
	});

	TimeSlider1.watch("timeExtent", function(value){
  // update layer view filter to reflect current timeExtent
 	timeLayerView.filter = {
    timeExtent: value
  	};
	});

		//view.popup.defaultPopupTemplateEnabled = true;

*/
        // Creates actions in the LayerList.

        function defineActions(event) {
          // The event object contains an item property.
          // is is a ListItem referencing the associated layer
          // and other properties. You can control the visibility of the
          // item, its title, and actions using this object.

			var item = event.item;
		  
			if (item.layer.id =="AMB" || item.layer.id =="RMB" || item.layer.id =="CAT"){
				return;
			}			
		
			if (item.layer.type != "group") {
			  // don't show legend twice
			  item.panel = {
				content: "legend",
				open: false
			  };
			} 


         if (item.layer.type != "group") {
            // An array of objects defining actions to place in the LayerList.
            // By making this array two-dimensional, you can separate similar
            // actions into separate groups with a breaking line.

		   if (item.layer.type != "wms") {
            item.actionsSections = [
              [
                {
                  title: fFullextent,
                  className: "esri-icon-zoom-out-fixed",
                  id: "full-extent"
                },
                {
                  title: fInfo,
                  className: "esri-icon-description",
                  id: "information"
                },
                {
                  title: fDescarrega,
                  className: "esri-icon-download",
                  id: "download"
                }
              ],
              [
                {
                  title: fMesopacitat,
                  className: "esri-icon-up",
                  id: "increase-opacity"
                },
                {
                  title: fMenysopacitat,
                  className: "esri-icon-down",
                  id: "decrease-opacity"
                }
              ]
            ];
			
			} else {
				 item.actionsSections = [
              [
                {
                  title: fFullextent,
                  className: "esri-icon-zoom-out-fixed",
                  id: "full-extent"
                },
                {
                  title: fInfo,
                  className: "esri-icon-description",
                  id: "information"
                }
              ],
              [
                {
                  title: fMesopacitat,
                  className: "esri-icon-up",
                  id: "increase-opacity"
                },
                {
                  title: fMenysopacitat,
                  className: "esri-icon-down",
                  id: "decrease-opacity"
                }
              ]
            ];
			
			}
			
			
			
          }
        }

        view.when(function() {
		
			
          // Create the LayerList widget with the associated actions
          // and add it to the top-right corner of the view.

          var layerList = new LayerList({
            view: view,
			selectionEnabled: true,
			container: document.getElementById("divCapes"),
            // executes for each ListItem in the LayerList
            listItemCreatedFunction: defineActions
			
          });

		  
          // Event listener that fires each time an action is triggered

          layerList.on("trigger-action", function(event) {
		  
		
   
           var activeLayer = event.item.layer;

            // Capture the action id.
            var id = event.action.id;

            if (id === "full-extent") {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
             //view.goTo(activeLayer.fullExtent);
		
			// if the full-extent action is triggered then navigate
			  // to the full extent of the visible layer
			  if(event.item.layer.fullExtent.spatialReference !== view.spatialReference){
				var geomSer = new GeometryService({url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer'});
				var params = new ProjectParameters({
				  geometries: [event.item.layer.fullExtent],
				  outSpatialReference: view.spatialReference
				});
				geomSer.project(params).then(function(results){
				  view.goTo(results[0]);
				});
			  }else{
				view.goTo(event.item.layer.fullExtent);
			  }
				
			  
			 
				
			  //view.goTo(activeLayer.queryExtent);
            } else if (id === "information") {
              // if the information action is triggered, then
              // open the item details page of the service layer
              //window.open(activeLayer.url);
				window.open(activeLayer.portalItem.itemUrl + "/info/metadata/metadata.xml?format=default&output=html")
            } else if (id === "download") {
              // if the information action is triggered, then
              // open the item details page of the service layer
              //window.open(activeLayer.url);
				window.open("https://uab.maps.arcgis.com/sharing/rest/content/items/" + activeLayer.id + "/data?")
            } else if (id === "increase-opacity") {
              

              if (activeLayer.opacity < 1) {
                activeLayer.opacity += 0.10;
              }
            } else if (id === "decrease-opacity") {
              

              if (activeLayer.opacity > 0) {
                activeLayer.opacity -= 0.10;
              }
            }
          });
		  
		// Create an Expand instance and set the content
        // property to the DOM node of the basemap gallery widget
        // Use an Esri icon font to represent the content inside
        // of the Expand widget
		
		
		var layerListAmbits = new LayerList({
            view: view,
          });

				  //widget de cerca
		
		var searchWidget = new Search({
		  view: view,
		  container: document.createElement("div"),
		  allPlaceholder: "Cerca aquí",
		  includeDefaultSources: false,
		  sources: [
			
			{
			  layer: municipisLayer,
			  searchFields: ["nommuni"],
			  displayField: "nommuni",
			  exactMatch: false,
			  outFields: ["nommuni"],
			  name: "Municipis",
			  zoomScale:25000,
			  placeholder: "example: Barcelona"
			},
			{
			  layer: comarquesLayer,
			  searchFields: ["nomcomar"],
			  displayField: "nomcomar",
			  exactMatch: false,
			  outFields: ["nomcomar"],
			  name: "Comarques",
			  zoomScale:25000,
			  placeholder: "example: Garraf"
			}
		  ]
		});
		
		// Home button
        // Add the expand instance to the ui//Botó home
		var homeBtn = new Home({
          view: view,
          tooltip: fMesures
        });
        view.ui.add(homeBtn, "top-left");

		
        // Add the expand instance to the ui
		var element = document.createElement('div');
        element.className = "esri-icon-left-arrow esri-widget--button esri-widget esri-interactive";
        element.addEventListener('click', function(evt){
          var cajaLateral = document.getElementById("lateral") ;
		  cajaLateral.classList.toggle("slided");
		  var cajaviewDiv = document.getElementById("viewDiv") ;
		  cajaviewDiv.classList.toggle("slided");
		  this.classList.toggle("esri-icon-left-arrow");
		  this.classList.toggle("esri-icon-right-arrow");
        })
        view.ui.add(element, "top-left"); 

		
		//cerca
		var searchExpand = new Expand({
			view: view,
			content: searchWidget,
			expandTooltip: fCerca,
			collapseTooltip:fTanca
		  });

        view.ui.add(searchExpand, "top-left");
   		
	   let portalEsri = new Portal({
		  url: "https://www.arcgis.com" // First instance
		});
		
	   // query portal basemaps with an object
		var source = new PortalBasemapsSource({
			portal: portalEsri
			});
	   
	   //CANVI MAPA BASE
		 basemapGallery = new BasemapGallery({
		  view: view,
		  source: source,
		  container: document.createElement("div")
		});
		/*
		var handle = map.watch('basemap.title', function(newValue, oldValue, property, object) {
				if (newValue != undefined) {
				 document.getElementById("mapabaseInput").checked=true;
				}
			  console.log("New value: ", newValue,      // The new value of the property
						  "<br>Old value: ", oldValue,  // The previous value of the changed property
						  "<br>Watched property: ", property,  // In this example this value will always be "basemap.title"
						  "<br>Watched object: ", object);     // In this example this value will always be the map object
			});
			*/
		// Create an Expand instance and set the content
		// property to the DOM node of the basemap gallery widget

		var bgExpand = new Expand({
		  view: view,
		  content: basemapGallery,
		  expandTooltip:fObregaleria,
		  collapseTooltip:fTanca
		});

		// Add the expand instance to the ui

		view.ui.add(bgExpand, "top-left");
		
	
	//Mesures

        var node = domConstruct.create("div", {
     		 innerHTML:  "<div id='toolbarDiv' class='esri-component esri-widget'>"+
	      				"<button  id='distanceButton' class='esri-widget--button esri-interactive esri-icon-measure-line'" +
	       				" title='Distance Measurement Tool' onclick='distanceMeasurement()'></button>" +
	       				"<button id='areaButton' class='esri-widget--button esri-interactive esri-icon-measure-area'"+
					    "    title='Area Measurement Tool' onclick='areaMeasurement()'></button>"+
					    "<button id='clearButton' class='esri-widget--button esri-interactive esri-icon-trash'" +
					     "   title='Clear Measurements' onclick='clearMeasurements()'></button>"
		});
   		
		const measureExpand = new Expand({
          view: view,
          expandIconClass: "esri-icon-measure-line",
          expanded: false,
          expandTooltip: fMesures,
          content: node
         });
        
        view.ui.add(measureExpand, "top-left");
	    measurement = new Measurement();
        
        measurement.view = view;

   		view.ui.add(measurement, "bottom-right");
	

		//ZOOM A ÀREES PREDEFINIDES
		
		var ambits = [  
		{  
		  "name": "(RMB) Regió Metropolitana de Barcelona (164 municipis)",
		  "id" : "RMB",
		  "extent": {  
			"xmin": 1.473162,  
			"ymin": 41.192715,  
			"xmax": 2.777576,  
			"ymax": 41.808802,  
			"spatialReference": {  
			  "wkid":4326   
			}  
		  },  
		  "thumbnail": "imatges/ambit_rmb.jpg"  
		},  
		{  
		  "name": "(AMB) Àrea Metropolitana de Barcelona (36 municipis)",  
		  "id" : "AMB",
		  "extent": {  
			"xmin": 1.846733,  
			"ymin": 41.263312,  
			"xmax": 2.296332,  
			"ymax": 41.574837 ,  
			"spatialReference": {  
			  "wkid": 4326 
			}  
		  },  
		  "thumbnail": "imatges/ambit_amb.jpg"   
		},  
		{  
		  "name": "(B30) Àmbit de l'eix B30 (23 municipis)",  
		  "id" : "B30",
		  "extent": {  
			"xmin": 1.889904 ,  
			"ymin": 41.414954,  
			"xmax": 2.382878,  
			"ymax": 41.666569,  
			"spatialReference": {  
			  "wkid": 4326 
			}  
		  },  
		  "thumbnail": "imatges/ambit_b30.jpg"  
		}  
	  ]  
		
		const bookmarks = new Bookmarks({
          view: view,
          // allows bookmarks to be added, edited, or deleted
          editingEnabled: false,
		  bookmarks: ambits
        });

        const bkExpand = new Expand({
          view: view,
          content: bookmarks,
          expanded: true,
		  expandTooltip:fObrebookmarks,
		  collapseTooltip:fTanca
        });

        // Add the widget to the bottom-right corner of the view
        view.ui.add(bkExpand, "bottom-right");
		
		bookmarks.on("select-bookmark", function(event){
			bkExpand.expanded = false;
			//intentaré que es carreguin les capes corresponents
			if (event.bookmark.id =="RMB") {
				B30Layer.visible = false;
				AMBLayer.visible = false;
				RMBLayer.visible = true;
			} else if (event.bookmark.id =="AMB") {
				B30Layer.visible = false;
				RMBLayer.visible = false;
				AMBLayer.visible = true;
				
			} else if (event.bookmark.id =="B30") {
				RMBLayer.visible = false;
				AMBLayer.visible = false;
				B30Layer.visible = true;
			}
		});

	

		//AFEGIR BOTÓ AJUDA
	/*	const instructionsExpand = new Expand({
          expandIconClass: "esri-icon-description",
          expandTooltip: tooltipInfo,
          view: view,
          expanded: false,
          content: contingutInfo
  
            
        });
        view.ui.add(instructionsExpand, "top-left");*/
        // Close the 'help' popup when view is focused
        view.watch("focused", function(isFocused) {
          if (isFocused) {
            instructionsExpand.expanded = false;
          }
        });
		
		
	
		 view.when(function() {
			//MAPA BASE
			  document
				.getElementById("mapabaseInput")
				.addEventListener("change", updateMapabase);

			  function updateMapabase(ev) {
			  
				if (ev.target.checked) {
					map.basemap = mapabase;

					} else {
					mapabase = map.basemap.clone();
					map.basemap = null;
					
				}
			   
				
			  }
			  view.ui.add("mapabaseDiv", "bottom-right");
		  
			
		  
			  //IDENTIFY
			  
			  
			
			  
			   //Set the tasks array
			  
			 /* tasks.push(new IdentifyTask(geologic_URL));
			  tasks.push(new IdentifyTask(edafologicST_URL));
			  tasks.push(new IdentifyTask(edafologicWRB_URL));
			  
			   

			  // Set the parameters for the Identify
			  params = new IdentifyParameters();
			  params.tolerance = 3;
			  params.layerIds = [0];
			  params.layerOption = "top";
			  params.width = view.width;
			  params.height = view.height;
			  params.returnGeometry = true;
			   
				allParams.push(params);
				allParams.push(params);
				allParams.push(params);*/
				
			 
			  
			  // executeIdentifyTask() is called each time the view is clicked
			  view.on("click", executeIdentifyTask);
        });
		
		
		 // Executes each time the view is clicked
        function executeIdentifyTask(event) {
				tasks = [];
			  allParams = [];
			 for (var j = 0; j < capes.length;j++){
				if (capes[j].visible){
					tasks.push(new IdentifyTask(capes[j].url))
					// Set the parameters for the Identify
					params = new IdentifyParameters();
					params.tolerance = 3;
					//params.layerIds = [0];
					params.layerOption = "visible";
					params.width = view.width;
					params.height = view.height;
					params.returnGeometry = true;
					params.geometry = event.mapPoint;
					params.mapExtent = view.extent;
				   
					allParams.push(params);
				}
			  }
			
			
			 promises = [];
			 var identifyElements = [];
			  // Set the geometry to the location of the view click
			  
			//allParams[0].geometry = allParams[1].geometry = allParams[2].geometry = event.mapPoint;
			//allParams[0].mapExtent = allParams[1].mapExtent = allParams[2].mapExtent = view.extent;
			for (i = 0; i < tasks.length; i++) {
			  promises.push(tasks[i].execute(allParams[i]));
			}
			var iPromises = new all(promises);

			iPromises.then(function (rArray) {
			  arrayUtils.map(rArray, function(response){
				var results = response.results;
				return arrayUtils.map(results, function(result) {
				  var feature = result.feature;
				  var layerName = result.layerName;

				  feature.attributes.layerName = layerName;
				  contingut = "<b>";
				  for (var i in feature.attributes) {
					   if (i != "FID" && i != "layerName" && i != "Shape") contingut += i + "</b>: " +feature.attributes[i]+" <br><b>";
					}
					 identifyElements.push(feature);
				 feature.popupTemplate = {
						// autocasts as new PopupTemplate()
						title: layerName ,
						content: contingut
					  };

				  if (majors15Layer.visible) {
					  feature.popupTemplate = {
						// autocasts as new PopupTemplate()
						title: layerName + ": {CODI_CAS}",
						content: contingut
					  };
					   identifyElements.push(feature);

				  } else if (majors16Layer.visible) {
						feature.popupTemplate = { // autocasts as new PopupTemplate()
						  title: layerName,
						  content: contingut
						
						};
						 identifyElements.push(feature);
				  }
				 
				  if (cob56Layer.visible) {
					feature.popupTemplate = {
					  // autocasts as new PopupTemplate()
					  title: layerName + ": {CODI_CAS}",
					  content: "<b>{cat_niv3}</b>" 
					};
					 identifyElements.push(feature);
	
					} else if (cob15Layer.visible) {
						feature.popupTemplate = { // autocasts as new PopupTemplate()
						  title: layerName + ": {CODI_CAS}",
						  content: "<b>{cat_niv_5}</b>" 
						
						};
						 identifyElements.push(feature);
					}

				});
			  })
			  showPopup(identifyElements);
			});

          // Shows the results of the Identify in a popup once the promise is resolved
           function showPopup(response) {
          //console.log(response);
          if (response.length > 0) {
            view.popup.open({
              features: response,
              location: event.mapPoint
            });
          }
          dom.byId("viewDiv").style.cursor = "auto";
        }
        }
		
		
	
		
        });
      });

//FI IDENTIFY
      
	


      function distanceMeasurement() {
          const type = view.type;
          measurement.activeTool =
            type.toUpperCase() === "2D" ? "distance" : "direct-line";
          distanceButton.classList.add("active");
          areaButton.classList.remove("active");
        }

        // Call the appropriate AreaMeasurement2D or AreaMeasurement3D
        function areaMeasurement() {
          measurement.activeTool = "area";
          distanceButton.classList.remove("active");
          areaButton.classList.add("active");
        }

        // Clears all measurements
        function clearMeasurements() {
          distanceButton.classList.remove("active");
          areaButton.classList.remove("active");
          measurement.clear();
   		}