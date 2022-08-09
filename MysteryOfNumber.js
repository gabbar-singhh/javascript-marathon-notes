// 👉 Integer Literals

/*
100
0xff ==> 255
0b, 0B
*/

// 👉 Floating point literals
/*
3.03 ==> 3.03 * 10 to the power 23
let billion =  1_000_000000 (not for production use)

*/

// 👉 Arthematic

/*
console.log(Math.pow(2, 2))
console.log(Math.round(.6))
console.log(Math.ceil(.6))
console.log(Math.floor(.6))
console.log(Math.abs(-5))
console.log(Math.min(2, 3, 4, 4, 5, 2, 9, 12))
console.log(Math.min(2, 3, 4, 4, 5, 2, 9, 12))
console.log(Math.min(2, 3, 4, 4, 5, 2, 9, 12))
console.log(Math.random())
*/

// 👉 ES6 NEW METHOD
/*
console.log(Math.cbrt(27))
console.log(Math.hypot(3, 4))
console.log(Math.clz32(0xff))

Infinity, NO error; just Infinity

// console.log(Number.isNaN("3"));
// console.log(Number.parseInt("3a"));
// console.log(Number.isNaN("3a"));
*/


/*
let statementOne = .3 - .2
let statementTwo = .2 - .1

console.log('statementOne: ', statementOne)
console.log('statementTwo: ', statementTwo)
console.log(statementOne === statementTwo)
*/

// 👉 BigInt
let myBigInt = 123n
console.log(myBigInt)
