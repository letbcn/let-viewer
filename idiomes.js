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
var lsupurb;
var lvies;
//Imatges aèries
var gImg;
var lorto25m;
var lorto5m;
var lorto25c;
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
var lAnomp20;
var lAnomt20;
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
var lndvi20;
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
var lDan2021;
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
var lElectrdomest;
var lElectrhab;
var lGassect;
var lGasdom;
var lGashab;
//Emissions gasos hivernacle
var gEmissionsgasos;
var lEmissioogasos;
//Emissions CO2
var lCo2electsect;
var lCo2electhab;
var lCo2gassect;
var lCo2gashab;
//Consum aigua
var gCicleaigua;
var lAiguahab;
var lAiguasect;
//Gestio residus
var gGestioresidus;
var lresidumuni;
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
var lbaixaq18;
var ljoves18;
var lenvell;
//renda
var gRenda;
var lrendam17;
var lorirenda;
var lrendab17;
var lrendai17;
var lrendaa17;
var lgini18;
//vulnerabilitat
var list18;
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
var lpatentsv;



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
	lsupurb="Superfície urbanitzada 1:25.000",
	lvies="Vies de comunicació 1:25.000",
	//Imatges aèries
	gImg= "Imatges aèries";
	gActuals="Actuals";
	lorto25m="Ortofoto de Catalunya 1:25.000";
	lorto5m="Ortofoto de Catalunya 1:5.000";
	lorto25c="Ortofoto de Catalunya 1:2.500";
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
	lAnomp20= "Anomalia precipitació";
	lAnomt20= "Anomalia temperatura";
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
	lndvi20 ="Índex Vegetació (NDVI)";
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
	lDan2021="Declaració agrària 2021";
	lhortsp09= "Horts precaris 2009";
	lhortsp15="Horts precaris 2015";
	//Vectors ambientals
	gAmbientals= "Vectors ambientals";
	//Energia i canvi climatic
	gEnergia= "Consum d'energia";
	lElectrsect= "Energia elèctrica per sector";
	lElectrdomest= "Consum domèstic energia elèctrica";
	lElectrhab="Energia elèctrica per habitant";
	lGassect= "Gas natural per sector";
	lGasdom= "Consum domèstic gas natural ";
	lGashab= "Gas natural per habitant";
	//Emissions gasos hivernacle
	gEmissionsgasos= "Emissions gasos efecte hivernacle";
	lEmissioogasos= "Gasos efecte hivernacle";
	//Emissions
	lCo2electsect= "Emissions CO2 del consum elèctric per sector";
	lCo2electhab="Emissions CO2 del consum elèctric per habitant";
	lCo2gassect= "Emissions CO2 del consum de gas natural per sector";
	lCo2gashab= "Emissions CO2 del consum de gas natural per habitant";
	//consum aigua
	gCicleaigua= "Consum d'aigua";
	lAiguahab= "Per habitant";
	lAiguasect= "Per sector";
	//gestio residus
	gGestioresidus= "Generació de residus";
	lresidumuni= "Residus municipals";
	lgeneresiduhabi= "Residus per habitant";
	lrecollida= "Recollida selectiva";
	lresidusind= "Residus industrials";
	lresidusindemp= "Residus industrials per empresa";
	//estat masses aigues
	gEstatAigua="Estat de les masses d'aigua";
	lEscostaneres="Aigües costaneres";
	lEsembass="Embassaments";
	lEsrius="Rius";
	lEssubt="Aigües subterrànies";
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
	lperim= "Incendis forestals";
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
	lbaixaq18="Treballadors de baixa qualificació";
	ljoves18= "Població jove sense estudis postobligatoris";
	//Renda
	lrendam17= "Renda familiar mitjana";
	lorirenda= "Origen renda";
	lrendab17= "Renda baixa";
	lrendai17= "Renda intermèdia";
	lrendaa17="Renda alta";
	lgini18= "Desigualtat (Índex Gini)";
	lpibm= "PIB per habitant";
	//Vulnerabilitat
	list18= "Índex socioeconòmic territorial (IST)";
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
	lpatentsv= "Patents verdes";
	
	lpobresa="Pobresa";
	latur="Atur";
	
	
	
	

	
  } else if (document.documentElement.lang=='es-ES') {
   //CONTINGUT Info
	tooltipInfo="Información sobre el LET's GIS";
	contingutInfo="<div style='width:400px; padding:10px; background-color:white'>" + 
	"<p>El Sistema de Información Geográfica del LET (LET’s GIS), parte de la idea de elaborar un sistema de apoyo a la planificación" + 
	" y la gestión del territorio, como uno de los elementos clave del modelo de evaluación socioecológica de la metrópoli. " + 
	"Esta herramienta pretende hacer posible la visualización, consulta, descarga y análisis de la información geográfica " + 
	"en lo referente a variables socioecológicas al ámbito metropolitano y regional de Barcelona. El siguiente enlace permite acceder en la web " + 
	"del proyecto <a href='https://iermb.uab.cat/es/let-bcn/' target='_blank' rel='noopener noreferrer'>LET</a>.</p></div>";
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
	//limites administratius
	gLimits= "Límites administrativos";
	lcomarca= "Comarcas";
	lmunicipis= "Municipios";
	lseccions ="Secciones Censales";
	//límites protección ambiental
	gProtecc= "Límites protección ambiental"
	lpein="Plan de espacios de interés natural (PEIN)";
	lxnatura="Red natura 2000";
	lenpe="Espacios naturales de protección especial (ENPE)";
	//cartografia de base
	gCartob= "Cartografía de base";
	ltopo25="Topográfico 1:25.000";
	lsupurb="Superficie urbanizada 1:25.000";
	lvies="Vías de comunicación 1:25.000";
	//Imatges aèries
	gImg= "Imágenes aéreas";
	lorto25m="Ortofoto de Cataluña 1:25.000";
	lorto5m="Ortofoto de Cataluña 1:5.000";
	lorto25c="Ortofoto de Cataluña 1:2.500";
	lsat250m="Imagen satélite de Cataluña 1:250.000";
	//Topografia
	gTopo= "Topografía";
	lmde="Modelo Digital de Elevaciones";
	lpendent="Pendientes";
	lorient="Orientaciones";
	//Geologia
	gGeo= "Geología";
	lgeolo="Geológico 1:50.000";
	ledafo="Edafológico (WRB) 1:250.000";
	lsoil="Edafológico (ST) 1:250.000";
	//Hidrologia
	gHidro= "Hidrología";
	lAquifers="Acuíferos";
	lAqupro="Acuíferos protegidos";
	lXarxa0="Red hidrográfica principal 1:50.000";
	lXarxahidro="Red hidrográfica";
	lCanals="Red de conducciones y canalizaciones";
	lConques="Cuencas elementales de Cataluña 1:50.000";
	//Clima
	gClima= "Clima";
	lRadiacio="Radiación solar";
	lPrecipitacio="Precipitaciones";
	lTempmin="Temperatura media mínima";
	lTempmit="Temperatura media";
	lTempmax="Temperatura media máxima";
	gAnom= "Anomalias climáticas";
	lAnomp20= "Anomalía precipitación";
	lAnomt20= "Anomalía temperatura";
	//Cubiertas del suelo
	gCobertesSol="Cubiertas del suelo";
	gCobertes="Cubiertas del suelo";
	lcob09="Cubiertas del suelo 2009";
	lcob15="Cubiertas del suelo 2015 (AMB)";
	gUsos="Usos del suelo";
	lusos17="Usos y cubiertas del suelo 2017";
	//Espacio natural
	gNatural="Espacio natural";
	lhic="Hábitats de interés comunitario";
	lhab="Hábitats";
	lboscoss="Bosques singulares";
	lbiodsing= "Biodiversidad singular";
	lndvi20 ="Índice Vegetación (NDVI)";
	//Variables arbrado
	gVarbrat= "Variables biofísicas del arbrado";
	lbiofol= "Biomasa foliar";
	lbiotot= "Biomasa aérea total";
	lhmitja= "Altura media";
	//Espacio urbano
	gUrba="Espacio urbano";
	lpoligons="Polígonos industriales";
	lteixit="Tejidos Urbanos(AMB)";
	//Espacio agrario
	gAgrari= "Espacio agrario";
	lDan2021="Declaración agraria 2021";
	lhortsp09= "Huertos precarios 2009";
	lhortsp15="Huertos precarios 2015";
	//Vectores ambientales
	gAmbientals= "Vectores ambientales";
	//Energia y cambio climático
	gEnergia= "Consumo de energía";
	lElectrsect= "Energía eléctrica por sector";
	lElectrdomest= "Consumo doméstico energía eléctrica";
	lElectrhab="Energía eléctrica por habitante";
	lGassect= "Gas natural por sector";
	lGasdom= "Consumo doméstico gas natural ";
	lGashab= "Gas natural por habitante";
	//Emissions gasos hivernacle
	gEmissionsgasos= "Emisiones gases efecto invernadero";
	lEmissioogasos= "Gases efecto invernadero";
	//Emissions
	lCo2electsect= "Emisiones CO2 del consumo eléctrico por sector";
	lCo2electhab="Emisiones CO2 del consumo eléctrico por habitante";
	lCo2gassect= "Emisiones CO2 del consumo de gas natural por sector";
	lCo2gashab= "Emisiones CO2 del consumo de gas natural por habitante";
	//consumo agua
	gCicleaigua= "Consumo de agua";
	lAiguahab= "Por habitante";
	lAiguasect= "Por sector";
	//gestio residus
	gGestioresidus= "Generación de residuos";
	lresidumuni= "Residuos municipales";
	lgeneresiduhabi= "Residuos por habitante";
	lrecollida= "Recogida selectiva";
	lresidusind= "Residuos industriales";
	lresidusindemp= "Residuos industriales por empresa";
	//estat masses aigues
	gEstatAigua="Estado de las masas de agua";
	lEscostaneres="Aguas costeras";
	lEsembass="Embalses";
	lEsrius="Ríos";
	lEssubt="Aguas subteranias";
	lEshumides="Zonas húmidas";
	//Qualitat aire
	gQualiair= "Calidad del aire";
	//Xarxa control contaminants
	gxarxContm= "Red control contaminantes";
	lxarxno2= "NO2";
	lxarxpm10= "PM10";
	lxarxpm25= "PM2,5";
	//Contaminación atmosfèrica
	gContm= "Contaminación atmosférica";
	lno2= "NO2";
	lpm10="PM10";
	//Riscos territorials
	gRiscos= "Riesgos territoriales";	
	gIncendis="Incendios forestales";
	lperim= "Incendis forestales";
	lvincend= "Vulnerabilidad incendios";
	lpincend= "Peligro básico incendio";
	linfla= "Modelo inflamabilidad";
	gInundabilitat="Inundabilidad";
	lretorn10="Zona inundable retorno 10 años";
	lretorn100="Zona inundable retorno 100 años";
	lretorn500="Zona inundable retorno 500 años";
	//Societat
	gSocietat= "Sociedad";
	//Economia
	gEco= "Economía";
	lbaixaq18="Trabajadores de baja cualificación";
	ljoves18= "Población joven sin estudios postobligatorios";
	//Renda
	lrendam17= "Renta familiar media";
	lorirenda= "Origen renta";
	lrendab17= "Renta baja";
	lrendai17= "Renta intermedia";
	lrendaa17="Rentaa alta";
	lgini18= "Desigualdad (Índice Gini)";
	lpibm= "PIB por habitante";
	//Vulnerabilitat
	list18= "Índice socioeconómico territorial (IST)";
	//Envelliment
	lmajors17= "Población mayor 75 años sola";
	lenvell="Envejecimiento vulnerable";
	//Estrangers
	lmigra20="Población extranjera";
	lest17="Extranjeros de paísos en desarrollo"
	//Habitatge
	gHabitat= "Vivienda";
	lestath="Estada conservación vivienda";
	laccesh="Accesibilidad a la vivienda";
	//Innovacio
	lpatents= "Patentes europeas";
	lpatentsv= "Patentes verdes";
	
	lpobresa="Pobresa";
	latur="Desempleo";
	
  } else if (document.documentElement.lang=='en-US') {
	//CONTINGUT Info
	tooltipInfo="LET's GIS Information";
	contingutInfo="<div style='width:400px; padding:10px; background-color:white'>" + 
	"<p>The LET Geographic Information System (LET’s GIS), based on the idea of ​​developing a planning support system" + 
	"and land management, as one of the key elements of the metropolis ’socio-ecological assessment model. " + 
	"This tool aims to make possible the visualization, consultation, download and analysis of geographical information " + 
	"egarding socio-ecological variables in the metropolitan and regional area of ​​Barcelona. The following link allows access to the web " + 
	"of the project <a href='https://iermb.uab.cat/en/let-bcn/' target='_blank' rel='noopener noreferrer'>LET</a>.</p></div>";
  
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
	//limits administratius
	gLimits= "Administrative limits";
	lcomarca= "Region";
	lmunicipis= "Municipality";
	lseccions ="Census Sections"
	//límites protección ambiental
	gProtecc= "Environmental Protection Limits"
	lpein="Natural Interest Spaces Plan(PEIN)";
	lxnatura="Red Natura 2000";
	lenpe="Natural Special Protection Spaces(ENPE)";
	//cartografia de base
	gCartob= "Cartographical base";
	ltopo25="Topgraphic 1:25.000";
	lsupurb="Urbanized surface 1:25.000",
	lvies="Communication channels 1:25.000",
	//Imatges aèries
	gImg= "Aerial imagery";
	lorto25m="Orthophoto of Catalonia 1:25.000";
	lorto5m="Orthophoto of Catalonia 1:5.000";
	lorto25c="Orthophoto of Catalonia 1:2.500";
	lsat250m="Satellite image of Catalonia 1:250.000";
	//Topografia
	gTopo= "Topography";
	lmde="Digital Elevations Model";
	lpendent="Slope";
	lorient="Hillshade";
	//Geologia
	gGeo= "Geology";
	lgeolo="Geologic 1:50.000";
	ledafo="Soils (WRB) 1:250.000";
	lsoil="Soils (ST) 1:250.000";
	//Hidrologia
	gHidro= "Hidrology";
	lAquifers="Aquifers";
	lAqupro="Protected aquifers";
	lXarxa0="Main hydrographic network 1:50.000";
	lXarxahidro="Hydrographic network";
	lCanals="Driving and channeling network";
	lConques="Elemental basins of Catalonia 1:50.000";
	//Clima
	gClima= "Climate";
	lRadiacio="Solar radiation";
	lPrecipitacio="Precipitations";
	lTempmin="Minimum average temperature";
	lTempmit="Average temperature";
	lTempmax="Maximum average temperature";
	gAnom= "Climate anomaly";
	lAnomp20= "Rain anomaly";
	lAnomt20= "Temperature anomaly";
	//Cobertes del sol
	gCobertesSol="Land cover";
	gCobertes="Land cover";
	lcob09="Land cover 2009";
	lcob15="Land cover 2015 (AMB)";
	//usos dels sòl
	gUsos="Land uses";
	lusos17="Land uses 2017";
	//Espai natural
	gNatural="Natural spaces";
	lhic="Habitat of priority Community interest";
	lhab="Habitat";
	lboscoss="Singular forests";
	lbiodsing= "Singular biodiversity";
	lndvi20 ="Normalized Difference Vegetation Index (NDVI)";
	//Variables arbrat
	gVarbrat= "Woodland biophysical variables";
	lbiofol= "Foliar biomass";
	lbiotot= "Biomassa aèria total";
	lhmitja= "Total aerial biomass";
	//Espai urbà
	gUrba="Urban spaces";
	lpoligons="Industrial polygons";
	lteixit="Urban fabric";
	//Espai agrari
	gAgrari= "Agrarian Spaces";
	lDan2021="Agriculture 2021";
	lhortsp09= "Precary Orchards 2009";
	lhortsp15="Precary Orchards 2015";
	//Vectors ambientals
	gAmbientals= "Environmental vectors";
	//Energia i canvi climatic
	gEnergia= "Energy consumption";
	lElectrsect= "Electricity by sector";
	lElectrdomest= "Domestic electricity consumption";
	lElectrhab= "Energy consumption per capita";
	lGassect= "Natural gas by sector";
	lGasdom= "Domestic consumption of natural gas";
	lGashab= "Natural gas per capita";
	//Emissions gasos hivernacle
	gEmissionsgasos= "Greenhouse gas emissions";
	lEmissioogasos= "Greenhouse gases";
	//Emissions
	lCo2electsect= "CO2 emissions from electricity consumption by sector";
	lCo2electhab="CO2 emissions from electricity consumption per capita";
	lCo2gassect= "CO2 emissions from natural gas consumption by sector";
	lCo2gashab= "CO2 emissions from natural gas consumption per capita";
	//consum aigua
	gCicleaigua= "Water consumption";
	lAiguahab= "Per capita";
	lAiguasect= "By sector";
	//gestio residus
	gGestioresidus= "Waste generation";
	lresidumuni= "Total waste";
	lgeneresiduhabi= "Waste per capita";
	lrecollida= "Selective waste collection";
	lresidusind= "Industrial waste";
	lresidusindemp= "Industrial waste by company";
	//Water 
	gEstatAigua="State of water bodies";
	lEscostaneres="Coastal waters";
	lEsembass="Reservoirs";
	lEsrius="Rivers";
	lEssubt="Groundwater";
	lEshumides="Wetlands";
	//Qualitat aire
	gQualiair= "Air quality";
	//Xarxa control contaminants
	gxarxContm= "Contamination control network";
	lxarxno2= "NO2";
	lxarxpm10= "PM10";
	lxarxpm25= "PM2,5";
	//Contaminació atmosfèrica
	gContm= "Atmospheric contamination";
	lno2= "NO2";
	lpm10="PM10";
	//Riscos territorials
	gRiscos= "Territorial hazards";
	gIncendis="Forest fire risk";
	lperim="Forest Fires"
	lvincend= "Fire vulnerability";
	lpincend= "Basic fire danger";
	linfla= "Flammability model";
	gInundabilitat="Flooding";
	lretorn10="Flood zone return period 10 years";
	lretorn100="Flood zone return period 100 years";
	lretorn500="Flood zone return period 500 years";
	//Societat
	gSocietat= "Society";
	//Economia
	gEco= "Economy";
	lbaixaq18="Low qualification workers";
	ljoves18= "Young population without post-compulsory studies";
	//Renda
	lrendam17= "Family income";
	lorirenda= "Origen renta";
	lrendab17= "Low Income";
	lrendai17= "Middle Income";
	lrendaa17="High Income";
	lgini18= "Inequality (Gini Index)";
	lpibm= "GDP per capita";
	//Vulnerabilitat
	list18= "Territorial socioeconomic index (IST)";
	//Envelliment
	lmajors17= "Population over 75 years old living alone";
	lenvell="Vulnerable aging";
	//Estrangers
	lmigra20="Foreign population";
	lest17="Foreigners from developing countries";
	//Habitatge
	gHabitat= "Living place";
	lestath="State of conservation of housing";
	laccesh="Home accessibility";
	//Innovacio
	lpatents= "European patents";
	lpatentsv= "Green patents";

	lpobresa="Poverty";
	latur="Unemployement";

  }