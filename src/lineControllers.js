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

const isRed = (routeLine) => {
    const currentColor = routeLine.getStyle().strokeColor;
    if (currentColor == 'rgba(255,0,0,.9)') {
        return true;
    }
    return false;
}

const changeColortoRed = (routeLine, time) => {
    let newTime = .9 - time*0.2;
    if (newTime <= 0) newTime = 0;
    const currentColor = routeLine.getStyle().strokeColor;
    routeLine.setStyle(new H.map.SpatialStyle({
        strokeColor: `rgba(255,0,0,${newTime})`,
        lineWidth: lineWidth
    }))
}

const startToRed = setInterval(function(){
    window.toRed.forEach(elem => elem.time++);
    window.toRed.forEach(elem => {
        changeColortoRed(elem.r, elem.time);
    });
},2600)

module.exports = createLine = (start, end, index, nodeMap, dfs, getRandomInteger) => {
    var routingParameters = {
    'mode': 'fastest;car',
    'waypoint0': `geo!${start}`,
    'waypoint1': `geo!${end}`,
    'representation': 'display'
    };

    var onResult = function(result) {
        var route, routeShape, startPoint, endPoint, linestring, routeLine;
        if (result.response.route) {
            route = result.response.route[0];
            routeShape = route.shape;
            linestring = new H.geo.LineString();
            routeShape.forEach(function(point) {var parts = point.split(',');linestring.pushLatLngAlt(parts[0], parts[1]);});
            startPoint = route.waypoint[0].mappedPosition;
            endPoint = route.waypoint[1].mappedPosition;
            routeLine = new H.map.Polyline(linestring, {style: { strokeColor: 'blue', lineWidth: lineWidth }});
            var startMarker;
            var endMarker;
            var icon = new H.map.Icon(window.svg)
            const i = nodeMap.get(start)
            const j = nodeMap.get(end)           
            if (window.proxyArray.indexOf(i) != -1 && window.proxyArray.indexOf(j) != -1){
                startMarker = new H.map.Marker({lat: startPoint.latitude,lng: startPoint.longitude},{icon: icon});
                endMarker = new H.map.Marker({lat: endPoint.latitude,lng: endPoint.longitude},{icon: icon});
            } else if (window.proxyArray.indexOf(i) != -1) {
                startMarker = new H.map.Marker({lat: startPoint.latitude,lng: startPoint.longitude},{icon: icon});
                endMarker = new H.map.Marker({lat: endPoint.latitude,lng: endPoint.longitude});
            } else if (window.proxyArray.indexOf(j) != -1) {
                endMarker = new H.map.Marker({lat: endPoint.latitude,lng: endPoint.longitude},{icon: icon});
                startMarker = new H.map.Marker({lat: startPoint.latitude,lng: startPoint.longitude});
            } else {
                startMarker = new H.map.Marker({lat: startPoint.latitude,lng: startPoint.longitude});
                endMarker = new H.map.Marker({lat: endPoint.latitude,lng: endPoint.longitude});
            }

            
            map.addObjects([routeLine, startMarker, endMarker]);
            
        }

        window.linesArray.push(routeLine)
        routeLine.addEventListener('tap', (evt) => { 
            const generateVal = getRandomInteger(1, 4);
            while (generateVal >= window.lines.length) {
                generateVal--;
            }
            if (!isRed(routeLine) && window.lastLine < window.lines.length) {

                if (window.lastLine + generateVal - 1 < window.lines.length) {
                    for (let i = 0; i < generateVal; i++) {
                        createLine(window.lines[window.lastLine][0],window.lines[window.lastLine][1], index, nodeMap, dfs, getRandomInteger);
                        window.lastLine++;
                    }
                    
                }
            }
            
            window.toRed.push({r: routeLine, time: 0})
            window.toRed.forEach(elem => elem.time++);
            window.toRed.forEach(elem => {
                changeColortoRed(elem.r, elem.time);
            });
            const i = nodeMap.get(start)
            const j = nodeMap.get(end)
            window.matrix[i][j] = 0;
            window.matrix[j][i] = 0;
            const letfval = window.dfs(i).length || 0
            const rightval = window.dfs(j).length || 0
            window.peopleLife = window.peopleLife - rightval - letfval
            if (window.peopleLife <= 0) window.peopleLife = 0
            document.getElementById('left').innerHTML = `Devices left: ${window.matrix.length}`
            console.log(window.peopleLife)
            //console.log(rightval)
            //console.log(letfval)
        });
    };

    var router = platform.getRoutingService();
    router.calculateRoute(routingParameters, onResult, (error) => {alert(error.message);});
}