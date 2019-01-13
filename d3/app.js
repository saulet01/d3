let container = d3.select(".wrap")

d3.csv("data.csv").then(dataLoaded)

function dataLoaded(data){
  showData(data)
  showAge(data)
}

function showData(data){
  for(let i of data){
    write(i.Name + ", " + i.Position + ", "+i.Age)
  }
}

function showAge(data){
  let total = data.reduce( (accum, i) => {
    let age = parseInt(i.Age)
    return accum + age
  }, 0)
  container.append("h3").text(total)
}

const write = (text) => {
  container.append("div").text(text)
}
