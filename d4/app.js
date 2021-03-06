let container = d3.select("#body")
Promise.all([
    d3.csv("dataset.csv"),
    d3.json("countries.geo.json")
]).then(showData)

function showData(datasources) {
    let mapInfo = datasources[1]
    let data = datasources[0]
    console.log(data)

    let dataIndex = {}
    for (let c of data){
      let country = c.Country;
      dataIndex[country] = +c.Magnitude
    }

    mapInfo.features = mapInfo.features.map(d => {
      let country = d.properties.name;
      let magnitude = dataIndex[country]
      d.properties.Magnitude = magnitude;
      return d;
    })

    let maxEarthquake = d3.max(mapInfo.features, d => d.properties.Magnitude)
    let medianEarthquake = d3.median(mapInfo.features, d => d.properties.Magnitude)
    let cScale = d3.scaleLinear().domain([0, medianEarthquake, maxEarthquake]).range(["white", "orange", "red"])

    let bodyHeight = 400
    let bodyWidth = 400

    var projection =
        d3.geoMercator()
            .scale(80)
            .translate([bodyWidth / 2, bodyHeight / 2])

    var path = d3.geoPath()
        .projection(projection);

    container.selectAll("path").data(mapInfo.features)
        .enter().append("path")
        .attr("d", d => path(d))
        .attr("stroke", "black")
        .attr("fill", d => d.properties.Magnitude ? cScale(d.properties.Magnitude) : "white")
}
