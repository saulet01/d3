let container = d3.select("#body")
d3.csv("data2.csv").then(showData)

function showData(data){
  let bodyHeight = 200
  let bodyWidth = 400

  data = data.map(d => ({
      date: new Date(d.date),  //Convert string into date
      price: +d.price //Convert string into number
  }))

  let maxValue = d3.max(data, d => d.price)

  let yScale = d3.scaleLinear().domain([0, maxValue]).range([bodyHeight, 0])
  container.append("g").call(d3.axisLeft(yScale))

  let xCale = d3.scaleTime().domain(d3.extent(data, d => d.date)).range([0, bodyWidth])
  container.append("g")
  .attr("transform","translate(0, "+bodyHeight+")")
  .call(d3.axisBottom(xCale).tickFormat(d3.timeFormat("%b")))  //filter to months

  valueline = d3.line().x(d => xCale(d.date)).y(d => yScale(d.price)).defined(d => !!d.price)  //get rid of null elements
  container.append("path").datum(data).attr("d", valueline).attr("fill", "none").attr("stroke", "blue")
}
