function createCounter() {  
    let count = 0;   

    return function() {  
        // This inner function forms a closure.  
        console.log('Student Name: Phon Kimchhea');  
        count++; // It remembers and accesses the count variable from its parent's scope.  
        return count;  
    };  
}  


const counter = createCounter();  

console.log(counter());
console.log(counter());   
console.log(counter()); 