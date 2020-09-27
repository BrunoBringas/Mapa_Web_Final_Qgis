var wms_layers = [];

var format_distritos_0 = new ol.format.GeoJSON();
var features_distritos_0 = format_distritos_0.readFeatures(json_distritos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distritos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritos_0.addFeatures(features_distritos_0);
var lyr_distritos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_distritos_0, 
                style: style_distritos_0,
                interactive: true,
    title: 'distritos<br />\
    <img src="styles/legend/distritos_0_0.png" /> Cajabamba<br />\
    <img src="styles/legend/distritos_0_1.png" /> Cajamarca<br />\
    <img src="styles/legend/distritos_0_2.png" /> Celendín<br />\
    <img src="styles/legend/distritos_0_3.png" /> Chota<br />\
    <img src="styles/legend/distritos_0_4.png" /> Contumazá<br />\
    <img src="styles/legend/distritos_0_5.png" /> Cutervo<br />\
    <img src="styles/legend/distritos_0_6.png" /> Hualgayoc<br />\
    <img src="styles/legend/distritos_0_7.png" /> Jaén<br />\
    <img src="styles/legend/distritos_0_8.png" /> San Ignacio<br />\
    <img src="styles/legend/distritos_0_9.png" /> San Marcos<br />\
    <img src="styles/legend/distritos_0_10.png" /> San Miguel<br />\
    <img src="styles/legend/distritos_0_11.png" /> San Pablo<br />\
    <img src="styles/legend/distritos_0_12.png" /> Santa Cruz<br />'
        });
var format_Provincias_1 = new ol.format.GeoJSON();
var features_Provincias_1 = format_Provincias_1.readFeatures(json_Provincias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_1.addFeatures(features_Provincias_1);
var lyr_Provincias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_1, 
                style: style_Provincias_1,
                interactive: true,
    title: 'Provincias<br />\
    <img src="styles/legend/Provincias_1_0.png" /> Cajabamba<br />\
    <img src="styles/legend/Provincias_1_1.png" /> Cajamarca<br />\
    <img src="styles/legend/Provincias_1_2.png" /> Celendín<br />\
    <img src="styles/legend/Provincias_1_3.png" /> Chota<br />\
    <img src="styles/legend/Provincias_1_4.png" /> Contumazá<br />\
    <img src="styles/legend/Provincias_1_5.png" /> Cutervo<br />\
    <img src="styles/legend/Provincias_1_6.png" /> Hualgayoc<br />\
    <img src="styles/legend/Provincias_1_7.png" /> Jaén<br />\
    <img src="styles/legend/Provincias_1_8.png" /> San Ignacio<br />\
    <img src="styles/legend/Provincias_1_9.png" /> San Marcos<br />\
    <img src="styles/legend/Provincias_1_10.png" /> San Miguel<br />\
    <img src="styles/legend/Provincias_1_11.png" /> San Pablo<br />\
    <img src="styles/legend/Provincias_1_12.png" /> Santa Cruz<br />'
        });
var format_CCPP_Cajamarca_UTM_2 = new ol.format.GeoJSON();
var features_CCPP_Cajamarca_UTM_2 = format_CCPP_Cajamarca_UTM_2.readFeatures(json_CCPP_Cajamarca_UTM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCPP_Cajamarca_UTM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCPP_Cajamarca_UTM_2.addFeatures(features_CCPP_Cajamarca_UTM_2);
var lyr_CCPP_Cajamarca_UTM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCPP_Cajamarca_UTM_2, 
                style: style_CCPP_Cajamarca_UTM_2,
                interactive: true,
                title: 'CCPP_Cajamarca_UTM'
            });

lyr_distritos_0.setVisible(true);lyr_Provincias_1.setVisible(true);lyr_CCPP_Cajamarca_UTM_2.setVisible(true);
var layersList = [lyr_distritos_0,lyr_Provincias_1,lyr_CCPP_Cajamarca_UTM_2];
lyr_distritos_0.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_Provincias_1.set('fieldAliases', {'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', 'Imagen': 'Imagen', });
lyr_CCPP_Cajamarca_UTM_2.set('fieldAliases', {'fid': 'fid', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'CODIGO': 'CODIGO', 'DIST_ID': 'DIST_ID', 'CCPP_ID Texto': 'CCPP_ID Texto', 'CCPP_ID': 'CCPP_ID', 'Centro Poblado': 'Centro Poblado', 'REGION NATURAL': 'REGION NATURAL', 'ALTITUD': 'ALTITUD', 'Total Poblacion Censada': 'Total Poblacion Censada', 'Hombres censados': 'Hombres censados', 'Mujeres censadas': 'Mujeres censadas', 'Total viviendas particulares': 'Total viviendas particulares', 'Viviendas ocupadas': 'Viviendas ocupadas', 'Viviendas desocupadas': 'Viviendas desocupadas', 'X_UTM': 'X_UTM', 'Y_UTM': 'Y_UTM', 'FUENTE': 'FUENTE', 'OBSERVACIONES': 'OBSERVACIONES', 'X_geo': 'X_geo', 'Y_geo': 'Y_geo', });
lyr_distritos_0.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPART': 'TextEdit', 'PROV_ID': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DIST_ID': 'TextEdit', 'DISTRITO': 'TextEdit', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', });
lyr_Provincias_1.set('fieldImages', {'PROV_ID': 'Hidden', 'PROVINCIA': 'TextEdit', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', 'Imagen': 'ExternalResource', });
lyr_CCPP_Cajamarca_UTM_2.set('fieldImages', {'fid': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CODIGO': 'TextEdit', 'DIST_ID': 'Range', 'CCPP_ID Texto': 'TextEdit', 'CCPP_ID': 'Range', 'Centro Poblado': 'TextEdit', 'REGION NATURAL': 'TextEdit', 'ALTITUD': 'Range', 'Total Poblacion Censada': 'Range', 'Hombres censados': 'Range', 'Mujeres censadas': 'Range', 'Total viviendas particulares': 'Range', 'Viviendas ocupadas': 'Range', 'Viviendas desocupadas': 'Range', 'X_UTM': 'Range', 'Y_UTM': 'Range', 'FUENTE': 'TextEdit', 'OBSERVACIONES': 'TextEdit', 'X_geo': 'TextEdit', 'Y_geo': 'TextEdit', });
lyr_distritos_0.set('fieldLabels', {'IDDPTO': 'no label', 'DEPART': 'no label', 'PROV_ID': 'no label', 'PROVINCIA': 'inline label', 'DIST_ID': 'no label', 'DISTRITO': 'inline label', });
lyr_Provincias_1.set('fieldLabels', {'PROVINCIA': 'header label', 'Imagen': 'no label', });
lyr_CCPP_Cajamarca_UTM_2.set('fieldLabels', {'fid': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'CODIGO': 'no label', 'DIST_ID': 'no label', 'CCPP_ID Texto': 'no label', 'CCPP_ID': 'no label', 'Centro Poblado': 'no label', 'REGION NATURAL': 'no label', 'ALTITUD': 'no label', 'Total Poblacion Censada': 'no label', 'Hombres censados': 'no label', 'Mujeres censadas': 'no label', 'Total viviendas particulares': 'no label', 'Viviendas ocupadas': 'no label', 'Viviendas desocupadas': 'no label', 'X_UTM': 'no label', 'Y_UTM': 'no label', 'FUENTE': 'no label', 'OBSERVACIONES': 'no label', 'X_geo': 'no label', 'Y_geo': 'no label', });
lyr_CCPP_Cajamarca_UTM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});