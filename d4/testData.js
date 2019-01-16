let store = {}
// function loadData(){
//   let promise = d3.csv("data.csv")
//   return promise.then( person => {
//     store.person = person
//     return store;
//   })
// }

d3.csv("data.csv").then((person) => {
  store.person = person
  return store;
})

console.log(store)
