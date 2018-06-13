import { Student } from './student';
import { Person } from './person';

// Template String
var myName = 'Jaba';
console.log(`Hello ${myName}`);

//Constants and blocks scopes
// varibales declared with var is moved to top of function
//let and const are block level variables
function demo(arr) {
   if (arr.length < 2) {
       var flash = 'Flashing';
    } else {
        var isso = "Drawing";
        console.log(isso);
        console.log(flash);
    }
}

demo(["foo", "baar", "bam"]);

function first() {
    function second() {
        return 7;
    }
    return second();
    function second() {
        return 12;
    }
}

console.log(first());

// Destructuring
let arr = ["foo", "baar", "bam"];
let [arr1, arr2, arr3] = arr;
console.log(arr2);

let myObject = {
    drawCircle : function(r) { console.log(Math.PI * r * r)},
    drawText: function(text) { console.log(`Drawing ${text}`)}
}
let {drawCircle, drawText} = myObject;

drawText("Sample");

// Spread & Rest Operators
// Spreads collections into individual elements

var arry1 = [3,4,5];
var arry2 = [1,2,...arry1];

console.log(arry2);

// Rest creates a collection from individual elements
function newDemo(...args) {
    console.log(args);
}

newDemo("foo");
newDemo("foo", "bar");
newDemo("foo", "bar", true, 12);

//Arrow functions
// Javasript version of Lamda expression

// Problem -- this lost its significance in nested functions
let someObj = {
    firstName : "Foo",
    lastName : "Bar",
    getFullName : function() {
        return this.firstName + " " + this.lastName;
    },
    getFullNames : function() {
        
        var that = this;
        function nestFunc() {
            
            return that.firstName + " " + that.lastName;
        }
        return nestFunc();
    }


}
console.log(someObj.getFullName());
console.log(someObj.getFullNames());

let numbers = [2,3, 4, 5];
// usual approach
let num = numbers.map(function(v) {
    return v * 2;
})
// lamda
let num2 = numbers.map((v) => v * 2);

console.log(num);
console.log(num2);


// Classes and Inheritance
// Extends, interfaces everything works
//need to transpile the code before testing below code .
// Command tsc app.ts , then node app.js

// Class is written in different clas and exported here.
/*let foo : //new Student("N", "N", 28); 
         Person = {
             firstName : "Rocky",
             lastName : "edfj",
             age : 32
         }

let obj = new Student(foo);
console.log(obj.getFullName());*/



// Decorators (ES 7) -  Class, method, paramter, property
// Another name for annotation

function nonWritable() {
        return function(target, key) {
            return Object.defineProperty(target, key, {
                writable : false
            })
        }
}
class Test {
    // Works on commenting . Doesnt work on uncommenting as property need to be read only.
   // @nonWritable() 
    test : string = "testing";
    
}

// Additional types
// enum, void,

// http://typescriptlang.org > documentation > handbook




