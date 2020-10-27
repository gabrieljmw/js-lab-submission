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
document.write(`${fahrenheit}°F is ${celcius}°C`);