(function(factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(require('leaflet'));
    } else {
        window.providers = factory(window.L);
    }
})(function(L) {
    var providers = {};

    providers['Mundialis'] = {
        title: 'Mundialis',
        icon: 'icons/MundialisIcon.jpg',
        layer: L.tileLayer.wms('https://ows.mundialis.de/services/service?', {
            layers: 'TOPO-WMS',
			maxZoom: 18,
            attribution: '&copy; Mundialis'
        })
    };

    providers['Terrestris'] = {
        title: 'Terrestris',
		icon: 'icons/TerrestrisIcon.jpg',
        layer: L.tileLayer.wms('https://ows.terrestris.de/osm/service?', {
            layers: 'OSM-WMS',
			maxZoom: 18,
            attribution: '&copy; Terrestris'
        })
    }

    return providers;
});