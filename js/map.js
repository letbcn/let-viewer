 require([
        "esri/Map",
        "esri/views/MapView",
		"esri/views/SceneView",
        "esri/layers/GroupLayer",
        "esri/layers/MapImageLayer",
		"esri/layers/FeatureLayer",
		"esri/layers/WMSLayer",
        "esri/widgets/LayerList",
		"esri/widgets/Legend",
		"esri/config",
		"esri/widgets/Expand",
		"esri/widgets/Search",
		 "esri/widgets/BasemapGallery",
		 "esri/tasks/GeometryService",
      "esri/tasks/support/ProjectParameters",
	  "esri/widgets/Bookmarks",
	  "esri/portal/Portal",
	  "esri/widgets/BasemapGallery/support/PortalBasemapsSource",
	  "esri/tasks/IdentifyTask",
       "esri/tasks/support/IdentifyParameters",
	   "dojo/_base/array",
      "dojo/on",
      "dojo/dom",
      "dojo/promise/all",
      "dojo/domReady!"
      ], function(Map, MapView, SceneView, GroupLayer, MapImageLayer, FeatureLayer, WMSLayer, LayerList, Legend, esriConfig, 
	  Expand, Search,BasemapGallery,GeometryService,ProjectParameters,Bookmarks, Portal,PortalBasemapsSource,IdentifyTask,IdentifyParameters, arrayUtils, on, dom, all) {
        
		
		
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
		
		/**
		
		var AMBLayer = new FeatureLayer({
			url:
			  "https://atlantis.uab.cat:6443/arcgis/rest/services/limits_administratius/limits_administratius/FeatureServer/3",
			renderer: sym,
			title: 'AMB',
			id:"AMB",
			visible:false,
			definitionExpression: "amb = 0"
			
		  });
		var RMBLayer = new FeatureLayer({
			url:
			  "https://atlantis.uab.cat:6443/arcgis/rest/services/limits_administratius/limits_administratius/FeatureServer/3",
			renderer: sym,
			title: 'RMB',
			visible:true,
			id:"RMB",
			definitionExpression: "rmb = 0"
		  });
		  
		  var B30Layer = new FeatureLayer({
			url:
			  "https://atlantis.uab.cat:6443/arcgis/rest/services/limits_administratius/limits_administratius/FeatureServer/3",
			renderer: sym,
			title: 'B30',
			visible:false,
			id:"B30",
			definitionExpression: "b30 = 0"
		  });
		**/
		
		var AMBLayer = new MapImageLayer({
		  portalItem: { 
			id: "e93415d1458d4b1f9130d18fe4c2e5cd"
		  },
		  id:"AMB",
		  visible: false,
		  title:'AMB',
		  listMode: "hide-children"
		});
		
		var RMBLayer = new MapImageLayer({
		  portalItem: { 
			id: "966498221cc54ac2b0401a85f7df61f5"
		  },
		  id:"RMB",
		  visible: true,
		  title:'RMB',
		  listMode: "hide-children"
		});
		
		
		var B30Layer = new MapImageLayer({
		  portalItem: { 
			id: "84d34314a5b9410d9f34e4a198b2a417"
		  },
		  id:"B30",
		  visible: false,
		  title:'B30',
		  listMode: "hide-children"
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
		var provinciesLayer = new FeatureLayer({
		  portalItem: { 
			id: "f1c3b9405d96425bb23a7652467f6d9a"
		  },
		  id:"5a5c3a62a2a14009867bce8f59cd23bd",
		  visible: false,
		 title: "Províncies",
		 layerId: 0
		});
		
		var vegueriesLayer = new FeatureLayer({
		  portalItem: {  
			id: "01c7874e3b9c428f9f8b8a38589020ca"
		  },
		  visible: false,
		  title: "Vegueries",
		  layerId: 1
		});
		
		var comarquesLayer = new FeatureLayer({
		  portalItem: {  
			id: "1dfbd181db164614bb1b375fbd05aba7"
		  },
		  id:"6357a1acf2cc4c93a5ae72fbd75b39f5",
		  visible: false,
		  title: "Comarques",
		  layerId: 2
		});
		var municipisLayer = new FeatureLayer({
		  portalItem: {  
			id: "d6f5dc12c12a424c81ae43b6e782213f"
		  },
		  id:"8ea5c9ccdd0f43b1b12ceb21f86aace7",
		  visible: true,
		  title: "Municipis",
		  layerId: 3
		});
		
		var seccionsLayer = new MapImageLayer({
		  portalItem: { 
			id: "bd0e279350ac4e90a240643d1c6df70a"
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
          layers: [provinciesLayer, comarquesLayer, municipisLayer, seccionsLayer],
          opacity: 1
        });
		
	//**********Cartografia de base topogràfica***********//
		//capes
		
		var topo25Layer = new WMSLayer({
		  portalItem: {  
			id: "8959282982a84af88bc34a07dc3e498c"
		  },
		  visible: false,
		  title: ltopo25,
		  listMode: "hide-children"
		});
		
		var superficieUrbanitzadaLayer = new MapImageLayer({
		  portalItem: { 
			id: "e718c905c5d94d268364428bc31a4cda"
		  },
		  id:"bf10ee427c444b2b9f9e3ad3b1ede6b8",
		  visible: false,
		  title: lsupurb,
		  listMode: "hide-children"
		});
		capes.push(superficieUrbanitzadaLayer);
		
		var viesComunicacioLayer = new MapImageLayer({
		  portalItem: { 
			id: "6b5649f86ec0416dbac5997f6e41e208"
		  },
		  id:"f639c19547e94cba99e1840733bbe6cb",
		  visible: false,
		  title: lvies,
		  listMode: "hide-children"
		});
		capes.push(viesComunicacioLayer);
		
		//FALTA ALTIMETRIA
		
		var hidrografiaLayer = new MapImageLayer({
		  portalItem: { 
			id: "bc36fe9de0624011b2f11f3dc73d82e0"
		  },
		  id:"fa46d01524894a89bebcab7c0e37efc8",
		  visible: false,
		  title: lhidrotopo,
		  listMode: "hide-children"
		});
		capes.push(hidrografiaLayer);
		
		var vegetacioLayer = new MapImageLayer({
		  portalItem: { 
			id: "728daa2c9db1472286d44813074fe27a"
		  },
		  id:"5ff52f87df6d4ae6a7b7e7f8f7602566",
		  visible: false,
		  title: lveget,
		  listMode: "hide-children"
		});
		capes.push(vegetacioLayer);
		
		//subgrup de capes
		var topoGroupLayer = new GroupLayer({
          title: gTopo25,
          visible: true,
          visibilityMode: "independent",
          layers: [vegetacioLayer,hidrografiaLayer,viesComunicacioLayer, superficieUrbanitzadaLayer],
          opacity: 1
        });
		
		//grup de capes
		var cartografiaDeBaseGroupLayer = new GroupLayer({
          title: gCartob,
          visible: true,
          visibilityMode: "independent",
          layers: [topoGroupLayer, topo25Layer],
          opacity: 1
        });
		
		//**********Imatges aèries ***********//
		//capes
		
		var sat250mLayer = new WMSLayer({
		  portalItem: {  
			id: "483fe9a5d7ce49c593a302142547330b"
		  },
		  visible: false,
		  title: lsat250m,
		  listMode: "hide-children",
		   sublayers: [{
			name: "sat250m" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto25mLayer = new WMSLayer({
		  portalItem: {  
			id: "483fe9a5d7ce49c593a302142547330b"
		  },
		  visible: false,
		  title: lorto25m,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto25m" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5mLayer = new WMSLayer({
		  portalItem: {  
			id: "483fe9a5d7ce49c593a302142547330b"
		  },
		  visible: false,
		  title: lorto5m,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto25cLayer = new WMSLayer({
		  portalItem: {  
			id: "483fe9a5d7ce49c593a302142547330b"
		  },
		  visible: false,
		  title: lorto25c,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto25c" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto10cLayer = new WMSLayer({
		  portalItem: {  
			id: "483fe9a5d7ce49c593a302142547330b"
		  },
		  visible: false,
		  title: lorto10c,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto10c" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		//subgrup de capes
		var imatgesActualsGroupLayer = new GroupLayer({
          title: gActuals,
          visible: true,
          visibilityMode: "independent",
          layers: [sat250mLayer,orto25mLayer,orto5mLayer,orto25cLayer,orto10cLayer],
		 
          opacity: 1
        });
		
		var orto5m56Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m56,
		  listMode: "hide-children",
		   sublayers: [{
			name: "ovab5m" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m87Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m87,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m1987" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m92Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m92,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m1992" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m94Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m94,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m1994" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m97Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m97,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m1997" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m00Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m00,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m2000" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m02Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m02,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m2002" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m05Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m05,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m2005" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m07Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m07,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m2007" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m09Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m09,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m2009" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m12Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m12,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m2012" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m15Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m15,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m2015" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var orto5m16Layer = new WMSLayer({
		  portalItem: {  
			id: "c3a4d9f792f1461eaa5f31595cd6d6ef"
		  },
		  visible: false,
		  title: lorto5m16,
		  listMode: "hide-children",
		   sublayers: [{
			name: "orto5m2016" // name of the sublayer,
			//legendUrl: // url to the legend
		  }]
		});
		
		var imatgesHistoricGroupLayer = new GroupLayer({
          title: gHistoric,
          visible: true,
          visibilityMode: "independent",
          layers: [orto5m16Layer,orto5m15Layer,orto5m12Layer,orto5m09Layer,orto5m07Layer,orto5m05Layer,orto5m02Layer,orto5m00Layer,orto5m97Layer,orto5m94Layer,orto5m92Layer,orto5m87Layer,orto5m56Layer],
		 
          opacity: 1
        });
		
		
		//grup de capes
		var imatgesAeriesGroupLayer = new GroupLayer({
          title: gImg,
          visible: true,
          visibilityMode: "independent",
          layers: [imatgesHistoricGroupLayer,imatgesActualsGroupLayer],
		 
          opacity: 1
        });
		
		
		//**********Topografia***********//
		//capes
		var pendentsLayer = new MapImageLayer({
		  portalItem: { 
			id: "1d3ae78e92024bc1b75a5cca4d5cb74d"
		  },
		  id:'ac0fabc8274c4789b41c8e3745ebd922',
		  visible: false,
		  title: lpendent,
		  listMode: "hide-children"
		});
		//capes.push(pendentsLayer);
		
		var orientacionsLayer = new MapImageLayer({
		  portalItem: { 
			id: "c18a3e9e8a194de28f0d20cc4a20ee73"
		  },
		  id:"a3b4a3e65be643a0bbcc3639bb79ff6b",
		  visible: false,
		  title: lorient,
		  listMode: "hide-children"
		});
		//capes.push(orientacionsLayer);
		
		var mdeLayer = new MapImageLayer({
		  portalItem: { 
			id: "eb10731b84c94fb9b0fab5fe39f3e6d0"
		  },
		  id:"1a1e649538cc47fca055948b1f1e225b",
		  visible: false,
		  title: lmde,
		  listMode: "hide-children"
		});
		//capes.push(mdeLayer);
		
		//grup de capes
		var topografiaGroupLayer = new GroupLayer({
          title: gTopo,
          visible: true,
          visibilityMode: "independent",
          layers: [orientacionsLayer, pendentsLayer, mdeLayer],
          opacity: 1
        });
		
				//**********Geologia***********//
		//capes
		var edafologicLayer = new MapImageLayer({
          portalItem: { 
			id: "7d759587a83e47b39a59aeddd0d21d3d"
		  },
		  id: "b40b8c5bedaa443da1b0dcd3e7666e61", //aquí estic posant l'id del shapefile
		  visible: false,
          title: ledafo,
		  listMode: "hide-children"
        });
		capes.push(edafologicLayer);
		
		var edafoSTLayer = new MapImageLayer({
          portalItem: { 
			id: "f581dea033da4bda84496767ae85a18d"
		  },
		  id: "f99fd97d7531479ab895677617a63314", //aquí estic posant l'id del shapefile
		  visible: false,
          title: lsoil,
		  listMode: "hide-children"
        });
		capes.push(edafoSTLayer);
		
		//capes
		var geologicLayer = new MapImageLayer({
          portalItem: { 
			id: "7eabc6c62a1748ec84652ed5b48d083c"
		  },
		  id:"178f367494c34a67b65d544fc4c92840",
		  visible: false,
          title: lgeolo,
		  listMode: "hide-children"
        });
		capes.push(geologicLayer);
		
		
		//grup de capes
         var geologiaGroupLayer = new GroupLayer({
          title: gGeo,
          visible: true,
          visibilityMode: "independent",
          layers: [edafologicLayer,edafoSTLayer, geologicLayer ],
          opacity: 1
		  
        });
		
		
		//**********Hidrologia ***********//
		//capes
		
		var xarxariusLayer = new MapImageLayer({
		  portalItem: { 
			id: "ebf24354f7d5475c8fa30ebd5f10ba0d"
		  },
		  id:"0ad8d8a96f4744b39ba6d6e27c15efbd",
		  visible: false,
		  title: lXarxa0,
		  listMode: "hide-children"
		});
		capes.push(xarxariusLayer);
		
		var xarxahidroLayer = new MapImageLayer({
		  portalItem: { 
			id: "6870a52d1b8345aa9059ab9d59950c22"
		  },
		  id:"6844aaa5c8c74a1695cc4b47344190d5",
		  visible: false,
		  title: lXarxahidro,
		  listMode: "hide-children"
		});
		capes.push(xarxahidroLayer);
		
		var canalsLayer = new MapImageLayer({
		  portalItem: { 
			id: "7236514d3d9e4430a14d08cb4da23fc6"
		  },
		  id:"b13492ca33444c5ba1074bc1bb5f10d2",
		  visible: false,
		  title: lCanals,
		  listMode: "hide-children"
		});
		capes.push(canalsLayer);
		
		var conquesLayer = new MapImageLayer({
		  portalItem: { 
			id: "cee76645c9f6482794e5f0aecf11bd4b"
		  },
		  id:"4851eabedaf24abca5d39de2fe06cdaa",
		  visible: false,
		  title: lConques,
		  listMode: "hide-children"
		});
		capes.push(conquesLayer);
		
		var embassamentsLayer = new MapImageLayer({
		  portalItem: { 
			id: "75363dd3652e414381a83df196c89ed9"
		  },
		  id:"059a2edad60849048b9b79efdef739a9",
		  visible: false,
		  title: lEmb ,
		  listMode: "hide-children"
		});
		capes.push(embassamentsLayer);
		
		var costaneresLayer = new MapImageLayer({
		  portalItem: { 
			id: "1ff5d04dc4df4a43baca625b97357aea"
		  },
		  id:"0e485394ede04518bfdaf0cc94878e13",
		  visible: false,
		  title: lCost,
		  listMode: "hide-children"
		});
		capes.push(costaneresLayer);
		
		var badiesLayer = new MapImageLayer({
		  portalItem: { 
			id: "6f35e67ba59e4afe9a2ee548752f2516"
		  },
		  id:"a5bfa1387f134a58a3954f1f58f01880",
		  visible: false,
		  title: lBadies,
		  listMode: "hide-children"
		});
		capes.push(badiesLayer);
		
		var estanysLayer = new MapImageLayer({
		  portalItem: { 
			id: "74677007f6ff4e53aa15427642ffc256"
		  },
		  id:"2f251a58f6d849dbb0938ee635d10d0a",
		  visible: false,
		  title: lEstanys,
		  listMode: "hide-children"
		});
		capes.push(estanysLayer);
		
		var estuarisLayer = new MapImageLayer({
		  portalItem: { 
			id: "18c48c69d0f046e2b1ffe772b4561965"
		  },
		  id:"9fc6dea2b100494785da21bf88c4806d",
		  visible: false,
		  title: lEstuaris,
		  listMode: "hide-children"
		});
		capes.push(estuarisLayer);
		
		var riusLayer = new MapImageLayer({
		  portalItem: { 
			id: "343d9f191a4845fdb2f03240c5c393d4"
		  },
		  id:"9e33423672784e2a892eaa2622d6848b",
		  visible: false,
		  title: lRius,
		  listMode: "hide-children"
		});
		capes.push(riusLayer);
		
		var subterraniesLayer = new MapImageLayer({
		  portalItem: { 
			id: "0941d7ae34cd408fb18b22e731bf29cd"
		  },
		  id:"c64a2cdd38134783930a567c443da690",
		  visible: false,
		  title: lSub,
		  listMode: "hide-children"
		});
		capes.push(subterraniesLayer);
		
		var zoneshLayer = new MapImageLayer({
		  portalItem: { 
			id: "ed1a4e7847364cb596603a287ec2b089"
		  },
		  id:"eb7c101620a24304ae149be5acb11eed",
		  visible: false,
		  title: lZonesh,
		  listMode: "hide-children"
		});
		capes.push(zoneshLayer);
		
		var hidrogeologicLayer = new MapImageLayer({
		  portalItem: { 
			id: "ded1bcc10941426497f8afabe2cdb0a9"
		  },
		  id:"77193be0555b40b992b43ef2ac830ffc",
		  visible: false,
		  title: lHidrogeo,
		  listMode: "hide-children"
		});
		capes.push(hidrogeologicLayer);
		
		var aquifersprotLayer = new MapImageLayer({
		  portalItem: { 
			id: "798e0eb660fe47a680b7ab4da9e253e1"
		  },
		  id:"c25d6810c82e439286827803f45004f9",
		  visible: false,
		  title: lAqupro,
		  listMode: "hide-children"
		});
		capes.push(aquifersprotLayer);
		
		var aquifersLayer = new MapImageLayer({
		  portalItem: { 
			id: "b84553a9262845eb83d960b34f208aee"
		  },
		  id:"0b10b12040944d0ea464a6002a75afee",
		  visible: false,
		  title: lAquifers,
		  listMode: "hide-children"
		});
		capes.push(aquifersLayer);
		
		//grup de capes
		var massesAiguaGroupLayer = new GroupLayer({
          title: gMaigua,
          visible: true,
          visibilityMode: "independent",
          layers: [zoneshLayer,subterraniesLayer,riusLayer, estuarisLayer,estanysLayer, badiesLayer, costaneresLayer, embassamentsLayer],
          opacity: 1
        });
		
		var conquesGroupLayer = new GroupLayer({
          title: gConques,
          visible: true,
          visibilityMode: "independent",
          layers: [conquesLayer,canalsLayer,xarxahidroLayer,xarxariusLayer],
          opacity: 1
        });
		var hidrologiaGroupLayer = new GroupLayer({
          title: gHidro,
          visible: true,
          visibilityMode: "independent",
          layers: [ conquesGroupLayer,aquifersprotLayer,aquifersLayer,hidrogeologicLayer,massesAiguaGroupLayer],
          opacity: 1
        });
		
		
		

		
		//**********Clima***********//
		//capes
		var radiacioLayer = new MapImageLayer({
          portalItem: { 
			id: "ec0d7b16f38b4048aead3d5b11a5c361"
		  },
		  id:"1a45801b75274d57b854f15a5f4b2825",
		  visible: false,
          title: lRadiacio,
		  listMode: "hide-children"
        });
		//capes.push(radiacioLayer);
		
		
		var precipitacioLayer = new MapImageLayer({
          portalItem: { 
			id: "36157416c1b446409bb8869ba3eaa7b1"
		  },
		  id:"7ab085cad44342d081f3fedaa5214cb8",
		  visible: false,
          title: lPrecipitacio,
		  listMode: "hide-children"
        });
		//capes.push(precipitacioLayer);
		
		var tempMitjMinLayer = new MapImageLayer({
          portalItem: { 
			id: "dfc355ddd3df4f188dc29989d7695e86"
		  },
		  id:"411a834667784b3488505596edbad92b",
		  visible: false,
          title: lTempmin,
		  listMode: "hide-children"
        });
		//capes.push(tempMitjMinLayer);
		
		var tempMitjLayer = new MapImageLayer({
          portalItem: { 
			id: "ad7be0a298364c9183ff0125ec30a6a6"
		  },
		  id:"c796d5dab79e419abd65916acaee6840",
		  visible: false,
          title: lTempmit,
		  listMode: "hide-children"
        });
		//capes.push(tempMitjLayer);
		
		var tempMitjMaxLayer = new MapImageLayer({
          portalItem: { 
			id: "365872d743d74a1588618fa3b38fbc59"
		  },
		  id:"6238690a16e64ee5997bfdbac3082756",
		  visible: false,
          title: lTempmax,
		  listMode: "hide-children"
        });
		//capes.push(tempMitjMaxLayer);
		
		//grup de capes
		var climaGroupLayer = new GroupLayer({
          title: gClima,
          visible: true,
          visibilityMode: "independent",
          layers: [tempMitjMaxLayer,tempMitjLayer,tempMitjMinLayer,radiacioLayer, precipitacioLayer],
          opacity: 1
        });
		
		
		//***************Cobertes del sòl*****************//
		var cob56Layer = new MapImageLayer({
          portalItem: { 
			id: "8e50e3da102d4e5d8f9d0be2b31bb8a0"
		  },
		  id:"faed851378194bfb8717465f80b3c275",
		  visible: false,
          title: lcob56,
		  listMode: "hide-children"
        });
		capes.push(cob56Layer);
		
		var cob93Layer = new MapImageLayer({
          portalItem: { 
			id: "de2e55db541c423098baee0e4e0ed616"
		  },
		  id:"293ede34d6eb4391be703c6db81ae06b",
		  visible: false,
          title: lcob93,
		  listMode: "hide-children"
        });
		capes.push(cob93Layer);
		
		var cob00Layer = new MapImageLayer({
          portalItem: { 
			id: "8628c46836974e39911ee941f8a7099c"
		  },
		  id:"13f475a2ff134f5680ee040a2b415095",
		  visible: false,
          title: lcob00,
		  listMode: "hide-children"
        });
		capes.push(cob00Layer);
		
		var cob05Layer = new MapImageLayer({
          portalItem: { 
			id: "a2daf3c9183e40e0b3ba343b401c44dd"
		  },
		  id:"e38739117c0c4a8e8098cd07796bd180",
		  visible: false,
          title: lcob05,
		  listMode: "hide-children"
        });
		capes.push(cob05Layer);
		
		var cob09Layer = new MapImageLayer({
          portalItem: { 
			id: "a7c3ea94869e4671b8fc84a31042e2f7"
		  },
		  id:"1ee0da9c24734a6bb16d74b1bfffc187",
		  visible: false,
          title: lcob09,
		  listMode: "hide-children"
        });
		capes.push(cob09Layer);
		
		var cob15Layer = new MapImageLayer({
          portalItem: { 
			id: "dfedd30f8e754277bce71b197b9881a4"
		  },
		  id:"39cace6819d142fd9a71dbaada6eebbd",
		  visible: false,
          title: lcob15,
		  listMode: "hide-children"
        });
		capes.push(cob15Layer);
		
		//grup de capes
		var cobertesGroupLayer = new GroupLayer({
          title: gCobertes,
          visible: true,
          visibilityMode: "independent",
          layers: [cob15Layer,cob09Layer,cob05Layer,cob00Layer,cob93Layer,cob56Layer],
          opacity: 1
        });
		
		//capes d'usos
		var usos87Layer = new MapImageLayer({
          portalItem: { 
			id: "9b8057efc311411ea3430f6eaa08c062"
		  },
		  id:"fbbfd23b28ff461fb24b656f00776390",
		  visible: false,
          title: lusos87,
		  listMode: "hide-children"
        });
		capes.push(usos87Layer);
		
		var usos92Layer = new MapImageLayer({
          portalItem: { 
			id: "ae63750dd32f4cadba3a19955ab991a8"
		  },
		  id:"e2558a6e838a41e9bf3cef6e69b8e7a4",
		  visible: false,
          title: lusos92,
		  listMode: "hide-children"
        });
		capes.push(usos92Layer);
		
		var usos97Layer = new MapImageLayer({
          portalItem: { 
			id: "6fd57feba4bd461d9a908d3ffca8ac66"
		  },
		  id:"7924fe0c405d4823b9536d2323ac7ff9",
		  visible: false,
          title: lusos97,
		  listMode: "hide-children"
        });
		capes.push(usos97Layer);
		
		var usos02Layer = new MapImageLayer({
          portalItem: { 
			id: "ec305c83291647d09241866d59f40120"
		  },
		  id:"b0f5670b1e7b46758b4918e50aa4ecbf",
		  visible: false,
          title: lusos02,
		  listMode: "hide-children"
        });
		capes.push(usos02Layer);
		
		var usos07Layer = new MapImageLayer({
          portalItem: { 
			id: "ac35d75883c14996aca03646e819b147"
		  },
		  id:"51c92b260c1945b49aa3e4c99ab33dfe",
		  visible: false,
          title: lusos07,
		  listMode: "hide-children"
        });
		capes.push(usos07Layer);
		
		var usos12Layer = new MapImageLayer({
          portalItem: { 
			id: "5cbb66cd99f04922a7f82e4aa02b60b9"
		  },
		  id:"a8e350d331914ea8a144ea221ebbe323", 
		  visible: false,
          title: lusos12,
		  listMode: "hide-children"
        });
		capes.push(usos12Layer);
		
		var usos17Layer = new MapImageLayer({
          portalItem: { 
			id: "c684f735ed2f4ab2b97ba28c7b6921f4"
		  },
		  id:"0e94632486b0412698f908abda126e48",
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
		
		//grup de capes
		var cobertesSolGroupLayer = new GroupLayer({
          title: gCobertesSol,
          visible: true,
          visibilityMode: "independent",
          layers: [usosGroupLayer,cobertesGroupLayer],
          opacity: 1
        });
		
		//**********Espai natural**************/
		
		var peinLayer = new MapImageLayer({
          portalItem: { 
			id: "dc0a0daede4842429b00c78f9201fc59"
		  },
		  id:"bf5b63926ff04167a519391fe2a5ac50",
		  visible: false,
          title: lpein,
		  listMode: "hide-children"
        });
		capes.push(peinLayer);
		
		var xnaturaLayer = new MapImageLayer({
          portalItem: { 
			id: "304c4dd3e2254efb94f4196acd062334"
		  },
		  id:"7cbf706173614f89b1d5dc0475dec8be",
		  visible: false,
          title: lxnatura,
		  listMode: "hide-children"
        });
		capes.push(xnaturaLayer);
		
		var enpeLayer = new MapImageLayer({
          portalItem: { 
			id: "1bb0fbdc00924d6e9a1c9bde97825154"
		  },
		  id:"f32bd9b7a6ea460a80d43ad25eb080cc",
		  visible: false,
          title: lenpe,
		  listMode: "hide-children"
        });
		capes.push(enpeLayer);
		
		
		var hicLayer = new MapImageLayer({
          portalItem: { 
			id: "a5ad546459a045d59b7ed509310037bf"
		  },
		  id:"c42d6098d4c44fdfae1c71a9c3614133",
		  visible: false,
          title: lhic,
		  listMode: "hide-children"
        });
		capes.push(hicLayer);
		
		/*Hàbitats*/
		
		var habLayer = new MapImageLayer({
          portalItem: { 
			id: "7fad83d76184431daa67e44996e525a3"
		  },
		  id:"fd56f41192ed41278dc53517146b351d",
		  visible: false,
          title: lhab,
		  listMode: "hide-children"
        });
		capes.push(habLayer);
		
		var ndvi17Layer = new MapImageLayer({
          portalItem: { 
			id: "5336befedf4f4993bdf11646bd705f3e"
		  },
		  id:"71f03c59498e403f8295980b1b5b27fa",
		  visible: false,
          title: lndvi17,
		  listMode: "hide-children"
        });
		capes.push(ndvi17Layer);
		
		var ndvi18Layer = new MapImageLayer({
          portalItem: { 
			id: "38d8a9a98717444c9aab2a6d7b539149"
		  },
		  id:"f683b0ebf12c4932875115f4923993cf",
		  visible: false,
          title: lndvi18,
		  listMode: "hide-children"
        });
		capes.push(ndvi18Layer);
		
		var ndvi19Layer = new MapImageLayer({
          portalItem: { 
			id: "50921f6e6eb74c149ff50acee8d185f9"
		  },
		  id:"e5cab1450c1b4027ab4bdfe813daaf7a",
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
		
		var boscossLayer = new MapImageLayer({
          portalItem: { 
			id: "ff9356f5b3894069aacfe9459cf86c83"
		  },
		  id:"afd44fc46629480a92f3bed85dd4a91a",
		  visible: false,
          title: lboscoss,
		  listMode: "hide-children"
        });
		capes.push(boscossLayer);
		
		
		var espaiNaturalGroupLayer = new GroupLayer({
          title: gNatural,
          visible: true,
          visibilityMode: "independent",
          layers: [boscossLayer,ndviGroupLayer,hicLayer,habLayer,enpeLayer,xnaturaLayer,peinLayer],
          opacity: 1
        });
		
		//********Espai urbà*********//
		
		var poligonsLayer = new MapImageLayer({
          portalItem: { 
			id: "e78ace09acc84d7990ce48a435aa9c52"
		  },
		  id:"c60b7b08e260416599d39050aa076c5b",
		  visible: false,
          title: lpoligons,
		  listMode: "hide-children"
        });
		capes.push(poligonsLayer);
		
		var teixitLayer = new MapImageLayer({
          portalItem: { 
			id: "68e5504d984542f09894374bd2c2abad"
		  },
		  id:"3cd8e924b62841b8863b30bf948a0f90",
		  visible: false,
          title: lteixit,
		  listMode: "hide-children"
        });
		capes.push(teixitLayer);
		
		var espaiUrbaGroupLayer = new GroupLayer({
          title: gUrba,
          visible: true,
          visibilityMode: "independent",
          //layers: [teixitLayer,poligonsLayer],
		  layers: [poligonsLayer],
          opacity: 1
        });
		
		//**********Espai agrari***********//
		//capes
		var agriculturaLayer = new MapImageLayer({
          portalItem: { 
			id: "34e902bf1f3d48f092ab723d942db39a"
		  },
		  id:"1db6162873da4fb99a58ff48c6dae996",
		  visible: false,
          title: lAgricultura,
		  listMode: "hide-children"
        });
		capes.push(agriculturaLayer);
	
		
		var hortsLayer = new MapImageLayer({
          portalItem: { 
			id: "2a39799d72134ad29781ef87eb4b3dab"
		  },
		  id:"957ce9eed7694191a3741f342d894c20",
		  visible: false,
          title: lhorts,
		  listMode: "hide-children"
        });
		
		capes.push(hortsLayer);
		
		//grup de capes
		var espaiAgrariGroupLayer = new GroupLayer({
          title: gAgrari,
          visible: true,
          visibilityMode: "independent",
          layers: [hortsLayer,agriculturaLayer],
          opacity: 1
        });
		
		
		//**********Vectors ambientals***********//
		//capes
		var estatBadiesLayer = new MapImageLayer({
		  portalItem: { 
			id: "39cd5924a71e447ea0e0a3adaf125361"
		  },
		  id:"c4a4dc5789774e3dbd5293e9c0c0d6f3",
		  visible: false,
		  title: lEsbadies,
		  listMode: "hide-children"
		});		
		capes.push(estatBadiesLayer);
		
		var estatCostaneresLayer = new MapImageLayer({
		  portalItem: { 
			id: "458dd0747bed4b0087638c688ac77255"
		  },
		  id:"336aff16c83f4159a09ee47237995b31",
		  visible: false,
		  title: lEscostaneres,
		  listMode: "hide-children"
		});
		capes.push(estatCostaneresLayer);
		
		var estatEmbassamentsLayer = new MapImageLayer({
		  portalItem: { 
			id: "5c42ecb4bdd9479795929f94ea0634e4"
		  },
		  id:"b9404685e0be4bbdbd0ccc811b164e5c",
		  visible: false,
		  title: lEsembass,
		  listMode: "hide-children"
		});
		capes.push(estatEmbassamentsLayer);
		
		var estatEstanysLayer = new MapImageLayer({
		  portalItem: { 
			id: "3c3a4ca8fbb546f3a780512b10eb68c7"
		  },
		  id:"dcf339c2a2ad4b038936d93b837233ac",
		  visible: false,
		  title: lEsestanys,
		  listMode: "hide-children"
		});
		capes.push(estatEstanysLayer);
		
		var estatEstuarisLayer = new MapImageLayer({
		  portalItem: { 
			id: "b5739f11c4c0450ca0f2b8aee7bd9553"
		  },
		  id:"6ea443b67d2f48ad95704e374bb06b16",
		  visible: false,
		  title: lEsestuaris,
		  listMode: "hide-children"
		});
		capes.push(estatEstuarisLayer);
		
		var estatAiguaRiusLayer = new MapImageLayer({
		  portalItem: { 
			id: "f23995dd53504047a48d216e6daa2545"
		  },
		  id:"61e261c21525427484a00ccc32e730fd",
		  visible: false,
		  title: lEsrius,
		  listMode: "hide-children"
		});
		capes.push(estatAiguaRiusLayer);
		
		var estatSubterraniesLayer = new MapImageLayer({
		  portalItem: { 
			id: "803f4c754e38440086e72f3a90e93e7a"
		  },
		  id:"3c295e7bfd254093ad01a108b78a37fc",
		  visible: false,
		  title: lEssubt,
		  listMode: "hide-children"
		});
		capes.push(estatSubterraniesLayer);
		
		var estatZonesHumidesLayer = new MapImageLayer({
		  portalItem: { 
			id: "6adc1fa4d62b43fdbfe453fb4c57ebac"
		  },
		  id:"36a198334ee74e8aadc34bd0ae1c29fe",
		  visible: false,
		  title: lEshumides,
		  listMode: "hide-children"
		});
		capes.push(estatZonesHumidesLayer);
		
		//grup de capes
		var estasMassesGroupLayer = new GroupLayer({
          title: gEstatAigua,
          visible: true,
          visibilityMode: "independent",
          layers: [estatZonesHumidesLayer,estatSubterraniesLayer,estatAiguaRiusLayer,estatEstuarisLayer,estatEstanysLayer,estatEmbassamentsLayer,estatCostaneresLayer,estatBadiesLayer],
          opacity: 1
        });
		
		
		var vectorsAmbientalsGroupLayer = new GroupLayer({
          title: gAmbientals,
          visible: true,
          visibilityMode: "independent",
          layers: [estasMassesGroupLayer],
          opacity: 1
        });
		
		
			//**********Riscos territorials ***********//
		//capes
		
		var riscogeologicsLayer = new WMSLayer({
		  portalItem: {  
			id: "02ba5c499d00419398279dfcbd2a26d0"
		  },
		  visible: false,
		  title: lriscgeo,
		  listMode: "hide-children"
		});
		
		var inundable10Layer = new MapImageLayer({
		  portalItem: {  
			id: "50d1dcf29e804bbf9a44d726b812fbee"
		  },
		  id:'9c1c3ca0a4844c55a858ab3467994b7d',
		  visible: false,
		  title: lretorn10,
		  listMode: "hide-children"
		});
		capes.push(inundable10Layer);
		
		var inundable100Layer = new MapImageLayer({
		  portalItem: {  
			id: "d2dffbd485874d40bbcf3dc3f8dec21f"
		  },
		  id:'cc3cfa3cff3b4550bdd15220ee819aa8',
		  visible: false,
		  title: lretorn100,
		  listMode: "hide-children"
		});
		capes.push(inundable100Layer);
		
		var inundable500Layer = new MapImageLayer({
		  portalItem: {  
			id: "16fcea48e3684a5c8d39608713891ab4"
		  },
		  id:'81bc7d31a57e44ae8c987b9592066610',
		  visible: false,
		  title: lretorn500,
		  listMode: "hide-children"
		});
		capes.push(inundable500Layer);
		
		//grup de capes
		var inundabilitatGroupLayer = new GroupLayer({
          title: gInundabilitat,
          visible: true,
          visibilityMode: "independent",
          layers: [inundable500Layer,inundable100Layer,inundable10Layer],
          opacity: 1
        });
		
		//grup de capes
		var riscosGeologicsGroupLayer = new GroupLayer({
          title: gRiscos,
          visible: true,
          visibilityMode: "independent",
          layers: [inundabilitatGroupLayer],//,riscogeologicsLayer],
          opacity: 1
        });
		
			
		

		//Dinàmiques Socioeconòmiques
		
		//capes
		var envellLayer = new MapImageLayer({
		  portalItem: {  
			id: "1299f14a915e4d3d87dda50ba83d8d4a"
		  },
		  id:'7c906313a73143d69ed527a01354319f',
		  visible: false,
		  title: lenvell,
		  listMode: "hide-children"
		});
		capes.push(envellLayer);
		
		var immiLayer = new MapImageLayer({
		  portalItem: {  
			id: "2658b666db37430eb8014ea9d1399ed9"
		  },
		  id:'51c16fffc0914af1a5807216893b0d50',
		  visible: false,
		  title: limmi,
		  listMode: "hide-children"
		});
		capes.push(immiLayer);
		
		var rendaLayer = new MapImageLayer({
		  portalItem: {  
			id: "040c623236b34b6f8bc46cc09f09847f"
		  },
		  id:'cad9baf21ebe4d16ae8a0e7e114595ac',
		  visible: false,
		  title: lrenda,
		  listMode: "hide-children"
		});
		capes.push(rendaLayer);
		
	
		
		/* Encara falta
		var pobresaLayer = new MapImageLayer({
		  portalItem: {  
			id: ""
		  },
		  id:'',
		  visible: false,
		  title: lpobresa,
		  listMode: "hide-children"
		});
		capes.push(pobresaLayer);*/
		
		var formacioLayer = new MapImageLayer({
		  portalItem: {  
			id: "9e65d44433254da1839a420fbc918529"
		  },
		  id:'918019553b994875bce87a7bdadacbbc',
		  visible: false,
		  title: lformacio,
		  listMode: "hide-children"
		});
		capes.push(formacioLayer);
		
		var aturLayer = new MapImageLayer({
		  portalItem: {  
			id: "f50aff1393de4d83a358909f60eaa883"
		  },
		  id:'6c0dc5ec3c0b4293874b0b411ae37d22',
		  visible: false,
		  title: latur,
		  listMode: "hide-children"
		});
		capes.push(aturLayer);
		
		var estathLayer = new MapImageLayer({
		  portalItem: {  
			id: "49a427bddf9e45ef9e06fc1e19b9099e"
		  },
		  id:'07dc183814c04610a150345bcd18426e',
		  visible: false,
		  title: lestath,
		  listMode: "hide-children"
		});
		capes.push(estathLayer);
		
		var acceshLayer = new MapImageLayer({
		  portalItem: {  
			id: "0bd0b15d77e046178e652a558da5d855"
		  },
		  id:'9bd3b7c6e6e84cbea2237fd9be8e34a3',
		  visible: false,
		  title: laccesh,
		  listMode: "hide-children"
		});
		capes.push(acceshLayer);
		
		//grup de capes
		var socioGroupLayer = new GroupLayer({
          title: gSocio,
          visible: true,
          visibilityMode: "independent",
          layers: [acceshLayer,estathLayer,aturLayer,formacioLayer,rendaLayer,immiLayer,envellLayer],
          opacity: 1
        });
		
		

        // Create a map and add the group layer to it

       map = new Map({
          basemap: "satellite",
         // layers: [geologiaGroupLayer,proteccioAmbientalGroupLayer, climaGroupLayer, hidrologiaGroupLayer, imatgesAeriesGroupLayer]
		 layers: [riscosGeologicsGroupLayer, vectorsAmbientalsGroupLayer, socioGroupLayer,espaiAgrariGroupLayer, espaiUrbaGroupLayer, espaiNaturalGroupLayer, cobertesSolGroupLayer, climaGroupLayer,hidrologiaGroupLayer,geologiaGroupLayer,topografiaGroupLayer,imatgesAeriesGroupLayer,cartografiaDeBaseGroupLayer,limitsGroupLayer,regionsGroupLayer]
        });
		
		

			
        // Add the map to a MapView

        view = new MapView({
          center: [2.125369, 41.5007585],
          zoom: 10,
          container: "viewDiv",
          map: map
        });
		
		//view.popup.defaultPopupTemplateEnabled = true;

		
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
		  allPlaceholder: "Municipi",
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
		
		var searchExpand = new Expand({
          view: view,
          content: searchWidget,
		  expandTooltip: fCerca,
		  collapseTooltip:fTanca
        });

     

        // Add the expand instance to the ui

        view.ui.add(searchExpand, "top-left");
		 // Add the search widget to the top left corner of the view
        //view.ui.add(searchWidget, {
        //  position: "top-left"
       // });
	   
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

		var handle = map.watch('basemap.title', function(newValue, oldValue, property, object) {
				if (newValue != undefined) {
				 document.getElementById("mapabaseInput").checked=true;
				}
			  console.log("New value: ", newValue,      // The new value of the property
						  "<br>Old value: ", oldValue,  // The previous value of the changed property
						  "<br>Watched property: ", property,  // In this example this value will always be "basemap.title"
						  "<br>Watched object: ", object);     // In this example this value will always be the map object
			});
			
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
          expanded: false,
		  expandTooltip:fObrebookmarks,
		  collapseTooltip:fTanca
        });

        // Add the widget to the top-right corner of the view
        view.ui.add(bkExpand, "top-right");
		
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
		const instructionsExpand = new Expand({
          expandIconClass: "esri-icon-description",
          expandTooltip: tooltipInfo,
          view: view,
          expanded: false,
          content: contingutInfo
  
            
        });
        view.ui.add(instructionsExpand, "top-left");
        // Close the 'help' popup when view is focused
        view.watch("focused", function(isFocused) {
          if (isFocused) {
            instructionsExpand.expanded = false;
          }
        });
		
		//IDENTIFY
		
	
		 
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
				 /* if (layerName === "Unitats geològiques" && geologicLayer.visible) {
					  feature.popupTemplate = {
						// autocasts as new PopupTemplate()
						title: layerName + ": {CODI_CAS}",
						content: contingut
					  };
					   identifyElements.push(feature);
				   } else if (layerName === 'Soil Taxonomy' && edafoSTLayer.visible) {
						feature.popupTemplate = { // autocasts as new PopupTemplate()
						  title: layerName + ": {CODI_CAS}",
						  content: "<b>{SOIL_ST}</b>" 
						
						};
						 identifyElements.push(feature);
				  } else if (layerName === 'Mapa_250K_WRB_20190300' && edafologicLayer.visible) {
						feature.popupTemplate = { // autocasts as new PopupTemplate()
						  title: layerName + ": {CODI_CAS}",
						  content: "<b>{SOIL_WRB}</b>" 
						
						};
						 identifyElements.push(feature);
				  }*/
				 
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
		
		
		//FI IDENTIFY
		
		
	
		
        });
      });