const hash = (string, max) => {
    let hash = 0;
    for( let i = 0; i < string.length; i++){
        hash += string.charCodeAt(i);
    }
    return hash % max
}

let hashTable = function () {
    let storage = [];
    const storageLimit = 4;

    this.print = function (){
        console.log(storage)
    }

    this.add = function(key, value){
        let index  = hash(key, storageLimit); // take the key and check if the bucket is free
        if(storage[index] === undefined) {
            // if it's free then push the key n value pair in the storage
            storage[index] = [
                [key, value]
            ]
        } else {
            //if not then throw false
            let inserted = false;
            for(let i = 0 ; i < storage[index].length; i++){
                if(storage[index][i][0] === key) {
                    //if the key alrady exist then set value
                    storage[index][i][1] = value;
                    //throw true
                    inserted = true;
                }
            }
            if(inserted === false) {
                //if the key ain't exist push the pair (key, value)
                storage[index].push([key, value])
            }
        }
    }

    this.remove = function(key){
        let index = hash(key, storageLimit);
        if(storage[index].length === 1 && storage[index][0][0] === key){
            //if there's only one item which is equal to the passed key then delete
            delete storage[index]
        } else {
            /*if there are other items in the bucket
            then search through the bucket and find
            the key and  delete*/
            for(let i = 0 ; i < storage[index].length; i++){
                if(storage[index][i][0] === key){
                    delete storage[index][i]
                }
            }
        }
}
     this.lookup = function(key){
         let index = hash(key, storageLimit);
         if(storage[index] === undefined){
             return undefined
         } else{
             for(let i = 0; i < storage[index].length; i++){
                 if(storage[index][i][0] === key){
                   return storage[index][i][1]  
                 }
             }
             
         }
     }
}


let ht = new hashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();