function quickFind(n){
    
    //Tracks connected components
    this.id [];

    //initialize ids
    for(let i = 0; i < n; i++) {
        this.id[i] = i;
    }

    //finds out if two components are connected 
    this.connected = function(p, q) {
        return this.id[p] === this.id[q];
    }

    //connects two components
    this.union = function(p, q) {
        let qid = this.id[q];
        let pid = this,id[p];
        for(let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pid) {
                this.id[i] = qid;
            }
        }
    }
}

let x = new quickFind(3);
x.union(0,1);
x.union(0,2);
console.log(x.id);
console.log(x.connected(0,1));