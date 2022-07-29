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
var lcomarca;
var lmunicipis;
var lseccions;
//Imatges històriques
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
//Clima
var gClima;
var gAnompp;
var gAnomtemp;
var lAnomp17;
var lAnomp18;
var lAnomp19;
var lAnomp20;
var lAnomp21;
var lAnomt16;
var lAnomt17;
var lAnomt18;
var lAnomt19;
var lAnomt20;
var lAnomt21;
//Cobertes del sòl
var gCobusos;
var gCob;
var lcob56;
var lcob93;
var lcob00;
var lcob05;
var lcob09;
var lcob15;
var lcob20;
var gUsos;
var lusos87;
var lusos92;
var lusos97;
var lusos02;
var lusos07;
var lusos12;
var lusos17;
//Activitat vegetació
var gActvegeta;
//NDVI
var gNatural;
var gNdvi;
var lndvi17;
var lndvi18;
var lndvi19;
var lndvi20;
//Incendis forestals
var gIncend;
var lincend86;
var lincend88;
var lincend89;
var lincend90;
var lincend91;
var lincend92;
var lincend93;
var lincend94;
var lincend95;
var lincend97;
var lincend98;
var lincend99;
var lincend00;
var lincend01;
var lincend02;
var lincend03;
//Funcionalitat paisatge
var gFuncio;
var gConnect;
var lice56;
var lice93;
var lice09;
var lice15;
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
var laigua13;
var laigua14;
var laigua15;
var laigua16;
var laigua17;
var laigua18;
var laigua19;
var laigua20;
//Consum energia
var gConenerg;
var gEnergelectr;
var lenerg13;
var lenerg14;
var lenerg15;
var lenerg16;
var lenerg17;
var lenerg18;
var lenerg19;
var lenerg20;
var gEnergas;
var lgas13;
var lgas14;
var lgas15;
var lgas16;
var lgas17;
var lgas18;
var lgas19;
var lgas20
//Residus
var gResidus;
var gRecollida;
var lrecollida15;
var lrecollida16;
var lrecollida17;
var lrecollida18;
var lrecollida19;
var lrecollida20;
var gResidushabi;
var lgeneresiduhabi15;
var lgeneresiduhabi16;
var lgeneresiduhabi17;
var lgeneresiduhabi18;
var lgeneresiduhabi19;
var lgeneresiduhabi20;
//Contaminació
var gxarxContm;
var gxarxno2;
var lxarxno22015;
var lxarxno22016;
var lxarxno22017;
var lxarxno22018;
var lxarxno22019;
var lxarxno22020;
var lxarxno22021;
var gxarxpm10;
var lxarxpm102021;
var gxarxpm25;
var lxarxpm2516;
//Gasos efecte hivernacle
var gGasos;
var lEmissioogasos2016;
var lEmissioogasos2017;
//Indicadors Socioecologics
var gIndSocEco
//Dinàmiques Socioeconòmiques
var gSocio;
var gAmbsoci;
var gAmbestsoci;
var gAmbestrbaix;
var gAmbestrint;
var gAmbestralt;
//Demografia
var gDemo;
var lpobla00;
var lpobla05;
var lpobla10;
var lpobla15;
var lpobla20;
var ldensitat00;
var ldensitat05;
var ldensitat10;
var ldensitat15;
var ldensitat20;
//Renda
//origen renda
var gOrigenrenda;
var lorigenrenda15;
var lorigenrenda16;
var lorigenrenda17;
var lorigenrenda18;
//Gini
var gIndexgini;
var lgini15;
var lgini16;
var lgini17;
var lgini18;
//PIB
var gProduct;
var gPib;
var	lpib15;
var	lpib16;
var	lpib17;
var	lpib18;
var	lpib19;
//Formacio
var gForma;
var gbaixaq;
var lbaixaq15;
var lbaixaq16;
var lbaixaq17;
var lbaixaq18;
var ljoves15;
var ljoves16;
var ljoves17;
var ljoves18;
//Atur
var gAtur;
var latur18;
var latur19;
var latur20;
var latur21;
//Desigualtat
var gdesig;
var ldesig18;
//Index socioeconomic territorial
var gist;
var list15;
var list16;
var list17;
var list18;
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
var gEsforshab;
var lesfhabit17;
var lesfhabit18;
var gDemandhabitatge;
var ldehabit19;
var ldehabit20;
//Estrangers
var gMigra;
var gMigrants;
var lmigra00;
var lmigra05;
var lmigra10;
var lmigra15;
var lmigra20;
var gAmbestestrang;
var lest15;
var lest16;
var lest17;
var latur;
//Patents
var gSociopatents;
var gpatents;
var lpatents05;
var lpatents06;
var lpatents07;
var lpatents08;
var lpatents09;
var lpatents10;
var lpatents11;
var lpatents12;
var lpatents13;
var lpatents14;
var lpatents15;

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
	lcomarca= "Comarques";
	lmunicipis= "Municipis";
	lseccions ="Seccions Censals";
	//Imatges històriques
	gHistoric="Imatges aèries";
	lorto10m45="Ortofoto 1:10.000 1945";
	lorto5m56="Ortofoto 1:5.000 1956";
	lorto5m86="Ortofoto 1:5.000 1986";
	lorto5m94="Ortofoto 1:5.000 1994";
	lorto5m00="Ortofoto 1:5.000 2000";
	lorto5m04="Ortofoto 1:5.000 2004";
	lorto5m06="Ortofoto 1:5.000 2006";
	lorto5m09="Ortofoto 1:5.000 2009";
	lorto5m12="Ortofoto 1:5.000 2012";
	lorto5m15="Ortofoto 1:5.000 2015";
	lorto5m18="Ortofoto 1:5.000 2018";
	//Clima
	gClima= "Variabilitat climàtica";
	gAnompp= "Anomalies en precipitació";
	gAnomtemp= "Anomalies en temperatura";
	lAnomp17= "2017";
	lAnomp18= "2018";
	lAnomp19= "2019";
	lAnomp20= "2020";
	lAnomp21="2021";
	lAnomt16= "2016";
	lAnomt17= "2017";
	lAnomt18= "2018";
	lAnomt19= "2019";
	lAnomt20= "2020";
	lAnomt21="2021";
	//Usos i Cobertes del sol
	gCobusos= "Cobertes del sòl";
	gCob= "Cobertes";
	lcob56= "1956";
	lcob93= "1993";
	lcob00= "2000";
	lcob05= "2005";
	lcob09= "2009";
	lcob15= "2015";
	lcob20= "2020";
	gUsos="Usos";
	lusos87="1987";
	lusos92="1992";
	lusos97="1997";
	lusos02="2002";
	lusos07="2007";
	lusos12="2012";
	lusos17="2017";
	//Espai natural
	gActvegeta= "Activitat de la vegetació";
	gNdvi= "Índex Vegetació (NDVI)";
	lndvi17="2017";
	lndvi18="2018";
	lndvi19 ="2019";
	lndvi20 ="2020";
	//Incendis forestals
	gIncend= "Incendis forestals";
	lincend86= "1986";
	lincend88= "1988";
	lincend89= "1989";
	lincend90= "1990";
	lincend91= "1991";
	lincend92= "1992";
	lincend93= "1993";
	lincend94= "1994";
	lincend95= "1995";
	lincend97= "1997";
	lincend98= "1998";
	lincend99= "1999";
	lincend00= "2000";
	lincend01= "2001";
	lincend02= "2002";
	lincend03= "2003";
	//Funcionalitat paisatge
	gFuncio="Funcionalitat del paisatge"
	gConnect=  "Índex Connectivitat Ecològica dels Espais Oberts";
	lice56= "1956";
	lice93= "1993";
	lice09= "2009";
	lice15= "2015";
	//Estat ecològic
	gEco= "Qualitat de l'aigüa";
	gEcorius= "Rius"
	lecorius07= "2007-2012";
	lecorius13= "2013-2017";
	gEcosub= "Aigües subterrànies";
	lecosub07= "2007-2012";
	lecosub13= "2013-2017";
	//Consum aigua
	gConaigua= "Consum d'aigüa";
	laigua13="2013";
	laigua14="2014";
	laigua15="2015";
	laigua16="2016";
	laigua17="2017";
	laigua18="2018";
	laigua19="2019";
	laigua20= "2020";
	//Consum energia
	gConenerg= "Consum d'energia";
	gEnergelectr= "Elèctrica";
	lenerg13="2013";
	lenerg14="2014";
	lenerg15= "2015";
	lenerg16= "2016";
	lenerg17= "2017";
	lenerg18= "2018";
	lenerg19= "2019";
	lenerg20= "2020";
	gEnergas= "Gas";
	lgas13="2013";
	lgas14="2014";
	lgas15="2015";
	lgas16="2016";
	lgas17="2017";
	lgas18="2018";
	lgas19="2019";
	lgas20= "2020";
	//Residus
	gResidus= "Residus";
	gRecollida= "Recollida selectiva";
	lrecollida15="2015";
	lrecollida16="2016";
	lrecollida17="2017";
	lrecollida18="2018";
	lrecollida19="2019";
	lrecollida20= "2020";
	gResidushabi= "Generació per habitants";
	lgeneresiduhabi15= "2015";
	lgeneresiduhabi16= "2016";
	lgeneresiduhabi17= "2017";
	lgeneresiduhabi18="2018";
	lgeneresiduhabi19="2019";
	lgeneresiduhabi20= "2020";
	//Contaminació atmosfèrica
	gxarxContm= "Contaminació atmosfèrica";
	gxarxno2= "NO2";
	lxarxno22015="2015";
	lxarxno22016="2016";
	lxarxno22017="2017";
	lxarxno22018="2018";
	lxarxno22019="2019";
	lxarxno22020="2020";
	lxarxno22021="2021";
	gxarxpm10= "PM10";
	lxarxpm102021= "2021";
	gxarxpm25= "PM2,5";
	lxarxpm2516= "2016";
	gGasos= "Gasos d'efecte hivernacle";
	lEmissioogasos2016="2016";
	lEmissioogasos2017="2017";
	//Indicadors socioecològics
	gIndSocEco= "Indicadors socioecològics";
	//Dinàmiques Socioeconòmiques
	gSocio="Indicadors socioeconòmics";
	//Demografia
	gDemo="Població";
	lpobla00="2000";
	lpobla05="2005";
	lpobla10="2010";
	lpobla15= "2015";
	lpobla20= "2020";
	ldensitat00="Densitat 2000";
	ldensitat05="Densitat 2005";
	ldensitat10="Densitat 2010";
	ldensitat15= "Densitat 2015";
	ldensitat20= "Densitat 2020";
	//Renda
	gAmbestrenda= "Nivell de renda"
	//origen renda
	gOrigenrenda= "Origen de la renda";
	lorigenrenda15= "2015";
	lorigenrenda16= "2016";
	lorigenrenda17= "2017";
	lorigenrenda18= "2018";
	//Index Gini
	gIndexgini="Índex de Gini";
	lgini15="2015";
	lgini16="2016";
	lgini17="2017";
	lgini18="2018";
	//PIB
	gProduct="Productivitat"
	gPib= "Producte Interior Brut Territorial";
	lpib15="2015";
	lpib16="2016";
	lpib17="2017";
	lpib18= "2018";
	lpib19= "2019";
	//Formacio
	gForma= "Formació";
	gbaixaq= "Treballadors de baixa qualificació";
	lbaixaq15= "2015";
	lbaixaq16= "2016";
	lbaixaq17= "2017";
	lbaixaq18= "2018";
	gjovesfor= "Població jove sense estudis postobligatoris";
	ljoves15= "2015";
	ljoves16= "2016";
	ljoves17= "2017";
	ljoves18= "2018";
	//Atur
 	gAtur= "Atur";
	latur18="2018";
	latur19="2019";
	latur20= "2020";
	latur21= "2021";
	//Desigualtat
	gdesig= "Desigualtat";
	ldesig18= "2018";
	//IST
	gist= "Nivell socioeconòmic";
	list15= "2015";
	list16= "2016";
	list17= "2017";
	list18="2018";
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
	gEsforshab= "Esforç accés a l'habitatge";
	lesfhabit17= "2017";
	lesfhabit18= "2018";
	gDemandhabitatge="Demanda d'habitatge";
	ldehabit19= "2019";
	ldehabit20= "2020";
	//Estrangers
	gMigra= "Migracions";
	gMigrants= "Població estrangera";
	lmigra00= "2000";
	lmigra05= "2005";
	lmigra10= "2010";
	lmigra15= "2015";
	lmigra20= "2020";
	gAmbestestrang="Estrangers de països en desenvolupament";
	lest15="2015";
	lest16="2016";
	lest17="2017";
	//Patents
	gSociopatents= "Innovació";
	gpatents= "Patents europees";
	lpatents05= "2005";
	lpatents06= "2006";
	lpatents07= "2007";
	lpatents08= "2008";
	lpatents09= "2009";
	lpatents10= "2010";
	lpatents11= "2011";
	lpatents12= "2012";
	lpatents13= "2013";
	lpatents14= "2014";
	lpatents15= "2015";

	
  } else if (document.documentElement.lang=='es-ES') {
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
	gLimits= "Límites administrativos";
	lcomarca= "Comarcas";
	lmunicipis= "Municipios";
	lseccions ="Secciones Censales";
	//Imatges històriques
	gHistoric="Imágenes aéreas";
	lorto10m45="Ortofoto 1:10.000 1945";
	lorto5m56="Ortofoto 1:5.000 1956";
	lorto5m86="Ortofoto 1:5.000 1986";
	lorto5m94="Ortofoto 1:5.000 1994";
	lorto5m00="Ortofoto 1:5.000 2000";
	lorto5m04="Ortofoto 1:5.000 2004";
	lorto5m06="Ortofoto 1:5.000 2006";
	lorto5m09="Ortofoto 1:5.000 2009";
	lorto5m12="Ortofoto 1:5.000 2012";
	lorto5m15="Ortofoto 1:5.000 2015";
	lorto5m18="Ortofoto 1:5.000 2018";
	//Clima
	gClima= "Variabilidad climática";
	gAnompp= "Anomalías en precipitación";
	gAnomtemp= "Anomalías en temperatura";
	lAnomp17= "2017";
	lAnomp18= "2018";
	lAnomp19= "2019";
	lAnomp20= "2020";
	lAnomp21= "2021";
	lAnomt16= "2016";
	lAnomt17= "2017";
	lAnomt18= "2018";
	lAnomt19= "2019";
	lAnomt20= "2020";
	lAnomt21="2021";
	//Usos i Cobertes del sol
	gCobusos= "Cambio de usos del suelo";
	gCob= "Cubiertas";
	lcob56= "1956";
	lcob93= "1993";
	lcob00= "2000";
	lcob05= "2005";
	lcob09= "2009";
	lcob15= "2015";
	lcob20="2020";
	gUsos="Usos";
	lusos87="1987";
	lusos92="1992";
	lusos97="1997";
	lusos02="2002";
	lusos07="2007";
	lusos12="2012";
	lusos17="2017";
	//Espai natural
	gActvegeta= "Actividad de la vegetación";
	gNdvi= "Índice Vegetación (NDVI)";
	lndvi17="2017";
	lndvi18="2018";
	lndvi19 ="2019";
	lndvi20 ="2020";
	//Incendis forestals
	gIncend= "Incendios forestales";
	lincend86= "1986";
	lincend88= "1988";
	lincend89= "1989";
	lincend90= "1990";
	lincend91= "1991";
	lincend92= "1992";
	lincend93= "1993";
	lincend94= "1994";
	lincend95= "1995";
	lincend97= "1997";
	lincend98= "1998";
	lincend99= "1999";
	lincend00= "2000";
	lincend01= "2001";
	lincend02= "2002";
	//Funcionalitat paisatge
	gFuncio="Funcionalidad del paisaje"
	gConnect=  "Índice Conectividad Ecológica de los Espacios Abiertos";
	lice56= "1956";
	lice93= "1993";
	lice09= "2009";
	lice15= "2015";
	//Estat ecològic
	gEco= "Calidad del agua";
	gEcorius= "Ríos"
	lecorius07= "2007-2012";
	lecorius13= "2013-2017";
	gEcosub= "Aguas subterráneas";
	lecosub07= "2007-2012";
	lecosub13= "2013-2017";
	//Consum aigua
	gConaigua= "Consumo de agua";
	laigua13="2013";
	laigua14="2014";
	laigua15="2015";
	laigua16="2016";
	laigua17="2017";
	laigua18="2018";
	laigua19="2019";
	laigua20= "2020";
	//Consumo energia
	gConenerg= "Consumo de energía";
	gEnergelectr= "Eléctrica";
	lenerg13="2013";
	lenerg14="2014";
	lenerg15="2015";
	lenerg16="2016";
	lenerg17="2017";
	lenerg18= "2018";
	lenerg19= "2019";
	lenerg20= "2020";
	gEnergas= "Gas";
	lgas13="2013";
	lgas14="2014";
	lgas15="2015";
	lgas16="2016";
	lgas17="2017";
	lgas18="2018";
	lgas19="2019";
	lgas20= "2020";
	//Residuos
	gResidus= "Residuos";
	gRecollida= "Recogida selectiva";
	lrecollida15="2015";
	lrecollida16="2016";
	lrecollida17="2017";
	lrecollida18="2018";
	lrecollida19="2019";
	lrecollida20= "2020";
	gResidushabi= "Generación por habitante";
	lgeneresiduhabi15= "2015";
	lgeneresiduhabi16="2016";
	lgeneresiduhabi17= "2017";
	lgeneresiduhabi18="2018";
	lgeneresiduhabi19="2019";
	lgeneresiduhabi20= "2020";
	//Contaminación atmosférica
	gxarxContm= "Contaminación atmosférica";
	gxarxno2= "NO2";
	lxarxno22021="2021";
	gxarxpm10= "PM10";
	lxarxpm102021= "2021";
	gxarxpm25= "PM2,5";
	lxarxpm2516= "2016";
	gGasos= "Gases efecto invernadero";
	lEmissioogasos2016="2016";
	lEmissioogasos2017="2017";
	//Indicadors socioecològics
	gIndSocEco= "Indicadores socioecológicos";
	//Dinàmiques Socioeconòmiques
	gSocio="Indicadores socioeconómicos";
	//Demografia
	gDemo="Población";
	lpobla00="2000";
	lpobla05="2005";
	lpobla10="2010";
	lpobla15= "2015";
	lpobla20= "2020";
	ldensitat00="Densidad 2000";
	ldensitat05="Densidad 2005";
	ldensitat10="Densidad 2010";
	ldensitat15= "Densidad 2015";
	ldensitat20= "Densidad 2020";
	//Renda
	gAmbestrenda= "Renta"
	//origen renda
	gOrigenrenda= "Origen de la renta";
	lorigenrenda15= "2015";
	lorigenrenda16= "2016";
	lorigenrenda17= "2017";
	lorigenrenda18= "2018";
	//Index Gini
	gIndexgini="Índice de Gini";
	lgini15="2015";
	lgini16="2016";
	lgini17="2017";
	lgini18="2018";
	//PIB
	gProduct="Productividad"
	gPib= "Producto Interior Bruto Territorial";
	lpib15="2015";
	lpib16="2016";
	lpib17="2017";
	lpib18= "2018";
	lpib19= "2019";
	//Formacio
	gForma= "Formación";
	gbaixaq= "Trabajadores de baja cualificación";
	lbaixaq15= "2015";
	lbaixaq16= "2016";
	lbaixaq17= "2017";
	lbaixaq18= "2018";
	gjovesfor= "Población joven sin estudios postobligatorios";
	ljoves15= "2015";
	ljoves16= "2016";
	ljoves17= "2017";
	ljoves18= "2018";
	//Atur
 	gAtur= "Desempleo";
	latur18="2018";
	latur19="2019";
	latur20= "2020";
	latur21= "2021";
	//Desigualtat
	gdesig= "Desigualdad";
	ldesig18= "2018";
	//IST
	gist= "Índice socioeconómico territorial";
	list15= "2015";
	list16= "2016";
	list17= "2017";
	list18="2018";
	//Envelliment
	gEnvelliment= "Envejecimiento";
	gAIndexEnve="Índice de Envejecimiento";
	lenve18= "2018";
	lenve19= "2019";
	gAmbestmajors= "Población mayor 75 años sola";
	lmajors15= "2015";
	lmajors16= "2016";
	lmajors17= "2017";
	//Habitatge
	gHabitatge="Vivienda";
	gEsforshab= "Esfuerzo acceso a la vivienda";
	lesfhabit17= "2017";
	lesfhabit18= "2018";
	gDemandhabitatge="Demanda de vivienda";
	ldehabit19= "2019";
	ldehabit20= "2020";
	//Estrangers
	gMigra= "Migraciones";
	gMigrants= "Población extranjera";
	lmigra00= "2000";
	lmigra05= "2005";
	lmigra10= "2010";
	lmigra15= "2015";
	lmigra20= "2020";
	gAmbestestrang="Extranjeros de países en desarrollo";
	lest15="2015";
	lest16="2016";
	lest17="2017";
	//Patents
	gSociopatents= "Innovación";
	gpatents= "Patentes europeas";
	lpatents05= "2005";
	lpatents06= "2006";
	lpatents07= "2007";
	lpatents08= "2008";
	lpatents09= "2009";
	lpatents10= "2010";
	lpatents11= "2011";
	lpatents12= "2012";
	lpatents13= "2013";
	lpatents14= "2014";
	lpatents15= "2015";
	
	
  } else if (document.documentElement.lang=='en-US') {
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
	capes= "Maps";
	gAmbits="Areas";
	gLimits= "Administrative limits";
	lcomarca= "Region";
	lmunicipis= "Municipality";
	lseccions ="Census Sections";
	//Imatges històriques
	gHistoric="Aerial imagery";
	lorto10m45="Orthophoto 1:10.000 1945";
	lorto5m56="Orthophoto 1:5.000 1956";
	lorto5m86="Orthophoto 1:5.000 1986";
	lorto5m94="Orthophoto 1:5.000 1994";
	lorto5m00="Orthophoto 1:5.000 2000";
	lorto5m04="Orthophoto 1:5.000 2004";
	lorto5m06="Orthophoto 1:5.000 2006";
	lorto5m09="Orthophoto 1:5.000 2009";
	lorto5m12="Orthophoto 1:5.000 2012";
	lorto5m15="Orthophoto 1:5.000 2015";
	lorto5m18="Orthophoto 1:5.000 2018";
	//Clima
	gClima= "Climate anomaly";
	gAnompp= "Rain anomaly";
	gAnomtemp= "Temperature anomaly";
	lAnomp17= "2017";
	lAnomp18= "2018";
	lAnomp19= "2019";
	lAnomp20= "2020";
	lAnomp21="2021";
	lAnomt16= "2016";
	lAnomt17= "2017";
	lAnomt18= "2018";
	lAnomt19= "2019";
	lAnomt20= "2020";
	lAnomt21="2021";
	//Usos i Cobertes del sol
	gCobusos= "Land cover";
	gCob= "Land cover";
	lcob56= "1956";
	lcob93= "1993";
	lcob00= "2000";
	lcob05= "2005";
	lcob09= "2009";
	lcob15= "2015";
	lcob20="2020";
	gUsos="Land uses";
	lusos87="1987";
	lusos92="1992";
	lusos97="1997";
	lusos02="2002";
	lusos07="2007";
	lusos12="2012";
	lusos17="2017";
	//Espai natural
	gActvegeta= "Vegetation activity";
	gNdvi= "Normalized Difference Vegetation Index (NDVI)";
	lndvi17="2017";
	lndvi18="2018";
	lndvi19 ="2019";
	lndvi20 ="2020";
	//Incendis forestals
	gIncend= "Forest Fires";
	lincend86= "1986";
	lincend88= "1988";
	lincend89= "1989";
	lincend90= "1990";
	lincend91= "1991";
	lincend92= "1992";
	lincend93= "1993";
	lincend94= "1994";
	lincend95= "1995";
	lincend97= "1997";
	lincend98= "1998";
	lincend99= "1999";
	lincend00= "2000";
	lincend01= "2001";
	lincend02= "2002";
	//Funcionalitat paisatge
	gFuncio="Landscape functionality"
	gConnect=  "Ecological Connectivity Index of Open Spaces";
	lice56= "1956";
	lice93= "1993";
	lice09= "2009";
	lice15= "2015";
	//Estat ecològic
	gEco= "Water quality";
	gEcorius= "Rivers"
	lecorius07= "2007-2012";
	lecorius13= "2013-2017";
	gEcosub= "Groundwater";
	lecosub07= "2007-2012";
	lecosub13= "2013-2017";
	//Consum aigua
	gConaigua= "Water consumption";
	laigua14="2014";
	laigua15="2015";
	laigua16="2016";
	laigua17="2017";
	laigua18="2018";
	laigua19="2019";
	laigua20= "2020";
	//Consum energia
	gConenerg= "Energy consumption";
	gEnergelectr= "Electric";
	lenerg13="2013";
	lenerg14="2014";
	lenerg15="2015";
	lenerg16= "2016";
	lenerg17="2017";
	lenerg18= "2018";
	lenerg19= "2019";
	lenerg20= "2020";
	gEnergas= "Gas";
	lgas13="2013";
	lgas14="2014";
	lgas15="2015";
	lgas16="2016";
	lgas17="2017";
	lgas18="2018";
	lgas19="2019";
	lgas20= "2020";
	//Generacio residus
	gResidus= "Waste";
	gRecollida= "Recycling";
	lrecollida15="2015";
	lrecollida16="2016";
	lrecollida17="2017";
	lrecollida18="2018";
	lrecollida19="2019";
	lrecollida20= "2020";
	gResidushabi= "Waste per capita";
	lgeneresiduhabi15= "2015";
	lgeneresiduhabi16="2016";
	lgeneresiduhabi17="2017";
	lgeneresiduhabi18="2018";
	lgeneresiduhabi20= "2020";
	//Contaminació atmosfèrica
	gxarxContm= "Atmospheric contamination";
	gxarxno2= "NO2";
	lxarxno22021="2021";
	gxarxpm10= "PM10";
	lxarxpm102021= "2021";
	gxarxpm25= "PM2,5";
	lxarxpm2516= "2016";
	gGasos= "Greenhouse gases";
	lEmissioogasos2016="2016";
	lEmissioogasos2017="2017";
	//Indicadors socioecològics
	gIndSocEco= "Socio-ecological indicators";
	//Dinàmiques Socioeconòmiques
	gSocio="Socio-economic indicators";
	//Demografia
	gDemo="Population";
	lpobla00="2000";
	lpobla05="2005";
	lpobla10="2010";
	lpobla15= "2015";
	lpobla20= "2020";
	ldensitat00="Density 2000";
	ldensitat05="Density 2005";
	ldensitat10="Density 2010";
	ldensitat15= "Density 2015";
	ldensitat20= "Density 2020";
	//Renda
	gAmbestrenda= "Income"
	//origen renda
	gOrigenrenda= "Origin of income";
	lorigenrenda15= "2015";
	lorigenrenda16= "2016";
	lorigenrenda17= "2017";
	lorigenrenda18= "2018";
	//Index Gini
	gIndexgini="Gini Index";
	lgini15="2015";
	lgini16="2016";
	lgini17="2017";
	lgini18="2018";
	//PIB
	gProduct="Productivity"
	gPib= "Territorial Gross domestic product";
	lpib15="2015";
	lpib16="2016";
	lpib17="2017";
	lpib18= "2018";
	lpib19= "2019";
	//Formacio
	gForma= "Qualification";
	gbaixaq= "Low qualification workers";
	lbaixaq15= "2015";
	lbaixaq16= "2016";
	lbaixaq17= "2017";
	lbaixaq18= "2018";
	gjovesfor= "Young population without post-compulsory studies";
	ljoves15= "2015";
	ljoves16= "2016";
	ljoves17= "2017";
	ljoves18= "2018";
	//Atur
 	gAtur= "Unemployement";
	latur18="2018";
	latur19="2019";
	latur20= "2020";
	latur21= "2021";
	//Desigualtat
	gdesig= "Inequality";
	ldesig18= "2018";
	//IST
	gist= "Territorial socioeconomic index";
	list15= "2015";
	list16= "2016";
	list17= "2017";
	list18="2018";
	//Envelliment
	gEnvelliment= "Aging";
	gAIndexEnve="Aging Index";
	lenve18= "2018";
	lenve19= "2019";
	gAmbestmajors= "Population older than 75 years living alone";
	lmajors15= "2015";
	lmajors16= "2016";
	lmajors17= "2017";
	//Habitatge
	gHabitatge="Living place";
	gEsforshab= "Effort accessing to housing";
	lesfhabit17= "2017";
	lesfhabit18= "2018";
	gDemandhabitatge="Demand for housing";
	ldehabit19= "2019";
	ldehabit20= "2020";
	//Estrangers
	gMigra= "Migrations";
	gMigrants= "Foreign population";
	lmigra00= "2000";
	lmigra05= "2005";
	lmigra10= "2010";
	lmigra15= "2015";
	lmigra20= "2020";
	gAmbestestrang="Foreigners from developing countries";
	lest15="2015";
	lest16="2016";
	lest17="2017";
	//Patents
	gSociopatents= "Innovation";
	gpatents= "European patents";
	lpatents05= "2005";
	lpatents06= "2006";
	lpatents07= "2007";
	lpatents08= "2008";
	lpatents09= "2009";
	lpatents10= "2010";
	lpatents11= "2011";
	lpatents12= "2012";
	lpatents13= "2013";
	lpatents14= "2014";
	lpatents15= "2015";
	
	
	
	

  }