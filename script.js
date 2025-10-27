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



let num10 = 1
let num11 = num10--

console.log(num10);
console.log(num11);  // h - 0,1

let num12 = 13
let num13 = --num12 //--13 = 12
let num14 = ++num13 //++num13 = ++12 = 13

console.log(num14);

console.clear();


// Assignment operator

let one = 10

let additionVal = 200

one += additionVal // one = one + additionVal



console.log(one);


let two = 1

two -= additionVal // two = two - additionVal = 1-200 = -199

console.log(two); // -199
console.log(additionVal); // 200



let three = 3

let four = 4

three += four // 7
three -= four // 7-4 = 3
three *= four 
three /= four 
three **= four 
three %= four 

console.log(three);



// comparision operator or relational operator

// meaning   operator     example   result

// lessThen     <           5<5       false

// greaterThen  >           5>3       true

// lessThenEq   <=          5<=5      true

// greaterThenEq >=          5>=6     false

// loosyTypeEq   ==          5=="5"   true

// strictlyTypeEq ===        5==="5"  false

// loosyNotEq     !=         5!=5     false

// strictlyNotEq  !==         5!=="5" true



// 1
console.log(10 < 8) // false

// 2
console.log(4 > 2) // true

// 3
console.log(7 <= 10) // true

// 4
console.log(9 >= 9) // true

// 5
console.log(5 == "5") // true

// 6
console.log(3 === "3") // false

// 7
console.log(8 != 6)  // true

// 8
console.log(5 !== "5") // true

// 9
console.log(12 <= 11) // false

// 10
console.log(0 == false) // true

console.clear();

// logical operator


// AND   &&

// false && true = false
// false && false = false
// true && true   = true

// true && false && true = false



// OR    ||

// true || false = true

// false || false = false

// true || true || false = true



// NOT   !

// !(true) = false

// 1
console.log((10 > 5) && (5 == "5"))

// true && true = true

// 2
console.log((7 <= 3) || (4 !== "4"))

// false || true = true

// 3
console.log(!(8 >= 8))

// !(true) = false

// 4
console.log((2 != 3) && (9 <= 9))

// true && true = true

// 5
console.log((5 === "5") || (6 < 4))

// false  || false = false

// 6
console.log((10 != "10") && (7 > 2))

// false && true = false

// 7
console.log((3 >= 3) || !(2 < 1))

// true || true = true

// 8
console.log(!(4 === 4) && (5 <= 6))

// false && true = false

// 9
console.log((9 < 10) && (10 !== "10"))

// true && true = true

// 10
console.log((8 > 5) || !(3 == "3"))

// true || false = true










// function

// date
