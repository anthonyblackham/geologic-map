var size = 0;

var styleCache_GeologicFeatureLabels3={}
var style_GeologicFeatureLabels3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})
    })];
    if (feature.get("q2wHide_TextString") !== null) {
        var labelText = String(feature.get("q2wHide_TextString"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_GeologicFeatureLabels3[key]){
        var text = new ol.style.Text({
              font: '9.75px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_GeologicFeatureLabels3[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_GeologicFeatureLabels3[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};