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
		"esri/widgets/ScaleBar",
		"esri/config",
		"esri/widgets/Expand",
		"esri/widgets/Search",
		"esri/widgets/Home",
		 "esri/widgets/BasemapGallery",
		 "esri/tasks/GeometryService",
      "esri/tasks/support/ProjectParameters",
	  "esri/widgets/Bookmarks",
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
      ], function(Map, MapView, SceneView, GroupLayer, MapImageLayer, FeatureLayer, WMSLayer, LayerList, Measurement, Legend, ScaleBar, esriConfig,
	  Expand, Search,Home,BasemapGallery,GeometryService,ProjectParameters,Bookmarks, Portal,PortalBasemapsSource,IdentifyTask,IdentifyParameters, arrayUtils, domConstruct,on, dom, all) {



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

	var comarquesLayer = new MapImageLayer({
	portalItem: {
		id: "b628d29242aa4591b986a4c293f8edda"
	},
	id: "",
	visible: false,
	title: lcomarca,
	listMode: "hide-children"
	});
	capes.push(comarquesLayer);


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
		id: "c709a8d74f61439c9cd7df90a82a4d72",
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


	//**********Espais protecció ambiental**************/

	var peinLayer = new MapImageLayer({
		portalItem: {
			id: "388d5989dda04adfb76e448418ccfee6"
		},
		id: "50cde7b5dce14ec79b93c44cd1c6f303",
		visible: false,
		title: lpein,
		listMode: "hide-children"
	});
	capes.push(peinLayer);

	var xnaturaLayer = new MapImageLayer({
		portalItem: {
			id: "14d9d9210b094d819c58407117eef3e5"
		},
		id: "aa66ecbfb48842f9bc9b29ffe5e3a6ae",
		visible: false,
		title: lxnatura,
		listMode: "hide-children"
	});
	capes.push(xnaturaLayer);

	var enpeLayer = new MapImageLayer({
		portalItem: {
			id: "1193889d142f4fbfba681c2e59d95ff4"
		},
		id: "aaa4b25c28c64b8e909ae1ff976bc7b6",
		visible: false,
		title: lenpe,
		listMode: "hide-children"
	});
	capes.push(enpeLayer);

	var proteccioGroupLayer = new GroupLayer({
		title: gProtecc,
		visible: true,
		visibilityMode: "independent",
		layers: [enpeLayer, xnaturaLayer, peinLayer],
		opacity: 1
	});



	//**********Cartografia de base topogràfica***********//
	//capes

	var topo25Layer = new WMSLayer({
		portalItem: {
			id: "dd8c8ca8336d405e824276b0097a1d01"
		},
		visible: false,
		title: ltopo25,
		listMode: "hide-children"
	});

	var superficieUrbanitzadaLayer = new MapImageLayer({
		portalItem: {
			id: "4072aaaa0aff474fbaa5b3fdc702f21a"
		},
		id: "c51ff4b3811949de8c931539a98436fb",
		visible: false,
		title: lsupurb,
		listMode: "hide-children"
	});
	capes.push(superficieUrbanitzadaLayer);

	var viesComunicacioLayer = new MapImageLayer({
		portalItem: {
			id: "871040da40c44e85b6c1e241ed79f9ca"
		},
		id: "f639c19547e94cba99e1840733bbe6cb",
		visible: false,
		title: lvies,
		listMode: "hide-children"
	});
	capes.push(viesComunicacioLayer);

	//grup de capes
	var cartografiaDeBaseGroupLayer = new GroupLayer({
		title: gCartob,
		visible: true,
		visibilityMode: "independent",
		layers: [viesComunicacioLayer, superficieUrbanitzadaLayer, topo25Layer],
		opacity: 1
	});

	//**********Imatges aèries ***********//
	//capes

	var sat250mLayer = new WMSLayer({
		portalItem: {
			id: "e6d7098789934688be76822f066f7e4c"
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
			id: "e6d7098789934688be76822f066f7e4c"
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
			id: "e6d7098789934688be76822f066f7e4c"
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
			id: "e6d7098789934688be76822f066f7e4c"
		},
		visible: false,
		title: lorto25c,
		listMode: "hide-children",
		sublayers: [{
			name: "orto25c" // name of the sublayer,
			//legendUrl: // url to the legend
		}]
	});

	//subgrup de capes
	var imatgesActualsGroupLayer = new GroupLayer({
		title: gActuals,
		visible: true,
		visibilityMode: "independent",
		layers: [sat250mLayer, orto25mLayer, orto5mLayer, orto25cLayer],

		opacity: 1
	});

	var orto10m45Layer = new WMSLayer({
		portalItem: {
			id: "052bd1b6ba404a68be5ed6d06a8e4eaf"
		},
		visible: false,
		title: lorto10m45,
		listMode: "hide-children",
		sublayers: [{
			name: "ovaa10m" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "ovab5m" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "orto5m1986" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "orto5m1994" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "orto5m2000" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "orto5m2004" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "orto5m2006" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "orto5m2009" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "orto5m2012" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "orto5m2015" // name of the sublayer,
			//legendUrl: // url to the legend
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
			name: "orto25c2018" // name of the sublayer,
			//legendUrl: // url to the legend
		}]
	});

	var imatgesHistoricGroupLayer = new GroupLayer({
		title: gHistoric,
		visible: true,
		visibilityMode: "independent",
		layers: [orto5m18Layer, orto5m15Layer, orto5m12Layer, orto5m09Layer, orto5m06Layer, orto5m04Layer, orto5m00Layer, orto5m94Layer, orto5m86Layer, orto5m56Layer, orto10m45Layer],

		opacity: 1
	});

	//grup de capes
	var imatgesAeriesGroupLayer = new GroupLayer({
		title: gImg,
		visible: true,
		visibilityMode: "independent",
		layers: [imatgesHistoricGroupLayer, imatgesActualsGroupLayer],

		opacity: 1
	});


	//**********Topografia***********//
	//capes
	var pendentsLayer = new MapImageLayer({
		portalItem: {
			id: "7ead62999aed425c9f886d3121144f7d"
		},
		id: '661de9d03db9420bb0aed38d6016a4e1',
		visible: false,
		title: lpendent,
		listMode: "hide-children"
	});
	//capes.push(pendentsLayer);

	var orientacionsLayer = new MapImageLayer({
		portalItem: {
			id: "2fd7029c9d224033b05c4f2017d5cdab"
		},
		id: "45372a2b148f458ea41e6c876baef8ae",
		visible: false,
		title: lorient,
		listMode: "hide-children"
	});
	//capes.push(orientacionsLayer);

	var mdeLayer = new MapImageLayer({
		portalItem: {
			id: "4d9191f1ab9a436c9b0c8aecbe36e52b"
		},
		id: "e92e7caf625742edbd6cf776a862b6b9",
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
			id: "babf992566c04072a8b9bd54a457c409"
		},
		id: "d75d9a916c6b41f49674d56cab0f8ae0",
		visible: false,
		title: ledafo,
		listMode: "hide-children"
	});
	capes.push(edafologicLayer);

	var edafoSTLayer = new MapImageLayer({
		portalItem: {
			id: "3722f690aea540af8f2e087d0b0ef9c2"
		},
		id: "f99fd97d7531479ab895677617a63314",
		visible: false,
		title: lsoil,
		listMode: "hide-children"
	});
	capes.push(edafoSTLayer);

	//capes
	var geologicLayer = new MapImageLayer({
		portalItem: {
			id: "f683d4b403524639b832afc7d2efa2fa"
		},
		id: "178f367494c34a67b65d544fc4c92840",
		visible: false,
		title: lgeolo,
		listMode: "hide-children"
	});
	capes.push(geologicLayer);

	var hidrogeologicLayer = new MapImageLayer({
		portalItem: {
			id: "2be8985a6a6441dcb46637c234b4d653"
		},
		id: "8d612012e9eb4449a9f16613ef71db21",
		visible: false,
		title: lHidrogeo,
		listMode: "hide-children"
	});
	capes.push(hidrogeologicLayer);

	//grup de capes
	var geologiaGroupLayer = new GroupLayer({
		title: gGeo,
		visible: true,
		visibilityMode: "independent",
		layers: [hidrogeologicLayer, edafologicLayer, edafoSTLayer, geologicLayer],
		opacity: 1

	});


	//**********Hidrologia ***********//
	//capes

	var xarxariusLayer = new MapImageLayer({
		portalItem: {
			id: "2118ce09472247939a2bb15658b8b169"
		},
		id: "1fc6a40336624ab38c4cbf75b5c0ad9a",
		visible: false,
		title: lXarxa0,
		listMode: "hide-children"
	});
	capes.push(xarxariusLayer);

	var xarxahidroLayer = new MapImageLayer({
		portalItem: {
			id: "4baaa3d59eab4ab193ab3497e2c49652"
		},
		id: "1513f52c7bb842d6a15fb0641c43dee6",
		visible: false,
		title: lXarxahidro,
		listMode: "hide-children"
	});
	capes.push(xarxahidroLayer);

	var canalsLayer = new MapImageLayer({
		portalItem: {
			id: "e28e01f7543b4ee4879369d37609b694"
		},
		id: "904b68db5a704b5697a6d81f9efa7c3f",
		visible: false,
		title: lCanals,
		listMode: "hide-children"
	});
	capes.push(canalsLayer);

	var conquesLayer = new MapImageLayer({
		portalItem: {
			id: "f66903ef96744d2b803e499505825cd0"
		},
		id: "ab4823a27fa242659167e279f1061637",
		visible: false,
		title: lConques,
		listMode: "hide-children"
	});
	capes.push(conquesLayer);


	var aquifersprotLayer = new MapImageLayer({
		portalItem: {
			id: "8872c9b504904ca6b5d72b5c3e1f723f"
		},
		id: "42cf57ea35c7499eb6bb8aa3ad454523",
		visible: false,
		title: lAqupro,
		listMode: "hide-children"
	});
	capes.push(aquifersprotLayer);

	var aquifersLayer = new MapImageLayer({
		portalItem: {
			id: "c5f4fc3af0e94aefb000e27b9ab27221"
		},
		id: "7a7334a2004947a19f6788115cf5104e",
		visible: false,
		title: lAquifers,
		listMode: "hide-children"
	});
	capes.push(aquifersLayer);

	//grup de capes

	var hidrologiaGroupLayer = new GroupLayer({
		title: gHidro,
		visible: true,
		visibilityMode: "independent",
		layers: [conquesLayer, canalsLayer, xarxahidroLayer, xarxariusLayer, aquifersprotLayer, aquifersLayer],
		opacity: 1
	});


	//**********Clima***********//
	//capes
	var radiacioLayer = new MapImageLayer({
		portalItem: {
			id: "e7ae7d7478e34a84977affe549f6603d"
		},
		id: "c691c9c12070486fa5656ebbfdb3a0a3",
		visible: false,
		title: lRadiacio,
		listMode: "hide-children"
	});
	//capes.push(radiacioLayer);


	var precipitacioLayer = new MapImageLayer({
		portalItem: {
			id: "1be04e50092740c0a909a0c0356c23d7"
		},
		id: "16d1d07f495d4d6394639595f56ce3c6",
		visible: false,
		title: lPrecipitacio,
		listMode: "hide-children"
	});
	//capes.push(precipitacioLayer);

	var tempMitjMinLayer = new MapImageLayer({
		portalItem: {
			id: "0b3851cf1e73457db22d1ed818c8cb0c"
		},
		id: "12257ee181324c70a07d3a05b9ca14c1",
		visible: false,
		title: lTempmin,
		listMode: "hide-children"
	});
	//capes.push(tempMitjMinLayer);

	var tempMitjLayer = new MapImageLayer({
		portalItem: {
			id: "6fcbd69e764c40dab0036506f0360427"
		},
		id: "43c449f674ff42a6a6e1af5abd77893a",
		visible: false,
		title: lTempmit,
		listMode: "hide-children"
	});
	//capes.push(tempMitjLayer);

	var tempMitjMaxLayer = new MapImageLayer({
		portalItem: {
			id: "323af4f141064d9f96a30cc37d293920"
		},
		id: "a8b993cf4c8843ac8aa0e0dbe2f3da68",
		visible: false,
		title: lTempmax,
		listMode: "hide-children"
	});
	//capes.push(tempMitjMaxLayer);


	var anompp19Layer = new MapImageLayer({
		portalItem: {
			id: "ef969e48f1d9490289df93d7ec012db9"
		},
		id: "", //modificar
		visible: false,
		title: lAnomp19,
		listMode: "hide-children"
	});

	var anomtmp19Layer = new MapImageLayer({
		portalItem: {
			id: "02f5aebf03b843d2a1f4e68bab29c3bb"
		},
		id: "78cca7bd8cb84eb887d20ed9ed3f3092",
		visible: false,
		title: lAnomt19,
		listMode: "hide-children"
	});


	//grup de capes
	var climaGroupLayer = new GroupLayer({
		title: gClima,
		visible: true,
		visibilityMode: "independent",
		layers: [radiacioLayer, tempMitjMaxLayer, tempMitjMinLayer, anomtmp19Layer, tempMitjLayer, anompp19Layer, precipitacioLayer],
		opacity: 1
	});


	//***************Cobertes del sòl*****************//
	var cob56Layer = new MapImageLayer({
		portalItem: {
			id: "040679a9fcee4e35a8808bea01cd71d9"
		},
		id: "271503d302a24e3c92ef806e53925b98",
		visible: false,
		title: lcob56,
		listMode: "hide-children"
	});
	capes.push(cob56Layer);

	var cob93Layer = new MapImageLayer({
		portalItem: {
			id: "f2f124803baa4d86bb779cef346fc33b"
		},
		id: "27b6d833c83f4ff5a76ce4fefcd3971a",
		visible: false,
		title: lcob93,
		listMode: "hide-children"
	});
	capes.push(cob93Layer);

	var cob00Layer = new MapImageLayer({
		portalItem: {
			id: "aea3bd0f2c8e4a1493699fdff988bac1"
		},
		id: "9ddbf3ad865445929d37291afa9e0a5b",
		visible: false,
		title: lcob00,
		listMode: "hide-children"
	});
	capes.push(cob00Layer);

	var cob05Layer = new MapImageLayer({
		portalItem: {
			id: "254f367be0684692a05a54b073ac121c"
		},
		id: "3549108ac10b4ab7b60c5623cd0f5cda",
		visible: false,
		title: lcob05,
		listMode: "hide-children"
	});
	capes.push(cob05Layer);

	var cob09Layer = new MapImageLayer({
		portalItem: {
			id: "9f942705cbdc4561a21b1c802b7f798b"
		},
		id: "c468a6a45ed84aafa7cb835565162d27",
		visible: false,
		title: lcob09,
		listMode: "hide-children"
	});
	capes.push(cob09Layer);

	var cob15Layer = new MapImageLayer({
		portalItem: {
			id: "57b1be06d3554ed6a2c4a7c0ed0cbe28"
		},
		id: "d44522da5c584825b4b370d13053056a",
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
		layers: [cob15Layer, cob09Layer, cob05Layer, cob00Layer, cob93Layer, cob56Layer],
		opacity: 1
	});

	//capes d'usos
	var usos87Layer = new MapImageLayer({
		portalItem: {
			id: "78e5e782c3ac40e8a8afd5154f679290"
		},
		id: "8178cd3d700d409b98c16385dcc15133",
		visible: false,
		title: lusos87,
		listMode: "hide-children"
	});
	capes.push(usos87Layer);

	var usos92Layer = new MapImageLayer({
		portalItem: {
			id: "65f076e16cb44d0397ff40cfef2d560b"
		},
		id: "ad282a68bfb34eda9f14993b164f8037",
		visible: false,
		title: lusos92,
		listMode: "hide-children"
	});
	capes.push(usos92Layer);

	var usos97Layer = new MapImageLayer({
		portalItem: {
			id: "ae7010f00bdc4ba3a7179179a8f6812e"
		},
		id: "ee2c7d4e0724403fa13ada858344118f",
		visible: false,
		title: lusos97,
		listMode: "hide-children"
	});
	capes.push(usos97Layer);

	var usos02Layer = new MapImageLayer({
		portalItem: {
			id: "f069a959849a4b3281f16b5d8408a3b0"
		},
		id: "d8c7be6f3a2a4e37981d298e737b3b73",
		visible: false,
		title: lusos02,
		listMode: "hide-children"
	});
	capes.push(usos02Layer);

	var usos07Layer = new MapImageLayer({
		portalItem: {
			id: "3e1111f02b6643d98d875e542c18bb2a"
		},
		id: "bb6de8743dae498bbdb8962e57df20b6",
		visible: false,
		title: lusos07,
		listMode: "hide-children"
	});
	capes.push(usos07Layer);

	var usos12Layer = new MapImageLayer({
		portalItem: {
			id: "043ea7fcdb1f40ae938b0a9e412964e0"
		},
		id: "33ce419d22de4ae1b938b87a3b856172",
		visible: false,
		title: lusos12,
		listMode: "hide-children"
	});
	capes.push(usos12Layer);

	var usos17Layer = new MapImageLayer({
		portalItem: {
			id: "b84d225771574d3db930a808e893e134"
		},
		id: "1dc3aa4885dd40d287d3e6f1f0580b00",
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
		layers: [usos17Layer, usos12Layer, usos07Layer, usos02Layer, usos97Layer, usos92Layer, usos87Layer],
		opacity: 1
	});

	//grup de capes
	var cobertesSolGroupLayer = new GroupLayer({
		title: gCobertesSol,
		visible: true,
		visibilityMode: "independent",
		layers: [usosGroupLayer, cobertesGroupLayer],
		opacity: 1
	});

	//Espai natural

	var hicLayer = new MapImageLayer({
		portalItem: {
			id: "c4c87cf147ec49a79a68f666a992e9a1"
		},
		id: "b02da268dddd4813a819a29768d5def2",
		visible: false,
		title: lhic,
		listMode: "hide-children"
	});
	capes.push(hicLayer);

	var habLayer = new MapImageLayer({
		portalItem: {
			id: "337c648a16a54896a8c1c16d9258ddbb"
		},
		id: "740d56e180d14979afe60802f8fb32ef",
		visible: false,
		title: lhab,
		listMode: "hide-children"
	});
	capes.push(habLayer);

	var ndvi17Layer = new MapImageLayer({
		portalItem: {
			id: "ca635e57c4f04f12b2c2aa10098d97cb"
		},
		id: "d982a6fc5923429abff4831f7a8681f5",
		visible: false,
		title: lndvi17,
		listMode: "hide-children"
	});
	capes.push(ndvi17Layer);

	var ndvi18Layer = new MapImageLayer({
		portalItem: {
			id: "b425b61ef3f04446bc5e4369cff4206b"
		},
		id: "387fa0d8b85746919ea28f0e16280c35",
		visible: false,
		title: lndvi18,
		listMode: "hide-children"
	});
	capes.push(ndvi18Layer);

	var ndvi19Layer = new MapImageLayer({
		portalItem: {
			id: "a8c82853a3044cdbac883617c7117d1a"
		},
		id: "c2a55bb4593b41ea9598be0f7786e11c",
		visible: false,
		title: lndvi19,
		listMode: "hide-children"
	});
	capes.push(ndvi19Layer);

	var ndviGroupLayer = new GroupLayer({
		title: gNdvi,
		visible: true,
		visibilityMode: "independent",
		layers: [ndvi19Layer, ndvi18Layer, ndvi17Layer],
		opacity: 1
	});

	var boscossLayer = new MapImageLayer({
		portalItem: {
			id: "03f03f052fb0467880e0eef07837c52f"
		},
		id: "d7042464feb44823a22a6f0ec119a291",
		visible: false,
		title: lboscoss,
		listMode: "hide-children"
	});
	capes.push(boscossLayer);

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


	var espaiNaturalGroupLayer = new GroupLayer({
		title: gNatural,
		visible: true,
		visibilityMode: "independent",
		layers: [ndviGroupLayer, biodivsingLayer, hicLayer, habLayer, boscossLayer],
		opacity: 1
	});

	//********Espai urbà*********//

	var poligonsLayer = new MapImageLayer({
		portalItem: {
			id: "bf87263bae8f4463be88812065780ec3"
		},
		id: "d36cd02e881c4f53a5b963e5bb2adc31",
		visible: false,
		title: lpoligons,
		listMode: "hide-children"
	});
	capes.push(poligonsLayer);

	var teixitLayer = new MapImageLayer({
		portalItem: {
			id: "a0d62d94dfba4e17b12dd8616b9ce2b0"
		},
		id: "91d47bc8f0514fc1a7486498ba4c8a6c",
		visible: false,
		title: lteixit,
		listMode: "hide-children"
	});
	capes.push(teixitLayer);

	var espaiUrbaGroupLayer = new GroupLayer({
		title: gUrba,
		visible: true,
		visibilityMode: "independent",
		layers: [teixitLayer, poligonsLayer],
		opacity: 1
	});

	//**********Espai agrari***********//
	//capes
	var agriculturaLayer = new MapImageLayer({
		portalItem: {
			id: "9f624cf745a048a5b1782d1c0bc88bf6"
		},
		id: "1db6162873da4fb99a58ff48c6dae996",
		visible: false,
		title: lAgricultura,
		listMode: "hide-children"
	});
	capes.push(agriculturaLayer);

	var hortspr09Layer = new MapImageLayer({
		portalItem: {
			id: "1a5634c35cd04067bfa136075bacbad1"
		},
		id: "2f79f7625cce46f7b085f0f93649cbb1",
		visible: false,
		title: lhortsp09,
		listMode: "hide-children"
	});

	capes.push(hortspr09Layer);

	var hortspr15Layer = new MapImageLayer({
		portalItem: {
			id: "ec429664031b4057ae8ba8a0628197a8"
		},
		id: "b567a429af924404b2114332100737d7",
		visible: false,
		title: lhortsp15,
		listMode: "hide-children"
	});

	capes.push(hortspr15Layer);

	//grup de capes
	var espaiAgrariGroupLayer = new GroupLayer({
		title: gAgrari,
		visible: true,
		visibilityMode: "independent",
		layers: [hortspr15Layer, hortspr09Layer, agriculturaLayer],
		opacity: 1
	});


	//**********Vectors ambientals***********//
	//capes

	var estatCostaneresLayer = new MapImageLayer({
		portalItem: {
			id: "bb932379a79d4a2e9488a7ce919e16e2"
		},
		id: "4564a2cba6724442b48ae1fffce4686d",
		visible: false,
		title: lEscostaneres,
		listMode: "hide-children"
	});
	capes.push(estatCostaneresLayer);

	var estatEmbassamentsLayer = new MapImageLayer({
		portalItem: {
			id: "e963bd24ab524fbaa1fc2bcfb3892315"
		},
		id: "6acc2ab70906496dbb9bd2360ac12e4d",
		visible: false,
		title: lEsembass,
		listMode: "hide-children"
	});
	capes.push(estatEmbassamentsLayer);

	var estatAiguaRiusLayer = new MapImageLayer({
		portalItem: {
			id: "9ee6a5209cdc467ca1804fefb4779ccf"
		},
		id: "b401db079cfd4ffd9be0554382544aec",
		visible: false,
		title: lEsrius,
		listMode: "hide-children"
	});
	capes.push(estatAiguaRiusLayer);

	var estatSubterraniesLayer = new MapImageLayer({
		portalItem: {
			id: "4bf1730854fb4c94bacb7cff6232227d"
		},
		id: "3be8d1197d934cd19c255895cb7932ce",
		visible: false,
		title: lEssubt,
		listMode: "hide-children"
	});
	capes.push(estatSubterraniesLayer);

	var estatZonesHumidesLayer = new MapImageLayer({
		portalItem: {
			id: "6b8123ae8ecd402596e95dacabf2f9cf"
		},
		id: "59c43fa5e3964e3d9a600b67cf74f367",
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
		layers: [estatZonesHumidesLayer, estatSubterraniesLayer, estatAiguaRiusLayer, estatEmbassamentsLayer, estatCostaneresLayer],
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


	var vulnincendisLayer = new MapImageLayer({
		portalItem: {
			id: "26ed8bfd4ba34567bd21d0319b143487"
		},
		id: "45f54873e3a3451c9f282667d3630ca7f",
		visible: false,
		title: lvincend,
		listMode: "hide-children"
	});
	capes.push(vulnincendisLayer);

	var perillincendisLayer = new MapImageLayer({
		portalItem: {
			id: "b1116a5559e24a638a4c2efe67b5c327"
		},
		id: "29baedf71bff4b35ad49e3076d1d9ccf", //modificar
		visible: false,
		title: lpincend,
		listMode: "hide-children"
	});
	capes.push(perillincendisLayer);

	var inflamabilitatLayer = new MapImageLayer({
		portalItem: {
			id: "e1e8330db6bc4b81a9c1655e0a2ab6f9"
		},
		id: "939df2b8d76b4dbfac86a22e81a9c750",
		visible: false,
		title: linfla,
		listMode: "hide-children"
	});
	capes.push(inflamabilitatLayer);

	var perimetresLayer = new MapImageLayer({
		portalItem: {
			id: "0f08c9232808457fa2bc3e0c385fd9b6"
		},
		id: "",
		visible: false,
		title: lperim,
		listMode: "hide-children"
	});
	capes.push(perimetresLayer);

	var inundable10Layer = new MapImageLayer({
		portalItem: {
			id: "475589b7528c402db168280205110097"
		},
		id: '9c1c3ca0a4844c55a858ab3467994b7d',
		visible: false,
		title: lretorn10,
		listMode: "hide-children"
	});
	capes.push(inundable10Layer);

	var inundable100Layer = new MapImageLayer({
		portalItem: {
			id: "06d690a272ec4774aa7a9e7cd9bb1c11"
		},
		id: 'cc3cfa3cff3b4550bdd15220ee819aa8',
		visible: false,
		title: lretorn100,
		listMode: "hide-children"
	});
	capes.push(inundable100Layer);

	var inundable500Layer = new MapImageLayer({
		portalItem: {
			id: "33d39287a50c4085ba5e89d400de68af"
		},
		id: '81bc7d31a57e44ae8c987b9592066610',
		visible: false,
		title: lretorn500,
		listMode: "hide-children"
	});
	capes.push(inundable500Layer);

	//grup de capes

	var incendisGroupLayer = new GroupLayer({
		title: gIncendis,
		visible: true,
		visibilityMode: "independent",
		layers: [inflamabilitatLayer, perillincendisLayer, vulnincendisLayer, perimetresLayer],
		opacity: 1
	});

	var inundabilitatGroupLayer = new GroupLayer({
		title: gInundabilitat,
		visible: true,
		visibilityMode: "independent",
		layers: [inundable500Layer, inundable100Layer, inundable10Layer],
		opacity: 1
	});

	//grup de capes
	var riscosGeologicsGroupLayer = new GroupLayer({
		title: gRiscos,
		visible: true,
		visibilityMode: "independent",
		layers: [inundabilitatGroupLayer, incendisGroupLayer],
		opacity: 1
	});


	//Dinàmiques Socioeconòmiques

	//capes
	

	var immiLayer = new MapImageLayer({
		portalItem: {
			id: "4e479ac7b2dc483fbcbcebeedaec423e"
		},
		id: '51c16fffc0914af1a5807216893b0d50',
		visible: false,
		title: limmi,
		listMode: "hide-children"
	});
	capes.push(immiLayer);


	var rendabaixa15Layer = new MapImageLayer({
		portalItem: {
			id: "6dc97c6445d24082aa4996143b49a333"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lrendab15,
		listMode: "hide-children"
	});
	capes.push(rendabaixa15Layer);

	var rendabaixa16Layer = new MapImageLayer({
		portalItem: {
			id: "88ecb060f60742868f8f29f450fe49ff"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lrendab16,
		listMode: "hide-children"
	});
	capes.push(rendabaixa16Layer);

	var rendabaixa17Layer = new MapImageLayer({
		portalItem: {
			id: "16b3bb1ac4f349e8984367e6bb2cedcf"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lrendab17,
		listMode: "hide-children"
	});
	capes.push(rendabaixa17Layer);

	var rendaint15Layer = new MapImageLayer({
		portalItem: {
			id: "fd8a6a88e957452c9cd0e889c0626023"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lrendai15,
		listMode: "hide-children"
	});
	capes.push(rendaint15Layer);

	var rendaint16Layer = new MapImageLayer({
		portalItem: {
			id: "d5c02f45edef4ab8a66fe5755f7f5ca7"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lrendai16,
		listMode: "hide-children"
	});
	capes.push(rendaint16Layer);

	var rendaint17Layer = new MapImageLayer({
		portalItem: {
			id: "d9b3aaba771c4c8d9c292b350452e7a2"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lrendai17,
		listMode: "hide-children"
	});
	capes.push(rendaint17Layer);

	var rendaalt15Layer = new MapImageLayer({
		portalItem: {
			id: "addce5b2838943378d0befdde05de915"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lrendaa15,
		listMode: "hide-children"
	});
	capes.push(rendaalt15Layer);

	var rendaalt16Layer = new MapImageLayer({
		portalItem: {
			id: "5e69b24c717243f286dabf456dc7473e"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lrendaa16,
		listMode: "hide-children"
	});
	capes.push(rendaalt16Layer);

	var rendaalt17Layer = new MapImageLayer({
		portalItem: {
			id: "eb7558761663409d95e2c13ac8a8a427"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lrendaa17,
		listMode: "hide-children"
	});
	capes.push(rendaalt17Layer);

	//subgrup renta baixa
	var rbaixaGroupLayer = new GroupLayer({
		title: gAmbestrbaix,
		visible: true,
		visibilityMode: "independent",
		layers: [rendabaixa17Layer, rendabaixa16Layer, rendabaixa15Layer],
		opacity: 1
	});

	// subgrup renta intermedia
	var rintGroupLayer = new GroupLayer({
		title: gAmbestrint,
		visible: true,
		visibilityMode: "independent",
		layers: [rendaint17Layer, rendaint16Layer, rendaint15Layer],
		opacity: 1
	});

	//subgrup renta alta
	var raltGroupLayer = new GroupLayer({
		title: gAmbestralt,
		visible: true,
		visibilityMode: "independent",
		layers: [rendaalt17Layer, rendaalt16Layer, rendaalt15Layer],
		opacity: 1
	});


	//index vulnerabilitat urbana
	var vulne15Layer = new MapImageLayer({
		portalItem: {
			id: "bf4cde5b54214c8093658e6f7701b293"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lvulne15,
		listMode: "hide-children"
	});
	capes.push(vulne15Layer);

	var vulne16Layer = new MapImageLayer({
		portalItem: {
			id: "0ecb128dae6545dcb1311bf5f736b04e"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lvulne16,
		listMode: "hide-children"
	});
	capes.push(vulne16Layer);

	var vulne17Layer = new MapImageLayer({
		portalItem: {
			id: "ab7f57f97b0d4f97bcc87bc5621daa14"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lvulne17,
		listMode: "hide-children"
	});
	capes.push(vulne17Layer);

	var vulneGroupLayer = new GroupLayer({
		title: gAmbestvulne,
		visible: true,
		visibilityMode: "independent",
		layers: [vulne17Layer, vulne16Layer, vulne15Layer],
		opacity: 1
	});

	//Envelliment vulnerable
	var envellLayer = new MapImageLayer({
		portalItem: {
			id: "e01f577d228b44e380ce73934aa1e560"
		},
		id: '7c906313a73143d69ed527a01354319f',
		visible: false,
		title: lenvell,
		listMode: "hide-children"
	});
	capes.push(envellLayer);

	//Població major 75 sola
	var majors15Layer = new MapImageLayer({
		portalItem: {
			id: "b5dd9f9e662c4cd2b2224d4db2256f05"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lmajors15,
		listMode: "hide-children"
	});
	capes.push(majors15Layer);

	var majors16Layer = new MapImageLayer({
		portalItem: {
			id: "f28564d047124690b544884aa4f0c440"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lmajors16,
		listMode: "hide-children"
	});
	capes.push(majors16Layer);

	var majors17Layer = new MapImageLayer({
		portalItem: {
			id: "d81005164bce4c0da3c0aaac69c51554"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lmajors17,
		listMode: "hide-children"
	});
	capes.push(majors17Layer);

	var majors75GroupLayer = new GroupLayer({
		title: gAmbestmajors,
		visible: true,
		visibilityMode: "independent",
		layers: [majors17Layer, majors16Layer, majors15Layer],
		opacity: 1
	});

	var envellimentGroupLayer = new GroupLayer({
		title: gEnvell,
		visible: true,
		visibilityMode: "independent",
		layers: [ majors75GroupLayer, envellLayer],
		opacity: 1
	});

	//Estrangers païssos desenvolupament
	var estrang15Layer = new MapImageLayer({
		portalItem: {
			id: "b5f9bbde0d8348a4b3b766f67e2e0be3"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lest15,
		listMode: "hide-children"
	});
	capes.push(estrang15Layer);

	var estrang16Layer = new MapImageLayer({
		portalItem: {
			id: "c5631302c73e40e9ad35de701337d301"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lest16,
		listMode: "hide-children"
	});
	capes.push(estrang16Layer);

	var estrang17Layer = new MapImageLayer({
		portalItem: {
			id: "736553aabf154e06913692394d414b69"
		},
		id: 'cad9baf21ebe4d16ae8a0e7e114595ac', //modificar
		visible: false,
		title: lest17,
		listMode: "hide-children"
	});
	capes.push(estrang17Layer);

	var estrangGroupLayer = new GroupLayer({
		title: gAmbestestrang,
		visible: true,
		visibilityMode: "independent",
		layers: [estrang17Layer, estrang16Layer, estrang15Layer],
		opacity: 1
	});



	//dades socio AMB
	var formacioLayer = new MapImageLayer({
		portalItem: {
			id: "75315adceb2b489da4660a2c570adf33"
		},
		id: '918019553b994875bce87a7bdadacbbc',
		visible: false,
		title: lformacio,
		listMode: "hide-children"
	});
	capes.push(formacioLayer);

	var aturLayer = new MapImageLayer({
		portalItem: {
			id: "66f08ed261eb4c0ea27986126cfa464b"
		},
		id: '6c0dc5ec3c0b4293874b0b411ae37d22',
		visible: false,
		title: latur,
		listMode: "hide-children"
	});
	capes.push(aturLayer);

	var estathLayer = new MapImageLayer({
		portalItem: {
			id: "890f6ff1f45e478b949ff4fc7cfeba01"
		},
		id: '07dc183814c04610a150345bcd18426e',
		visible: false,
		title: lestath,
		listMode: "hide-children"
	});
	capes.push(estathLayer);

	var acceshLayer = new MapImageLayer({
		portalItem: {
			id: "890f6ff1f45e478b949ff4fc7cfeba01"
		},
		id: '9bd3b7c6e6e84cbea2237fd9be8e34a3',
		visible: false,
		title: laccesh,
		listMode: "hide-children"
	});
	capes.push(acceshLayer);

	var habitatgeGroupLayer = new GroupLayer({
		title: gHabitat,
		visible: true,
		visibilityMode: "independent",
		layers: [acceshLayer, estathLayer],
		opacity: 1
	});

	//subgroups 
	var societatGroupLayer = new GroupLayer({
		title: gSocietat,
		visible: true,
		visibilityMode: "independent",
		layers: [habitatgeGroupLayer, envellimentGroupLayer, estrangGroupLayer, vulneGroupLayer],
		opacity: 1
	});

	var economiaGroupLayer = new GroupLayer({
		title: gEco,
		visible: true,
		visibilityMode: "independent",
		layers: [aturLayer],
		opacity: 1
	});

	//grup de capes
	var socioGroupLayer = new GroupLayer({
		title: gSocio,
		visible: true,
		visibilityMode: "independent",
		layers: [economiaGroupLayer, societatGroupLayer],
		opacity: 1
	});



	// Create a map and add the group layer to it

	map = new Map({
		basemap: "satellite",
		// layers: [geologiaGroupLayer,proteccioAmbientalGroupLayer, climaGroupLayer, hidrologiaGroupLayer, imatgesAeriesGroupLayer]
		layers: [riscosGeologicsGroupLayer, vectorsAmbientalsGroupLayer, socioGroupLayer, espaiAgrariGroupLayer, espaiUrbaGroupLayer, espaiNaturalGroupLayer, cobertesSolGroupLayer, climaGroupLayer, hidrologiaGroupLayer, geologiaGroupLayer, topografiaGroupLayer, imatgesAeriesGroupLayer, cartografiaDeBaseGroupLayer, proteccioGroupLayer, limitsGroupLayer, regionsGroupLayer]
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

	/*
	// Add the expand instance to the ui
	var element = document.createElement('div');
	element.className = "esri-icon-left-arrow esri-widget--button esri-widget esri-interactive";
	element.addEventListener('click', function (evt) {
		var cajaLateral = document.getElementById("lateral");
		cajaLateral.classList.toggle("slided");
		var cajaviewDiv = document.getElementById("viewDiv");
		cajaviewDiv.classList.toggle("slided");
		this.classList.toggle("esri-icon-left-arrow");
		this.classList.toggle("esri-icon-right-arrow");
	})
	view.ui.add(element, "top-left");*/

	view.surface.addEventListener("wheel", function (event) {
		event.stopImmediatePropagation();
	}, true);



	//view.popup.defaultPopupTemplateEnabled = true;


	// Creates actions in the LayerList.

	function defineActions(event) {
		// The event object contains an item property.
		// is is a ListItem referencing the associated layer
		// and other properties. You can control the visibility of the
		// item, its title, and actions using this object.

		var item = event.item;

		if (item.layer.id == "AMB" || item.layer.id == "RMB" || item.layer.id == "CAT") {
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

	view.when(function () {


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

		layerList.on("trigger-action", function (event) {

			var activeLayer = event.item.layer;

			// Capture the action id.
			var id = event.action.id;

			if (id === "full-extent") {
				// if the full-extent action is triggered then navigate
				// to the full extent of the visible layer
				//view.goTo(activeLayer.fullExtent);

				// if the full-extent action is triggered then navigate
				// to the full extent of the visible layer
				if (event.item.layer.fullExtent.spatialReference !== view.spatialReference) {
					var geomSer = new GeometryService({ url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer' });
					var params = new ProjectParameters({
						geometries: [event.item.layer.fullExtent],
						outSpatialReference: view.spatialReference
					});
					geomSer.project(params).then(function (results) {
						view.goTo(results[0]);
					});
				} else {
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

		//add scalebar
		var scaleBar = new ScaleBar({
			view: view,
			unit: "metric" // The scale bar displays both metric and non-metric units.
		});

		// Add the widget to the bottom left corner of the view
		view.ui.add(scaleBar, {
			position: "bottom-left"
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
				/*{
					layer: cob15Layer,
					searchFields: ["cat_niv_3"],
					displayField: "cat_niv_3",
					exactMatch: false,
					outFields: ["cat_niv_3"],
					name: "Capes",
					zoomScale:25000,
					placeholder: "example: Cobertes 2015"
				  },*/
				{
					layer: municipisLayer,
					searchFields: ["nommuni"],
					displayField: "nommuni",
					exactMatch: false,
					outFields: ["nommuni"],
					name: "Municipis",
					zoomScale: 25000,
					placeholder: "example: Barcelona"
				},
				{
					layer: comarquesLayer,
					searchFields: ["nomcomar"],
					displayField: "nomcomar",
					exactMatch: false,
					outFields: ["nomcomar"],
					name: "Comarques",
					zoomScale: 25000,
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

		/// Add the expand instance to the ui
		var element = document.createElement('div');
		element.className = "esri-icon-left-arrow esri-widget--button esri-widget esri-interactive";
		element.addEventListener('click', function (evt) {
			var cajaLateral = document.getElementById("lateral");
			cajaLateral.classList.toggle("slided");
			var cajaviewDiv = document.getElementById("viewDiv");
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
			collapseTooltip: fTanca
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
			expandTooltip: fObregaleria,
			collapseTooltip: fTanca
		});

		// Add the expand instance to the ui

		view.ui.add(bgExpand, "top-left");



		//Mesures

		var node = domConstruct.create("div", {
			innerHTML: "<div id='toolbarDiv' class='esri-component esri-widget'>" +
				"<button  id='distanceButton' class='esri-widget--button esri-interactive esri-icon-measure-line'" +
				" title='Distance Measurement Tool' onclick='distanceMeasurement()'></button>" +
				"<button id='areaButton' class='esri-widget--button esri-interactive esri-icon-measure-area'" +
				"    title='Area Measurement Tool' onclick='areaMeasurement()'></button>" +
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
				"id": "RMB",
				"extent": {
					"xmin": 1.473162,
					"ymin": 41.192715,
					"xmax": 2.777576,
					"ymax": 41.808802,
					"spatialReference": {
						"wkid": 4326
					}
				},
				"thumbnail": "imatges/ambit_rmb.jpg"
			},
			{
				"name": "(AMB) Àrea Metropolitana de Barcelona (36 municipis)",
				"id": "AMB",
				"extent": {
					"xmin": 1.846733,
					"ymin": 41.263312,
					"xmax": 2.296332,
					"ymax": 41.574837,
					"spatialReference": {
						"wkid": 4326
					}
				},
				"thumbnail": "imatges/ambit_amb.jpg"
			},
			{
				"name": "(B30) Àmbit de l'eix B30 (23 municipis)",
				"id": "B30",
				"extent": {
					"xmin": 1.889904,
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
			expandTooltip: fObrebookmarks,
			collapseTooltip: fTanca
		});

		// Add the widget to the bottom-right corner of the view
		view.ui.add(bkExpand, "bottom-right");

		bookmarks.on("select-bookmark", function (event) {
			bkExpand.expanded = false;
			//intentaré que es carreguin les capes corresponents
			if (event.bookmark.id == "RMB") {
				B30Layer.visible = false;
				AMBLayer.visible = false;
				RMBLayer.visible = true;
			} else if (event.bookmark.id == "AMB") {
				B30Layer.visible = false;
				RMBLayer.visible = false;
				AMBLayer.visible = true;

			} else if (event.bookmark.id == "B30") {
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
		view.watch("focused", function (isFocused) {
			if (isFocused) {
				instructionsExpand.expanded = false;
			}
		});

		//IDENTIFY



		view.when(function () {
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
			for (var j = 0; j < capes.length; j++) {
				if (capes[j].visible) {
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
				arrayUtils.map(rArray, function (response) {
					var results = response.results;
					return arrayUtils.map(results, function (result) {
						var feature = result.feature;
						var layerName = result.layerName;

						feature.attributes.layerName = layerName;
						contingut = "<b>";
						for (var i in feature.attributes) {
							if (i != "FID" && i != "layerName" && i != "Shape") contingut += i + "</b>: " + feature.attributes[i] + " <br><b>";
						}
						identifyElements.push(feature);
						feature.popupTemplate = {
							// autocasts as new PopupTemplate()
							title: layerName,
							content: contingut
						};

						if (layerName === "Unitats geològiques" && geologicLayer.visible) {
							feature.popupTemplate = {
								// autocasts as new PopupTemplate()
								title: layerName + ": {CODI_CAS}",
								content: contingut
							};
							identifyElements.push(feature);

						} else if (layerName === 'Soil Taxonomy' && edafoSTLayer.visible) {
							feature.popupTemplate = { // autocasts as new PopupTemplate()
								title: layerName,
								content: "<b>{SOIL_ST}</b>"

							};
							identifyElements.push(feature);

						} else if (layerName === 'Mapa_250K_WRB_20190300' && edafologicLayer.visible) {
							feature.popupTemplate = { // autocasts as new PopupTemplate()
								title: layerName + ": {CODI_CAS}",
								content: "<b>{SOIL_WRB}</b>"

							};
							identifyElements.push(feature);

							/*}else if (usos07Layer.visible) {
										feature.popupTemplate = { // autocasts as new PopupTemplate()
											title: "Ús del sòl al 2007",
											content:  "Pixel Value is : " +  "{Pixel Value}"
										  
										  };
										   identifyElements.push(feature);
			
									}else if (cob56Layer.visible) {
								feature.popupTemplate = { // autocasts as new PopupTemplate()
									title: layerName,
									content: "<b>{cat_niv3}</b>" 
								  
								  };
								   identifyElements.push(feature);
							*/
						}

						if (cob56Layer.visible) {
							feature.popupTemplate = {
								// autocasts as new PopupTemplate()
								title: layerName + ": {CODI_CAS}",
								content: "<b>{cat_niv3}</b>"
							};
							//identifyElements.push(feature);

						}
						if (ndvi17Layer.visible) {
							feature.popupTemplate = { // autocasts as new PopupTemplate()
								title: "Normalized Difference Value Index 2017",
								content: "Valor:" + " <b>{Pixel Value}<b>"

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

	//FI IDENTIFY

});

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

