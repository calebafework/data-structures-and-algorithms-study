
// Time Complexity of O(1)


// HOW IT WORKS 



// A hash table (or hash map) is a data structure that maps keys to values. 
// Hash tables combine lookup, insert, and delete operations in an efficient way. 
// The key is sent to a hash function that performs arithmetic operations on it. 
// The result (called the hash value or hash) is an index of the key-value pair.

// Think of this like a signature on a block of data that allows us to search in constant time
// A hash table operates like a dictionary that we can map to get from the hash to the desired data.

// Highly recommended for algorithms that prioritize search and data retrieval operations.

// They are made up of two parts: 
// 1) Object: An object with the table where the data is stored. 
//      The array holds all the key-value entries in the table. The size of the array should be set according to the amount of data expected.
// 2) Hash function (or mapping function): This function determines the index of our key-value pair. 
//      It should be a one-way function and produce the a different hash for each key.



// WHEN TO USE

// Hashing and trees perform similar jobs, but various factors in your program determine when to use one over the other.
// Trees are more useful when an application needs to order data in a specific sequence.
// Hash tables are the smarter choice for randomly sorted data due to its key-value pair organization.


// KEY -> HASH FUNCTION -> INDEX 




// To implement a hash table using JavaScript, we will do three things: create a hash table class, add a hash function,
//  and implement a method for adding key/value pairs to our table.

class HashTable {
    constructor() {
      this.values = {};
      this.length =  0;
      this.size =  0;
    }
  //The constructor contains an object in which we’re going to store the values, the length of the values, 
  //  and the entire size of the hash table: meaning how many buckets the hash table contains. We will be storing our data in these buckets.

    calculateHash(key) {
      return key.toString().length % this.size;
    }
  // This function takes the provided key and returns a hash that’s calculated using an arithmetic modulus.
  
  // Finally, we need a method to insert key/value pairs. Take a look at the code and see this in action:

    // The first thing we do here is calculate a hash for our key. If the hash does not already exist, we save it to our object store.
    // The next check we perform is on the hash. If it doesn’t have a key saved, we save the key and value and increment the size of our hash table.
    // Searching in a hash table goes very fast. Unlike with an array where we have to go through all of the elements until we reach the item we need, 
    // with a hash table we simply get the index.

    add(key, value) {
      const hash = this.calculateHash(key);
      if (!this.values.hasOwnProperty(hash)) {
        this.values[hash] = {};
      }
      if (!this.values[hash].hasOwnProperty(key)) {
         this.length++;
      }
      this.values[hash][key] = value;
    }
  
    search(key) {
       const hash = this.calculateHash(key);
       if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
         return this.values[hash][key];
       } else {
         return null;
       }
    }
}   

  
/// Note that we used an Object to represent our hash table. Objects in JavaScript are actually implemented using hash tables themselves!

  //create object of type hash table
  const ht = new HashTable();
  //add data to the hash table ht
  ht.add("Canada", "300");
  ht.add("Germany", "100");
  ht.add("Italy", "50");
  
  //search
  console.log(ht.search("Italy"));