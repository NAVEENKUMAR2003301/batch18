// variables 

// var   - global scope
// let   - block scope
// const - block scope


// rules

// var

var a = 10  // declration // intialiazation

a = 12      // reuse // reIntia

var a = 35  // redeclration

console.log(a);


// let 

let b = 1  // declration // intialiazation

b = 5      // reuse //reIntialiazation

// let b = 60 // not accept reDec

console.log(b);


// const

const c = 50 // dec // int

// c = 70    // not accept // reuse // reInt

// const c = 60 // not accept reDeclration

console.log(c);


// printing Statement

// 1. console.log()
//  let c2 = 5

// console.log(c2);


// 2. alert()

// alert("hello team this is our first class")

// 3. confirm()

// let userWish = confirm("do you like frontend?")

// console.log(userWish);



// 4. prompt()

// let userName = prompt("what is your name ? ")

// console.log(userName);


// 5. document.writeLn

// document.writeln("copyright")


// console methods

// console.log()

console.log(100);


// console.warn()

console.warn(100)

// console.error()

console.error(100)

// console.clear()

console.clear();



// DataTypes

// primitive datatypes

// string - "123", "abc"

let str = "one"

console.log((str));


// number

let num = 123

console.log(typeof(num));


// boolean

let boo = false

console.log(typeof(boo));


// undefined

let un;

console.log(un);


// null

// let nu = prompt("hi")

// console.log(nu);

console.clear();

// non primitive datatypes

// array

// []

let fruit = ["jack fruit","apple","orange","banana","cherry","watermelon",1,true]

console.log(fruit);
console.log(fruit[1]);
console.log(fruit[0]);
console.log(fruit[0]);
console.log(fruit[fruit.length-1]);




// object

//{}

let fruit1 = {

    redFruit : ["apple","cherry"],

    yellowFruit : ["jackFruit","banana"],

    bigFruit : "watermelon"

}

console.log(fruit1);
console.log(fruit1.redFruit[0]);
console.log(fruit1.bigFruit);
console.log(fruit1.yellowFruit[1]);

console.clear();

// operators

// Arithmetic operators


// addition        +
// subraction      -
// multiplication  *
// division        /
// modulus         %
// exponencial     **

// increment operator (++)

// post inc    var++
// pre inc     ++var

// decrement operator  (--)

// post dec    var--
// pre  dec    --var


console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(3%10);
console.log(3**2); //3^2 = 3*3 = 9



// increment operator

let num1 = 10

num1     = ++num1

console.log(num1);



let num2 = 2 

let num3 = num2++ 

console.log("num2 : ",num2);
console.log("num3 : ",num3);

let num4 = 5       
let num5 = ++num4  
let num6  = num5++ 

console.log("num4 : ",num4); // num4 : 6
console.log("num5 : ",num5); // num5 : 7
console.log("num6 : ",num6); // num6 : 6


let num7 = 1      // null
let num8 = num7-- // null // 1
let num9 = ++num8 // ++num8 // ++num8 = ++1 = 2

console.log("num7 : ",num7); // sha - 0  bo - 0 // num 7 : 0
console.log("num8 : ",num8); // sha - 2  bo - 2 // num 8 : 2
console.log("num9 : ",num9); // sha - 2  bo - 2




// function

// date
