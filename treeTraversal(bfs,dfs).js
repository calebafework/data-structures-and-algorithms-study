// Tree Traversal 

// TIME COMPLEXITY

// Access	O(log(n))
// Search	O(log(n))
// Insert	O(log(n))
// Remove	O(log(n)

// Space complexity of traversing balanced trees is O(h) where h is the height of the tree, while traversing very skewed trees (which is essentially a linked list) will be O(n)

// Neighbor - Parent or child of a node
// Ancestor - A node reachable by traversing its parent chain
// Descendant - A node in the node's subtree
// Degree - Number of children of a node
// Degree of a tree - Maximum degree of nodes in the tree
// Distance - Number of edges along the shortest path between two nodes
// Level/Depth - Number of edges along the unique path between a node and the root node
// Width - Number of nodes in a level


// BFS/Traversal

// In this approach, we traverse the tree level by level. We would start at the root,
// then cover all of it's children, and we cover all of 2nd level children, so on and so forth.

// To achieve this form of traversal we can use a queue (First In First Out) data structure. Here's how the overall algorithm would look like:

// Initiate a queue with root in it
// Remove the first item out of queue
// Push the left and right children of popped item into the queue
// Repeat steps 2 and 3 until the queue is empty

function walkBFS(root){
    if(root === null) return
  
    const queue = [root]
    while(queue.length){
        const item = queue.shift()
        // do something
        console.log(item)
  
        if(item.left) queue.push(item.left)
        if(item.right) queue.push(item.right)
     }
  }






// DFS/Traversal :

// In DFS, we take one node and keep exploring it's children until the depth the fully exhausted. It can be done in one of following ways:

// root node -> left node -> right node // pre-order traversal
// left node -> root node -> right node // in-order traversal
// left node -> right node -> root node // post-order traversal

// PREORDER Traversal

    // root node -> left node -> right node 

    // RECURSIVE
    function walkPreOrder(root){
        if(root === null) return
      
        // do something here
        console.log(root.val)
      
        // recurse through child nodes
        if(root.left) walkPreOrder(root.left)
        if(root.right) walkPreOrder(root.left)
      }

    // ITERATIVE
    function walkPreOrder(root){
        if(root === null) return
      
        const stack = [root]
        while(stack.length){
            const item = stack.pop()
      
            // do something
            console.log(item)
      
            if(item.right) stack.push(item.right)
            if(item.left) stack.push(item.left)
         }
      }

// INORDER Traversal

    // left node -> root node -> right node
    
    // RECURSIVE
    function walkInOrder(root){
        if(root === null) return
      
        if(root.left) walkInOrder(root.left)
      
       // do something here
        console.log(root.val)
      
        if(root.right) walkInOrder(root.right)
      }


    // ITERATIVE
    function walkInOrder(root){
        if(root === null) return
      
        const stack = []
        let current = root
      
        while(stack.length || current){
            while(current){
               stack.push(current)
               current = current.left
            }
            const last = stack.pop()
      
            // do something
            console.log(last)
      
            current = last.right
         }
      }

// POSTORDER Traversal

    // left node -> right node -> root node 
    // Trick:  For quick manual PostOrder traversal of any tree: pluck all the leftmost leaf nodes one by one.

    // RECURSIVE
    function walkPostOrder(root){
        if(root === null) return
      
        if(root.left) walkPostOrder(root.left)
        if(root.right) walkPostOrder(root.right)
      
        // do something here
        console.log(root.val)
      
      }

    // ITERATIVE
    function walkPostOrder(root){
        if(root === null) return []
      
        const tempStack = [root], mainStack = []
      
        while(tempStack.length){
            const last = tempStack.pop()
      
            mainStack.push(last)
      
            if(last.left) tempStack.push(last.left)
            if(last.right) tempStack.push(last.right)
          }
      
          return mainStack.reverse()
      }