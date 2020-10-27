//EXERCISE 1: The Fortune Teller
/* Store the following into variables: job title, geographic location, annual salary, company name. 
Output your fortune to the console like so: "You will be a X in Y, making $N for Z." */
let title = "Developer";
let geographic = "Canada";
let salary = "930000";
let company = "a startup";

document.write(`You will be a ${title} in ${geographic}, making $${salary} for ${company}.` + "<br>");

//EXERCISE 2: The Age Calculator
//Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.
let currentYear = 2020;
let birthYear = 1996;
let age = 2020 - 1996;

document.write(`They are ${age} years old.` + "<br>")

//EXERCISE 3: The Lifetime Supply Calculator
//Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
let myAge = 24;
let maxAge = 110;
let estimatedAmt = 12;
let perDay = (maxAge - myAge) * 12;

document.write(`You will need ${perDay} to last you until the ripe old age of ${maxAge}` + "<br>");

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let radius = 6;
let circumference = (2 * Math.PI * radius).toFixed(1); //The toFixed() method formats a number using fixed-point notation.

document.write(`The circumference is ${circumference}` + "<br>");

//EXERCISE 5: The Temperature Converter
//Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C"
let celcius = 23;
let fahrenheit = (celcius * 9 / 5) + 32;
document.write(`${celcius}°C is ${fahrenheit}°F` + "<br>");
fahrenheit = 88;
celcius = ((fahrenheit - 32) * 5 / 9).toFixed(1);
document.write(`${fahrenheit}°F is ${celcius}°C` + "<br><br>");


// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
let squareNumber = (num) => Math.sqrt(num);
document.write(`The result of squaring the number 49 is ${squareNumber(49)}` + "<br>");

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
let halfNumber = (num) => num / 2;
document.write(`Half of 26 is ${halfNumber(26)}` + "<br>");

// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.


// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).