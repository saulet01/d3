let changeTitle = () => {
  let valuOf = d3.select("#inp-change").property("value");
  d3.select("h5").text(valuOf);
}

let changePar = () => {
  let valuOf = d3.select("#inp-change").node().value;
  d3.select("#saken").text(valuOf);
}

let changeAll = () => {
  let valuOf = d3.select("#inp-change").property("value");
  d3.select("ul").append("li").attr("class", "list-group-item").text(valuOf);
}

let removeActive = () => {
  d3.select("li:last-child").remove();
}

let showBarcelona = () => {
  d3.select(".card-img-top").attr("src", "https://ob9a8415roh4djoj110c31a1-wpengine.netdna-ssl.com/wp-content/uploads/2013/02/barcelona-aerial-view.jpg");
  d3.selectAll(".jjj").style("display", "none");
}
