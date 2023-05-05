 require([    
		"esri/Map",
        "esri/views/MapView",
		"esri/views/SceneView",
        "esri/layers/GroupLayer",
        "esri/layers/MapImageLayer",
		"esri/layers/FeatureLayer",
		"esri/layers/TileLayer",
		"esri/layers/VectorTileLayer",
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
      ], function(Map,MapView, SceneView, GroupLayer, MapImageLayer, FeatureLayer, VectorTileLayer, TileLayer, WMSLayer, LayerList, Measurement, Legend, esriConfig, 
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
			  "https://lablet.uab.cat/arcgis/rest/services/limits_administratius/amb_cat/FeatureServer/0",
			renderer: sym,
			title: 'AMB',
			id:"AMB",
			visible:false,
			definitionExpression: "amb = 0"

		  });
		var RMBLayer = new FeatureLayer({
			url:
			  "https://lablet.uab.cat/arcgis/rest/services/limits_administratius/rmb_cat/FeatureServer/0",
			renderer: sym,
			title: 'RMB',
			visible:true,
			id:"RMB",
			definitionExpression: "rmb = 0"
		  });

		  var B30Layer = new FeatureLayer({
			url:
			  "https://lablet.uab.cat/arcgis/rest/services/limits_administratius/b30_cat/FeatureServer/0",
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
			
		var comarcacercaLayer = new FeatureLayer({
			portalItem: {  
				id: "a5fea4e24c124394be4658bef5ddf3da"
			  },
			  id:"",
			  visible: true,
			  layerID: 0
			});

		var comarquesLayer = new MapImageLayer({
			portalItem: {
				id: "b628d29242aa4591b986a4c293f8edda"
			},
			id: "",
			visible: false,
			title: lcomarca,
			listMode: "hide-children"
			});

		var municipiscercaLayer = new FeatureLayer({
			portalItem: {  
					id: "3db378fe1bfb49b8b0fc2c859c69da03"
				  },
				  id:"",
				  visible: true,
				  layerID: 0
				});
		
		var municipisLayer = new MapImageLayer({
				portalItem: {
					id: "859bf95613ab4057b021b6a0deeef203"
				},
				id: "",
				visible: true,
				title: lmunicipis,
				listMode: "hide-children"
			});
			capes.push(municipisLayer);

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
		
		
		//Imatges aeries
		var orto10m45Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto10m45,
			listMode: "hide-children",
			sublayers: [{
				name: "ovaa10m"
			}]
		});

		var orto5m56Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m56,
			listMode: "hide-children",
			sublayers: [{
				name: "ovab5m"
			}]
		});
	
		var orto5m86Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m86,
			listMode: "hide-children",
			sublayers: [{
				name: "orto5m1986"
			}]
		});
	
		var orto5m94Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m94,
			listMode: "hide-children",
			sublayers: [{
				name: "orto5m1994"
			}]
		});
	
		var orto5m00Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m00,
			listMode: "hide-children",
			sublayers: [{
				name: "orto5m2000"
			}]
		});
	
		var orto5m04Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m04,
			listMode: "hide-children",
			sublayers: [{
				name: "orto5m2004"
			}]
		});
	
		var orto5m06Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m06,
			listMode: "hide-children",
			sublayers: [{
				name: "orto5m2006"
			}]
		});
	
		var orto5m09Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m09,
			listMode: "hide-children",
			sublayers: [{
				name: "orto5m2009"
			}]
		});
	
		var orto5m12Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m12,
			listMode: "hide-children",
			sublayers: [{
				name: "orto5m2012"
			}]
		});
	
		var orto5m15Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m15,
			listMode: "hide-children",
			sublayers: [{
				name: "orto5m2015"
			}]
		});
	
		var orto5m18Layer = new WMSLayer({
			portalItem: {
				id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
			},
			visible: false,
			title: lorto5m18,
			listMode: "hide-children",
			sublayers: [{
				name: "orto25c2018"
				
			}]
		});

		var orto5cactualLayer = new WMSLayer({
			portalItem: {
				id: "e6d7098789934688be76822f066f7e4c"
			},
			visible: false,
			title: lortoact,
			listMode: "hide-children",
			sublayers: [{
				name: "orto25c"
				
			}]
		});
	
		var imatgesHistoricGroupLayer = new GroupLayer({
			title: gHistoric,
			visible: true,
			visibilityMode: "independent",
			layers: [ orto10m45Layer, orto5m56Layer, orto5m86Layer, orto5m94Layer, orto5m00Layer,
				orto5m04Layer,  orto5m06Layer, orto5m09Layer, orto5m12Layer, orto5m15Layer, orto5m18Layer, orto5cactualLayer],
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
			id:"dcf77c502a854bc6a167970e239bbf45",
			visible: false,
			title: lAnomp19,
			listMode: "hide-children"
		  });

		  var anompp20Layer = new MapImageLayer({
			portalItem: { 
			  id: "081e11b0e0b640f592d7cb3e2d6487a0" 
			},
			id:"", //modificar
			visible: false,
			title: lAnomp20,
			listMode: "hide-children"
		  });

		  var anompp21Layer = new MapImageLayer({
			portalItem: { 
			  id: "2b64dcf8713b4fccb295d0d06c1b773d" 
			},
			id:"6f0d366e49f648559fa282ad0e5a4110",
			visible: false,
			title: lAnomp21,
			listMode: "hide-children"
		  });

		  var anomppGroupLayer = new GroupLayer({
			title: gAnompp,
			visible: true,
			visibilityMode: "independent",
			layers: [anompp17Layer, anompp18Layer, anompp19Layer, anompp20Layer, anompp21Layer],
			opacity: 1
		  });

		  //Temperatura
		  var anomtmp16Layer = new MapImageLayer({
			portalItem: { 
			  id: "ca88fbf252f04c4ebd960565bb08ce37"
			},
			id:"", 
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
			id:"", 
			visible: false,
			title: lAnomt18,
			listMode: "hide-children"
		  });

		  var anomtmp19Layer = new MapImageLayer({
			portalItem: { 
			  id: "02f5aebf03b843d2a1f4e68bab29c3bb"
			},
			id:"",
			visible: false,
			title: lAnomt19,
			listMode: "hide-children"
		  });

		  var anomtmp20Layer = new MapImageLayer({
			portalItem: { 
			  id: "16ad44590f39404e9394f9a33192899b"
			},
			id:"",
			visible: false,
			title: lAnomt20,
			listMode: "hide-children"
		  });

		  var anomtmp21Layer = new MapImageLayer({
			portalItem: { 
			  id: "83c83f9da3814595887b7a7a23889f8c"
			},
			id:"5221c65c3ed541fb826f916d68f037bf",
			visible: false,
			title: lAnomt21,
			listMode: "hide-children"
		  });

		  var anomtempGroupLayer = new GroupLayer({
			title: gAnomtemp,
			visible: true,
			visibilityMode: "independent",
			layers: [anomtmp16Layer, anomtmp17Layer, anomtmp18Layer, anomtmp19Layer, anomtmp20Layer,anomtmp21Layer],
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
		
		//Cobertes
		var cob56Layer = new MapImageLayer({
			portalItem: { 
			  id: "fd6676d3933a4453ac460c6b138fb25c"
			},
			id:"0aae1d777de6430fb7d4233db847686f",
			visible: false,
			title: lcob56,
			listMode: "hide-children"
		  });

		  var cob00Layer = new MapImageLayer({
			portalItem: { 
			  id: "908a6272be7b4a9990269de1e99f9e87"
			},
			id:"",
			visible: false,
			title: lcob00,
			listMode: "hide-children"
		  });

		  var cob05Layer = new MapImageLayer({
			portalItem: { 
			  id: "0c4e5db4edc34ab7865abffe30d2f347"
			},
			id:"",
			visible: false,
			title: lcob05,
			listMode: "hide-children"
		  });

		  var cob09Layer = new MapImageLayer({
			portalItem: { 
			 id: "e6641663140245d7a2836b8883279e74"
			},
			id:"647a266cab014a36a833eab2eb84d082",
			visible: false,
			title: lcob09,
			listMode: "hide-children"
		  });
	
		  var cob15Layer = new MapImageLayer({
			portalItem: { 
			  id: "5503f6895b424d738a0eae35438508aa"
			},
			id:"",
			visible: false,
			title: lcob15,
			listMode: "hide-children"
		  });

		  var cob20Layer = new MapImageLayer({
			portalItem: {
				id: "426a62b5e045463b8da4dc06f3b5afb4"
			},
			id: "",
			visible: false,
			title: lcob20,
			listMode: "hide-children"
		});

		  var cobGroupLayer = new GroupLayer({
			title: gCob,
			visible: true,
			visibilityMode: "independent",
			layers: [cob56Layer, cob00Layer,cob05Layer, cob09Layer, cob15Layer, cob20Layer],
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
		  layers: [usos87Layer,usos92Layer,usos97Layer,usos02Layer,usos07Layer,usos12Layer,usos17Layer],
          opacity: 1
        });

		var cobusosGroupLayer = new GroupLayer({
			title: gCobusos,
			visible: true,
			visibilityMode: "independent",
			layers: [usosGroupLayer, cobGroupLayer],
			opacity: 1
		  });
		

		//Activitat vegetació
		//Índex Vegetació

		var ndvi17Layer = new MapImageLayer({
          portalItem: { 
			id: "ca635e57c4f04f12b2c2aa10098d97cb"
		  },
		  id:"",
		  visible: false,
          title: lndvi17,
		  listMode: "hide-children"
        });
		capes.push(ndvi17Layer);
		
		var ndvi18Layer = new MapImageLayer({
          portalItem: { 
			id: "b425b61ef3f04446bc5e4369cff4206b"
		  },
		  id:"",
		  visible: false,
          title: lndvi18,
		  listMode: "hide-children"
        });
		capes.push(ndvi18Layer);
		
		var ndvi19Layer = new MapImageLayer({
          portalItem: { 
			id: "a8c82853a3044cdbac883617c7117d1a"
		  },
		  id:"",
		  visible: false,
          title: lndvi19,
		  listMode: "hide-children"
        });
		capes.push(ndvi19Layer);

		var ndvi20Layer = new MapImageLayer({
			portalItem: { 
			  id: "1e41f8068df84a2ebaaef04dce0e006b"
			},
			id:'7ef80987363942f1b6cfde7765351b35',
			visible: false,
			title: lndvi20,
			listMode: "hide-children"
		  });
		  capes.push(ndvi20Layer);
		
		var ndvi21Layer = new MapImageLayer({
			portalItem: {
				id: "00ec911500834262b30eca83be06361d"
			},
			id: 'df7221be23604a028e5b39f3c4eb6460',
			visible: false,
			title: lndvi21,
			listMode: "hide-children"
		});
		capes.push(ndvi21Layer);

		var ndviGroupLayer = new GroupLayer({
          title: gNdvi,
          visible: true,
          visibilityMode: "independent",
          layers: [ndvi17Layer,ndvi18Layer,ndvi19Layer,ndvi20Layer,ndvi21Layer ],
          opacity: 1
        });

		//Incendis forestals
		
		  var incendis86Layer = new MapImageLayer({
			portalItem: {  
			  id: "e71544dbbaac49059247eaede37b4af2"
			},
			id:'', //modificar
			visible: false,
			title: lincend86,
			listMode: "hide-children"
		  });
		  capes.push(incendis86Layer);

		  var incendis88Layer = new MapImageLayer({
			portalItem: {  
			  id: "6f8825818bf147079d3d017c6a536c81"
			},
			id:'', //modificar
			visible: false,
			title: lincend88,
			listMode: "hide-children"
		  });
		  capes.push(incendis88Layer);

		  var incendis89Layer = new MapImageLayer({
			portalItem: {  
			  id: "6c975c27ae1540429ddb3ce9c8df1c94"
			},
			id:'', //modificar
			visible: false,
			title: lincend89,
			listMode: "hide-children"
		  });
		  capes.push(incendis89Layer);

		  var incendis90Layer = new MapImageLayer({
			portalItem: {  
			  id: "4f009e21e6ed48cabee97b99e34a4100"
			},
			id:'', //modificar
			visible: false,
			title: lincend90,
			listMode: "hide-children"
		  });
		  capes.push(incendis90Layer);

		  var incendis91Layer = new MapImageLayer({
			portalItem: {  
			  id: "21d16ebf862945a2be823845a0979b88"
			},
			id:'', //modificar
			visible: false,
			title: lincend91,
			listMode: "hide-children"
		  });
		  capes.push(incendis91Layer);

		  var incendis92Layer = new MapImageLayer({
			portalItem: {  
			  id: "2f46cfb9c405436d8a1c8da84d8908de"
			},
			id:'', //modificar
			visible: false,
			title: lincend92,
			listMode: "hide-children"
		  });

		  var incendis93Layer = new MapImageLayer({
			portalItem: {  
			  id: "bff49c1124874c41b54c37858cab758c"
			},
			id:'', //modificar
			visible: false,
			title: lincend93,
			listMode: "hide-children"
		  });

		  var incendis94Layer = new MapImageLayer({
			portalItem: {  
			  id: "994899bd8a5d4156b638b205d2eceb46"
			},
			id:'', //modificar
			visible: false,
			title: lincend94,
			listMode: "hide-children"
		  });

		  var incendis95Layer = new MapImageLayer({
			portalItem: {  
			  id: "46cca29a711d425f8a96a2a6c68ee404"
			},
			id:'', //modificar
			visible: false,
			title: lincend95,
			listMode: "hide-children"
		  });

		  var incendis97Layer = new MapImageLayer({
			portalItem: {  
			  id: "ae6f4f94ff9c41b39f2b736730111f90"
			},
			id:'', //modificar
			visible: false,
			title: lincend97,
			listMode: "hide-children"
		  });

		  var incendis98Layer = new MapImageLayer({
			portalItem: {  
			  id: "750097cb8ded46c6b4c2236dbf54f363"
			},
			id:'', //modificar
			visible: false,
			title: lincend98,
			listMode: "hide-children"
		  });

		  var incendis99Layer = new MapImageLayer({
			portalItem: {  
			  id: "d304361b0f464842861f6e012e01d62a"
			},
			id:'', //modificar
			visible: false,
			title: lincend99,
			listMode: "hide-children"
		  });

		  var incendis00Layer = new MapImageLayer({
			portalItem: {  
			  id: "5cb38d3de6b74912ad410a196a7f85a6"
			},
			id:'', //modificar
			visible: false,
			title: lincend00,
			listMode: "hide-children"
		  });

		  var incendis01Layer = new MapImageLayer({
			portalItem: {  
			  id: "347f8b1f9af8482f923cacb3c129ee5b"
			},
			id:'', //modificar
			visible: false,
			title: lincend01,
			listMode: "hide-children"
		  });

		  var incendis02Layer = new MapImageLayer({
			portalItem: {  
			  id: "39ab5d789ebf4ba183598ce8ee8f8c0f"
			},
			id:'', 
			visible: false,
			title: lincend02,
			listMode: "hide-children"
		  });

		  var incendis03Layer = new MapImageLayer({
			portalItem: {  
			  id: "67f25d2fa7624c5f99b736987920b61b"
			},
			id:'', 
			visible: false,
			title: lincend03,
			listMode: "hide-children"
		  });

		  var incendisGroupLayer = new GroupLayer({
			title: gIncend,
			visible: true,
			visibilityMode: "independent",
			layers: [incendis86Layer, incendis88Layer, incendis89Layer, incendis90Layer, incendis91Layer, incendis92Layer, incendis93Layer,
				incendis94Layer, incendis95Layer, incendis97Layer, incendis98Layer, incendis99Layer, 
				incendis00Layer, incendis01Layer, incendis02Layer, incendis03Layer],
			opacity: 1
		  });

		var actvegetacGroupLayer = new GroupLayer({
			title: gActvegeta,
			visible: true,
			visibilityMode: "independent",
			layers: [incendisGroupLayer, ndviGroupLayer],
			opacity: 1
		  });


		// Funcionalitat del paisatge	
		  var ice56Layer = new MapImageLayer({
			portalItem: {  
			  id: "3974989c33e4423fa2c299f6c0bef2ad"
			},
			id:'', //modificar
			visible: false,
			title: lice56,
			listMode: "hide-children"
		  });
		  capes.push(ice56Layer);

		  var ice93Layer = new MapImageLayer({
			portalItem: {  
			  id: "0d4b3419da004bcb9c688596b13400d3"
			},
			id:'', //modificar
			visible: false,
			title: lice93,
			listMode: "hide-children"
		  });
		  capes.push(ice93Layer);

		  var ice09Layer = new MapImageLayer({
			portalItem: {  
			  id: "eb48c99ebfa14da682a76f1d3725e584"
			},
			id:'', //modificar
			visible: false,
			title: lice09,
			listMode: "hide-children"
		  });
		  capes.push(ice09Layer);

		  var ice15Layer = new MapImageLayer({
			portalItem: {  
			  id: "648ef92eda5a47198f0c7a4a5cf336ec"
			},
			id:'', //modificar
			visible: false,
			title: lice15,
			listMode: "hide-children"
		  });
		  capes.push(ice15Layer);

		  var connectGroupLayer = new GroupLayer({
			title: gConnect,
			visible: true,
			visibilityMode: "independent",
			layers: [ice56Layer, ice93Layer, ice09Layer, ice15Layer],
			opacity: 1
		  });

		  var funcionalitatGroupLayer = new GroupLayer({
			title: gFuncio,
			visible: true,
			visibilityMode: "independent",
			layers: [connectGroupLayer],
			opacity: 1
		  });

		 //Estat ecologic 
		  var ecorius07Layer = new MapImageLayer({
			portalItem: {  
			  id: "827c6d23a30146399900f06afc9693d1"
			},
			id:'', //modificar
			visible: false,
			title: lecorius07,
			listMode: "hide-children"
		  });
		  capes.push(ecorius07Layer);

		  var ecorius13Layer = new MapImageLayer({
			portalItem: {  
			  id: "de68ab285e3e4424b9026716e7f916d3"
			},
			id:'', //modificar
			visible: false,
			title: lecorius13,
			listMode: "hide-children"
		  });
		  capes.push(ecorius13Layer);

		  var ecoriusGroupLayer = new GroupLayer({
			title: gEcorius,
			visible: true,
			visibilityMode: "independent",
			layers: [ecorius07Layer, ecorius13Layer],
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
			  id: "6c43eadd3f7946369b767912e9531fcb"
			},
			id:'', 
			visible: false,
			title: lecosub13,
			listMode: "hide-children"
		  });
		  capes.push(ecosub13Layer);

		  var ecosubGroupLayer = new GroupLayer({
			title: gEcosub,
			visible: true,
			visibilityMode: "independent",
			layers: [ecosub07Layer, ecosub13Layer],
			opacity: 1
		  });

		  var ecoGroupLayer = new GroupLayer({
			title: gEco,
			visible: true,
			visibilityMode: "independent",
			layers: [ecosubGroupLayer, ecoriusGroupLayer],
			opacity: 1
		  });


		  //Consum aigüa
		   var aigua13Layer = new MapImageLayer({
			portalItem: {  
			  id: "30c83b3a49344183a43cd3bf9e0a7900"
			},
			id:'', //modificar
			visible: false,
			title: laigua13,
			listMode: "hide-children"
		  });
		  capes.push(aigua13Layer);  
		 
		  var aigua14Layer = new MapImageLayer({
			portalItem: {  
			  id: "cfb554bbf0fa4d7fbd76dd238d14a2c3"
			},
			id:'', //modificar
			visible: false,
			title: laigua14,
			listMode: "hide-children"
		  });
		  capes.push(aigua14Layer);  
		 
		  var aigua15Layer = new MapImageLayer({
			portalItem: {  
			  id: "4cfbff7dc21343bd87154302370189dd"
			},
			id:'', //modificar
			visible: false,
			title: laigua15,
			listMode: "hide-children"
		  });
		  capes.push(aigua15Layer);  
		 
		  var aigua16Layer = new MapImageLayer({
			portalItem: {  
			  id: "36edecb73ead49df886d999ca65821b9"
			},
			id:'', //modificar
			visible: false,
			title: laigua16,
			listMode: "hide-children"
		  });
		  capes.push(aigua16Layer); 
		 
		  var aigua17Layer = new MapImageLayer({
			portalItem: {  
			  id: "dee5d5eff8bf442a8e671062243da0d0"
			},
			id:'', //modificar
			visible: false,
			title: laigua17,
			listMode: "hide-children"
		  });
		  capes.push(aigua17Layer); 

		  var aigua18Layer = new MapImageLayer({
			portalItem: {  
			  id: "67f9a8b949974df3999fdc825a0c884a"
			},
			id:'', //modificar
			visible: false,
			title: laigua18,
			listMode: "hide-children"
		  });
		  capes.push(aigua18Layer); 
		 
		  var aigua19Layer = new MapImageLayer({
			portalItem: {  
			  id: "74959fecaae24db2b24e8ad3c965581c"
			},
			id:'', //modificar
			visible: false,
			title: laigua19,
			listMode: "hide-children"
		  });
		  capes.push(aigua19Layer); 
		 
		  var aigua20Layer = new MapImageLayer({
			portalItem: {  
			  id: "5679cf25d09a4257868c020c499884cb"
			},
			id:'', //modificar
			visible: false,
			title: laigua20,
			listMode: "hide-children"
		  });
		  capes.push(aigua20Layer);

		  var consumAiguaGroupLayer = new GroupLayer({
			title: gConaigua,
			visible: true,
			visibilityMode: "independent",
			layers: [aigua13Layer,aigua14Layer,aigua15Layer,aigua16Layer,aigua17Layer,aigua18Layer,aigua19Layer,aigua20Layer],
			opacity: 1
		  });


		  //Consum energia	 
		  //Energia elèctrica
		  var energ13Layer = new MapImageLayer({
			portalItem: {  
			  id: "53fac5170b684b4b871cdf7a33789bad"
			},
			id:'6b54a0b4e485401d86be1a0526633ba9',
			visible: false,
			title: lenerg13,
			listMode: "hide-children"
		  });
		  capes.push(energ13Layer);   
		 
		  var energ14Layer = new MapImageLayer({
			portalItem: {  
			  id: "e6242159aa1e469ebd9a356186aac394"
			},
			id:'7f3d0aa41be74c8ebeaeb2669750c98e',
			visible: false,
			title: lenerg14,
			listMode: "hide-children"
		  });
		  capes.push(energ14Layer);   
		 
		  var energ15Layer = new MapImageLayer({
			portalItem: {  
			  id: "90ec7d27d378428aa57a0cefeb92461f"
			},
			id:'5061c8d487fd4ca48a292d790cd38a54',
			visible: false,
			title: lenerg15,
			listMode: "hide-children"
		  });
		  capes.push(energ15Layer);  
		 
		  var energ16Layer = new MapImageLayer({
			portalItem: {  
			  id: "22f3f9a7e9d84693bfba8cb9d1f0b749"
			},
			id:'e6817ad233dd476195bc91cea371eb1f',
			visible: false,
			title: lenerg16,
			listMode: "hide-children"
		  });
		  capes.push(energ16Layer); 
		 
		  var energ17Layer = new MapImageLayer({
			portalItem: {  
			  id: "f0967df93c8d43b5833af921c78507d8"
			},
			id:'5683627282c34e248c0f7a33ed424434',
			visible: false,
			title: lenerg17,
			listMode: "hide-children"
		  });
		  capes.push(energ17Layer);  
		 
		  var energ18Layer = new MapImageLayer({
			portalItem: {  
			  id: "d654559521df4b4ba128fe4c5e4c5682"
			},
			id:'dcf256ea5f46443fba16f8699771220d',
			visible: false,
			title: lenerg18,
			listMode: "hide-children"
		  });
		  capes.push(energ18Layer); 
		 
		  var energ19Layer = new MapImageLayer({
			portalItem: {  
			  id: "3bff7c981db44a5e9782d84677d6f6ef"
			},
			id:'d4ddea113d76455ea496d0709c9bc478',
			visible: false,
			title: lenerg19,
			listMode: "hide-children"
		  });
		  capes.push(energ19Layer); 
		 
		  var energ20Layer = new MapImageLayer({
			portalItem: {  
			  id: "b631257580464679ab4cfd3cb5c5f854"
			},
			id:'25a8f7aaf70f4816a507136a54c3df10',
			visible: false,
			title: lenerg20,
			listMode: "hide-children"
		  });
		  capes.push(energ20Layer);
		  
		  var energelectricaGroupLayer = new GroupLayer({
			title: gEnergelectr,
			visible: true,
			visibilityMode: "independent",
			layers: [energ13Layer, energ14Layer, energ15Layer, energ16Layer, energ17Layer, energ18Layer, energ19Layer, energ20Layer],
			opacity: 1
		});

		//Gas natural

		var gas13Layer = new MapImageLayer({
			portalItem: {  
			  id: "f6646d1c5e544ce3adef75feb0519f88"
			},
			id:'e95608d2fdff486ba17979a41aca091e',
			visible: false,
			title: lgas13,
			listMode: "hide-children"
		  });
		  capes.push(gas13Layer);

		var gas14Layer = new MapImageLayer({
			portalItem: {  
			  id: "2cd89eb0ce8941079118767879115886"
			},
			id:'8299fb1e556840c6ba745bc226f138a2',
			visible: false,
			title: lgas14,
			listMode: "hide-children"
		  });
		  capes.push(gas14Layer);
		
		var gas15Layer = new MapImageLayer({
			portalItem: {  
			  id: "20df05d666c141c48e231880233d39a8"
			},
			id:'19735e63f46b4c93af57356bb9ec42a7',
			visible: false,
			title: lgas15,
			listMode: "hide-children"
		  });
		  capes.push(gas15Layer);
		
		var gas16Layer = new MapImageLayer({
			portalItem: {  
			  id: "b0d3cb6ff44247e0a84a099bd438c14e"
			},
			id:'24a8107fa2fd4e88857b2a6d56f03d88',
			visible: false,
			title: lgas16,
			listMode: "hide-children"
		  });
		  capes.push(gas16Layer);
		
		var gas17Layer = new MapImageLayer({
			portalItem: {  
			  id: "73fdfd5fd7124b1baa8529c6899bfc7c"
			},
			id:'1ee0cdc49757442e9d37454ce6065e05',
			visible: false,
			title: lgas17,
			listMode: "hide-children"
		  });
		  capes.push(gas17Layer);
		
		var gas18Layer = new MapImageLayer({
			portalItem: {  
			  id: "731962ad332d4e2ebf9e2cf50e503c55"
			},
			id:'585e2e3be46f4c0d9feef99123637fe3',
			visible: false,
			title: lgas18,
			listMode: "hide-children"
		  });
		  capes.push(gas18Layer);
		
		var gas19Layer = new MapImageLayer({
			portalItem: {  
			  id: "dd3581d4421548e4b61395c7f3ded479"
			},
			id:'dfe11bbf7f114dbca234f8852726e2c0',
			visible: false,
			title: lgas19,
			listMode: "hide-children"
		  });
		  capes.push(gas19Layer);

		var gas20Layer = new MapImageLayer({
			portalItem: {  
			  id: "eaaf3555da2846c0a53df3f67961bfa8"
			},
			id:'1c618430fe944747b1e31969627dc3b0',
			visible: false,
			title: lgas20,
			listMode: "hide-children"
		  });
		  capes.push(gas20Layer);
		  
		  var energGasGroupLayer = new GroupLayer({
			title: gEnergas,
			visible: true,
			visibilityMode: "independent",
			layers: [gas13Layer, gas14Layer, gas15Layer, gas16Layer, gas17Layer, gas18Layer, gas19Layer, gas20Layer],
			opacity: 1
		});


		  var consumEnergGroupLayer = new GroupLayer({
			title: gConenerg,
			visible: true,
			visibilityMode: "independent",
			layers: [energGasGroupLayer, energelectricaGroupLayer],
			opacity: 1
		  });

		 
		  //Recollida selectiva
		 
		  var recollida15Layer = new MapImageLayer({
			portalItem: {
				id: "96d4bec769404f3abf9e4d1141669806"
			},
			id: "",
			visible: false,
			title: lrecollida15,
			listMode: "hide-children"
		});   
		 
		  var recollida16Layer = new MapImageLayer({
			portalItem: {
				id: "208c49ad6e604870b8a2015b2a274f3a"
			},
			id: "",
			visible: false,
			title: lrecollida16,
			listMode: "hide-children"
		});  
		 
		  var recollida17Layer = new MapImageLayer({
			portalItem: {
				id: "19e4b92c01c541f381db51b293dd7490"
			},
			id: "",
			visible: false,
			title: lrecollida17,
			listMode: "hide-children"
		});  
		 
		  var recollida18Layer = new MapImageLayer({
			portalItem: {
				id: "cb9c5e6dc9a349c0a28744e9c6ca1fd3"
			},
			id: "",
			visible: false,
			title: lrecollida18,
			listMode: "hide-children"
		}); 
		 
		  var recollida19Layer = new MapImageLayer({
			portalItem: {
				id: "ff32c140fb314a598806c18c327d4b52"
			},
			id: "",
			visible: false,
			title: lrecollida19,
			listMode: "hide-children"
		});
		 
		  var recollida20Layer = new MapImageLayer({
			portalItem: {
				id: "df59da0a66844ac6bf7c381750eb80e2"
			},
			id: "",
			visible: false,
			title: lrecollida20,
			listMode: "hide-children"
		});
		 
		var recollidaselecGroupLayer = new GroupLayer({
			title: gRecollida,
			visible: true,
			visibilityMode: "independent",
			layers: [recollida15Layer,recollida16Layer,recollida17Layer,recollida18Layer,recollida19Layer,recollida20Layer],
			opacity: 1
		});
	
		//Residus per habitants
	
		var genresidushabi15Layer = new MapImageLayer({
			portalItem: {
				id: "5b69ff5122324c71bacbea2bdf13b37b"
			},
			id: "",
			visible: false,
			title: lgeneresiduhabi15,
			listMode: "hide-children"
		});
		capes.push(genresidushabi15Layer);

		var genresidushabi16Layer = new MapImageLayer({
			portalItem: {
				id: "0f2ee2fed9304c78bd626cd0bfe0a9a2"
			},
			id: "",
			visible: false,
			title: lgeneresiduhabi16,
			listMode: "hide-children"
		});
		capes.push(genresidushabi16Layer);

		var genresidushabi17Layer = new MapImageLayer({
			portalItem: {
				id: "cb2666104d4249f898d8708a9e9c4d45"
			},
			id: "",
			visible: false,
			title: lgeneresiduhabi17,
			listMode: "hide-children"
		});
		capes.push(genresidushabi17Layer);

		var genresidushabi18Layer = new MapImageLayer({
			portalItem: {
				id: "2e5eee1b624a4cce87478783c3ae0691"
			},
			id: "",
			visible: false,
			title: lgeneresiduhabi18,
			listMode: "hide-children"
		});
		capes.push(genresidushabi18Layer);

		var genresidushabi19Layer = new MapImageLayer({
			portalItem: {
				id: "967e30559faa4506a81eea71c6fc07fa"
			},
			id: "",
			visible: false,
			title: lgeneresiduhabi19,
			listMode: "hide-children"
		});
		capes.push(genresidushabi19Layer);

		var genresidushabi20Layer = new MapImageLayer({
			portalItem: {
				id: "ae0fc1f0a3ac4d9d8d515f52dfb692f9"
			},
			id: "",
			visible: false,
			title: lgeneresiduhabi20,
			listMode: "hide-children"
		});
		capes.push(genresidushabi20Layer);

		var residushabiGroupLayer = new GroupLayer({
			title: gResidushabi,
			visible: true,
			visibilityMode: "independent",
			layers: [genresidushabi15Layer,genresidushabi16Layer,genresidushabi17Layer,genresidushabi18Layer,genresidushabi19Layer,genresidushabi20Layer],
			opacity: 1
		});

		var residusGroupLayer = new GroupLayer({
			title: gResidus,
			visible: true,
			visibilityMode: "independent",
			layers: [recollidaselecGroupLayer, residushabiGroupLayer],
			opacity: 1
		});

		//Contaminació atmosfèrica 
		//xarxa contaminants - NO2
	
		var xarxno22015Layer = new MapImageLayer({
			portalItem: {  
			  id: "7b6a7f4cbbbe4d42b727f460db29d832"
			},
			id:'', //modificar
			visible: false,
			title: lxarxno22015,
			listMode: "hide-children"
		  });
		
		var xarxno22016Layer = new MapImageLayer({
			portalItem: {  
			  id: "7b6a7f4cbbbe4d42b727f460db29d832"
			},
			id:'', //modificar
			visible: false,
			title: lxarxno22016,
			listMode: "hide-children"
		  });
		
		var xarxno22017Layer = new MapImageLayer({
			portalItem: {  
			  id: "7b6a7f4cbbbe4d42b727f460db29d832"
			},
			id:'', //modificar
			visible: false,
			title: lxarxno22017,
			listMode: "hide-children"
		  });
		 
		var xarxno22018Layer = new MapImageLayer({
			portalItem: {  
			  id: "7b6a7f4cbbbe4d42b727f460db29d832"
			},
			id:'', //modificar
			visible: false,
			title: lxarxno22018,
			listMode: "hide-children"
		  });
		
		var xarxno22019Layer = new MapImageLayer({
			portalItem: {  
			  id: "7b6a7f4cbbbe4d42b727f460db29d832"
			},
			id:'', //modificar
			visible: false,
			title: lxarxno22019,
			listMode: "hide-children"
		  });
		
		var xarxno22020Layer = new MapImageLayer({
			portalItem: {  
			  id: "7b6a7f4cbbbe4d42b727f460db29d832"
			},
			id:'', //modificar
			visible: false,
			title: lxarxno22020,
			listMode: "hide-children"
		  });
		
		var xarxno22021Layer = new MapImageLayer({
			portalItem: {  
			  id: "7b6a7f4cbbbe4d42b727f460db29d832"
			},
			id:'d57fc03d72fb4b9a817b6c8785d45e7a', 
			visible: false,
			title: lxarxno22021,
			listMode: "hide-children"
		  });

		  var xarxano2GroupLayer = new GroupLayer({
			title: gxarxno2,
			visible: true,
			visibilityMode: "independent",
			layers: [xarxno22015Layer,xarxno22016Layer,xarxno22017Layer,xarxno22018Layer,xarxno22019Layer,xarxno22020Layer,xarxno22021Layer],
			opacity: 1
		  });

		  //PM10
		 
		  var xarxpm102015Layer = new MapImageLayer({
			portalItem: {  
			  id: "4a9d4f59a9b644099301bf26e55f3abc"
			},
			id:'', 
			visible: false,
			title: lxarxpm102015,
			listMode: "hide-children"
		  });  
		 
		  var xarxpm102016Layer = new MapImageLayer({
			portalItem: {  
			  id: "64f0c7c1663c4299b16f65ffcb92281b"
			},
			id:'', 
			visible: false,
			title: lxarxpm102016,
			listMode: "hide-children"
		  });    
		 
		  var xarxpm102017Layer = new MapImageLayer({
			portalItem: {  
			  id: "d20580ed63154089a58885536b1a9d7f"
			},
			id:'', 
			visible: false,
			title: lxarxpm102017,
			listMode: "hide-children"
		  });   
		 
		  var xarxpm102018Layer = new MapImageLayer({
			portalItem: {  
			  id: "3d635c26a7794f9593070e870f1b0404"
			},
			id:'', 
			visible: false,
			title: lxarxpm102018,
			listMode: "hide-children"
		  });  
		 
		  var xarxpm102019Layer = new MapImageLayer({
			portalItem: {  
			  id: "59163d60d0674d05a508743a02dd8cee"
			},
			id:'', 
			visible: false,
			title: lxarxpm102019,
			listMode: "hide-children"
		  });  
		 
		  var xarxpm102020Layer = new MapImageLayer({
			portalItem: {  
			  id: "c3745cfbcafd4c17a30d56758ac0bc1d"
			},
			id:'', 
			visible: false,
			title: lxarxpm102020,
			listMode: "hide-children"
		  }); 
		 
		  var xarxpm102021Layer = new MapImageLayer({
			portalItem: {  
			  id: "3f07093c104b4269b8ae1b50ba6e5b60"
			},
			id:'', 
			visible: false,
			title: lxarxpm102021,
			listMode: "hide-children"
		  });

		  var xarxapm10GroupLayer = new GroupLayer({
			title: gxarxpm10,
			visible: true,
			visibilityMode: "independent",
			layers: [xarxpm102015Layer, xarxpm102016Layer, xarxpm102017Layer, xarxpm102018Layer, xarxpm102019Layer, xarxpm102020Layer, xarxpm102021Layer],
			opacity: 1
		  });

		var xarxacontmGroupLayer = new GroupLayer({
			title: gxarxContm,
			visible: true,
			visibilityMode: "independent",
			layers: [xarxapm10GroupLayer, xarxano2GroupLayer],
			opacity: 1
		  });

		  //Gasos efecte hivernacle

	//grup global gassos efecte hivernacle

	var emissiogasos08Layer = new MapImageLayer({
		portalItem: {
			id: "16ba0511742244718620107327e176fb"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2008,
		listMode: "hide-children"
		});	
	
	var emissiogasos09Layer = new MapImageLayer({
		portalItem: {
			id: "1bdf05a6f4254a1e94d676ddc8d2bd11"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2009,
		listMode: "hide-children"
		});	
	
	var emissiogasos10Layer = new MapImageLayer({
		portalItem: {
			id: "3acdffcf441d431a800ebf6c2cbaf5c7"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2010,
		listMode: "hide-children"
		});	
	
	var emissiogasos11Layer = new MapImageLayer({
		portalItem: {
			id: "69bedc66d14a4fea92f590c3af4cbe54"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2011,
		listMode: "hide-children"
		});	
	
	var emissiogasos12Layer = new MapImageLayer({
		portalItem: {
			id: "abe1c54a116643b4ace7e52b9392d77f"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2012,
		listMode: "hide-children"
		});	
	
	var emissiogasos13Layer = new MapImageLayer({
		portalItem: {
			id: "18abcabc97254a1c8ee414d74d713dd1"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2013,
		listMode: "hide-children"
		});	
	
	var emissiogasos14Layer = new MapImageLayer({
		portalItem: {
			id: "43f8b94fd684457ca5548a5dc26d6b0b"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2014,
		listMode: "hide-children"
		});	
	
	var emissiogasos15Layer = new MapImageLayer({
		portalItem: {
			id: "e29f544212e3425fac15fb2269e5a9d6"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2015,
		listMode: "hide-children"
		});	

	var emissiogasos16Layer = new MapImageLayer({
		portalItem: {
			id: "b8b0199b6cdb4627bbad6eb2c93a058e" 
		},
		id: "",
		visible: false,
		title: lEmissioogasos2016,
		listMode: "hide-children"
		});

		var emissiogasos17Layer = new MapImageLayer({
		portalItem: {
			id: "11e80ba8034946d5b067280ca235824f"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2017,
		listMode: "hide-children"
		});

		var emissiogasos18Layer = new MapImageLayer({
			portalItem: {
				id: "3a6bf8320bec4c29ada4be6b893f3aa4"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2018,
		listMode: "hide-children"
		});
	
		var emissiogasos19Layer = new MapImageLayer({
			portalItem: {
				id: "b80c837497e541859921aa9fa7d7d460"
		},
		id: "",
		visible: false,
		title: lEmissioogasos2019,
		listMode: "hide-children"
		});

		var emissiogasos20Layer = new MapImageLayer({
			portalItem: {
				id: "67e50dbc5fd6463795dd929a15fb7e7c"
					},
		id: "",
		visible: false,
		title: lEmissioogasos2020,
		listMode: "hide-children"
		});		

		var gasosGroupLayer = new GroupLayer({
			title: gGasos,
			visible: true,
			visibilityMode: "independent",
			layers: [emissiogasos08Layer, emissiogasos09Layer, emissiogasos10Layer, emissiogasos11Layer,
				emissiogasos12Layer, emissiogasos13Layer, 
				emissiogasos14Layer, emissiogasos15Layer, emissiogasos16Layer, emissiogasos17Layer, emissiogasos18Layer,
				emissiogasos19Layer, emissiogasos20Layer],
			opacity: 1
		});
	

		  //indicadors socioecologics grup
		  var indsocioecoGroupLayer = new GroupLayer({
			title: gIndSocEco,
			visible: true,
			visibilityMode: "independent",
			layers: [gasosGroupLayer, xarxacontmGroupLayer, residusGroupLayer, consumAiguaGroupLayer, consumEnergGroupLayer, ecoGroupLayer, funcionalitatGroupLayer, actvegetacGroupLayer, 
				cobusosGroupLayer, climaGroupLayer],
			opacity: 1
		  });

		//Dinàmiques Socioeconòmiques

		//Demografia

		var poblacio00Layer = new MapImageLayer({
			portalItem: {  
			  id: "714099c4913144c493b6fe79187e481d"
			},
			id:'', 
			visible: false,
			title: lpobla00,
			listMode: "hide-children"
		  });
		  capes.push(poblacio00Layer);
		
		var poblacio05Layer = new MapImageLayer({
			portalItem: {  
			  id: "5c495ff2b81749abb2373fcf41aa63f1"
			},
			id:'', 
			visible: false,
			title: lpobla05,
			listMode: "hide-children"
		  });
		  capes.push(poblacio05Layer);
		
		var poblacio10Layer = new MapImageLayer({
			portalItem: {  
			  id: "6d4a64d32d5843528e74315c01d3e3ea"
			},
			id:'', 
			visible: false,
			title: lpobla10,
			listMode: "hide-children"
		  });
		  capes.push(poblacio10Layer);
		
		var poblacio15Layer = new MapImageLayer({
			portalItem: {  
			  id: "b7eb8a73c9ec41b895cb92cbc2004e8e"
			},
			id:'',
			visible: false,
			title: lpobla15,
			listMode: "hide-children"
		  });
		  capes.push(poblacio15Layer);
		
		var poblacio20Layer = new MapImageLayer({
			portalItem: {  
			  id: "9bb5c44018ed4fb48877f80cf4c67787"
			},
			id:'', 
			visible: false,
			title: lpobla20,
			listMode: "hide-children"
		  });
		  capes.push(poblacio20Layer);

		  var densitat00Layer = new MapImageLayer({
			portalItem: {  
			  id: "76ef927b9dd94bd8ab86c53f19d7106e"
			},
			id:'',
			visible: false,
			title: ldensitat00,
			listMode: "hide-children"
		  });
		  capes.push(densitat00Layer); 
		 
		  var densitat05Layer = new MapImageLayer({
			portalItem: {  
			  id: "20b9e2987f3b495ba59acf52edecfe42"
			},
			id:'',
			visible: false,
			title: ldensitat05,
			listMode: "hide-children"
		  });
		  capes.push(densitat05Layer); 
		 
		  var densitat10Layer = new MapImageLayer({
			portalItem: {  
			  id: "0f1ae1716c224cf6bfb382b35569655f"
			},
			id:'',
			visible: false,
			title: ldensitat10,
			listMode: "hide-children"
		  });
		  capes.push(densitat10Layer);
		 
		  var densitat15Layer = new MapImageLayer({
			portalItem: {  
			  id: "555d8b1013cb4323923fe0bdaecd1293"
			},
			id:'', 
			visible: false,
			title: ldensitat15,
			listMode: "hide-children"
		  });
		  capes.push(densitat15Layer);

		  var densitat20Layer = new MapImageLayer({
			portalItem: {  
			  id: "1314acf155df4c428bcb9a9511c0a7b7"
			},
			id:'', 
			visible: false,
			title: ldensitat20,
			listMode: "hide-children"
		  });
		  capes.push(densitat20Layer);

		  //Envelliment
		  var enve18Layer = new MapImageLayer({
			portalItem: {  
			  id: "e25a05976efd47828e27c2b8635de459"
			},
			id:'', 
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
			layers: [enve18Layer, enve19Layer],
			opacity: 1
		  });

		  var majors15Layer = new MapImageLayer({
			portalItem: {  
			  id: "b5dd9f9e662c4cd2b2224d4db2256f05"
			},
			id:'', 
			visible: false,
			title: lmajors15,
			listMode: "hide-children"
		  });
		  capes.push(majors15Layer);

		  var majors16Layer = new MapImageLayer({
			portalItem: {  
			  id: "f28564d047124690b544884aa4f0c440"
			},
			id:'', 
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
			layers: [majors15Layer, majors16Layer, majors17Layer],
			opacity: 1
		  });

		  var envellimentGroupLayer = new GroupLayer({
			title: gEnvelliment,
			visible: true,
			visibilityMode: "independent",
			layers: [ambest_majorsGroupLayer, index_enveGroupLayer],
			opacity: 1
		  });


		  var demoGroupLayer = new GroupLayer({
			title: gDemo,
			visible: true,
			visibilityMode: "independent",
			layers: [envellimentGroupLayer,densitat00Layer, densitat05Layer, densitat10Layer, densitat15Layer, densitat20Layer,
				poblacio00Layer, poblacio05Layer, poblacio10Layer, poblacio15Layer, poblacio20Layer],
			opacity: 1
		  });
		  
		//Renda

		//Origen renda

		var origenrenda15Layer = new MapImageLayer({
			portalItem: {  
			  id: "74be7b83dd5a4a50878b6dddf78871ac"
			},
			id:'', //modificar
			visible: false,
			title: lorigenrenda15,
			listMode: "hide-children"
		  });
		  capes.push(origenrenda15Layer);
		
		var origenrenda16Layer = new MapImageLayer({
			portalItem: {  
			  id: "f4cb56b154574426a0f7072db23e874c"
			},
			id:'', //modificar
			visible: false,
			title: lorigenrenda16,
			listMode: "hide-children"
		  });
		  capes.push(origenrenda16Layer);

		var origenrenda17Layer = new MapImageLayer({
			portalItem: {  
			  id: "fbd7218929934bce84bb8aef92936d52"
			},
			id:'', //modificar
			visible: false,
			title: lorigenrenda17,
			listMode: "hide-children"
		  });
		  capes.push(origenrenda17Layer);

		var origenrenda18Layer = new MapImageLayer({
			portalItem: {  
			  id: "656e255781764a7894ee1cfb61d81868"
			},
			id:'', //modificar
			visible: false,
			title: lorigenrenda18,
			listMode: "hide-children"
		  });
		  capes.push(origenrenda18Layer);

		  var origenrendaGroupLayer = new GroupLayer({
			title: gOrigenrenda,
			visible: true,
			visibilityMode: "independent",
			layers: [origenrenda15Layer, origenrenda16Layer, origenrenda17Layer, origenrenda18Layer],
			opacity: 1
		  });

		  var ambest_rendaGroupLayer = new GroupLayer({
			title: gAmbestrenda,
			visible: true,
			visibilityMode: "independent",
			layers: [origenrendaGroupLayer],
			opacity: 1
		  });

		  //Atur

		  var atur18Layer = new MapImageLayer({
			portalItem: {  
			  id: "b304ab3db90c45afb17fb6dbaab174f0"
			},
			id:'', 
			visible: false,
			title: latur18,
			listMode: "hide-children"
		  });
		  capes.push(atur18Layer); 
		 
		  var atur19Layer = new MapImageLayer({
			portalItem: {  
			  id: "122de07fd3d04b3a8edad0e830a07895"
			},
			id:'', 
			visible: false,
			title: latur19,
			listMode: "hide-children"
		  });
		  capes.push(atur19Layer);

		  var atur20Layer = new MapImageLayer({
			portalItem: {  
			  id: "6d66063236044426b6728ef9b2570c31"
			},
			id:'', 
			visible: false,
			title: latur20,
			listMode: "hide-children"
		  });
		  capes.push(atur20Layer);

		  var atur21Layer = new MapImageLayer({
			portalItem: {  
			  id: "82960599c53d46cea8e1a065115cdd13"
			},
			id:'', 
			visible: false,
			title: latur21,
			listMode: "hide-children"
		  });
		  capes.push(atur21Layer);


		  var aturGroupLayer = new GroupLayer({
			title: gAtur,
			visible: true,
			visibilityMode: "independent",
			layers: [atur18Layer, atur19Layer, atur20Layer, atur21Layer],
			opacity: 1
		  });

		  //Index socioeconomic territorial

		  var ist15Layer = new MapImageLayer({
			portalItem: {
				id: "d6bd6aa6a890423aae1ab3889c1ef96c"
			},
			id: '', //modificar
			visible: false,
			title: list15,
			listMode: "hide-children"
		});
			capes.push(ist15Layer); 
		 
		  var ist16Layer = new MapImageLayer({
			portalItem: {
				id: "74114d39de0d4bdb8bd7d4fb74028dc4"
			},
			id: '', //modificar
			visible: false,
			title: list16,
			listMode: "hide-children"
		});
			capes.push(ist16Layer);

		  var ist17Layer = new MapImageLayer({
			portalItem: {
				id: "a1fd8a687d2c481e8c9968838b590b63"
			},
			id: '', //modificar
			visible: false,
			title: list17,
			listMode: "hide-children"
		});
		capes.push(ist17Layer);

		  var ist18Layer = new MapImageLayer({
			portalItem: {
				id: "f70a42eb4803493aab5b7e4a3dbd3b28"
			},
			id: '', //modificar
			visible: false,
			title: list18,
			listMode: "hide-children"
		});
		capes.push(ist18Layer);

		  var istGroupLayer = new GroupLayer({
			title: gist,
			visible: true,
			visibilityMode: "independent",
			layers: [ist15Layer, ist16Layer, ist17Layer, ist18Layer],
			opacity: 1
		  });

		  //Desigualtat

		  var gini15Layer = new MapImageLayer({
			portalItem: {
				id: "f35309a63301420e9d644e08950f4fa1"
			},
			id: '', //modificar
			visible: false,
			title: lgini15,
			listMode: "hide-children"
		});
		capes.push(gini15Layer); 
		 
		  var gini16Layer = new MapImageLayer({
			portalItem: {
				id: "82708412256542ffa967e52774e75f3d"
			},
			id: '', //modificar
			visible: false,
			title: lgini16,
			listMode: "hide-children"
		});
		capes.push(gini16Layer); 
		 
		  var gini17Layer = new MapImageLayer({
			portalItem: {
				id: "f2174beb9a53461cb8e4e6b2a1d6f202"
			},
			id: '', //modificar
			visible: false,
			title: lgini17,
			listMode: "hide-children"
		});
		capes.push(gini17Layer);
		 
		  var gini18Layer = new MapImageLayer({
			portalItem: {
				id: "4c5c6ba04c254112aa52d673f9c8019e"
			},
			id: '', //modificar
			visible: false,
			title: lgini18,
			listMode: "hide-children"
		});
		capes.push(gini18Layer);

		var indeginiGroupLayer = new GroupLayer({
			title: gIndexgini,
			visible: true,
			visibilityMode: "independent",
			layers: [gini15Layer, gini16Layer, gini17Layer, gini18Layer],
			opacity: 1
		  });

		  var desigGroupLayer = new GroupLayer({
			title: gdesig,
			visible: true,
			visibilityMode: "independent",
			layers: [indeginiGroupLayer],
			opacity: 1
		  });

		//Moviments migratoris

		var migrants00Layer = new MapImageLayer({
			portalItem: {  
			  id: "f9828c554e4d479faa3e3296fe8a398c"
			},
			id:'', 
			visible: false,
			title: lmigra00,
			listMode: "hide-children"
		  });
		
		var migrants05Layer = new MapImageLayer({
			portalItem: {  
			  id: "af135b037a4b4906b75781df438cd208"
			},
			id:'', 
			visible: false,
			title: lmigra05,
			listMode: "hide-children"
		  });
		
		var migrants10Layer = new MapImageLayer({
			portalItem: {  
			  id: "af621908e2d84203b574ab7f21ea4d54"
			},
			id:'', 
			visible: false,
			title: lmigra10,
			listMode: "hide-children"
		  });
		
		var migrants15Layer = new MapImageLayer({
			portalItem: {  
			  id: "72963c1517e4489bbd30d48d3e11d54e"
			},
			id:'', 
			visible: false,
			title: lmigra15,
			listMode: "hide-children"
		  });
		
		var migrants20Layer = new MapImageLayer({
			portalItem: {  
			  id: "0d06b721c1ff44a892f5a8e60f944723"
			},
			id:'', 
			visible: false,
			title: lmigra20,
			listMode: "hide-children"
		  });

		  var inmigracioGroupLayer = new GroupLayer({
			title: gMigrants,
			visible: true,
			visibilityMode: "independent",
			layers: [migrants00Layer, migrants05Layer, migrants10Layer, migrants15Layer, migrants20Layer],
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
			layers: [estrang15Layer, estrang16Layer, estrang17Layer],
			opacity: 1
		  });

		  var migraGroupLayer = new GroupLayer({
			title: gMigra,
			visible: true,
			visibilityMode: "independent",
			layers: [ambest_estrangGroupLayer, inmigracioGroupLayer],
			opacity: 1
		  });

		  //Habitatges
		  var esforçhabit17Layer = new MapImageLayer({
			portalItem: {  
			  id: "f3bec820f6b243bca7c854131724e54f"
			},
			id:'', //modificar
			visible: false,
			title: lesfhabit17,
			listMode: "hide-children"
		  });
		  capes.push(esforçhabit17Layer); 
		 
		  var esforçhabit18Layer = new MapImageLayer({
			portalItem: {  
			  id: "fc07b1486e2b4f2c9741188c4b2b64c0"
			},
			id:'', //modificar
			visible: false,
			title: lesfhabit18,
			listMode: "hide-children"
		  });
		  capes.push(esforçhabit18Layer);

		  var esforshabGroupLayer = new GroupLayer({
			title: gEsforshab,
			visible: true,
			visibilityMode: "independent",
			layers: [esforçhabit17Layer, esforçhabit18Layer],
			opacity: 1
		  });

		  //Demanda habitatge

		  var demandahabit12Layer = new MapImageLayer({
			portalItem: {  
			  id: "0a398361c0b042df81983f1481f3e0c3"
			},
			id:'a4165d5506bf4be5860873cfbf03a8be',
			visible: false,
			title: ldehabit12,
			listMode: "hide-children"
		  });  
		 
		  var demandahabit13Layer = new MapImageLayer({
			portalItem: {  
			  id: "0d6206debeb747bfa5b52fcae72c2220"
			},
			id:'70bb151989cf4edb892c5d10a8dd6280',
			visible: false,
			title: ldehabit13,
			listMode: "hide-children"
		  });   
		 
		  var demandahabit14Layer = new MapImageLayer({
			portalItem: {  
			  id: "893eb81d083d47b387109f3fd1dd6c6e"
			},
			id:'7d00086a0ce64b6cbfcd77af78489785',
			visible: false,
			title: ldehabit14,
			listMode: "hide-children"
		  });  

		  var demandahabit15Layer = new MapImageLayer({
			portalItem: {  
			  id: "e8d96d554a9f4120bfa67b928076fd6c"
			},
			id:'8002e9666ae844ea8a30ce49230edcf0',
			visible: false,
			title: ldehabit15,
			listMode: "hide-children"
		  });  
		 
		  var demandahabit16Layer = new MapImageLayer({
			portalItem: {  
			  id: "4ad7a056d5df4f19b137ecbc55308b2a"
			},
			id:'dc808b39541a48e1b9da093bb197d35a',
			visible: false,
			title: ldehabit16,
			listMode: "hide-children"
		  });  
		 
		  var demandahabit17Layer = new MapImageLayer({
			portalItem: {  
			  id: "fd62eea5f7a8414f90f2ee8010e98654"
			},
			id:'630e2ad990bc4659a4a2647d32d94d36',
			visible: false,
			title: ldehabit17,
			listMode: "hide-children"
		  }); 
		 
		  var demandahabit18Layer = new MapImageLayer({
			portalItem: {  
			  id: "4c64b5290da246c1b53650006e3ea4fc"
			},
			id:'abd5ced82f86444cb3e57a392ad03f35',
			visible: false,
			title: ldehabit18,
			listMode: "hide-children"
		  }); 
		 
		  var demandahabit19Layer = new MapImageLayer({
			portalItem: {  
			  id: "e1325a473c0d4cc58adc7bee0551e257"
			},
			id:'c95e83469419432d87ba3f77e6540ed4', 
			visible: false,
			title: ldehabit19,
			listMode: "hide-children"
		  });

		  var demandahabit20Layer = new MapImageLayer({
			portalItem: {  
			  id: "9e4d7e99ee57499cbbc1e1b4b7bb8759"
			},
			id:'1b30dac353df4de0a55fd0b189cab0f0',
			visible: false,
			title: ldehabit20,
			listMode: "hide-children"
		  });

		  var demandahabit21Layer = new MapImageLayer({
			portalItem: {  
			  id: "68ea9dbe5c1b499c8d8a3374024f740d"
			},
			id:'4c12309f63ca480f8b019980d99f337d', 
			visible: false,
			title: ldehabit21,
			listMode: "hide-children"
		  });

		  var demandahabGroupLayer = new GroupLayer({
			title: gDemandhabitatge,
			visible: true,
			visibilityMode: "independent",
			layers: [demandahabit12Layer, demandahabit13Layer, demandahabit14Layer,demandahabit15Layer, 
				demandahabit16Layer, demandahabit17Layer, demandahabit18Layer, demandahabit19Layer, demandahabit20Layer, demandahabit21Layer],
			opacity: 1
		  });

			var habitatgeGroupLayer = new GroupLayer({
			title: gHabitatge,
			visible: true,
			visibilityMode: "independent",
			layers: [demandahabGroupLayer, esforshabGroupLayer],
			opacity: 1
		  });

		  //Formació
		 
		  var baixaq15Layer = new MapImageLayer({
			portalItem: {
				id: "d6e6dd45f6e0423391c09c377e66f7c5"
			},
			id: '',
			visible: false,
			title: lbaixaq15,
			listMode: "hide-children"
		});
		capes.push(baixaq15Layer);
		 
		  var baixaq16Layer = new MapImageLayer({
			portalItem: {
				id: "f08a37c2f9a846c7a9ded7a01dd652ba"
			},
			id: '',
			visible: false,
			title: lbaixaq16,
			listMode: "hide-children"
		});
		capes.push(baixaq16Layer);
		 
		  var baixaq17Layer = new MapImageLayer({
			portalItem: {
				id: "3ca3480be8594fc4ad447ad5aaf1befe"
			},
			id: '',
			visible: false,
			title: lbaixaq17,
			listMode: "hide-children"
		});
		capes.push(baixaq17Layer);


		  var baixaq18Layer = new MapImageLayer({
			portalItem: {
				id: "90f6d67a9ff648b890bf1d105a26486d"
			},
			id: '',
			visible: false,
			title: lbaixaq18,
			listMode: "hide-children"
		});
		capes.push(baixaq18Layer);

		var fbaixaqroupLayer = new GroupLayer({
			title: gbaixaq,
			visible: true,
			visibilityMode: "independent",
			layers: [baixaq15Layer, baixaq16Layer, baixaq17Layer, baixaq18Layer],
			opacity: 1
		  });


//joves sense qualificacio

	var joves15Layer = new MapImageLayer({
		portalItem: {
		id: "50b285739ff9428fa4bda55ff8ebe05b"
		},
		id: '',
		visible: false,
		title: ljoves15,
		listMode: "hide-children"
	});
	capes.push(joves15Layer);

		var joves16Layer = new MapImageLayer({
			portalItem: {
			id: "18d9f9f7bcce4ebcb6cef712628e73a5"
			},
			id: '',
			visible: false,
			title: ljoves16,
			listMode: "hide-children"
		});
		capes.push(joves16Layer);


		var joves17Layer = new MapImageLayer({
		portalItem: {
			id: "60d20b980a4f459dbe60d01594a8e1b7"
			},
			id: '',
			visible: false,
			title: ljoves17,
			listMode: "hide-children"
		});
		capes.push(joves17Layer);

		var joves18Layer = new MapImageLayer({
			portalItem: {
			id: "22ab084c04e34d2382cd4bb8f04c3d95"
			},
			id: '',
			visible: false,
			title: ljoves18,
			listMode: "hide-children"
		});
		capes.push(joves18Layer);

		var jovesqroupLayer = new GroupLayer({
			title: gjovesfor,
			visible: true,
			visibilityMode: "independent",
			layers: [joves15Layer, joves16Layer, joves17Layer, joves18Layer],
			opacity: 1
		  });


			var formacioGroupLayer = new GroupLayer({
			title: gForma,
			visible: true,
			visibilityMode: "independent",
			layers: [jovesqroupLayer, fbaixaqroupLayer],
			opacity: 1
		  });

		//Productivitat
		
		var pibmunicipal15Layer = new MapImageLayer({
			portalItem: {
				id: "2356492ef5594f5a931ed897c9c20fcb"
			},
			id: '', //modificar
			visible: false,
			title: lpib15,
			listMode: "hide-children"
		});
		
		var pibmunicipal16Layer = new MapImageLayer({
			portalItem: {
				id: "3c5ae2987f75468689bbacb456a86c6d"
			},
			id: '', //modificar
			visible: false,
			title: lpib16,
			listMode: "hide-children"
		});
		
		var pibmunicipal17Layer = new MapImageLayer({
			portalItem: {
				id: "d6d4e0d1b2dd4303858caffd0e177a4c"
			},
			id: '', //modificar
			visible: false,
			title: lpib17,
			listMode: "hide-children"
		});
		
		var pibmunicipal18Layer = new MapImageLayer({
			portalItem: {
				id: "2bbf3238c70e4e9d9c0d9254fb76508e"
			},
			id: '', //modificar
			visible: false,
			title: lpib18,
			listMode: "hide-children"
		});
		
		var pibmunicipal19Layer = new MapImageLayer({
			portalItem: {
				id: "4ddc9c3132124d5ab787006fc4f00371"
			},
			id: '', //modificar
			visible: false,
			title: lpib19,
			listMode: "hide-children"
		});

		var pibGroupLayer = new GroupLayer({
			title: gPib,
			visible: true,
			visibilityMode: "independent",
			layers: [pibmunicipal15Layer, pibmunicipal16Layer, pibmunicipal17Layer, pibmunicipal18Layer, pibmunicipal19Layer],
			opacity: 1
		  });

		  var productiviGroupLayer = new GroupLayer({
			title: gProduct,
			visible: true,
			visibilityMode: "independent",
			layers: [pibGroupLayer],
			opacity: 1
		  });

		  //Patents
		  var patents05Layer = new MapImageLayer({
			portalItem: {  
				id: "a0752560111a470fb0232a76c82b1a36"
			  },
			  id:"",
			  visible: false,
			  title: lpatents05,
			  listMode: "hide-children"
			});
		  capes.push(patents05Layer);

		  var patents06Layer = new MapImageLayer({
			portalItem: {  
				id: "62ac5c0a8c284f2f85f2321552726984"
			  },
			  id:"",
			  visible: false,
			  title: lpatents06,
			  listMode: "hide-children"
			});
		  capes.push(patents06Layer);

		  var patents07Layer = new MapImageLayer({
			portalItem: {  
				id: "b352912ca1bd4f4ab8dde0fe059bc671"
			  },
			  id:"",
			  visible: false,
			  title: lpatents07,
			  listMode: "hide-children"
			});
		  capes.push(patents07Layer);

		  var patents08Layer = new MapImageLayer({
			portalItem: {  
				id: "da01080c80cc403099b5899fe134da9c"
			  },
			  id:"",
			  visible: false,
			  title: lpatents08,
			  listMode: "hide-children"
			});
		  capes.push(patents08Layer);

		  var patents09Layer = new MapImageLayer({
			portalItem: {  
				id: "3aac7737ebda4be680c734436e7bfc56"
			  },
			  id:"",
			  visible: false,
			  title: lpatents09,
			  listMode: "hide-children"
			});
		  capes.push(patents09Layer);

		  var patents10Layer = new MapImageLayer({
			portalItem: {  
				id: "1ba54e790f9440bba2f1f71d65086a54"
			  },
			  id:"",
			  visible: false,
			  title: lpatents10,
			  listMode: "hide-children"
			});
		  capes.push(patents10Layer);

		  var patents11Layer = new MapImageLayer({
			portalItem: {  
				id: "def1cb32b4d54574897a6923941e4f90"
			  },
			  id:"",
			  visible: false,
			  title: lpatents11,
			  listMode: "hide-children"
			});
		  capes.push(patents11Layer);

		  var patents12Layer = new MapImageLayer({
			portalItem: {  
				id: "06c5f47b017743ee928ccac49fd1cff6"
			  },
			  id:"",
			  visible: false,
			  title: lpatents12,
			  listMode: "hide-children"
			});
		  capes.push(patents12Layer);

		  var patents13Layer = new MapImageLayer({
			portalItem: {  
				id: "a5ca5c1a5987450a8614b8a561946ca9"
			  },
			  id:"",
			  visible: false,
			  title: lpatents13,
			  listMode: "hide-children"
			});
		  capes.push(patents13Layer);

		  var patents14Layer = new MapImageLayer({
			portalItem: {  
				id: "0897ba0fbfd44dfbbb5b74180f1e747f"
			  },
			  id:"",
			  visible: false,
			  title: lpatents14,
			  listMode: "hide-children"
			});
		  capes.push(patents14Layer);

		  var patents15Layer = new MapImageLayer({
			portalItem: {  
				id: "d774986b6c104fb2928a791c6a5aac40"
			  },
			  id:"",
			  visible: false,
			  title: lpatents15,
			  listMode: "hide-children"
			});
		  capes.push(patents15Layer);

		  var patentsGroupLayer = new GroupLayer({
			title: gpatents,
			visible: true,
			visibilityMode: "independent",
			layers: [patents05Layer, patents06Layer, patents07Layer, patents08Layer, patents09Layer, patents10Layer, patents11Layer, patents12Layer
			,patents13Layer, patents14Layer, patents15Layer],
			opacity: 1
		  });

		  var sociopatentsGroupLayer = new GroupLayer({
			title: gSociopatents,
			visible: true,
			visibilityMode: "independent",
			layers: [patentsGroupLayer],
			opacity: 1
		  });

		//grup de capes
		var socioGroupLayer = new GroupLayer({
          title: gSocio,
          visible: true,
          visibilityMode: "independent",
          layers: [sociopatentsGroupLayer, formacioGroupLayer, habitatgeGroupLayer, 
			istGroupLayer, migraGroupLayer, desigGroupLayer, aturGroupLayer, productiviGroupLayer, ambest_rendaGroupLayer, demoGroupLayer],
          opacity: 1
        });
		
	
        // Create a map and add the group layer to it

       map = new Map({
          basemap: "topo",
		 layers: [socioGroupLayer,indsocioecoGroupLayer, regionsGroupLayer,imatgesHistoricGroupLayer, limitsGroupLayer]
        });
		
		

			
       

      // Add the map to a MapView

	const defaultZoom = 10;
	const minZoom = 10;
	const maxZoom = 18;

	view = new MapView({
		center: [2.125369, 41.5007585],
		zoom: defaultZoom,
		container: "viewDiv",
		map: map,
		constraints: {
			minZoom: minZoom,
			maxZoom: maxZoom,
		}
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
		  
		//prova desplegables

   
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
			  layer: municipiscercaLayer,
			  searchFields: ["nommuni"],
			  displayField: "nommuni",
			  exactMatch: false,
			  outFields: ["nommuni"],
			  name: "Municipis",
			  zoomScale:25000,
			  placeholder: "example: Barcelona"
			},
			{
			  layer: comarcacercaLayer,
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
      /*  view.watch("focused", function(isFocused) {
          if (isFocused) {
            instructionsExpand.expanded = false;
          }
        });
		*/
		
	
		 view.when(function() {
			//MAPA BASE
			view.on("click", executeIdentifyTask);
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
					 
				 feature.popupTemplate = {
						// autocasts as new PopupTemplate()
						title: layerName ,
						content: contingut
					  };
					  identifyElements.push(feature);
/*
				  if (emissiogasos17Layer.visible) {
					  feature.popupTemplate = {
						// autocasts as new PopupTemplate()
						title: layerName + ": {CODI_CAS}",
						content: contingut
					  };
					   identifyElements.push(feature);
				     

				  } else if (emissiogasos16Layer.visible) {
						feature.popupTemplate = { // autocasts as new PopupTemplate()
						  title: layerName,
						  content: contingut
						
						};
						 identifyElements.push(feature);
				  }
				 /*
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
*/
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
  
  window.addEventListener("load", function() {
	  openElements();					
  });
  
  function openElements() {
	  
	  const selectedItems = [
		  'Indicadors socioecològics',
		  'Indicadors socioeconòmics',
		  'Indicadores socioecológicos',
		  'Indicadores socioeconómicos',
		  'Socio-ecological indicators',
		  'Socio-economic indicators',
	  ]
	  
	  var itemsList = document.getElementsByClassName("esri-layer-list__child-toggle");
	  
	  if(1 > itemsList.length) {
		  setTimeout(function(){
			  openElements();
		  }, 2000);
		  return;
	  }
	  
	  for (var i = 0; i < itemsList.length; i++) {
		  if (selectedItems.includes(itemsList[i]["data-item"].title)){
			  itemsList[i]["data-item"].open = true;
		  }
	  }
  }

     