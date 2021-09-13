//import VectorLayer from 'ol/layer/Vector';
//import VectorSource from 'ol/source/Vector';
//import Feature from 'ol/Feature';
//import {circular} from 'ol/geom/Polygon';
//import Point from 'ol/geom/Point';
//import Control from 'ol/control/Control';

const getRandomNumber = function (min, ref) {
    return Math.random() * ref + min;
}

const features = [];
for (i = 0; i < 300; i++) {
  features.push(new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-getRandomNumber(50,50), getRandomNumber(10,50)]))
  }));
}

const vectorSource = new ol.source.Vector({
    features
});

//const layer = new VectorLayer({
//    source: source
//});

const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 2,
        fill: new ol.style.Fill({color: 'red'})
      })
    })
});

//map.addLayer(vectorLayer);

navigator.geolocation.watchPosition(function(pos) {
    const coords = [pos.coords.longitude, pos.coords.latitude];
    const accuracy = new ol.geom.Point(coords, pos.coords.accuracy);
    source.clear(true);
    source.addFeatures([
        new Feature(accuracy.transform('EPSG:4326', map.getView().getProjection())),
        new Feature(new Point(fromLonLat(coords)))
    ]);
}, function(error) {
    alert('ERROR: ${error.message}');
}, {
    enableHighAccuracy: true
});

const locate = document.createElement('div');
locate.className = 'ol-control ol-unselectable locate';
locate.innerHTML = '<button title="Locate me">◎</button>';
locate.addEventListener('click', function() {
    if (!source.isEmpty()) {
        map.getView().fit(source.getExtent(), {
            maxZoom: 18,
            duration: 500
        });
    }
});