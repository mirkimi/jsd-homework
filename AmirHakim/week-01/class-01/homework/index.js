//Homework: Variables and Primitive Data Types
//The Age Calculator
let currentYear = new Date().getFullYear();
let birthYear = prompt("Enter your birth year: ");
let age = currentYear - birthYear;

console.log(`They are either ${age} or ${age -1}`);

//The Lifetime Supply Calculator
let currentAge = prompt("Enter your current age: ");
let maxAge = prompt("Enter your max age: ");
let amountPerDay = prompt("Enter estimated amount per day: ");
let total = (amountPerDay * daysInYear(new Date().getFullYear)) * (maxAge - currentAge);

console.log(`You will need ${total} to last you until the ripe old age of ${maxAge}`);

function daysInYear(year) {
    return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
}

//The Geometrizer
let radius = prompt("Enter radius:");
let circumference = Math.PI * (2*radius);
let area = Math.PI * (radius * radius);

console.log(`The circumference is ${circumference} and the area is ${area}`);

//The Temperature Converter
let celsius = prompt("Enter temperature in celsius: ");
let fahrenheit = prompt("Enter temperature in fahrenheit: ");
let celsiusInFahrenheit = (celsius*9)/5 + 32;
let fahrenheitInCelsius = ((fahrenheit - 32)*5)/9;

console.log(`${celsius}°C is ${celsiusInFahrenheit}°F`);
console.log(`${fahrenheit}°F is ${fahrenheitInCelsius}°C`);

//Homework: Conditionals
//The World Translator
const translations = [
    {lang: "English", word: "Hello World"},
    {lang: "French", word: "Bonjour le monde"},
    {lang: "Malay", word: "Hai Dunia"},
    {lang: "Korean", word: "Sesangi Anyeong!"},
    {lang: "Thai", word: "Sawadee kap"}
]

let language = "English";

translations.forEach(e => {
    if(e.lang.toUpperCase == language.toUpperCase){
        console.log(e.word);
    }
})

//The Grade Assigner
let marks = 90;

function gradeAssigner(marks){
    if(marks >= 90 || marks === 100){
        return "A";
    }else if(marks >= 80 || marks < 90){
        return "B";
    }else if(marks >= 60 || marks < 80){
        return "C";
    }else if(marks >= 40 || marks < 60){
        return "D";
    }else{
        return "F";
    }
}


//Air Conditioning
let currentTemp = 30;
let isFunctional = true;
let desiredTemp = 23;

if(isFunctional && isCurrentTempAboveDesiredTemp(currentTemp, desiredTemp)){
    console.log("Turn on the A/C please.");
}else if(!isFunctional && isCurrentTempAboveDesiredTemp(currentTemp, desiredTemp)){
    console.log("Fix the A/C now! It's hot!");
}else{
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}

function isCurrentTempAboveDesiredTemp(currentTemp, desiredTemp){
    if(currentTemp > desiredTemp){
        return true;
    }
    return false;
}

// You and Your Government
let yourAge = 10;

if(yourAge >= 35){
    console.log("You can vote AND hold any place in government!");
}else if(yourAge >= 25 && yourAge < 35){
    console.log("You can vote AND run for the Senate!");
}else if(yourAge >= 18 && yourAge < 25){
    console.log("You can vote!");
}else{
    console.log("You can't vote yet");
}

// Golf
let strokes = 1;
let par = 1;

function golfScore(strokes, par){
    if(strokes === 1){
        console.log("Hole in one");
    }else if(strokes <= (par - 2) ){
        console.log("Eagle");
    }else if(strokes === (par - 1) ){
        console.log("Birdie");
    }else if(strokes === par ){
        console.log("Par");
    }else if(strokes === (par + 1) ){
        console.log("Bogey");
    }else if(strokes === (par + 2) ){
        console.log("Double Bogey");
    }else{
        console.log("Not sure");
    }
}

//The Pluralizer
let word = "test";
console.log(pluralize(word));

