var size = 0;
function categories_GeologicLines2(feature, value) {
                switch(value) {case 'Boundary, map':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
                    break;
case 'Contact, well located':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
                    break;
case 'Fault, attenuation, concealed':
                    return [ new ol.style.Style({
        
    }),new ol.style.Style({
        
    })];
                    break;
case 'Fault, attenuation, exposed':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
    }),new ol.style.Style({
        
    })];
                    break;
case 'Fault, normal, concealed':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: [1,5], lineCap: 'square', lineJoin: 'bevel', width: 1}),
    }),new ol.style.Style({
        
    })];
                    break;
case 'Fault, normal, well located':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
    }),new ol.style.Style({
        
    })];
                    break;
case 'Fault, unknown, concealed':
                    return [ new ol.style.Style({
        
    }),new ol.style.Style({
        
    })];
                    break;
case 'Fault, unknown, well located':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
    }),new ol.style.Style({
        
    })];
                    break;}};
var styleCache_GeologicLines2={}
var style_GeologicLines2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Feature");
    var style = categories_GeologicLines2(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_GeologicLines2[key]){
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
        styleCache_GeologicLines2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_GeologicLines2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};