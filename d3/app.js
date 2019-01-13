let container = d3.select(".wrap")

d3.csv("data.csv").then(dataLoaded)

function dataLoaded(data){
  showData(data)
  statistics(data)
}

function showData(data){
  for(let i of data){
    write(i.Name + ", " + i.Position + ", "+i.Age)
  }
}

function statistics(data){
  let total = d3.sum(data, (i) => {
    return parseInt(i.Age)
  })
  total = `The sum is ${total}`
  header(total)

  let mean = d3.mean(data, (i) => {
    return parseInt(i.Age)
  })
  mean = `The Mean is ${mean}`
  header(mean)

  let extent = d3.extent(data, (i) => {
    return parseInt(i.Age)
  })
  extent = `The maximum and minimum is ${extent}`
  header(extent)
}

const write = (text) => {
  container.append("div").text(text)
}

const header = (text) => {
  container.append("h3").text(text)
}
