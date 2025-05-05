var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Ijmuiden_1 = new ol.format.GeoJSON();
var features_Ijmuiden_1 = format_Ijmuiden_1.readFeatures(json_Ijmuiden_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ijmuiden_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ijmuiden_1.addFeatures(features_Ijmuiden_1);
var lyr_Ijmuiden_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ijmuiden_1, 
                style: style_Ijmuiden_1,
                popuplayertitle: 'Ijmuiden',
                interactive: true,
                title: '<img src="styles/legend/Ijmuiden_1.png" /> Ijmuiden'
            });
var format_Almere_2 = new ol.format.GeoJSON();
var features_Almere_2 = format_Almere_2.readFeatures(json_Almere_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Almere_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Almere_2.addFeatures(features_Almere_2);
var lyr_Almere_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Almere_2, 
                style: style_Almere_2,
                popuplayertitle: 'Almere',
                interactive: true,
                title: '<img src="styles/legend/Almere_2.png" /> Almere'
            });
var format_Alphenaandenrijn_3 = new ol.format.GeoJSON();
var features_Alphenaandenrijn_3 = format_Alphenaandenrijn_3.readFeatures(json_Alphenaandenrijn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alphenaandenrijn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alphenaandenrijn_3.addFeatures(features_Alphenaandenrijn_3);
var lyr_Alphenaandenrijn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alphenaandenrijn_3, 
                style: style_Alphenaandenrijn_3,
                popuplayertitle: 'Alphen aan den rijn',
                interactive: true,
                title: '<img src="styles/legend/Alphenaandenrijn_3.png" /> Alphen aan den rijn'
            });
var format_AmsterdamZuid_4 = new ol.format.GeoJSON();
var features_AmsterdamZuid_4 = format_AmsterdamZuid_4.readFeatures(json_AmsterdamZuid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmsterdamZuid_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmsterdamZuid_4.addFeatures(features_AmsterdamZuid_4);
var lyr_AmsterdamZuid_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmsterdamZuid_4, 
                style: style_AmsterdamZuid_4,
                popuplayertitle: 'Amsterdam Zuid',
                interactive: true,
                title: '<img src="styles/legend/AmsterdamZuid_4.png" /> Amsterdam Zuid'
            });
var format_Hoofddorp_5 = new ol.format.GeoJSON();
var features_Hoofddorp_5 = format_Hoofddorp_5.readFeatures(json_Hoofddorp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoofddorp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoofddorp_5.addFeatures(features_Hoofddorp_5);
var lyr_Hoofddorp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hoofddorp_5, 
                style: style_Hoofddorp_5,
                popuplayertitle: 'Hoofddorp',
                interactive: true,
                title: '<img src="styles/legend/Hoofddorp_5.png" /> Hoofddorp'
            });
var format_Zoetermeer_6 = new ol.format.GeoJSON();
var features_Zoetermeer_6 = format_Zoetermeer_6.readFeatures(json_Zoetermeer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoetermeer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoetermeer_6.addFeatures(features_Zoetermeer_6);
var lyr_Zoetermeer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoetermeer_6, 
                style: style_Zoetermeer_6,
                popuplayertitle: 'Zoetermeer',
                interactive: true,
                title: '<img src="styles/legend/Zoetermeer_6.png" /> Zoetermeer'
            });
var format_Utrecht_7 = new ol.format.GeoJSON();
var features_Utrecht_7 = format_Utrecht_7.readFeatures(json_Utrecht_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Utrecht_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utrecht_7.addFeatures(features_Utrecht_7);
var lyr_Utrecht_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Utrecht_7, 
                style: style_Utrecht_7,
                popuplayertitle: 'Utrecht',
                interactive: true,
                title: '<img src="styles/legend/Utrecht_7.png" /> Utrecht'
            });
