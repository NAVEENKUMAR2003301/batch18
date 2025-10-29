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


console.log( 10 !== true);

// true


console.clear();

// concatination (+)


let str1 = "hello"

let str2 = "world"

let totalVal = str1 +" "+ str2


console.log(totalVal);


// Template litral

let str3 = "spider"

let str4 = "man"

let finalVal = `${str3} ${str4}`

console.log(finalVal);



// Type conversion


// string anything string

// string


console.log(("1"+"1"));
console.log(("1"+1));
console.log(("1"+true));
console.log(("1"+undefined));
console.log(("1"+null));
console.log(("1"+[1,2]));
console.log(("1"+{k:1}));

// number


console.log((1 + "1"));
console.log((1 + 3));
console.log((1 + true));
console.log((1 + undefined));
console.log((1 + null));
console.log((1 + [1,2]));
console.log((1 + {a:1}));


// boolean


console.log(true + "1");
console.log((true + 2));
console.log((true + true));
console.log((true + undefined));
console.log((true + null));
console.log((true + [1,2]));
console.log((true + {r:4}));

console.clear();


// Explicit Type Conversion


// number

// constractor (Number)


console.log(12 + Number("12"));
console.log(Number())
console.log(Number(""))
console.log(Number(true))
console.log(Number(false))
console.log(Number("abc"))
console.log(Number(undefined))
console.log(Number(null))
console.log(Number([100,234]))
console.log(Number({k:2}))


// boolean

// (Boolean)

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean(-1));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


// flow control statement

// conditional statement

// if statement

// condition true = allow

// if(condition){
//     // statement
// }

if(5=="5"){
    console.log("the condition is true");  
}


// if else statement

if(5>=6){
    console.log("condition true");
    
}else{
    console.log("condition false");
    
}

// if else if statement

let hour = 23

if(hour >= 1 && hour <= 6){
    console.log("Good morning");
    
}else if(hour >= 7 && hour <= 12){
    console.log("this is bright morning");
    
}else if(hour >= 13 && hour <= 17){
    console.log("good afternoon");
    
}else if(hour >= 18 && hour <= 20){
    console.log("good evening");
    
}else{
    console.log("Good night");
    
}

// nested if statement

// let uName = prompt("enter your name")
// let age =prompt("enter your age")
// let height = prompt("enter your height")
// let weight =prompt("enter your weight")

// if(age >= 18){
//     if(height >= 168){
//         if(weight>=68){
//             alert(uName+" congradulation your selected"); 
//         }else{
//             alert(uName+" your weight is not eligible bcz your weight only :-"+weight+"kg . eligible weight is : - 68Kg min");
            
//         }
//     }else{
//         alert(uName + " your height is not eligible bcz your height only :-"+height+"cm. eligible height is :- 168cm min");
        
//     }
// }else{
//     alert(uName + " your age is not eligible bcz your age only :-"+age + "old. eligible age is 18 years old.");
    
// }




// switch statement

// switch(){
//     case value : statement ; break;
//     case value : statement ; break;
//     case value : statement ; break;
// }

let trafficLight = "green"

switch(trafficLight){
    case "red" : console.log("stop the vechile"); break;
    case "yellow" : console.log("start the vechile"); break;
    case "green" : console.log("go the vechile"); break;    
}

// ternary operator

// condition ?  statement : statement;

let PwdInput = -1

PwdInput ? console.log("welcome home page") : console.log("your password is incorrect");

console.clear();


// looping statement


// for loop

// syntex

// for(intialiazation;condition;iteration){
//     // statement
// }

for(let a = 1; a<=5 ; a++){
    console.log(a); // 1  2  3 4 5
}

// a=1 ; 1<=5 = true ; 1++ = 2
// a=2 ; 2<=5 = true ; 2++ = 3
// a=3 ; 3<=5 = true ; 3++ = 4
// a=4 ; 4<=5 = true ; 4++ = 5
// a=5 ; 5<=5 = true ; 5++ = 6
// a=6 ; 6<=5 = false ; 

for(let a = 1; a<=10 ; a++){
    if(a%2==1){
        console.log(a); 
    }else{
        console.log("even : ", a);
        
    }
}

console.clear();


// while loop

/// syntex

// intialiazation
// while(condition){
//     // statement
//     iteration
// }   

let val = 10 // 10 // 9 // 1 // 0 -1

while(val>=20){ // 10>=0= true // 9>=0 true // 1>=0 0>=0 , -1>=0 false
    console.log(val); // 10 9 .. 1 0
    val-- // 10-- = 9, 9-- = 8 1-- = 0 0-- = -1
}

// do while loop

// initialiazation
// do{
//     // statement
//     // iteration
// }
// while(condition)

let val1 = 10

do{
    console.log(val1);
    val1--
    
}
while(val1>=0)

// for of loop

// string , array , function

let str11 = "javascript"

for(let ab of str11){
    console.log(ab);
}

let arr1= ["apple", " banana","orange"]

for(let add of arr1){
    console.log(add);
    
}

// for in loop

// object

let fruit2 = {
    redFruit : "apple",
    yellowFruit : "banana",
    bigFruit : "watermelon"
} 

for(let abc in fruit2){
    console.log(fruit2[abc]);
    
}

console.clear();


// function

// function ted(a,b){
//     // statement
//     // return
//     // yield
// }

// ted()


function ted1(){
    console.log("hello world");
    if(5===5){
        console.log("the condition is true");
        
    }
    for(let i = 0 ; i<=4;i++){
        console.log(i);
        
    }
    
}

ted1()


function ted2(uname,uAge){
    console.log("name :", uname);
    console.log("age :", uAge);
}

ted2("kamal",22)
ted2("livin",21)


let uDetials = {
    uname : "john",
    Urole : "developer"
}

function userDetials(){
    console.log(uDetials.uname);
    console.log(uDetials.Urole);
}

userDetials()


function returnVal(a){
    return a
}

let storeData = returnVal(30);

console.log(storeData);

function extraVal(){
    console.log(50+storeData);
    
}

extraVal()

console.clear();


// scopes

// var - global scope , function scope
// let - block scope
// const - block scope

console.log(a1);

var a1 = 10



let b1 = 20 // temporal dead zone
console.log(b1); 

const c1 = 30

console.log(c1);


function scopeCheck(){
    if(true){
        var gScope = "global scope"
        let bScope = "black scope"
        const bScope1 = "black scope"
        console.log(bScope);
        console.log(bScope1);
    }
    console.log(gScope);
    
    
    
}

scopeCheck()




























// function

// date