function pluralize(noun, number){
    let nounLast = noun.charAt(noun.length - 1);
    let nounSecondLast = noun.charAt(noun.length - 2);
    let nounSubstrLast = noun.substring(noun.length - 1);
    let nounSubstrLastTwo = noun.substring(noun.length - 2);

    if(number > 1){
        //if word ends with y
        if(nounLast == "y"){
            if(isVowel(nounSecondLast)){
                return noun + "s";
            }else{
                return noun + "ies";
            }
        }

        //if word ends with s, x, z, ch, sh
        if(nounSubstrLast == "s" 
        || nounSubstrLast == "x" 
        || nounSubstrLast == "z" 
        ||nounSubstrLastTwo == "ch" 
        || nounSubstrLastTwo == "sh"){
            return noun + "es";
        }

        //if word ends with o
        if(nounLast == "o"){
            if(isVowel(nounSecondLast)){
                return noun + "s";
            }else{
                return noun + "oes";
            }
        }

        //if word ends with f or fe
        if(nounSubstrLast == "f" || nounSubstrLastTwo == "fe") {
            if(nounSubstrLast == "f"){
                return word.substring(0, word.length - 1) + "ves";
            }

            if(nounSubstrLastTwo == "fe"){
                return word.substring(0, word.length - 2) + "ves";
            }
        }
        return word + "s";
    }
    return word;
}

function isVowel(char){
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        return true;
    }
    return false;
}

//The Rest
let userChoice = "rock";
let randomChoice = getRandomChoice();

console.log(`User choice: ${userChoice}. Comput choice: ${randomChoice}/n${compareChoices(userChoice, randomChoice)}`);

function getRandomChoice(){
    let choice = Math.random();

    if(choice < 0.34){
        choice = "rock";
    }else if(choice <=0.67){
        choice = "paper";
    }else{
        choice = "scissors";
    }
}

function compareChoices(userChoice, computerChoice){
    if(userChoice == computerChoice){
        return "It's a tie";
    }else if(userChoice === "rock"){
        if(computerChoice === "scissors"){
            return "rock wins";
        }else{
            return "paper wins";
        }
    }else if(userChoice == "paper"){
        if(computerChoice == "rock"){
            return "paper wins";
        }else{
            return "scissor wins";
        }
    }else if(userChoice == "scissors"){
        if(computerChoice == "paper"){
            return "scissors wins";
        }else{
            return "rock wins";
        }
    }else{
        return "Error";
    }
}

// Homework: JavaScript loops
// The even/odd reporter
for(let i=0; i<=20; i++){
    if(i % 2 == 0){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}

// Multiplication Tables
for(let i = 1; i<=12; i++){
    let x = i * 9;
    console.log(`${i} * 9 = ${x}`);
}
// bonus
for(let i = 1; i<=12; i++){
    console.log(`==========================\nMultiplications of ${i}\n==========================`);
    for(let j = 1; j<=12; j++){
        let x = i * j;
        console.log(`${i} * ${j} = ${x}`);
    }
}

// The Grade Assigner
for(let i=60; i<=100; i++){
    let grade = gradeAssigner(i);
    if(grade === "A"){
        console.log(`For ${i}, you got an A`);
    }else{
        console.log(`For ${i}, you got a ${grade}`);
    }
}

// Golf
// Using the Golf condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole
for(let i=1; i<=8; i++){
    golfScore(i, 5);
}

// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5
for(let i=1; i<=8; i++){
    for(let j=3; j<=5; j++){
        golfScore(i, j);
    }
}

// Bonus: Generate a random par for each iteration
let randomPar = Math.floor(Math.random() * 10);
for(let i=1; i<=8; i++){
    golfScore(i, randomPar);
}

// 99 Bottles of Beer
for(let i = 99; i>=0; i--){
    logConsole(i);
}

function logConsole(num){
    if(num > 0){
        console.log(`${plural("bottle", "bottles", num)} of beer on the wall, ${plural("bottle", "bottles", num)} of beer.
        \nTake one down and pass it around, ${plural("bottle", "bottles", num-1)} of beer on the wall`);
    }else{
        console.log(`${plural("bottle", "bottles", num)} of beer on the wall, ${plural("bottle", "bottles", num)} of beer.
        \nGo to the store and by some more, ${plural("bottle", "bottles", num+99)} of beer on the wall`);
    }
}

function plural(word, pluralWord, num){
    if(num > 1){
        return `${num} ${pluralWord}`;
    }
    
    if(num === 0){
        return `No more ${pluralWord}`;
    }
    return `${num} ${word}`;
}