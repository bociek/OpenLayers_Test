//import Feature from 'ol/Feature';

window.onload = init;

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

const vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  style: new ol.style.Style({
    image: new ol.style.Circle({
      radius: 2,
      fill: new ol.style.Fill({color: 'red'})
    })
  })
});

// Koordynaty przejść dla pieszych

const zebra1 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([18.689168, 50.042896])),
  name: 'Zebra nr 1',
});

const zebra2 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([18.688218, 50.042758])),
  name: 'Zebra nr 2',
});

const zebra3 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([18.686886, 50.042444])),
  name: 'Zebra nr 3',
});

const zebra4 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([18.686302, 50.042324])),
  name: 'Zebra nr 4',
});

const zebra5 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([18.685620, 50.042107])),
  name: 'Zebra nr 5',
});

const zebra6 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([18.685019, 50.042035])),
  name: 'Zebra nr 6',
});

const zebra7 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([18.684643, 50.041859])),
  name: 'Zebra nr 7',
});

const zebra8 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([18.683586, 50.041718])),
  name: 'Zebra nr 8',
});

const zebra9 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([18.682538, 50.041470])),
  name: 'Zebra nr 9',
});

// Funkcja wczytująca mapę

function init(){
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      /**
       * new ol.layer.Tile({
        source: new ol.source.Stamen({layer: 'watercolor',})
      }),
      new ol.layer.Tile({
        source: new ol.source.Stamen({layer: 'terrain-labels',})
      })
       */
      
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [zebra1]
        })
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [zebra2]
        })
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [zebra3]
        })
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [zebra4]
        })
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [zebra5]
        })
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [zebra6]
        })
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [zebra7]
        })
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [zebra8]
        })
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [zebra9]
        })
      })
    ],
    // Widok przejścia po odświeżeniu strony
    /**
    view: new ol.View({
      center: ol.proj.fromLonLat([18.686886, 50.042444]),
      zoom: 18
    }),
    view: new ol.View({
      center: ol.proj.fromLonLat([18.688218, 50.042758]),
      zoom: 18
    }),
    view: new ol.View({
      center: ol.proj.fromLonLat([18.689168, 50.042896]),
      zoom: 18
    }),
    view: new ol.View({
      center: ol.proj.fromLonLat([18.686302, 50.042324]),
      zoom: 18
    }), 
    */
    view: new ol.View({
      center: ol.proj.fromLonLat([18.685620, 50.042107]),
      zoom: 17
    }),
    /**
    view: new ol.View({
      center: ol.proj.fromLonLat([18.685019, 50.042035]),
      zoom: 18
    }),
    view: new ol.View({
      center: ol.proj.fromLonLat([18.684643, 50.041859]),
      zoom: 18
    }),
    view: new ol.View({
      center: ol.proj.fromLonLat([18.683586, 50.041718]),
      zoom: 18
    }),
    view: new ol.View({
      center: ol.proj.fromLonLat([18.682538, 50.041470]),
      zoom: 18
    })
    */
  });
}

// Add a Vector Layer

const przejscia = new ol.layer.Vector({
  source: new ol.source.Vector({
    
  })
})

// Icon styles

zebra1.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
    color: '#F52D2A',
    crossOrigin: 'annonymous',
    src: './img/dot.png'
  }))
}));

zebra2.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
    color: '#F52D2A',
    crossOrigin: 'annonymous',
    src: './img/dot.png'
  }))
}));

zebra3.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
    color: '#F52D2A',
    crossOrigin: 'annonymous',
    src: './img/dot.png'
  }))
}));

zebra4.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
    color: '#F52D2A',
    crossOrigin: 'annonymous',
    src: './img/dot.png'
  }))
}));

zebra5.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
    color: '#F9F835',
    crossOrigin: 'annonymous',
    src: './img/dot.png'
  }))
}));

zebra6.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
    color: '#F52D2A',
    crossOrigin: 'annonymous',
    src: './img/dot.png'
  }))
}));

zebra7.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
    color: '#F9F835',
    crossOrigin: 'annonymous',
    src: './img/dot.png'
  }))
}));

zebra8.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
    color: '#F52D2A',
    crossOrigin: 'annonymous',
    src: './img/dot.png'
  }))
}));

zebra9.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
    color: '#F52D2A',
    crossOrigin: 'annonymous',
    src: './img/dot.png'
  }))
}));

