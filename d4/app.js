let container = d3.select("#body")
d3.csv("sales.csv").then(showData)

function showData(data){
  let bodyHeight = 200
  let bodyWidth = 400

  data = data.map(d => ({
      country: d.country,
      sales: +d.sales
  }))

  let pie = d3.pie().value(d => d.sales)
  let colorScale = d3.scaleOrdinal().range(d3.schemeCategory10).domain(data.map(d => d.country)) //create color scheme for each country

  let arc = d3.arc().outerRadius(bodyHeight/2).innerRadius(50)

  let g = container.selectAll(".arc").data(pie(data)).enter().append("g")
  g.append("path").attr("d", arc).attr("fill", d => {return colorScale(d.data.country)})
}
