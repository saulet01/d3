let container = d3.select("#wrap")
let clients = [{
  Name: "Client0"
}]
let count = 1;

function addClient(){
  clients.push({
    Name: "Client" + count
  })
  count = count + 1
  showData(clients)
}

function removeClient(){
  clients = clients.slice(0, -1) //not show the last one
  count = count - 1
  showData(clients)
}

function showData(clients){
  let join = container.selectAll("div").data(clients);
  join.enter().append("div").text(d => d.Name + " - New")
  join.exit().remove()
  join.text(d => d.Name + ": Updated")
}
showData(clients)
