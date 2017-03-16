var size = 0;
function categories_GeologicSymbols1(feature, value) {
                switch(value) {case 'Bedding, inclined, field measured':
                    return [ new ol.style.Style({
        
    })];
                    break;
case 'Foliation, horizontal':
                    return [ new ol.style.Style({
        
    })];
                    break;
case 'Foliation, inclined, field measured':
                    return [ new ol.style.Style({
        
    })];
                    break;}};
var styleCache_GeologicSymbols1={}
var style_GeologicSymbols1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Feature");
    var style = categories_GeologicSymbols1(feature, value);
    if (feature.get("DipAngle") !== null) {
        var labelText = String(feature.get("DipAngle"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_GeologicSymbols1[key]){
        var text = new ol.style.Text({
              font: '5.85px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_GeologicSymbols1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_GeologicSymbols1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};