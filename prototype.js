console.log("Hello");

//  Everything in JS is an object -

const obj ={
    name:"Chirag", Age :24
};

//  Every datatype and variable is also an object in JS, Do Variablename.__proto__ to check

let num =24;
let name = "Chirag";
let bool = true;

//  Function, under the hood is also an object in Js - 

function sum (a,b){
    return a+b;
};

(sum(5,6));

//  Prototype chaining

let details   = {
    name : "Chirag Wankhede",
    age : 24,
};

let second = {
    name :"Chirag",
    username : "coder",
    alias : function () {
    console.log(`${this.name} is a ${this.username}`);
    },

};

details.__proto__ = second;

console.log(details.alias());

// Prototype Inheritance - 

// 1 - Function Constructor - 

function Animal (name){
    this.name = name;
};


Animal.prototype.sayHello = function(){
    console.log("Hello, I am" + this.name)
};


var Animal1 = new Animal ("Nike");


function Dog (name,breed){
    Animal.call(this,name);
    this.breed = breed;
};


Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;


Dog.prototype.bark = function ( ){
    console.log("Woof Woof");
};

var Dog1 = new Dog("Max" , "Labrador");

//  This is an examle of prototype inheritance, where Dog1 has inheritated the properties of animal inside its prototype.


// instanceof - To check if animal is the prototype od Dog1 we use instanceof-

console.log(Dog1 instanceof Animal);


//  setPrototypeof() function - 

var animal22 = {
    sound : function(){
        console.log("I am an animal");
    },
};

var mouse = Object.create(animal22);

var cat = {
    sound : function(){
        console.log("Meow Meow");
},
};

//  Here first prototype of animal22 was inheriated inside mouse varibale, but using setPrototypeof() we inheriated cat prototype inside mouse variable.
Object.setPrototypeOf(mouse,cat);


// How to create object without using prototype - Object.create will asing object to prototype of the variable

var newName = Object.create(null);

// Structured Clone() - Newly added function in JS to deep clone an object -

const user = {
    name: "John",
    about : {
        age: 30,
        city: "New York",
    }
};

const deepClone = structuredClone(user);

console.log(deepClone);