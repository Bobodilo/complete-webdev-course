 function mySet (){
     const collection = []; // to store elements

     //This method checks if an element is in the collection
     this.has = function (element){
             return (collection.indexOf(element) !== -1)    
     }

     //This method returns the whole collection
     this.values = function(){
         return collection
     }

     // This method adds an element to the collection
     this.add = function(element){
         if(!this.has(element)){
             collection.push(element)
             return true;
         } else {
             return false
         }
     }
     
    //This method removes elements from the collection
     this.remove = function(element){
         if(this.has(element)){
             index = collection.indexOf(element);
             collection.splice(index,1);
             return trueЛO
         } else {
             return false
         }
     }

     //This method returns the size of the collection
     this.size = function(){
         return collection.length
     }

     //In the ES^ remove is delete and size is a not a method but a property

 //This method is gonna return a union of sets
 this.union = function(otherSet){
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach(e => unionSet.add(e));
    secondSet.forEach(e=> unionSet.add(e));
    return unionSet

 }

// This method is gonna return the intersection of the two sets
this.intersection = function(otherSet){
    const intersectionSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(e => {if(otherSet.has(e)){
        intersectionSet.add(e)
    }});
    return intersectionSet
}

// This method returns the difference in the two sets
this.difference = function (otherSet){
    const differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(e => {if(!otherSet.has(e)) {
        differenceSet.add(e)
    }} );
    return differenceSet
} 

// This method is gonna test if the set is a subset of a different set
this.subset = function(otherSet){
    const firstSet = this.values();
   return firstSet.every(value => {return otherSet.has(value)})
}

 }

const setA = new mySet();
const setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())

//Using the built in Set function of js (ES6)

const setC = new Set();
const setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("a"))