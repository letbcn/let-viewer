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
//Topografia
var gTopo;
var lmde;
var lpendent;
var lorient;
//Clima
var gClima;
var gAnompp;
var gAnomtemp;
var lAnomp17;
var lAnomp18;
var lAnomp19;
var lAnomt16;
var lAnomt17;
var lAnomt18;
var lAnomt19;
//Cobertes del sòl
var gUsos;
var lusos87;
var lusos92;
var lusos97;
var lusos02;
var lusos07;
var lusos12;
var lusos17;
//NDVI
var gNatural;
var gNdvi;
var lndvi17;
var lndvi18;
var lndvi19;
//Variables arbrat
var gVarbrat;
var lbiofol;
var lbiotot;
var lhmitja;
//Estructura paisatge
var gEstict;
var lict;
var lice;
//Biodiversitat
var gBiodiv;
var lbiodsing;
//Estat ecològic
var gEco;
var gEcorius;
var lecorius07;
var lecorius13;
var gEcosub;
var lecosub07;
var lecosub13;
//Consum aigua
var gConaigua;
var laigua06;
//Sostenibilitat urbana
var gSostUrb;
//Consum energia
var gConenerg;
var lenerg11;
var lenerg12;
var lenerg13;
var lenerg14;
var lenerg15;
//Riscos territorials
var gRisc;
var lincend;
var linund10;
var linund100;
var linund500;
//Contaminació atmosferica
var gContm;
var lno2;
var lpm10;
//Indicadors Socioecologics
var gIndSocEco
//Dinàmiques Socioeconòmiques
var gSocio;
var gAmbsoci;
var gAmbestsoci;
var gAmbestrbaix;
var gAmbestrint;
var gAmbestralt;
//Renda
var lrendab15;
var lrendab16;
var lrendab17;
var lrendai15;
var lrendai16;
var lrendai17;
var lrendaa15;
var lrendaa16;
var lrendaa17;
//Formacio
var gForma;
var lforma18;
//Atur
var gAtur;
var latur17;
var latur18;
var latur19;
//Index vulnerabilitat
var gAmbestvulne;
var lvulne15;
var lvulne16;
var lvulne17;
//Envelliment
var gEnvelliment;
var gAIndexEnve;
var lenve18;
var lenve19;
var gAmbestmajors;
var lmajors15;
var lmajors16;
var lmajors17;
//Habitatge
var gHabitatge;
var lesfhabit18;
//Estrangers
var gAmbestestrang;
var lest15;
var lest16;
var lest17;
var latur;
//Patents
var gSociopatents;
var lpatents;

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
	fObrebookmarks="Selector d'Ambits";
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
	//Clima
	gClima= "Variabilitat climàtica";
	gAnompp= "Anomalies en precipitació";
	gAnomtemp= "Anomalies en temperatura";
	lAnomp17= "2017";
	lAnomp18= "2018";
	lAnomp19= "2019";
	lAnomt16= "2016";
	lAnomt17= "2017";
	lAnomt18= "2018";
	lAnomt19= "2019";
	//Cobertes del sol
	gUsos="Usos del sòl";
	lusos87="1987";
	lusos92="1992";
	lusos97="1997";
	lusos02="2002";
	lusos07="2007";
	lusos12="2012";
	lusos17="2017";
	//Espai natural
	gNatural="Espai natural";
	gNdvi= "Índex Vegetació (NDVI)";
	lndvi17="2017";
	lndvi18="2018";
	lndvi19 ="2019";
	//Variables arbrat
	gVarbrat= "Variables biofísiques del arbrat";
	lbiofol= "Biomassa foliar";
	lbiotot= "Biomassa aèria total";
	lhmitja= "Alçada mitjana";
	//Estructura paisatge
	gEstict="Estructura del paisatge"
	lict= "Índex Connectivitat Terrestre";
	lice= "Índex Connectivitat Ecològica dels Espais Oberts";
	//Biodiversitat 
	gBiodiv= "Estat biodiversitat";
	lbiodsing= "Biodiversitat singular";
	//Estat ecològic
	gEco= "Estat ecològic de les masses d'aigüa";
	gEcorius= "Rius"
	lecorius07= "2007-2012";
	lecorius13= "2013-2017";
	gEcosub= "Aigües subterrànies";
	lecosub07= "2007-2012";
	lecosub13= "2013-2017";
	//Consum aigua
	gConaigua= "Consum aigüa";
	laigua06= "2006";
	//Consum energia
	gConenerg= "Consum d'energia";
	lenerg11= "2011";
	lenerg12= "2012";
	lenerg13= "2013";
	lenerg14= "2014";
	lenerg15= "2015";
	//Sostenibilitat urbana
	gSostUrb= "Sostenibilitat urbana";
	//Riscos territorials
	gRisc= "Riscos territorials";
	gInund= "Inundabilitat"
	lincend= "Incendis";
	linund10= "Retorn 10 anys";
	linund100= "Retorn 100 anys";
	linund500= "Retorn 500 anys";
	//Contaminació atmosferica
	gContm= "Contaminació atmosfèrica";
	lno2= "No2";
	lpm10= "Pm10";
	//Indicadors socioecològics
	gIndSocEco= "Indicadors socioecològics";
	//Dinàmiques Socioeconòmiques
	gSocio="Indicadors socioeconòmics";
	//Renda
	gAmbestrenda= "Renda"
	gAmbestrbaix= "Renda baixa";
	gAmbestrint= "Renda intermèdia";
	gAmbestralt= "Renda alta";
	lrendab15= "2015";
	lrendab16= "2016";
	lrendab17= "2017";
	lrendai15= "2015";
	lrendai16= "2016";
	lrendai17= "2017";
	lrendaa15="2015";
	lrendaa16="2016";
	lrendaa17="2017";
	//Formacio
	gForma= "Formació";
	lforma18= "2018";
	//Atur
 	gAtur= "Atur";
	latur17="2017";
	latur18= "2018";
	latur19= "2019";
	//Index vulnerabilitat
	gAmbestvulne= "Índex vulnerabilitat urbana";
	lvulne15= "2015";
	lvulne16= "2016";
	lvulne17= "2017";
	//Envelliment
	gEnvelliment= "Envelliment";
	gAIndexEnve="Índex d'Envelliment";
	lenve18= "2018";
	lenve19= "2019";
	gAmbestmajors= "Població major 75 anys sola";
	lmajors15= "2015";
	lmajors16= "2016";
	lmajors17= "2017";
	//Habitatge
	gHabitatge="Habitatge";
	lesfhabit18="2018";
	//Estrangers
	gAmbestestrang="Estrangers de països en desenvolupament";
	lest15="2015";
	lest16="2016";
	lest17="2017";
	//Patents
	gSociopatents= "Patents europees";
	
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
	//Clima
	gClima= "Clima";
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
	gUsos="Usos del suelo";
	lusos87="Usos del suelo 1987 (RMB)";
	lusos92="Usos del suelo 1992 (RMB)";
	lusos97="Usos del suelo 1997 (RMB)";
	lusos02="Usos del suelo 2002 (RMB)";
	lusos07="Usos del suelo 2007 (RMB)";
	lusos12="Usos del suelo 2012 (RMB)";
	lusos17="Usos del suelo 2017 (AMB)";
	//Espai natural
	//Espai urbà
	gUrba="Espacio urbano";
	lpoligons="Polígonos industriales (RMB)";
	lteixit="Tejidos Urbanos(AMB)";
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