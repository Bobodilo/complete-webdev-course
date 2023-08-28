//print, enqeue (push), dequeue(shift), front, size, isEmpty

function Queue () {
    const collection =[];

    //this method prints the collection
    this.print = function (){
        console.log(collection)
    }

    //this method adds an element to the end of the collection
    this.enqueue = function(element){
        collection.push(element)
    }
    
    // this method pops an element from the beginning of the collection
    this.dequeue = function(){
        return collection.shift()
    }

    // this method showswhat's in the 0th index
    this.front = function(){
        return collection[0]
    }

    // this method returns the size of the arr
    this.size = function (){
        return collection.length
    }

    //This shows if the collection is enpty
    this.isEmpty = function (){
        return (collection.length === 0)
}
}

const q = new Queue();

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue("a");
q.print();
console.log(q.front())


function priorityQueue (){
    const collection = [];
    // This method displays the collection
    this.printCollection = function(){
        console.log(collection)
    }
    // tThis method add an element to the collection provided its priority
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element)
        } else {
            let added = false;
            for (let i=0 ; i < collection.length; i++){
                if(element[1]< collection[i][1]){
                    collection.splice(i,0, element)
                    added = true;
                    break;
                }   
            }
             if(!added){
            collection.push(element);
        }

        }
       
    }

     // this method pops an element from the beginning of the collection
    this.dequeue = function(){
        const value = collection.shift();
        return value[0]
    }

    // this method showswhat's in the 0th index
    this.front = function(){
        return collection[0]
    }

    // this method returns the size of the arr
    this.size = function (){
        return collection.length
    }

    //This shows if the collection is enpty
    this.isEmpty = function (){
        return (collection.length === 0)
}

}

const pq = new priorityQueue();

pq.enqueue(["Alain", 1]);
pq.enqueue(["Bonheur", 2]);
pq.enqueue(["Claura", 3]);
pq.enqueue(["Daniel", 4]);
pq.dequeue();
pq.printCollection()

