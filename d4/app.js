let container = d3.select("#body")
d3.csv("data.csv").then(showData)

function showData(clients){
  let max = d3.max(clients, d => d.Weight)
  let widthScale = d3.scaleLinear().range([0, 300]).domain([0, max])

  let positionScale = d3.scaleBand().range([0,200]).domain(clients.map( d => d.Name)).padding(0.3)

  let join = container.selectAll("rect").data(clients)
  join.enter()
  .append("rect")
  .attr("fill", "blue")
  .attr("width", d => widthScale(d.Weight))
  .attr("height", positionScale.bandwidth())
  .attr("y", d => positionScale(d.Name))

  let xAxis = d3.axisBottom(widthScale).ticks(5).tickFormat( d => d + " kg")
  d3.select("#xAxis").attr("transform","translate(50, 200)")
  .call(xAxis)

  let yAxis = d3.axisLeft(positionScale)
  d3.select("#yAxis").attr("transform", "translate(50, 0)")
  .call(yAxis)
}
