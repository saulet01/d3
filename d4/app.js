let container = d3.select("#body")
d3.json("countries.geo.json").then(showData)

function showData(mapInfo){
  let bodyHeight = 400
  let bodyWidth = 400

  let projection = d3.geoNaturalEarth1().scale(80).translate([bodyWidth/2,bodyHeight/2])
  let path = d3.geoPath().projection(projection)

  container.selectAll("path").data(mapInfo.features).enter().append("path")
  .attr("d", d => path(d))
  .attr("stroke", "black")
  .attr("fill", "none")

}