var format_RotterdamZuid_8 = new ol.format.GeoJSON();
var features_RotterdamZuid_8 = format_RotterdamZuid_8.readFeatures(json_RotterdamZuid_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotterdamZuid_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotterdamZuid_8.addFeatures(features_RotterdamZuid_8);
var lyr_RotterdamZuid_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RotterdamZuid_8, 
                style: style_RotterdamZuid_8,
                popuplayertitle: 'Rotterdam Zuid',
                interactive: true,
                title: '<img src="styles/legend/RotterdamZuid_8.png" /> Rotterdam Zuid'
            });
var format_Heerhugowaard_9 = new ol.format.GeoJSON();
var features_Heerhugowaard_9 = format_Heerhugowaard_9.readFeatures(json_Heerhugowaard_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Heerhugowaard_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heerhugowaard_9.addFeatures(features_Heerhugowaard_9);
var lyr_Heerhugowaard_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Heerhugowaard_9, 
                style: style_Heerhugowaard_9,
                popuplayertitle: 'Heerhugowaard',
                interactive: true,
                title: '<img src="styles/legend/Heerhugowaard_9.png" /> Heerhugowaard'
            });
var format_AmsterdamZuidOost_10 = new ol.format.GeoJSON();
var features_AmsterdamZuidOost_10 = format_AmsterdamZuidOost_10.readFeatures(json_AmsterdamZuidOost_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmsterdamZuidOost_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmsterdamZuidOost_10.addFeatures(features_AmsterdamZuidOost_10);
var lyr_AmsterdamZuidOost_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmsterdamZuidOost_10, 
                style: style_AmsterdamZuidOost_10,
                popuplayertitle: 'Amsterdam Zuid-Oost',
                interactive: true,
                title: '<img src="styles/legend/AmsterdamZuidOost_10.png" /> Amsterdam Zuid-Oost'
            });
var format_Eindhoven_11 = new ol.format.GeoJSON();
var features_Eindhoven_11 = format_Eindhoven_11.readFeatures(json_Eindhoven_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eindhoven_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eindhoven_11.addFeatures(features_Eindhoven_11);
var lyr_Eindhoven_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eindhoven_11, 
                style: style_Eindhoven_11,
                popuplayertitle: 'Eindhoven',
                interactive: true,
                title: '<img src="styles/legend/Eindhoven_11.png" /> Eindhoven'
            });
var format_Tilburg_12 = new ol.format.GeoJSON();
var features_Tilburg_12 = format_Tilburg_12.readFeatures(json_Tilburg_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tilburg_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tilburg_12.addFeatures(features_Tilburg_12);
var lyr_Tilburg_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tilburg_12, 
                style: style_Tilburg_12,
                popuplayertitle: 'Tilburg',
                interactive: true,
                title: '<img src="styles/legend/Tilburg_12.png" /> Tilburg'
            });
var format_Beverwijk_13 = new ol.format.GeoJSON();
var features_Beverwijk_13 = format_Beverwijk_13.readFeatures(json_Beverwijk_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beverwijk_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beverwijk_13.addFeatures(features_Beverwijk_13);
var lyr_Beverwijk_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beverwijk_13, 
                style: style_Beverwijk_13,
                popuplayertitle: 'Beverwijk',
                interactive: true,
                title: '<img src="styles/legend/Beverwijk_13.png" /> Beverwijk'
            });
var format_Breda_14 = new ol.format.GeoJSON();
var features_Breda_14 = format_Breda_14.readFeatures(json_Breda_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Breda_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Breda_14.addFeatures(features_Breda_14);
var lyr_Breda_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Breda_14, 
                style: style_Breda_14,
                popuplayertitle: 'Breda',
                interactive: true,
                title: '<img src="styles/legend/Breda_14.png" /> Breda'
            });
var format_DenHaag_15 = new ol.format.GeoJSON();
var features_DenHaag_15 = format_DenHaag_15.readFeatures(json_DenHaag_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DenHaag_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DenHaag_15.addFeatures(features_DenHaag_15);
var lyr_DenHaag_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DenHaag_15, 
                style: style_DenHaag_15,
                popuplayertitle: 'Den Haag',
                interactive: true,
                title: '<img src="styles/legend/DenHaag_15.png" /> Den Haag'
            });
