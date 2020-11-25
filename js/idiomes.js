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
//cartografia de base
var gCartob;
var ltopo25;
var gTopo25;
var lsupurb;
var lvies;
var lalti;
var lhidrotopo;
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
var lorto5m56;
var lorto5m87;
var lorto5m92;
var lorto5m94;
var lorto5m97;
var lorto5m00;
var lorto5m02;
var lorto5m05;
var lorto5m07;
var lorto5m09;
var lorto5m12;
var lorto5m15;
var lorto5m16;
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
var gMaigua;
var lEmb;
var lCost;
var lBadies;
var lEstanys;
var lEstuaris;
var lRius;
var lSub;
var lZonesh;
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
var lpein;
var lxnatura;
var lenpe;
var lhic;
var lhab;
var gNdvi= "NDVI"
var lndvi17;
var lndvi18;
var lndvi19;
var lboscoss;
//Espai urbà
var gUrba;
var lpoligons;
var lteixit;
//Espai agrari
var gAgrari;
var lAgricultura;
var lhorts;
// Vectors ambientals
var gAmbientals;
var gEstatAigua;
var lEsbadies;
var lEscostaneres;
var lEsembass;
var lEsestanys;
var lEsestuaris;
var lEsrius;
var lEssubt;
var lEshumides;
//Riscos territorials
var gRiscos;
var gInundabilitat;
var lretorn10;
var lretorn100;
var lretorn500;
var lriscgeo;
var mapabase;
//Dinàmiques Socioeconòmiques
var gSocio;
var lenvell;
var limmi;
var lrenda;
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
	//CAPES
	capes= "Capes";
	gAmbits="Àmbits";
	//limits administratius
	gLimits= "Límits administratius";
	lseccions ="Seccions Censals (RMB)"
	//cartografia de base
	gCartob= "Cartografia de base";
	ltopo25="Topogràfic 1:25.000 (RMB)";
	gTopo25="Topogràfic";
	lsupurb="Superfície urbanitzada 1:25.000 (RMB)",
	lvies="Vies de comunicació 1:25.000 (RMB)",
	lalti="Altimetria 1:25.000 (RMB)",
	lhidrotopo="Hidrografia 1:25.000 (RMB)",
	lveget="Vegetació 1:25.000 (RMB)",
	//Imatges aèries
	gImg= "Imatges aèries";
	gActuals="Actual";
	lorto25m="Ortofoto de Catalunya 1:25.000 (RMB)";
	lorto5m="Ortofoto de Catalunya 1:5.000 (RMB)";
	lorto25c="Ortofoto de Catalunya 1:2.500 (RMB)";
	lorto10c="Ortofoto de Catalunya 1:1.000 (RMB)";
	lsat250m="Imatge satèl·lit de Catalunya 1:250.000 (RMB)";
	gHistoric="Històric";
	lorto5m56="Ortofoto de Catalunya 1:5.000 1956 (RMB)";
	lorto5m87="Ortofoto de Catalunya 1:5.000 1987 (RMB)";
	lorto5m92="Ortofoto de Catalunya 1:5.000 1992 (RMB)";
	lorto5m94="Ortofoto de Catalunya 1:5.000 1994 (RMB)";
	lorto5m97="Ortofoto de Catalunya 1:5.000 1997 (RMB)";
	lorto5m00="Ortofoto de Catalunya 1:5.000 2000 (RMB)";
	lorto5m02="Ortofoto de Catalunya 1:5.000 2002 (RMB)";
	lorto5m05="Ortofoto de Catalunya 1:5.000 2005 (RMB)";
	lorto5m07="Ortofoto de Catalunya 1:5.000 2007 (RMB)";
	lorto5m09="Ortofoto de Catalunya 1:5.000 2009 (RMB)";
	lorto5m12="Ortofoto de Catalunya 1:5.000 2012 (RMB)";
	lorto5m15="Ortofoto de Catalunya 1:5.000 2015 (RMB)";
	lorto5m16="Ortofoto de Catalunya 1:5.000 2016 (RMB)";
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
	gMaigua="Masses d'aigua";
	lEmb ="Embassaments (RMB)";
	lCost="Aigües costaneres (RMB)";
	lBadies="Badies (RMB)";
	lEstanys="Estanys (RMB)";
	lEstuaris="Estuaris (RMB)";
	lRius="Rius (RMB)";
	lSub="Aigües subterrànies (RMB)";
	lZonesh="Zones humides (RMB)";
	lHidrogeo="Hidrogeològic 1:250.000 (RMB)";
	lAquifers="Aqüífers (RMB)";
	lAqupro="Aqüífers protegits (RMB)";
	gConques="Conques";
	lXarxa0="Xarxa hidrogràfica principal 1:50.000 (RMB)";
	lXarxahidro="Xarxa hidrogràfica (RMB)";
	lCanals="Xarxa de conduccions i canalitzacions (RMB)";
	lConques="Conques elementals de Catalunya 1:50.000 (RMB)";
	//Clima
	gClima= "Clima";
	lRadiacio="Radiació solar (RMB)";
	lPrecipitacio="Precipitacions (RMB)";
	lTempmin="Temeratura mitjana mínimes (RMB)";
	lTempmit="Temperatura mitjana (RMB)";
	lTempmax="Temperatura mitjana màximes (RMB)";
	//Cobertes del sol
	gCobertesSol="Cobertes del sòl";
	gCobertes="Cobertes del sòl";
	lcob56="Cobertes del sòl 1956 (RMB)";
	lcob93="Cobertes del sòl 1993 (RMB)";
	lcob00="Cobertes del sòl 2000 (RMB)";
	lcob05="Cobertes del sòl 2005 (RMB)";
	lcob09="Cobertes del sòl 2009 (RMB)";
	lcob15="Cobertes del sòl 2015 (AMB)";
	gUsos="Usos del sòl";
	lusos87="Usos del sòl 1987 (RMB)";
	lusos92="Usos del sòl 1992 (RMB)";
	lusos97="Usos del sòl 1997 (RMB)";
	lusos02="Usos del sòl 2002 (RMB)";
	lusos07="Usos del sòl 2007 (RMB)";
	lusos12="Usos del sòl 2012 (RMB)";
	lusos17="Usos del sòl 2017 (RMB)";
	//Espai natural
	gNatural="Espai natural";
	lpein="Pla d'espais d'interès natural (PEIN) (RMB)";
	lxnatura="Xarxa natura 2000 (RMB)";
	lenpe="Espais naturals de protecció especial (ENPE) (RMB)";
	lhic="Hàbitats d'interès comunitari (RMB)";
	lhab="Hàbitats (RMB)";
	lndvi17="NDVI 2017 (RMB)";
	lndvi18="NDVI 2018 (RMB)";
	lndvi19 ="NDVI 2019 (RMB)";
	lboscoss="Boscos singulars (RMB)";
	//Espai urbà
	gUrba="Espai urbà";
	lpoligons="Polígons industrials (RMB)";
	lteixit="Teixits urbans (AMB)";
	//Espai agrari
	gAgrari= "Espai agrari";
	lAgricultura="Agricultura (RMB)";
	lhorts="Agricultura periurbana (AMB)";
	//Vectors ambientals
	gAmbientals= "Vectors ambientals";
	gEstatAigua="Estat de les masses d'aigua";
	lEsbadies="Estat badies (RMB)";
	lEscostaneres="Estat aigües costaneres (RMB)";
	lEsembass="Estat embassaments (RMB)";
	lEsestanys="Estat estanys (RMB)";
	lEsestuaris="Estat estuaris (RMB)";
	lEsrius="Estat rius (RMB)";
	lEssubt="Estat aigües subterrànies (RMB)";
	lEshumides="Estat zones humides (RMB)";
	//Riscos territorials
	gRiscos= "Riscos territorials";
	lriscgeo="Mapa per a la Prevenció de Riscos Geològics 1:25.000 (RMB)";
	gInundabilitat="Inundabilitat";
	lretorn10="Zona inundable retorn 10 anys (RMB)";
	lretorn100="Zona inundable retorn 100 anys (RMB)";
	lretorn500="Zona inundable retorn 500 anys (RMB)";
	//Dinàmiques Socioeconòmiques
	gSocio="Dinàmiques socioeconòmiques";
	lenvell="Envelliment vulnerable (AMB)";
	limmi="Inmigració estrangera (AMB)";
	lrenda="Renda (AMB)";
	lpobresa="Pobresa (AMB)";
	lformacio="Població poc qualificada (AMB)";
	latur="Atur (AMB)";
	lestath="Estat de conservació d'habitatges (AMB)";
	laccesh="Accessibilitat a l’habitatge (AMB)";
	
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
	//CAPES
	capes= "Capas";
	gAmbits="Ámbitos";
	//limits administratius
	gLimits= "Límites administrativos";
	lseccions ="Secciones Censales"
	//cartografia de base
	gCartob= "Cartografía de base";
	ltopo25="Topográfico 1:25.000 (RMB)";
	gTopo25="Topográfico";
	lsupurb="Superficie urbanizada 1:25.000 (RMB)",
	lvies="Vías de comunicación 1:25.000 (RMB)",
	lalti="Altimetría 1:25.000 (RMB)",
	lhidrotopo="Hidrografía 1:25.000 (RMB)",
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
	lorto5m56="Ortofoto de Cataluña 1:5.000 1956 (RMB)";
	lorto5m87="Ortofoto de Cataluña 1:5.000 1987 (RMB)";
	lorto5m92="Ortofoto de Cataluña 1:5.000 1992 (RMB)";
	lorto5m94="Ortofoto de Cataluña 1:5.000 1994 (RMB)";
	lorto5m97="Ortofoto de Cataluña 1:5.000 1997 (RMB)";
	lorto5m00="Ortofoto de Cataluña 1:5.000 2000 (RMB)";
	lorto5m02="Ortofoto de Cataluña 1:5.000 2002 (RMB)";
	lorto5m05="Ortofoto de Cataluña 1:5.000 2005 (RMB)";
	lorto5m07="Ortofoto de Cataluña 1:5.000 2007 (RMB)";
	lorto5m09="Ortofoto de Cataluña 1:5.000 2009 (RMB)";
	lorto5m12="Ortofoto de Cataluña 1:5.000 2012 (RMB)";
	lorto5m15="Ortofoto de Cataluña 1:5.000 2015 (RMB)";
	lorto5m16="Ortofoto de Cataluña 1:5.000 2016 (RMB)";
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
	lEmb ="Embalses (RMB)";
	lCost="Aguas costeras (RMB)";
	lBadies="Bahías (RMB)";
	lEstanys="Estanques (RMB)";
	lEstuaris="Estuarios (RMB)";
	lRius="Ríos (RMB)";
	lSub="Aguas subterráneas (RMB)";
	lZonesh="Zonas húmedas (RMB)";
	lHidrogeo="Hidrogeología 1:250.000 (RMB)";
	lAquifers="Acuíferos (RMB)";
	lAqupro="Acuíferos protegidos (RMB)";
	gConques="Cuencas";
	lXarxa0="Red hidrográfica principal 1:50.000 (RMB)";
	lXarxahidro="Red hidrográfica (RMB)";
	lCanals="Red de conducciones y canalizaciones (RMB)";
	lConques="Cuencas elementales de Cataluña 1:50.000 (RMB)";
	//Clima
	gClima= "Clima";
	lRadiacio="Radiación solar (RMB)";
	lPrecipitacio="Precipitaciones (RMB)";
	lTempmin="Temeratura media mínimas (RMB)";
	lTempmit="Temperatura media (RMB)";
	lTempmax="Temperatura media máximas (RMB)";
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
	lhorts="Agricultura periurbana (AMB)";
	//Vectors ambientals
	gAmbientals= "Vectores ambientales";
	gEstatAigua="Estado de los cuerpos de agua";
	lEsbadies="Estado bahías (RMB)";
	lEscostaneres="Estado aguas costeras (RMB)";
	lEsembass="Estado embalses (RMB)";
	lEsestanys="Estado estanques (RMB)";
	lEsestuaris="Estadoestuarios (RMB)";
	lEsrius="Estado ríos (RMB)";
	lEssubt="Estado aguas subterráneas (RMB)";
	lEshumides="Estado zonas húmedas (RMB)";
	//Riscos territorials
	gRiscos= "Riesgos territoriales";
	lriscgeo="Mapa para la Prevención de Riesgos Geológicos 1: 25.000 (RMB)";
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
	//CAPES
	capes= "Capas";
	gAmbits="Ámbitos";
	//limits administratius
	gLimits= "Administrative limits";
	lseccions ="Census Sections"
	//cartografia de base
	gCartob= "Cartographical base";
	ltopo25="Topgraphic 1:25.000 (RMB)";
	gTopo25="Topgraphic";
	lsupurb="Urbanized surface 1:25.000 (RMB)",
	lvies="Communication channels 1:25.000 (RMB)",
	lalti="Altimetry 1:25.000 (RMB)",
	lhidrotopo="Hidrography 1:25.000 (RMB)",
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
	lorto5m56="Orthophoto of Catalonia 1:5.000 1956 (RMB)";
	lorto5m87="Orthophoto of Catalonia 1:5.000 1987 (RMB)";
	lorto5m92="Orthophoto of Catalonia 1:5.000 1992 (RMB)";
	lorto5m94="Orthophoto of Catalonia 1:5.000 1994 (RMB)";
	lorto5m97="Orthophoto of Catalonia 1:5.000 1997 (RMB)";
	lorto5m00="Orthophoto of Catalonia 1:5.000 2000 (RMB)";
	lorto5m02="Orthophoto of Catalonia 1:5.000 2002 (RMB)";
	lorto5m05="Orthophoto of Catalonia 1:5.000 2005 (RMB)";
	lorto5m07="Orthophoto of Catalonia 1:5.000 2007 (RMB)";
	lorto5m09="Orthophoto of Catalonia 1:5.000 2009 (RMB)";
	lorto5m12="Orthophoto of Catalonia 1:5.000 2012 (RMB)";
	lorto5m15="Orthophoto of Catalonia 1:5.000 2015 (RMB)";
	lorto5m16="Orthophoto of Catalonia 1:5.000 2016 (RMB)";
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
	gMaigua="Hidrology";
	lEmb ="Reservoirs (RMB)";
	lCost="Coastal waters (RMB)";
	lBadies="Bays (RMB)";
	lEstanys="Ponds (RMB)";
	lEstuaris="Estuaries (RMB)";
	lRius="Rivers (RMB)";
	lSub="Groundwater (RMB)";
	lZonesh="Wetlands (RMB)";
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
	lRadiacio="Solar radiation (RMB)";
	lPrecipitacio="Precipitations (RMB)";
	lTempmin="Minimum average temperature (RMB)";
	lTempmit="Average temperature (RMB)";
	lTempmax="Maximum average temperature (RMB)";
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
	lpein="Pla d'espais d'interès natural (PEIN) (RMB)";
	lxnatura="Natura 2000 (RMB)";
	lenpe="Espais Naturals de Proteccció Especial (ENPE) (RMB)";
	lhic="Habitat of priority Community interest.  (RMB)";
	lhab="Habitat (RMB)";
	lndvi17="NDVI 2017 (RMB)";
	lndvi18="NDVI 2018 (RMB)";
	lndvi19 ="NDVI 2019 (RMB)";
	lboscoss="Singular forests (RMB)";
	//Espai urbà
	gUrba="Urban spaces";
	lpoligons="Industrial polygons (RMB)";
	lteixit="Urban fabric(AMB)";
	//Espai agrari
	gAgrari= "Agrarian Spaces";
	lAgricultura="Agriculture (RMB)";
	lhorts="Periurban agriculture (AMB)";
	//Vectors ambientals
	gAmbientals= "Environmental vectors";
	gEstatAigua="State of water bodies";
	lEsbadies="State of bays (RMB)";
	lEscostaneres="State of coastal waters (RMB)";
	lEsembass="State of reservoirs (RMB)";
	lEsestanys="State of ponds (RMB)";
	lEsestuaris="State of estuaries (RMB)";
	lEsrius="State of rivers (RMB)";
	lEssubt="State of groundwater (RMB)";
	lEshumides="State of wetlands (RMB)";
	//Riscos territorials
	gRiscos= "Territorial hazards";
	lriscgeo="Map for the Prevention of Geological Hazards 1: 25,000 (RMB)";
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