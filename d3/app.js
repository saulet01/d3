let container = d3.select("#wrap")
d3.csv("data.csv").then(showData)

const KG_PER_POUND = 0.45
const METER_PER_INCH = 0.0254

function write(text){
  container.append("div").text(text)
}

function showData(clients){
  let max = d3.max(clients, d => d.Weight)
  let scale = d3.scaleLinear()
  .range([0, 300])
  .domain([0, max])
  let join = container.selectAll("div").data(clients)

  join.enter()
  .append("div")
  .text( d => d.Name + ": " + scale(parseInt(d.Weight)))
  .style("width", d => scale(d.Weight) + 'px')
  .style("background-color", "blue")
  .style("margin", "5px")
  .style("color", "white")
}
