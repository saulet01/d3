let container = d3.select(".wrap")

d3.csv("data.csv").then(function(data){
  data.sort((a, b) => {
    return d3.ascending(a.Name, b.Name)
  })
  let filteredData = data.filter( i => i.Age > 25 )
  showData(filteredData)
})

function showData(data){
  for(let i of data){
    write(i.Name + ", " + i.Position + ", "+i.Age)
  }
}

const write = (text) => {
  container.append("div").text(text)
}