var format_Deventer_16 = new ol.format.GeoJSON();
var features_Deventer_16 = format_Deventer_16.readFeatures(json_Deventer_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deventer_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deventer_16.addFeatures(features_Deventer_16);
var lyr_Deventer_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deventer_16, 
                style: style_Deventer_16,
                popuplayertitle: 'Deventer',
                interactive: true,
                title: '<img src="styles/legend/Deventer_16.png" /> Deventer'
            });
var format_Dordrecht_17 = new ol.format.GeoJSON();
var features_Dordrecht_17 = format_Dordrecht_17.readFeatures(json_Dordrecht_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dordrecht_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dordrecht_17.addFeatures(features_Dordrecht_17);
var lyr_Dordrecht_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dordrecht_17, 
                style: style_Dordrecht_17,
                popuplayertitle: 'Dordrecht',
                interactive: true,
                title: '<img src="styles/legend/Dordrecht_17.png" /> Dordrecht'
            });
var format_Hilversum_18 = new ol.format.GeoJSON();
var features_Hilversum_18 = format_Hilversum_18.readFeatures(json_Hilversum_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hilversum_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hilversum_18.addFeatures(features_Hilversum_18);
var lyr_Hilversum_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hilversum_18, 
                style: style_Hilversum_18,
                popuplayertitle: 'Hilversum',
                interactive: true,
                title: '<img src="styles/legend/Hilversum_18.png" /> Hilversum'
            });
var format_Krommenie_19 = new ol.format.GeoJSON();
var features_Krommenie_19 = format_Krommenie_19.readFeatures(json_Krommenie_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Krommenie_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Krommenie_19.addFeatures(features_Krommenie_19);
var lyr_Krommenie_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Krommenie_19, 
                style: style_Krommenie_19,
                popuplayertitle: 'Krommenie',
                interactive: true,
                title: '<img src="styles/legend/Krommenie_19.png" /> Krommenie'
            });
var format_Noorderwijkerhout_20 = new ol.format.GeoJSON();
var features_Noorderwijkerhout_20 = format_Noorderwijkerhout_20.readFeatures(json_Noorderwijkerhout_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noorderwijkerhout_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noorderwijkerhout_20.addFeatures(features_Noorderwijkerhout_20);
var lyr_Noorderwijkerhout_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noorderwijkerhout_20, 
                style: style_Noorderwijkerhout_20,
                popuplayertitle: 'Noorderwijkerhout',
                interactive: true,
                title: '<img src="styles/legend/Noorderwijkerhout_20.png" /> Noorderwijkerhout'
            });
var format_Spijkenisse_21 = new ol.format.GeoJSON();
var features_Spijkenisse_21 = format_Spijkenisse_21.readFeatures(json_Spijkenisse_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spijkenisse_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spijkenisse_21.addFeatures(features_Spijkenisse_21);
var lyr_Spijkenisse_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spijkenisse_21, 
                style: style_Spijkenisse_21,
                popuplayertitle: 'Spijkenisse',
                interactive: true,
                title: '<img src="styles/legend/Spijkenisse_21.png" /> Spijkenisse'
            });
var format_Amersfoort_22 = new ol.format.GeoJSON();
var features_Amersfoort_22 = format_Amersfoort_22.readFeatures(json_Amersfoort_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amersfoort_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amersfoort_22.addFeatures(features_Amersfoort_22);
var lyr_Amersfoort_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amersfoort_22, 
                style: style_Amersfoort_22,
                popuplayertitle: 'Amersfoort',
                interactive: true,
                title: '<img src="styles/legend/Amersfoort_22.png" /> Amersfoort'
            });
