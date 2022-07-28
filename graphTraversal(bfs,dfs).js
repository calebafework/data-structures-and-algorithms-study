// Graph Traversal 

// TIME COMPLEXITY

// Depth-first search	O(|V| + |E|)
// Breadth-first search	O(|V| + |E|)
// Topological sort	O(|V| + |E|)


// LOOK FOR THIS IN INTERVIEWS:

// A tree-like diagram could very well be a graph that allows for cycles and a naive recursive solution would not work.
//  In that case you will have to handle cycles and keep a set of visited nodes when traversing.
// Ensure you are correctly keeping track of visited nodes and not visiting each node more than once. Otherwise your code could end up in an infinite loop.


// DFS

// Depth-first search is a graph traversal algorithm which explores as far as possible along each branch before backtracking. 
// A stack is usually used to keep track of the nodes that are on the current search path. This can be done either by an implicit recursion stack, or an actual stack data structure.

DFS(node) {
    // Create a Stack and add our initial node in it
    let s = new Stack(this.nodes.length);
    let explored = new Set();
    s.push(node);
 
    // Mark the first node as explored
    explored.add(node);
 
    // We'll continue till our Stack gets empty
    while (!s.isEmpty()) {
       let t = s.pop();
 
    // Log every element that comes out of the Stack
       console.log(t);
 
    // 1. In the edges object, we search for nodes this node is directly connected to.
    // 2. We filter out the nodes that have already been explored.
    // 3. Then we mark each unexplored node as explored and push it to the Stack.
    this.edges[t]
    .filter(n => !explored.has(n))
    .forEach(n => {
       explored.add(n);
       s.push(n);
       });
    }
 }


// BFS

// Breadth-first search is a graph traversal algorithm which starts at a node and explores all nodes at the present depth, 
// before moving on to the nodes at the next depth level. A queue is usually used to keep track of the nodes that were encountered but not yet explored.

// A similar template for doing breadth-first searches on the matrix goes like this. It is important to use double-ended queues and not arrays/Python lists 
// as enqueuing for double-ended queues is O(1) but it's O(n) for arrays.

BFS(node) {
    // Create a Queue and add our initial node in it
    let q = new Queue(this.nodes.length);
    let explored = new Set();
    q.enqueue(node);
 
    // Mark the first node as explored explored.
    add(node);
 
    // We'll continue till our queue gets empty
    while (!q.isEmpty()) {
       let t = q.dequeue();
 
       // Log every element that comes out of the Queue
       console.log(t);
 
       // 1. In the edges object, we search for nodes this node is directly connected to.
       // 2. We filter out the nodes that have already been explored.
       // 3. Then we mark each unexplored node as explored and add it to the queue.
       this.edges[t]
       .filter(n => !explored.has(n))
       .forEach(n => {
          explored.add(n);
          q.enqueue(n);
       });
    }
 }