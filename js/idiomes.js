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
//Imatges aèries
var gImg;
var lorto25m;
var lorto5m;
var lorto25c;
var lorto10c;
var lsat250m;
//Topografia
var gTopo;
var lmde;
var lpendent;
var lorient;
//Geologia
var gGeo;
var lHidrogeo;
var lgeolo;
var ledafo;
//Hidrologia
var gHidro;
var lAquifers;
var lAqupro;
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
var lAnomp19;
var lAnomt19;
//Cobertes del sòl
var gCobertesSol;
var lcob09;
var lcob15;
var lusos17;
//Espai Natural
var gNatural;
var lhic;
var lhab;
var lboscoss;
var lbiodsing;
var lndvi19;
//Variables arbrat
var gVarbrat;
var lbiofol;
var lbiotot;
var lhmitja;
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
//Masses aigua
var gAmbientals;
var gEstatAigua;
var lEscostaneres;
var lEsembass;
var lEsrius;
var lEssubt;
var lEshumides;
//Energia i canvi climatic
var gEnergia;
var lElectrsect;
var lElectrhab;
var lGassect;
var lGasdom;
var lGashab;
//Emissions gasos hivernacle
var gEmissionsgasos;
var lEmissioogasos;
//Emissions CO2
var gEmissions;
var lCo2electsect;
var lCo2electhab;
var lCo2gassect;
var lCo2gashab;
//Cicle aigua
var gCicleaigua;
var lAiguadom;
var lAiguasect;
var lFreatiques;
//Gestio residus
var gGestioresidus;
var lgeneresidumuni;
var lgeneresiduhabi;
var lrecollida;
var lresidusind;
var lresidusindemp;
//Qualitat aire
var gQualiair;
//xarxa control contaminants
var gxarxContm;
var lxarxno2;
var lxarxpm10;
var lxarxpm25;
//Contaminació atmosfèrica
var gContm;
var lno2;
var lpm10;
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
//Societat
var gSocietat;
//Economia
var gEco;
var latur;
var lformacio;
var lenvell;
//renda
var gRenda;
var lrendam17;
var lrendab17;
var lrendai17;
var lrendaa17;
//vulnerabilitat
var lvulne17;
//majors
var lmajors17;
//estrangers
var lmigra20;
var lest17;
var gMigrac;
var lpobresa;
//Habitatge
var lestath;
var laccesh;
//Innovacio
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
	lcomarca= "Comarques";
	lmunicipis= "Municipis";
	lseccions ="Seccions Censals";
	//límits protecció ambiental
	gProtecc= "Límits protecció ambiental";
	lpein="Pla d'espais d'interès natural (PEIN)";
	lxnatura="Xarxa natura 2000";
	lenpe="Espais naturals de protecció especial (ENPE)";
	//cartografia de base
	gCartob= "Cartografia de base";
	ltopo25="Topogràfic 1:25.000";
	gTopo25="Topogràfic";
	lsupurb="Superfície urbanitzada 1:25.000",
	lvies="Vies de comunicació 1:25.000",
	lalti="Altimetria 1:25.000",
	lveget="Vegetació 1:25.000",
	//Imatges aèries
	gImg= "Imatges aèries";
	gActuals="Actuals";
	lorto25m="Ortofoto de Catalunya 1:25.000";
	lorto5m="Ortofoto de Catalunya 1:5.000";
	lorto25c="Ortofoto de Catalunya 1:2.500";
	lorto10c="Ortofoto de Catalunya 1:1.000";
	lsat250m="Imatge satèl·lit de Catalunya 1:250.000";
	//Topografia
	gTopo= "Topografia";
	lmde="Model Digital Elevacions";
	lpendent="Pendents";
	lorient="Orientacions";
	//Geologia
	gGeo= "Geologia";
	lgeolo="Geològic 1:50.000";
	lHidrogeo="Hidrogeològic 1:250.000";
	ledafo="Edafològic (WRB) 1:250.000";
	lsoil="Edafològic (ST) 1:250.000";
	//Hidrologia
	gHidro= "Hidrologia";
	lAquifers="Aqüífers";
	lAqupro="Aqüífers protegits";
	lXarxa0="Xarxa hidrogràfica principal 1:50.000";
	lXarxahidro="Xarxa hidrogràfica";
	lCanals="Xarxa de conduccions i canalitzacions";
	lConques="Conques elementals de Catalunya 1:50.000";
	//Clima
	gClima= "Clima";
	lRadiacio="Radiació solar potencial";
	lPrecipitacio="Precipitacions";
	lTempmin="Temperatures mínimes";
	lTempmit="Temperatura mitjana";
	lTempmax="Temperatures màximes";
	gAnom= "Anomalies climàtiques";
	lAnomp19= "Anomalia precipitació";
	lAnomt19= "Anomalia temperatura";
	//Cobertes del sol
	gCobertesSol="Cobertes del sòl";
	gCobertes="Cobertes del sòl";
	lcob09="Cobertes del sòl 2009";
	lcob15="Cobertes del sól 2015 (AMB)";
	gUsos="Usos del sòl";
	lusos17="Usos i cobertes del sòl 2017";
	//Espai natural
	gNatural="Espai natural";
	lhic="Hàbitats d'interès comunitari";
	lhab="Hàbitats";
	lboscoss="Boscos singulars";
	lbiodsing= "Biodiversitat singular";
	lndvi19 ="Índex Vegetació (NDVI) 2019";
	//Variables arbrat
	gVarbrat= "Variables biofísiques del arbrat";
	lbiofol= "Biomassa foliar";
	lbiotot= "Biomassa aèria total";
	lhmitja= "Alçada mitjana";
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
	//Energia i canvi climatic
	gEnergia= "Consum d'energia";
	lElectrsect= "Energia elèctrica per sector";
	lElectrhab= "Consum domèstic energia elèctrica per habitant";
	lGassect= "Gas natural per sector";
	lGasdom= "Consum domèstic gas natural ";
	lGashab= "Gas natural per habitant";
	//Emissions gasos hivernacle
	gEmissionsgasos= "Emissions gasos efecte hivernacle";
	lEmissioogasos= "Emissions 2015";
	//Emissions
	gEmissions= "Emissions CO2";
	lCo2electsect= "Emissions CO2 del consum elèctric per sector";
	lCo2electhab="Emissions CO2 del consum elèctric per habitant";
	lCo2gassect= "Emissions CO2 del consum de gas natural per sector";
	lCo2gashab= "Emissions CO2 del consum de gas natural per habitant";
	//cicle aigua
	gCicleaigua= "Consum d'aigua";
	lAiguadom= "Consum domèstic aigua per habitant";
	lAiguasect= "Consum d'aigua per sector";
	lFreatiques= "Ús d'aigua freàtica per usos municipals";
	//gestio residus
	gGestioresidus= "Generació de residus";
	lgeneresidumuni= "Residus municipals";
	lgeneresiduhabi= "Residus per habitant";
	lrecollida= "Recollida selectiva de residus";
	lresidusind= "Residus industrials";
	lresidusindemp= "Residus industrials per empresa";
	//estat masses aigues
	gEstatAigua="Estat de les masses d'aigua";
	lEscostaneres="Aigües costaneres";
	lEsembass="Embassaments";
	lEsrius="Estat ecològic dels rius";
	lEssubt="Estat ecològic aigües subterrànies";
	lEshumides="Zones humides";
	//Qualitat aire
	gQualiair= "Qualitat del aire";
	//Xarxa control contaminants
	gxarxContm= "Xarxa control contaminants";
	lxarxno2= "NO2";
	lxarxpm10= "PM10";
	lxarxpm25= "PM2,5";
	//Contaminació atmosfèrica
	gContm= "Contaminació atmosfèrica";
	lno2= "NO2";
	lpm10="PM10";
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
	//Societat
	gSocietat= "Societat";
	//Economia
	gEco= "Economia";
	//Renda
	lrendam17= "Renda familiar mitjana";
	lrendab17= "Renda baixa";
	lrendai17= "Renda intermèdia";
	lrendaa17="Renda alta";
	lpibm= "PIB per habitant";
	//Vulnerabilitat
	lvulne17= "Índex vulnerabilitat urbana";
	//Envelliment
	lmajors17= "Població major 75 anys sola";
	lenvell="Envelliment vulnerable";
	//Estrangers
	lmigra20="Població estrangera";
	lest17="Estrangers de països en desenvolupament";
	//Habitatge
	gHabitat= "Habitatge";
	lestath="Estat de conservació d'habitatges";
	laccesh="Accessibilitat a l’habitatge";
	//Innovacio
	lpatents= "Patents europees";
	lpobresa="Pobresa";
	lformacio="Població poc qualificada";
	latur="Atur";
	
	
	
	

	
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
	lsupurb="Superficie urbanizada 1:25.000";
	lvies="Vías de comunicación 1:25.000";
	//Imatges aèries
	gImg= "Imágenes aérias";
	gActuals="Actual";
	lorto25m="Ortofoto de Cataluña 1:25.000";
	lorto5m="Ortofoto de Cataluña 1:5.000";
	lorto25c="Ortofoto de Cataluña 1:2.500";
	lorto10c="Ortofoto de Cataluña 1:1.000";
	lsat250m="Imagen satélite de Cataluña 1:250.000";
	//Topografia
	gTopo= "Topografía";
	lmde="Modelo Digital de Elevaciones";
	lpendent="Pendientes";
	lorient="Orientaciones";
	//Geologia
	gGeo= "Geología";
	lgeolo="Geològic 1:50.000 (RMB)";
	ledafo="Edafológico (WRB) 1:250.000 (RMB)";
	lsoil="Edafológico (ST) 1:250.000 (RMB)";
	//Hidrologia
	gHidro= "Hidrología";
	gMaigua="Hidrología";
	lHidrogeo="Hidrogeología 1:250.000 (RMB)";
	lAquifers="Acuíferos";
	lAqupro="Acuíferos protegidos";
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
	//Imatges aèries
	gImg= "Aerial imagery";
	gActuals="Current";
	lorto25m="Orthophoto of Catalonia 1:25.000 (RMB)";
	lorto5m="Orthophoto of Catalonia 1:5.000 (RMB)";
	lorto25c="Orthophoto of Catalonia 1:2.500 (RMB)";
	lorto10c="Orthophoto of Catalonia 1:1.000 (RMB)";
	lsat250m="Satellite image of Catalonia 1:250.000 (RMB)";
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
	lAquifers="Aquifers";
	lAqupro="Protected aquifers";
	lXarxa0="Main hydrographic network 1:50.000";
	lXarxahidro="Hydrographic network";
	lCanals="Driving and channeling network";
	lConques="Elemental basins of Catalonia 1:50.000";
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