var format_Leiden_23 = new ol.format.GeoJSON();
var features_Leiden_23 = format_Leiden_23.readFeatures(json_Leiden_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Leiden_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Leiden_23.addFeatures(features_Leiden_23);
var lyr_Leiden_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Leiden_23, 
                style: style_Leiden_23,
                popuplayertitle: 'Leiden',
                interactive: true,
                title: '<img src="styles/legend/Leiden_23.png" /> Leiden'
            });
var format_Haarlem_24 = new ol.format.GeoJSON();
var features_Haarlem_24 = format_Haarlem_24.readFeatures(json_Haarlem_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haarlem_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haarlem_24.addFeatures(features_Haarlem_24);
var lyr_Haarlem_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haarlem_24, 
                style: style_Haarlem_24,
                popuplayertitle: 'Haarlem',
                interactive: true,
                title: '<img src="styles/legend/Haarlem_24.png" /> Haarlem'
            });
var format_Lelystad_25 = new ol.format.GeoJSON();
var features_Lelystad_25 = format_Lelystad_25.readFeatures(json_Lelystad_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lelystad_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lelystad_25.addFeatures(features_Lelystad_25);
var lyr_Lelystad_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lelystad_25, 
                style: style_Lelystad_25,
                popuplayertitle: 'Lelystad',
                interactive: true,
                title: '<img src="styles/legend/Lelystad_25.png" /> Lelystad'
            });
var format_BeekenDonk_26 = new ol.format.GeoJSON();
var features_BeekenDonk_26 = format_BeekenDonk_26.readFeatures(json_BeekenDonk_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeekenDonk_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeekenDonk_26.addFeatures(features_BeekenDonk_26);
var lyr_BeekenDonk_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BeekenDonk_26, 
                style: style_BeekenDonk_26,
                popuplayertitle: 'Beek en Donk',
                interactive: true,
                title: '<img src="styles/legend/BeekenDonk_26.png" /> Beek en Donk'
            });
var format_Gemert_27 = new ol.format.GeoJSON();
var features_Gemert_27 = format_Gemert_27.readFeatures(json_Gemert_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemert_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemert_27.addFeatures(features_Gemert_27);
var lyr_Gemert_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gemert_27, 
                style: style_Gemert_27,
                popuplayertitle: 'Gemert',
                interactive: true,
                title: '<img src="styles/legend/Gemert_27.png" /> Gemert'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Ijmuiden_1.setVisible(true);lyr_Almere_2.setVisible(true);lyr_Alphenaandenrijn_3.setVisible(true);lyr_AmsterdamZuid_4.setVisible(true);lyr_Hoofddorp_5.setVisible(true);lyr_Zoetermeer_6.setVisible(true);lyr_Utrecht_7.setVisible(true);lyr_RotterdamZuid_8.setVisible(true);lyr_Heerhugowaard_9.setVisible(true);lyr_AmsterdamZuidOost_10.setVisible(true);lyr_Eindhoven_11.setVisible(true);lyr_Tilburg_12.setVisible(true);lyr_Beverwijk_13.setVisible(true);lyr_Breda_14.setVisible(true);lyr_DenHaag_15.setVisible(true);lyr_Deventer_16.setVisible(true);lyr_Dordrecht_17.setVisible(true);lyr_Hilversum_18.setVisible(true);lyr_Krommenie_19.setVisible(true);lyr_Noorderwijkerhout_20.setVisible(true);lyr_Spijkenisse_21.setVisible(true);lyr_Amersfoort_22.setVisible(true);lyr_Leiden_23.setVisible(true);lyr_Haarlem_24.setVisible(true);lyr_Lelystad_25.setVisible(true);lyr_BeekenDonk_26.setVisible(true);lyr_Gemert_27.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Ijmuiden_1,lyr_Almere_2,lyr_Alphenaandenrijn_3,lyr_AmsterdamZuid_4,lyr_Hoofddorp_5,lyr_Zoetermeer_6,lyr_Utrecht_7,lyr_RotterdamZuid_8,lyr_Heerhugowaard_9,lyr_AmsterdamZuidOost_10,lyr_Eindhoven_11,lyr_Tilburg_12,lyr_Beverwijk_13,lyr_Breda_14,lyr_DenHaag_15,lyr_Deventer_16,lyr_Dordrecht_17,lyr_Hilversum_18,lyr_Krommenie_19,lyr_Noorderwijkerhout_20,lyr_Spijkenisse_21,lyr_Amersfoort_22,lyr_Leiden_23,lyr_Haarlem_24,lyr_Lelystad_25,lyr_BeekenDonk_26,lyr_Gemert_27];
