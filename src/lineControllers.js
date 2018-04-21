const lineWidth = 7;
const changeColortoBlue = (routeLine) => {
    const currentColor = routeLine.getStyle().strokeColor;
    if (currentColor != 'rgba(0,0,255,.9)' && currentColor != 'blue') {
        routeLine.setStyle(new H.map.SpatialStyle({
            strokeColor: 'rgba(0,0,255,.9)',
            lineWidth: lineWidth
        }))
    }

}

const changeColortoRed = (routeLine) => {
    const currentColor = routeLine.getStyle().strokeColor;
    if (currentColor == 'rgba(0,0,255,.9)' || currentColor == 'blue') {
        routeLine.setStyle(new H.map.SpatialStyle({
            strokeColor: 'rgba(255,0,0,.9)',
            lineWidth: lineWidth
        }))
    }
}

module.exports = createLine = (start, end, index) => {
    var routingParameters = {
    'mode': 'fastest;bicycle',
    'waypoint0': `geo!${start}`,
    'waypoint1': `geo!${end}`,
    'representation': 'display'
    };

    var onResult = function(result) {
        var route, routeShape, startPoint, endPoint, linestring, routeLine;
        if (result.response.route) {
            console.log(index)
            route = result.response.route[0];
            routeShape = route.shape;
            linestring = new H.geo.LineString();
            routeShape.forEach(function(point) {var parts = point.split(',');linestring.pushLatLngAlt(parts[0], parts[1]);});
            startPoint = route.waypoint[0].mappedPosition;
            endPoint = route.waypoint[1].mappedPosition;
            routeLine = new H.map.Polyline(linestring, {style: { strokeColor: 'blue', lineWidth: lineWidth }});
            var startMarker = new H.map.Marker({lat: startPoint.latitude,lng: startPoint.longitude});
            var endMarker = new H.map.Marker({lat: endPoint.latitude,lng: endPoint.longitude});
            map.addObjects([routeLine, startMarker, endMarker]);
        }  

        routeLine.addEventListener('tap', (evt) => { 
            changeColortoRed(routeLine);
        });
    };
    var router = platform.getRoutingService();
    router.calculateRoute(routingParameters, onResult, (error) => {alert(error.message);});
}