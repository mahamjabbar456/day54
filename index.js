// alert("Hello World.");
alert("I am a Javascript.");

let message;
message = "Hello";
// alert(message);

// We can also declare multiple variable in one line
let user = "John",
    age  = 45;

// We can also change the variable many times.
message = "World";
let Hello = message;
alert(message);
alert(Hello);

// Synatx error if we try to declare a variable again
// let message = "This";    //Cannot redeclare block-scoped variable 'message'

// Valid variable name example
let $ = 5;
let _ = 6;
let myVeryLongName = "String";   //This is camel case example

// We cannot used reversed word as a variable like let , return , function and var.


const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// Tasks
let name,admin;
name = "John";
admin = name;
alert(admin);