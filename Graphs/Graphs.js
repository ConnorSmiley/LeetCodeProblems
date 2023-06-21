class Graph {
   constructor() {
       this.adjacenyList = {}
   }
   addVertex(vertex) {
       if(!this.adjacenyList[vertex]) this.adjacenyList[vertex] = []
   }
   addEdge(v1, v2) {
       this.adjacenyList[v1].push(v2)
       this.adjacenyList[v2].push(v1)
   }
   removeEdge(v1, v2) {
       // if(v1) {
       //    this.adjacenyList[v1].pop(v1)
       // }
       // if (v2) {
       //     this.adjacenyList[v2].pop(v2)
       // }
       this.adjacenyList[v1] = this.adjacenyList[v1].filter(x => x !== v2)
       this.adjacenyList[v2] = this.adjacenyList[v2].filter(x => x !== v1)
   }
   removeVertex(vertex){
       for (let i = 0; i < this.adjacenyList[vertex].length; i++){
           const adj = this.adjacenyList[vertex].pop()
           this.removeEdge(vertex, adj)
       }
       delete this.adjacenyList[vertex]
   }
}


const graph = new Graph()
graph.addVertex("Tokyo")
graph.addVertex("Texas")
graph.addVertex("NewYork")
graph.addVertex("Cali")

graph.addEdge("Texas", "Tokyo")
graph.addEdge("Texas", "Cali")
// graph.removeEdge("Texas", "Tokyo")
// graph.removeEdge("Tokyo", "Texas")
// graph.removeEdge("Cali", "Texas")

graph.removeVertex("Tokyo")

console.log(graph)
