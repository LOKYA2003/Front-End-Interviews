
// Differenct data
// Primittives and none primitives 

// string,number,boolean,undefined,nul

// Arrays & Ojects


/*

const name = 'Lokesh'
const num = 10;
const isTrue = true;

console.log(typeof name)
console.log(typeof num)
console.log(typeof isTrue)

// Non

const arr = [12,34,2,1]
const ob = {
    name:"lokesh"
    
}


console.log(typeof arr)
console.log(typeof ob)
 

// Let Var Const

const num = 10;
function myName() {
    

    console.log(num);
}

console.log(num);

myName()

*/

// Promise 

const myPromise = new Promise((resolve,reject) =>{

    fetch('https://dummyjson.com/products/1').then(response => {
        return response.json()
    }).then(data => resolve(data)).catch(error => reject(error))
})


console.log(myPromise.then(value => console.log(value)));