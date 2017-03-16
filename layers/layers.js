var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_GeologicUnits0 = new ol.format.GeoJSON();
var features_GeologicUnits0 = format_GeologicUnits0.readFeatures(geojson_GeologicUnits0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeologicUnits0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GeologicUnits0.addFeatures(features_GeologicUnits0);var lyr_GeologicUnits0 = new ol.layer.Vector({
                source:jsonSource_GeologicUnits0, 
                style: style_GeologicUnits0,
                title: "Geologic Units"
            });var format_GeologicSymbols1 = new ol.format.GeoJSON();
var features_GeologicSymbols1 = format_GeologicSymbols1.readFeatures(geojson_GeologicSymbols1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeologicSymbols1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GeologicSymbols1.addFeatures(features_GeologicSymbols1);var lyr_GeologicSymbols1 = new ol.layer.Vector({
                source:jsonSource_GeologicSymbols1, 
                style: style_GeologicSymbols1,
                title: "Geologic Symbols"
            });var format_GeologicLines2 = new ol.format.GeoJSON();
var features_GeologicLines2 = format_GeologicLines2.readFeatures(geojson_GeologicLines2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeologicLines2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GeologicLines2.addFeatures(features_GeologicLines2);var lyr_GeologicLines2 = new ol.layer.Vector({
                source:jsonSource_GeologicLines2, 
                style: style_GeologicLines2,
                title: "Geologic Lines"
            });var format_GeologicFeatureLabels3 = new ol.format.GeoJSON();
var features_GeologicFeatureLabels3 = format_GeologicFeatureLabels3.readFeatures(geojson_GeologicFeatureLabels3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeologicFeatureLabels3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GeologicFeatureLabels3.addFeatures(features_GeologicFeatureLabels3);var lyr_GeologicFeatureLabels3 = new ol.layer.Vector({
                source:jsonSource_GeologicFeatureLabels3, 
                style: style_GeologicFeatureLabels3,
                title: "Geologic Feature Labels"
            });var format_CrossSection4 = new ol.format.GeoJSON();
var features_CrossSection4 = format_CrossSection4.readFeatures(geojson_CrossSection4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrossSection4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CrossSection4.addFeatures(features_CrossSection4);var lyr_CrossSection4 = new ol.layer.Vector({
                source:jsonSource_CrossSection4, 
                style: style_CrossSection4,
                title: "Cross Section"
            });var format_HydrothermalAlteration5 = new ol.format.GeoJSON();
var features_HydrothermalAlteration5 = format_HydrothermalAlteration5.readFeatures(geojson_HydrothermalAlteration5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HydrothermalAlteration5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HydrothermalAlteration5.addFeatures(features_HydrothermalAlteration5);var lyr_HydrothermalAlteration5 = new ol.layer.Vector({
                source:jsonSource_HydrothermalAlteration5, 
                style: style_HydrothermalAlteration5,
                title: "Hydrothermal Alteration"
            });

lyr_GeologicUnits0.setVisible(true);lyr_GeologicSymbols1.setVisible(true);lyr_GeologicLines2.setVisible(true);lyr_GeologicFeatureLabels3.setVisible(false);lyr_CrossSection4.setVisible(false);lyr_HydrothermalAlteration5.setVisible(false);
var layersList = [baseLayer,lyr_GeologicUnits0,lyr_GeologicSymbols1,lyr_GeologicLines2,lyr_GeologicFeatureLabels3,lyr_CrossSection4,lyr_HydrothermalAlteration5];
lyr_GeologicUnits0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UnitRank': 'UnitRank', 'UnitSymbol': 'UnitSymbol', 'UnitLabel': 'UnitLabel', 'UnitName': 'UnitName', 'Grouping': 'Grouping', 'Age_Strat': 'Age_Strat', 'Composition': 'Composition', 'Genesis': 'Genesis', 'Source': 'Source', 'Notes': 'Notes', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'RuleID': 'RuleID', 'Override': 'Override', });
lyr_GeologicSymbols1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LayerInt': 'LayerInt', 'Layer': 'Layer', 'Feature': 'Feature', 'Type': 'Type', 'Subtype': 'Subtype', 'Modifier': 'Modifier', 'Rotation': 'Rotation', 'Strike': 'Strike', 'DipDirection': 'DipDirection', 'DipAngle': 'DipAngle', 'Source': 'Source', 'CAD_Angle': 'CAD_Angle', 'Notes': 'Notes', 'Feature_ID': 'Feature_ID', });
lyr_GeologicLines2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LayerInt': 'LayerInt', 'Layer': 'Layer', 'Feature': 'Feature', 'Type': 'Type', 'Subtype': 'Subtype', 'Modifier': 'Modifier', 'FeatureName': 'FeatureName', 'Source': 'Source', 'Notes': 'Notes', 'SHAPE_Length': 'SHAPE_Length', 'RuleID': 'RuleID', 'Override': 'Override', });
lyr_GeologicFeatureLabels3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FeatureID': 'FeatureID', 'ZOrder': 'ZOrder', 'AnnotationClassID': 'AnnotationClassID', 'Element': 'Element', 'SymbolID': 'SymbolID', 'Status': 'Status', 'TextString': 'TextString', 'FontName': 'FontName', 'FontSize': 'FontSize', 'Bold': 'Bold', 'Italic': 'Italic', 'Underline': 'Underline', 'VerticalAlignment': 'VerticalAlignment', 'HorizontalAlignment': 'HorizontalAlignment', 'XOffset': 'XOffset', 'YOffset': 'YOffset', 'Angle': 'Angle', 'FontLeading': 'FontLeading', 'WordSpacing': 'WordSpacing', 'CharacterWidth': 'CharacterWidth', 'CharacterSpacing': 'CharacterSpacing', 'FlipAngle': 'FlipAngle', 'Override': 'Override', 'Quadrangle': 'Quadrangle', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CrossSection4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LayerInt': 'LayerInt', 'Layer': 'Layer', 'Feature': 'Feature', 'Type': 'Type', 'Subtype': 'Subtype', 'Modifier': 'Modifier', 'Notes': 'Notes', 'SHAPE_Length': 'SHAPE_Length', });
lyr_HydrothermalAlteration5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UnitRank': 'UnitRank', 'UnitSymbol': 'UnitSymbol', 'UnitLabel': 'UnitLabel', 'UnitName': 'UnitName', 'Grouping': 'Grouping', 'Age_Strat': 'Age_Strat', 'Composition': 'Composition', 'Genesis': 'Genesis', 'Source': 'Source', 'Notes': 'Notes', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'RuleID': 'RuleID', 'Override': 'Override', });
lyr_GeologicUnits0.set('fieldImages', {'OBJECTID': 'Hidden', 'UnitRank': 'Hidden', 'UnitSymbol': 'TextEdit', 'UnitLabel': 'Hidden', 'UnitName': 'TextEdit', 'Grouping': 'TextEdit', 'Age_Strat': 'TextEdit', 'Composition': 'TextEdit', 'Genesis': 'TextEdit', 'Source': 'Hidden', 'Notes': 'Hidden', 'SHAPE_Length': 'Hidden', 'SHAPE_Area': 'Hidden', 'RuleID': 'Hidden', 'Override': 'Hidden', });
lyr_GeologicSymbols1.set('fieldImages', {'OBJECTID': 'TextEdit', 'LayerInt': 'TextEdit', 'Layer': 'TextEdit', 'Feature': 'TextEdit', 'Type': 'TextEdit', 'Subtype': 'TextEdit', 'Modifier': 'TextEdit', 'Rotation': 'TextEdit', 'Strike': 'TextEdit', 'DipDirection': 'TextEdit', 'DipAngle': 'TextEdit', 'Source': 'TextEdit', 'CAD_Angle': 'TextEdit', 'Notes': 'TextEdit', 'Feature_ID': 'TextEdit', });
lyr_GeologicLines2.set('fieldImages', {'OBJECTID': 'Hidden', 'LayerInt': 'TextEdit', 'Layer': 'TextEdit', 'Feature': 'TextEdit', 'Type': 'TextEdit', 'Subtype': 'TextEdit', 'Modifier': 'TextEdit', 'FeatureName': 'TextEdit', 'Source': 'TextEdit', 'Notes': 'TextEdit', 'SHAPE_Length': 'Hidden', 'RuleID': 'Hidden', 'Override': 'Hidden', });
lyr_GeologicFeatureLabels3.set('fieldImages', {'OBJECTID': 'Hidden', 'FeatureID': 'Hidden', 'ZOrder': 'Hidden', 'AnnotationClassID': 'Hidden', 'Element': 'Hidden', 'SymbolID': 'Hidden', 'Status': 'Hidden', 'TextString': 'Hidden', 'FontName': 'Hidden', 'FontSize': 'Hidden', 'Bold': 'Hidden', 'Italic': 'Hidden', 'Underline': 'Hidden', 'VerticalAlignment': 'Hidden', 'HorizontalAlignment': 'Hidden', 'XOffset': 'Hidden', 'YOffset': 'Hidden', 'Angle': 'Hidden', 'FontLeading': 'Hidden', 'WordSpacing': 'Hidden', 'CharacterWidth': 'Hidden', 'CharacterSpacing': 'Hidden', 'FlipAngle': 'Hidden', 'Override': 'Hidden', 'Quadrangle': 'Hidden', 'SHAPE_Length': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_CrossSection4.set('fieldImages', {'OBJECTID': 'TextEdit', 'LayerInt': 'TextEdit', 'Layer': 'TextEdit', 'Feature': 'TextEdit', 'Type': 'TextEdit', 'Subtype': 'TextEdit', 'Modifier': 'TextEdit', 'Notes': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_HydrothermalAlteration5.set('fieldImages', {'OBJECTID': 'TextEdit', 'UnitRank': 'TextEdit', 'UnitSymbol': 'TextEdit', 'UnitLabel': 'TextEdit', 'UnitName': 'TextEdit', 'Grouping': 'TextEdit', 'Age_Strat': 'TextEdit', 'Composition': 'TextEdit', 'Genesis': 'TextEdit', 'Source': 'TextEdit', 'Notes': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'RuleID': 'TextEdit', 'Override': 'TextEdit', });
lyr_GeologicUnits0.set('fieldLabels', {'UnitSymbol': 'inline label', 'UnitName': 'inline label', 'Grouping': 'inline label', 'Age_Strat': 'inline label', 'Composition': 'inline label', 'Genesis': 'inline label', });
lyr_GeologicSymbols1.set('fieldLabels', {'OBJECTID': 'no label', 'LayerInt': 'no label', 'Layer': 'no label', 'Feature': 'no label', 'Type': 'no label', 'Subtype': 'no label', 'Modifier': 'no label', 'Rotation': 'no label', 'Strike': 'no label', 'DipDirection': 'no label', 'DipAngle': 'no label', 'Source': 'no label', 'CAD_Angle': 'no label', 'Notes': 'no label', 'Feature_ID': 'no label', });
lyr_GeologicLines2.set('fieldLabels', {'LayerInt': 'no label', 'Layer': 'no label', 'Feature': 'no label', 'Type': 'no label', 'Subtype': 'no label', 'Modifier': 'no label', 'FeatureName': 'no label', 'Source': 'no label', 'Notes': 'no label', });
lyr_GeologicFeatureLabels3.set('fieldLabels', {});
lyr_CrossSection4.set('fieldLabels', {'OBJECTID': 'no label', 'LayerInt': 'no label', 'Layer': 'no label', 'Feature': 'no label', 'Type': 'no label', 'Subtype': 'no label', 'Modifier': 'no label', 'Notes': 'no label', 'SHAPE_Length': 'no label', });
lyr_HydrothermalAlteration5.set('fieldLabels', {'OBJECTID': 'no label', 'UnitRank': 'no label', 'UnitSymbol': 'no label', 'UnitLabel': 'no label', 'UnitName': 'no label', 'Grouping': 'no label', 'Age_Strat': 'no label', 'Composition': 'no label', 'Genesis': 'no label', 'Source': 'no label', 'Notes': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', 'RuleID': 'no label', 'Override': 'no label', });
lyr_HydrothermalAlteration5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});