lyr_Ijmuiden_1.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Almere_2.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Alphenaandenrijn_3.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_AmsterdamZuid_4.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Hoofddorp_5.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Zoetermeer_6.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Utrecht_7.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_RotterdamZuid_8.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Heerhugowaard_9.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_AmsterdamZuidOost_10.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Eindhoven_11.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Tilburg_12.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Beverwijk_13.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Breda_14.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_DenHaag_15.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Deventer_16.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Dordrecht_17.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Hilversum_18.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Krommenie_19.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Noorderwijkerhout_20.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Spijkenisse_21.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Amersfoort_22.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Leiden_23.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Haarlem_24.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Lelystad_25.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_BeekenDonk_26.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Gemert_27.set('fieldAliases', {'pc4_code': 'pc4_code', 'year': 'year', 'gem_code': 'gem_code', 'prov_code': 'prov_code', 'prov_name': 'prov_name', 'gem_name': 'gem_name', 'code': 'code', 'Gebied': 'Gebied', 'Minimale b': 'Minimale b', 'Bezorgkost': 'Bezorgkost', 'Status': 'Status', });
lyr_Ijmuiden_1.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Almere_2.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Alphenaandenrijn_3.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_AmsterdamZuid_4.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Hoofddorp_5.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Zoetermeer_6.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Utrecht_7.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_RotterdamZuid_8.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Heerhugowaard_9.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_AmsterdamZuidOost_10.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Eindhoven_11.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Tilburg_12.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Beverwijk_13.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Breda_14.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_DenHaag_15.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Deventer_16.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Dordrecht_17.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Hilversum_18.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Krommenie_19.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Noorderwijkerhout_20.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Spijkenisse_21.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Amersfoort_22.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Leiden_23.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Haarlem_24.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Lelystad_25.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_BeekenDonk_26.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Gemert_27.set('fieldImages', {'pc4_code': 'TextEdit', 'year': 'TextEdit', 'gem_code': 'TextEdit', 'prov_code': 'TextEdit', 'prov_name': 'TextEdit', 'gem_name': 'TextEdit', 'code': 'TextEdit', 'Gebied': 'TextEdit', 'Minimale b': 'TextEdit', 'Bezorgkost': 'TextEdit', 'Status': 'TextEdit', });
lyr_Ijmuiden_1.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Almere_2.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Alphenaandenrijn_3.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_AmsterdamZuid_4.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Hoofddorp_5.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Zoetermeer_6.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Utrecht_7.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_RotterdamZuid_8.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Heerhugowaard_9.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_AmsterdamZuidOost_10.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Eindhoven_11.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Tilburg_12.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Beverwijk_13.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Breda_14.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_DenHaag_15.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Deventer_16.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Dordrecht_17.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Hilversum_18.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'no label', });
lyr_Krommenie_19.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Noorderwijkerhout_20.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Spijkenisse_21.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Amersfoort_22.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Leiden_23.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Haarlem_24.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Lelystad_25.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_BeekenDonk_26.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Gemert_27.set('fieldLabels', {'pc4_code': 'hidden field', 'year': 'hidden field', 'gem_code': 'hidden field', 'prov_code': 'hidden field', 'prov_name': 'hidden field', 'gem_name': 'hidden field', 'code': 'hidden field', 'Gebied': 'inline label - visible with data', 'Minimale b': 'hidden field', 'Bezorgkost': 'hidden field', 'Status': 'hidden field', });
lyr_Gemert_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});