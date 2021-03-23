//CONTINGUT AJUDA
var tooltipInfo;
var contingutInfo;

//FUNCIONS MAPA
var fFullextent;
var fInfo
var fDescarrega;
var fMesopacitat;
var fMenysopacitat;
var fCerca;
var fObregaleria;
var fTanca;
var fObrebookmarks;
//CAPES
var tCapes;
var gAmbits;
//limits administratius
var gLimits;
var lseccions;
//Limits protecció ambiental
var gProtecc;
var lpein;
var lxnatura;
var lenpe;
//cartografia de base
var gCartob;
var ltopo25;
var gTopo25;
var lsupurb;
var lvies;
var lalti;
var lveget;
//Imatges aèries
var gImg;
var gActuals;
var lorto25m;
var lorto5m;
var lorto25c;
var lorto10c;
var lsat250m;
var gHistoric;
var lorto10m45;
var lorto5m56;
var lorto5m86;
var lorto5m94;
var lorto5m00;
var lorto5m04;
var lorto5m06;
var lorto5m09;
var lorto5m12;
var lorto5m15;
var lorto5m18;
//Topografia
var gTopo;
var lmde;
var lpendent;
var lorient;
//Geologia
var gGeo;
var lgeolo;
var ledafo;
//Hidrologia
var gHidro;
var lHidrogeo;
var lAquifers;
var lAqupro;
var gConques;
var lXarxa0;
var lXarxahidro;
var lCanals;
var lConques;
//Clima
var gClima;
var lRadiacio;
var lPrecipitacio;
var lTempmin;
var lTempmit;
var lTempmax;
var gAnom;
var lAnomp17;
var lAnomp18;
var lAnomp19;
var lAnomt17;
var lAnomt18;
var lAnomt19;
//Cobertes del sòl
var gCobertesSol;
var gCobertes;
var lcob56;
var lcob93;
var lcob00;
var lcob05;
var lcob09;
var lcob15;
var gUsos;
var lusos87;
var lusos92;
var lusos97;
var lusos02;
var lusos07;
var lusos12;
var lusos17;
//Espai Natural
var gNatural;
var lhic;
var lhab;
var gNdvi;
var lboscoss;
var lndvi17;
var lndvi18;
var lndvi19;
//Espai urbà
var gUrba;
var lpoligons;
var lteixit;
//Espai agrari
var gAgrari;
var lAgricultura;
var lhortsp09;
var lhortsp15;
// Vectors ambientals
var gAmbientals;
var gEstatAigua;
var lEscostaneres;
var lEsembass;
var lEsrius;
var lEssubt;
var lEshumides;
//Riscos territorials
var gRiscos;
var lperim;
var lvincend;
var lpincend;
var linfla;
var gInundabilitat;
var lretorn10;
var lretorn100;
var lretorn500;
var lriscgeo;
//Dinàmiques Socioeconòmiques
var gSocio;
var gAmbsoci;
var gAmbestsoci;
var gAmbestrbaix;
var gAmbestrint;
var gAmbestralt;
var gAmbestvulne;
var gAmbestmajors;
var gAmbestestrang;
var lenvell;
var limmi;
var lrenda;
var lrendab15;
var lrendab16;
var lrendab17;
var lrendai15;
var lrendai16;
var lrendai17;
var lrendaa15;
var lrendaa16;
var lrendaa17;
var lvulne15;
var lvulne16;
var lvulne17;
var lmajors15;
var lmajors16;
var lmajors17;
var lest15;
var lest16;
var lest17;
var lpobresa;
var lformacio;
var latur;
var lestath;
var laccesh;




  if (document.documentElement.lang=='ca'){
  //CONTINGUT Info
	tooltipInfo="Informació sobre el LET's GIS";
	contingutInfo="<div style='width:400px; padding:10px; background-color:white'>" + 
	"<p>El Sistema d’Informació Geogràfica del LET (LET’s GIS), parteix de la idea d’elaborar un sistema de suport a la planificació" + 
	" i la gestió del territori, com un dels elements clau del model d’avaluació socioecològica de la metròpoli. " + 
	"Aquesta eina pretén fer possible la visualització, consulta, descarrega i anàlisi de la informació geogràfica " + 
	"referent a variables socioecològiques a l’àmbit metropolità i regional de Barcelona. El següent enllaç permet accedir a la web " + 
	"del projecte <a href='https://iermb.uab.cat/ca/let-bcn/' target='_blank' rel='noopener noreferrer'>LET</a>.</p></div>";

  //FUNCIONSMAPA
	fFullextent="Zoom a tota l'extensió";
	fInfo="Informació";
	fDescarrega="Descàrrega";
	fMesopacitat="Augment de la opacitat";
	fMenysopacitat="Disminució de la opacitat";
	fCerca="Cerca";
	fObregaleria="Galeria de mapes base";
	fTanca="Tanca";
	fObrebookmarks="Obre selector d'Ambits";
	fMesures="Mesures";
	//CAPES
	capes= "Capes";
	gAmbits="Àmbits";
	//limits administratius
	gLimits= "Límits administratius";
	lseccions ="Seccions Censals"
	//límits protecció ambiental
	gProtecc= "Límits protecció ambiental"
	lpein="Pla d'espais d'interès natural (PEIN)";
	lxnatura="Xarxa natura 2000";
	lenpe="Espais naturals de protecció especial (ENPE)";
	//cartografia de base
	gCartob= "Cartografia de base";
	ltopo25="Topogràfic 1:25.000 (RMB)";
	gTopo25="Topogràfic";
	lsupurb="Superfície urbanitzada 1:25.000",
	lvies="Vies de comunicació 1:25.000",
	lalti="Altimetria 1:25.000",
	lveget="Vegetació 1:25.000",
	//Imatges aèries
	gImg= "Imatges aèries";
	gActuals="Actual";
	lorto25m="Ortofoto de Catalunya 1:25.000 (RMB)";
	lorto5m="Ortofoto de Catalunya 1:5.000 (RMB)";
	lorto25c="Ortofoto de Catalunya 1:2.500 (RMB)";
	lorto10c="Ortofoto de Catalunya 1:1.000 (RMB)";
	lsat250m="Imatge satèl·lit de Catalunya 1:250.000 (RMB)";
	gHistoric="Històric";
	lorto10m45="Ortofoto de Catalunya 1:10.000 1945";
	lorto5m56="Ortofoto de Catalunya 1:5.000 1956";
	lorto5m86="Ortofoto de Catalunya 1:5.000 1986";
	lorto5m94="Ortofoto de Catalunya 1:5.000 1994";
	lorto5m00="Ortofoto de Catalunya 1:5.000 2000";
	lorto5m04="Ortofoto de Catalunya 1:5.000 2004";
	lorto5m06="Ortofoto de Catalunya 1:5.000 2006";
	lorto5m09="Ortofoto de Catalunya 1:5.000 2009";
	lorto5m12="Ortofoto de Catalunya 1:5.000 2012";
	lorto5m15="Ortofoto de Catalunya 1:5.000 2015";
	lorto5m18="Ortofoto de Catalunya 1:5.000 2018";
	//Topografia
	gTopo= "Topografia";
	lmde="Model Digital d'Elevacions (RMB)";
	lpendent="Pendent (RMB)";
	lorient="Orientació (RMB)";
	//Geologia
	gGeo= "Geologia";
	lgeolo="Geològic 1:50.000 (RMB)";
	ledafo="Edafològic (WRB) 1:250.000 (RMB)";
	lsoil="Edafològic (ST) 1:250.000 (RMB)";
	//Hidrologia
	gHidro= "Hidrologia";
	lHidrogeo="Hidrogeològic 1:250.000";
	lAquifers="Aqüífers";
	lAqupro="Aqüífers protegits";
	gConques="Conques";
	lXarxa0="Xarxa hidrogràfica principal 1:50.000";
	lXarxahidro="Xarxa hidrogràfica (RMB)";
	lCanals="Xarxa de conduccions i canalitzacions (RMB)";
	lConques="Conques elementals de Catalunya 1:50.000 (RMB)";
	//Clima
	gClima= "Clima";
	lRadiacio="Radiació solar potencial";
	lPrecipitacio="Precipitacions";
	lTempmin="Temperatures mínimes";
	lTempmit="Temperatura mitjana";
	lTempmax="Temperatures màximes";
	gAnom= "Anomalies climàtiques";
	lAnomp17= "Anomalia precipitació 2017";
	lAnomp18= "Anomalia precipitació 2018";
	lAnomp19= "Anomalia precipitació";
	lAnomt17= "Anomalia temperatura 2017";
	lAnomt18= "Anomalia temperatura 2018";
	lAnomt19= "Anomalia temperatura";
	//Cobertes del sol
	gCobertesSol="Cobertes del sòl";
	gCobertes="Cobertes del sòl";
	lcob56="Cobertes del sòl 1956";
	lcob93="Cobertes del sòl 1993";
	lcob00="Cobertes del sòl 2000";
	lcob05="Cobertes del sòl 2005";
	lcob09="Cobertes del sòl 2009";
	lcob15="Cobertes del sòl 2015 (AMB)";
	gUsos="Usos del sòl";
	lusos87="Usos del sòl 1987";
	lusos92="Usos del sòl 1992";
	lusos97="Usos del sòl 1997";
	lusos02="Usos del sòl 2002";
	lusos07="Usos del sòl 2007";
	lusos12="Usos del sòl 2012";
	lusos17="Usos del sòl 2017";
	//Espai natural
	gNatural="Espai natural";
	gNdvi= "Índex Vegetació (NDVI)";
	lhic="Hàbitats d'interès comunitari";
	lhab="Hàbitats";
	lboscoss="Boscos singulars";
	lndvi17="2017";
	lndvi18="2018";
	lndvi19 ="2019";
	//Espai urbà
	gUrba="Espai urbà";
	lpoligons="Polígons industrials";
	lteixit="Teixits urbans";
	//Espai agrari
	gAgrari= "Espai agrari";
	lAgricultura="Agricultura (DAN 2019)";
	lhortsp09= "Horts precaris 2009";
	lhortsp15="Horts precaris 2015";
	//Vectors ambientals
	gAmbientals= "Vectors ambientals";
	gEstatAigua="Estat de les masses d'aigua";
	lEscostaneres="Estat aigües costaneres";
	lEsembass="Estat dels embassaments";
	lEsrius="Estat ecològic dels rius";
	lEssubt="Estat ecològic aigües subterrànies";
	lEshumides="Estat zones humides";
	//Riscos territorials
	gRiscos= "Riscos territorials";	
	gIncendis="Incendis forestals";
	lriscgeo="Mapa per a la Prevenció de Riscos Geològics 1:25.000";
	lperim= "Incendis forestals 1986-2019";
	lvincend= "Vulnerabilitat incendis";
	lpincend= "Perill bàsic d'incendi"
	linfla= "Model d'inflamabilitat";
	gInundabilitat="Inundabilitat";
	lretorn10="Zona inundable retorn 10 anys";
	lretorn100="Zona inundable retorn 100 anys";
	lretorn500="Zona inundable retorn 500 anys";
	//Dinàmiques Socioeconòmiques
	gSocio="Dinàmiques socioeconòmiques";
	gAmbsoci= "Àrea Metropolitana (AMB)";
	gAmbestsoci= "Àmbits estadístics metropolitans"; 
	gAmbestrbaix= "Renda baixa";
	gAmbestrint= "Renda intermèdia";
	gAmbestralt= "Renda alta";
	gAmbestvulne= "Índex vulnerabilitat urbana";
	gAmbestmajors= "Població major 75 anys sola";
	gAmbestestrang="Estrangers de països en desenvolupament"
	lenvell="Envelliment vulnerable";
	limmi="Inmigració estrangera";
	lrenda="Renda";
	lpobresa="Pobresa";
	lformacio="Població poc qualificada";
	latur="Atur";
	lestath="Estat de conservació d'habitatges";
	laccesh="Accessibilitat a l’habitatge";
	lrendab15= "2015";
	lrendab16= "2016";
	lrendab17= "2017";
	lrendai15= "2015";
	lrendai16= "2016";
	lrendai17= "2017";
	lrendaa15="2015";
	lrendaa16="2016";
	lrendaa17="2017";
	lvulne15= "2015";
	lvulne16= "2016";
	lvulne17= "2017";
	lmajors15= "2015";
	lmajors16= "2016";
	lmajors17= "2017";
	lest15="2015";
	lest16="2016";
	lest17="2017";
	
  } else if (document.documentElement.lang=='es') {
   //CONTINGUT Info
	tooltipInfo="Información sobre el LET's GIS";
	contingutInfo="<div style='width:400px; padding:10px; background-color:white'>" + 
	"<p>El Sistema d’Informació Geogràfica del LET (LET’s GIS), parteix de l’idea d’elaborar un sistema de suport a la planificació" + 
	" i la gestió del territori, com un dels elements clau del model d’avaluació socioecològica de la metròpoli. " + 
	"Aquesta eina pretén fer possible la visualització, consulta, descarrega i anàlisi de la informació geogràfica " + 
	"referent a variables socioecològiques a l’àmbit metropolità i regional de Barcelona. El següent enllaç permet accedir a la web " + 
	"del projecte <a href='https://iermb.uab.cat/ca/let-bcn/' target='_blank' rel='noopener noreferrer'>LET</a>.</p></div>";
  //FUNCIONSMAPA
	fFullextent="Zoom a toda la extensión";
	fInfo="Información";
	fDescarrega="Descarga";
	fMesopacitat="Aumento de la opacidad";
	fMenysopacitat="Disminución de la opacidad";
	fCerca="Búsqueda";
	fObregaleria="Galería de mapas base";
	fTanca="Cierra";
	fObrebookmarks="Selector de Ámbitos";
	fMesures="Mediciones";
	//CAPES
	capes= "Capas";
	gAmbits="Ámbitos";
	//limits administratius
	gLimits= "Límites administrativos";
	lseccions ="Secciones Censales"
	//límites protección ambiental
	gProtecc= "Límites protección ambiental"
	lpein="Plan de espacios de interés natural (PEIN)";
	lxnatura="Red natura 2000";
	lenpe="Espacios naturales de protección especial (ENPE)";
	//cartografia de base
	gCartob= "Cartografía de base";
	ltopo25="Topográfico 1:25.000 (RMB)";
	gTopo25="Topográfico";
	lsupurb="Superficie urbanizada 1:25.000 (RMB)",
	lvies="Vías de comunicación 1:25.000 (RMB)",
	lalti="Altimetría 1:25.000 (RMB)",
	lveget="Vegetación 1:25.000 (RMB)",
	//Imatges aèries
	gImg= "Imágenes aérias";
	gActuals="Actual";
	lorto25m="Ortofoto de Cataluña 1:25.000 (RMB)";
	lorto5m="Ortofoto de Cataluña 1:5.000 (RMB)";
	lorto25c="Ortofoto de Cataluña 1:2.500 (RMB)";
	lorto10c="Ortofoto de Cataluña 1:1.000 (RMB)";
	lsat250m="Imagen satélite de Cataluña 1:250.000 (RMB)";
	gHistoric="Histórico";
	lorto10m45="Ortofoto de Cataluña 1:10.000 1945";
	lorto5m56="Ortofoto de Cataluña 1:5.000 1956 (RMB)";
	lorto5m87="Ortofoto de Cataluña 1:5.000 1987 (RMB)";
	lorto5m94="Ortofoto de Cataluña 1:5.000 1994 (RMB)";
	lorto5m00="Ortofoto de Cataluña 1:5.000 2000 (RMB)";
	lorto5m04="Ortofoto de Cataluña 1:5.000 2004";
	lorto5m06="Ortofoto de Cataluña 1:5.000 2005 (RMB)";
	lorto5m09="Ortofoto de Cataluña 1:5.000 2009 (RMB)";
	lorto5m12="Ortofoto de Cataluña 1:5.000 2012 (RMB)";
	lorto5m15="Ortofoto de Cataluña 1:5.000 2015 (RMB)";
	lorto5m18="Ortofoto de Cataluña 1:5.000 2016 (RMB)";
	//Topografia
	gTopo= "Topografía";
	lmde="Modelo Digital de Elevaciones (RMB)";
	lpendent="Pendiente (RMB)";
	lorient="Orientación (RMB)";
	//Geologia
	gGeo= "Geología";
	lgeolo="Geològic 1:50.000 (RMB)";
	ledafo="Edafológico (WRB) 1:250.000 (RMB)";
	lsoil="Edafológico (ST) 1:250.000 (RMB)";
	//Hidrologia
	gHidro= "Hidrología";
	gMaigua="Hidrología";
	lHidrogeo="Hidrogeología 1:250.000 (RMB)";
	lAquifers="Acuíferos (RMB)";
	lAqupro="Acuíferos protegidos (RMB)";
	gConques="Cuencas";
	lXarxa0="Red hidrográfica principal 1:50.000 (RMB)";
	lXarxahidro="Red hidrográfica";
	lCanals="Red de conducciones y canalizaciones (RMB)";
	lConques="Cuencas elementales de Cataluña 1:50.000 (RMB)";
	//Clima
	gClima= "Clima";
	lRadiacio="Radiación solar (RMB)";
	lPrecipitacio="Precipitaciones (RMB)";
	lTempmin="Temperatura media mínimas (RMB)";
	lTempmit="Temperatura media (RMB)";
	lTempmax="Temperatura media máximas (RMB)";
	gAnom= "Anomalias climáticas";
	lAnomp17= "Anomalía precipitación 2017";
	lAnomp18= "Anomalía precipitación 2018";
	lAnomp19= "Anomalía precipitación 2019";
	lAnomt17= "Anomalía temperatura 2017";
	lAnomt18= "Anomalía temperatura 2018";
	lAnomt19= "Anomalía temperatura 2019";
	//Cobertes del sol
	gCobertesSol="Cubiertas del suelo";
	gCobertes="Cubiertas del suelo";
	lcob56="Cubiertas del suelo 1956 (RMB)";
	lcob93="Cubiertas del suelo 1993 (RMB)";
	lcob00="Cubiertas del suelo 2000 (RMB)";
	lcob05="Cubiertas del suelo 2005 (RMB)";
	lcob09="Cubiertas del suelo 2009 (RMB)";
	lcob15="Cubiertas del suelo 2015 (RMB)";
	gUsos="Usos del suelo";
	lusos87="Usos del suelo 1987 (RMB)";
	lusos92="Usos del suelo 1992 (RMB)";
	lusos97="Usos del suelo 1997 (RMB)";
	lusos02="Usos del suelo 2002 (RMB)";
	lusos07="Usos del suelo 2007 (RMB)";
	lusos12="Usos del suelo 2012 (RMB)";
	lusos17="Usos del suelo 2017 (AMB)";
	//Espai natural
	gNatural="Espacio natural";
	lpein="Plan de espacios de interés natural (PEIN) (RMB)";
	lxnatura="Red Natura 2000 (RMB)";
	lenpe="Espacios Naturales de Proteccción Especial (ENPE) (RMB)";
	lhic="Hábitats de interés comunitario (RMB)";
	lhab="Hábitats (RMB)";
	lndvi17="NDVI 2017 (RMB)";
	lndvi18="NDVI 2018 (RMB)";
	lndvi19 ="NDVI 2019 (RMB)";
	lboscoss="Bosques singulares (RMB)";
	//Espai urbà
	gUrba="Espacio urbano";
	lpoligons="Polígonos industriales (RMB)";
	lteixit="Tejidos Urbanos(AMB)";
	//Espai agrari
	gAgrari= "Espacio agrario";
	lAgricultura="Agricultura (RMB)";
	lhortsp09= "Huertos precarios 2009";
	lhortsp15="Huertos precarios 2015";
	//Vectors ambientals
	gAmbientals= "Vectores ambientales";
	gEstatAigua="Estado de los cuerpos de agua";
	lEscostaneres="Estado aguas costeras (RMB)";
	lEsembass="Estado embalses (RMB)";
	lEsrius="Estado ríos (RMB)";
	lEssubt="Estado aguas subterráneas (RMB)";
	lEshumides="Estado zonas húmedas (RMB)";
	//Riscos territorials
	gRiscos= "Riesgos territoriales";
	lriscgeo="Mapa para la Prevención de Riesgos Geológicos 1: 25.000 (RMB)";
	lperim= "Incendios forestales 1986-2019";
	gIncendis="Risc d'incendis forestals"
	lincend= "Vulnerabilidad a incendios";
	linfla= "Modelo de inflamabilidad";
	gInundabilitat="Inundabilidad";
	lretorn10="Zona inundable periodo de retorno 10 años (RMB)(RMB)";
	lretorn100="Zona inundable periodo de retorno 100 años(RMB)";
	lretorn500="Zona inundable periodo de retorno 500 años (RMB)";
	//Dinàmiques Socioeconòmiques
	gSocio="Dinámicas socioeconómicas";
	lenvell="Envejecimiento vulnerable (AMB)";
	limmi="Inmigración extranjera (AMB)";
	lrenda="Renta (AMB)";
	lpobresa="Pobreza (AMB)";
	lformacio="Población poco cualificada (AMB)";
	latur="Paro (AMB)";
	lestath="Estado de conservación de las viviendas (AMB)";
	laccesh="Accesibilidad a la vivienda (AMB)";
	
  } else if (document.documentElement.lang=='en') {
	//CONTINGUT Info
	tooltipInfo="LET's GIS Information";
	contingutInfo="<div style='width:400px; padding:10px; background-color:white'>" + 
	"<p>El Sistema d’Informació Geogràfica del LET (LET’s GIS), parteix de l’idea d’elaborar un sistema de suport a la planificació" + 
	" i la gestió del territori, com un dels elements clau del model d’avaluació socioecològica de la metròpoli. " + 
	"Aquesta eina pretén fer possible la visualització, consulta, descarrega i anàlisi de la informació geogràfica " + 
	"referent a variables socioecològiques a l’àmbit metropolità i regional de Barcelona. El següent enllaç permet accedir a la web " + 
	"del projecte <a href='https://iermb.uab.cat/ca/let-bcn/' target='_blank' rel='noopener noreferrer'>LET</a>.</p></div>";
  
	//FUNCIONSMAPA
	fFullextent="Go to full extent";
	fInfo="Layer information";
	fDescarrega="Download";
	fMesopacitat="Increase opacity";
	fMenysopacitat="Decrease opacity";
	fCerca="Search";
	fObregaleria="Basemap Gallery";
	fTanca="Close";
	fObrebookmarks="Bookmark selector";
	fMesures="Measure";
	//CAPES
	capes= "Capas";
	gAmbits="Ámbitos";
	//limits administratius
	gLimits= "Administrative limits";
	lseccions ="Census Sections"
	//límites protección ambiental
	gProtecc= "Environmental Protection Limits"
	lpein="Natural Interest Spaces Plan(PEIN)";
	lxnatura="Red Natura 2000";
	lenpe="Natural Special Protection Spaces(ENPE)";
	//cartografia de base
	gCartob= "Cartographical base";
	ltopo25="Topgraphic 1:25.000 (RMB)";
	gTopo25="Topgraphic";
	lsupurb="Urbanized surface 1:25.000 (RMB)",
	lvies="Communication channels 1:25.000 (RMB)",
	lalti="Altimetry 1:25.000 (RMB)",
	lveget="Vegetation 1:25.000 (RMB)",
	//Imatges aèries
	gImg= "Aerial imagery";
	gActuals="Current";
	lorto25m="Orthophoto of Catalonia 1:25.000 (RMB)";
	lorto5m="Orthophoto of Catalonia 1:5.000 (RMB)";
	lorto25c="Orthophoto of Catalonia 1:2.500 (RMB)";
	lorto10c="Orthophoto of Catalonia 1:1.000 (RMB)";
	lsat250m="Satellite image of Catalonia 1:250.000 (RMB)";
	gHistoric="Historical";
	lorto10m45="Orthophoto of Catalonia 1:10.000 1945";
	lorto5m56="Orthophoto of Catalonia 1:5.000 1956";
	lorto5m87="Orthophoto of Catalonia 1:5.000 1987";
	lorto5m94="Orthophoto of Catalonia 1:5.000 1994 (RMB)";
	lorto5m00="Orthophoto of Catalonia 1:5.000 2000 (RMB)";
	lorto5m04="Orthophoto of Catalonia 1:5.000 2004";
	lorto5m06="Orthophoto of Catalonia 1:5.000 2007 (RMB)";
	lorto5m09="Orthophoto of Catalonia 1:5.000 2009 (RMB)";
	lorto5m12="Orthophoto of Catalonia 1:5.000 2012 (RMB)";
	lorto5m15="Orthophoto of Catalonia 1:5.000 2015 (RMB)";
	lorto5m18="Orthophoto of Catalonia 1:5.000 2016 (RMB)";
	//Topografia
	gTopo= "Topography";
	lmde="Digital Elevations Model (RMB)";
	lpendent="Slope (RMB)";
	lorient="Hillshade (RMB)";
	//Geologia
	gGeo= "Geology";
	lgeolo="Geologic 1:50.000 (RMB)";
	ledafo="Soils (WRB) 1:250.000 (RMB)";
	lsoil="Soils (ST) 1:250.000 (RMB)";
	//Hidrologia
	gHidro= "Hidrology";
	lHidrogeo="Hydrogeology 1:250.000 (RMB)";
	lAquifers="Aquifers (RMB)";
	lAqupro="Protected aquifers (RMB)";
	gConques="Basins";
	lXarxa0="Main hydrographic network 1:50.000 (RMB)";
	lXarxahidro="Hydrographic network (RMB)";
	lCanals="Driving and channeling network (RMB)";
	lConques="Elemental basins of Catalonia 1:50.000 (RMB)";
	//Clima
	gClima= "Clima";
	lRadiacio="Solar radiation";
	lPrecipitacio="Precipitations";
	lTempmin="Minimum average temperature";
	lTempmit="Average temperature";
	lTempmax="Maximum average temperature";
	gAnom= "Climate anomaly";
	lAnomp17= "Rain anomaly 2017";
	lAnomp18= "Rain anomaly 2018";
	lAnomp19= "Rain anomaly 2019";
	lAnomt17= "Temperature anomaly 2017";
	lAnomt18= "Temperature anomaly 2018";
	lAnomt19= "Temperature anomaly 2019";
	//Cobertes del sol
	gCobertesSol="Land cover";
	gCobertes="Land cover";
	lcob56="Land cover 1956 (RMB)";
	lcob93="Land cover 1993 (RMB)";
	lcob00="Land cover 2000 (RMB)";
	lcob05="Land cover 2005 (RMB)";
	lcob09="Land cover 2009 (RMB)";
	lcob15="Land cover 2015 (AMB)";
	//usos dels sòl
	gUsos="Land uses";
	lusos87="Land uses 1987 (RMB)";
	lusos92="Land uses 1992 (RMB)";
	lusos97="Land uses 1997 (RMB)";
	lusos02="Land uses 2002 (RMB)";
	lusos07="Land uses 2007 (RMB)";
	lusos12="Land uses 2012 (RMB)";
	lusos17="Land uses 2017 (RMB)";
	//Espai natural
	gNatural="Natural spaces";
	lhic="Habitat of priority Community interest.  (RMB)";
	lhab="Habitat (RMB)";
	lboscoss="Singular forests";
	lndvi17="NDVI 2017 (RMB)";
	lndvi18="NDVI 2018 (RMB)";
	lndvi19 ="NDVI 2019 (RMB)";
	//Espai urbà
	gUrba="Urban spaces";
	lpoligons="Industrial polygons (RMB)";
	lteixit="Urban fabric(AMB)";
	//Espai agrari
	gAgrari= "Agrarian Spaces";
	lAgricultura="Agriculture (RMB)";
	lhortsp09= "Precary Orchards 2009";
	lhortsp15="Precary Orchards 2015";
	//Vectors ambientals
	gAmbientals= "Environmental vectors";
	gEstatAigua="State of water bodies";
	lEscostaneres="State of coastal waters (RMB)";
	lEsembass="State of reservoirs (RMB)";
	lEsrius="State of rivers (RMB)";
	lEssubt="State of groundwater (RMB)";
	lEshumides="State of wetlands (RMB)";
	//Riscos territorials
	gRiscos= "Territorial hazards";
	lriscgeo="Map for the Prevention of Geological Hazards 1: 25,000 (RMB)";
	lperim="Forest Fires 1986-2019"
	gIncendis="Forest fire risk"
	lincend= "Fire vulnerability";
	linfla= "Flammability model";
	gInundabilitat="Flooding";
	lretorn10="Flood zone return period 10 years (RMB)";
	lretorn100="Flood zone return period 100 years(RMB)";
	lretorn500="Flood zone return period 500 years (RMB)";
	//Dinàmiques Socioeconòmiques
	gSocio="Socioeconomic dinamics";
	lenvell="Vulnerable elderly (AMB)";
	limmi="Foreign immigration (AMB)";
	lrenda="Income(AMB)";
	lpobresa="Poverty (AMB)";
	lformacio="Low education population (AMB)";
	latur="Unenployment (AMB)";
	lestath="Housing conservation state (AMB)";
	laccesh="Housing accesibility (AMB)";

  }