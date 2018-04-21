const lineWidth = 13;
var mapEvents = new H.mapevents.MapEvents(map);

module.exports = createLine = (start, end) => {
    var routingParameters = {
    // The routing mode:
    'mode': 'fastest;bicycle',
    // The start point of the route:
    'waypoint0': `geo!${start}`,
    // The end point of the route:
    'waypoint1': `geo!${end}`,
    // To retrieve the shape of the route we choose the route
    // representation mode 'display'
    'representation': 'display'
    };


    // Define a callback function to process the routing response:
    var onResult = function(result) {
        var route,
            routeShape,
            startPoint,
            endPoint,
            linestring;
        if(result.response.route) {
        // Pick the first route from the response:
        route = result.response.route[0];
        // Pick the route's shape:
        routeShape = route.shape;

        // Create a linestring to use as a point source for the route line
        linestring = new H.geo.LineString();

        // Push all the points in the shape into the linestring:
        routeShape.forEach(function(point) {
            var parts = point.split(',');
            linestring.pushLatLngAlt(parts[0], parts[1]);
        });

        // Retrieve the mapped positions of the requested waypoints:
        startPoint = route.waypoint[0].mappedPosition;
        endPoint = route.waypoint[1].mappedPosition;

        var routeLine = new H.map.Polyline(linestring, {
            style: { strokeColor: 'blue', lineWidth: lineWidth }
        });

        var startMarker = new H.map.Marker({
            lat: startPoint.latitude,
            lng: startPoint.longitude
        });

        var endMarker = new H.map.Marker({
            lat: endPoint.latitude,
            lng: endPoint.longitude
        });
        //, startMarker, endMarker
        // Add the route polyline and the two markers to the map:
        map.addObjects([routeLine, startMarker, endMarker]);

        }
        routeLine.addEventListener('tap', function(evt) {
            changeColor(routeLine)
        });
    };

    // Get an instance of the routing service:
    var router = platform.getRoutingService();

    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult,
    function(error) {
        alert(error.message);
    });
}

const changeColor = (routeLine) => {
    const currentColor = routeLine.getStyle().strokeColor;
    if (currentColor == 'rgba(0,0,255,.9)' || currentColor == 'blue') {
        console.log("to red")
        routeLine.setStyle(new H.map.SpatialStyle({
            strokeColor: 'rgba(255,0,0,.9)',
            lineWidth: lineWidth
        }))
    } else {
        console.log("to blue")
        routeLine.setStyle(new H.map.SpatialStyle({
            strokeColor: 'rgba(0,0,255,.9)',
            lineWidth: lineWidth
        }))
    }

}