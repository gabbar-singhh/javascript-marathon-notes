console.log("Javascript Marathon | Strings and Regex !");

let dollar = "$"
let love = "❤️"

console.log(dollar.length);     // 1
console.log(love.length);       // 2

// Ways to define Strings: '', "", ``

/*
Escape Sequence:
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
\'	Single quote
\"	Double quote
\	Backslash
*/

let myStr = "Hello, Himanshu"   // index number starts from 0

// substring()
console.log(myStr.substring(1, 4));     // ell  

// slice()
console.log(myStr.slice(1, 4))      // ell

console.log(myStr.slice(0))         // Hello, Himanshu

console.log(myStr.slice(-1))        // u

console.log(myStr.slice(-8));       // Himanshu


// indexOf()
console.log(myStr.indexOf("H"))     // 0

console.log(myStr.indexOf("H", 5))  // searching for "H" after index 5 :OUPUT: 7


let myStr_2 = 'hello himanshuh'

// lastIndexOf()
console.log(myStr_2.lastIndexOf("h"));      // search for the index of the last "h" :OUTPUT: 14

myStr_2.startsWith('+91')               // boolean values
myStr_2.endsWith(('@inueron.ai'))       // boolean values
console.log(myStr_2.includes('@gmail.com'))    // return FALSE

let myStr_3 = "Hello Himanshu aka SYD!"
myStr_3.toLowerCase()     // hello himanshu aka syd!
myStr_3.toUpperCase()      // HELLO HIMANSHU AKA SYD!


/*ASSINGEMENT: STUDY normalize() and NFKD, NFC, NFD, NFKC*/
console.log(myStr_3.normalize());


// padStart()
/* TOTAL LENGTH=10, WILL ADD ZEROES IN THE BEGINING OF THE STRING TO MAKE IT LENGTH=12 */
console.log("HDFC334433".padStart(12, "0"))     // 00HDFC334433


console.log('*'.repeat(10))     // **********

/* 
STRING INTERPOLATION: injecting the variables in the string
*/

let score = 100;
let greeting = `\
${dollar} is at 
value of ${score}
\u2718
`

console.log(greeting)

let stringRaw = String.raw`\u2718`.length     //6
let stringNonRaw = `\u2718`.length               // 1

console.log(stringNonRaw)
