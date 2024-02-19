// If-Else:
// 1. Age Elibility Checker:

let age = window.prompt('Please input your age')

if(age >= 18) {
    console.log(`your age is  ${age}, and you are eligible to vote`)
} else {
    console.log(`Sorry! you are not of eligible age to vote`)
}


// 2. Even or Odd number Identifier
let number = window.prompt('Input number you want to check')

if(number % 2 == 0) {
    console.log(`This number: ${number} is an even number`)
} else {
    console.log(`This number: ${number} is an odd number`)
}

// 3. Vowel or Consonant classifier

const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

const vowels = ['A', 'E', 'I', 'O', 'U']
let alphabet = window.prompt("Please input the letter you'd like to check")

if(consonants.includes(alphabet.toUpperCase())) {
    console.log(`This letter: ${alphabet} is a consonant`)
} else {
    console.log(`This letter: ${alphabet} is a vowel`)
}

// 4. This is a checker for the bigger of two numbers

const number1 = window.prompt('Input the first number')
const number2 = window.prompt('Input the second number')
let message = number1 > number2 ? console.log(number1) : console.log(number2);


// 5. Simple Calculator 

let number1 = Number(window.prompt('Input the First Number'))
let number2 = Number(window.prompt('Input the Second Number'))
let operator = window.prompt('Please input any of the following operators (+, - , /, *)')

let result = ''

if (isNaN(number1) || isNaN(number2)){
    console.log('Please input a valid number');
} else {
    if (operator === '+') {
        result = number1 + number2;
    } else if (operator === "-") {
        result = number1 - number2;
    } else if (operator === "*") {
        result = number1 * number2;
    } else if (operator === "/") {
        if(number2 === 0){
            console.log("you can't divide a number by 0")
        } else {
            result = number1 / number2;
        }
    } else {
        result = "Invalid"
        console.log(`Invalid operator`)
    }


    if (result !== undefined && result !== "Invalid") {
        console.log(`number 1: ${number1} ${operator} number 2: ${number2}`);
        console.log(`result: ${result}`);
    }
    
}


//Switch Statement 

// 1.  Day of the Week Printer: Print the name of the day for a given number (1-7).


let day = parseFloat(window.prompt('Input any number between 1 and 7'));

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: 
    console.log('Please Input a number between 1 and 7')
// }


// 2. Grade Evaluator: Assign a letter grade (A, B, C, D, or F) based on a numerical grade

let grade = parseFloat(window.prompt('Pls input your score to get your grade'));

switch (true) {
    case grade >= 70 && grade <= 100:
        console.log('A') 
        break;
    case grade >= 60 && grade <= 69:
        console.log('B')
        break;
    case grade >= 50 && grade <= 59:
        console.log('C')
        break;
    case grade >= 40 && grade <= 49:
        console.log('D')
        break;
    case grade >= 0 && grade <= 39:
        console.log('F')
        break;
    default:
        console.log('Please input a valid score');
}


// 3. Rock Paper Scissors

Method 1

let computerChoice = Math.floor(Math.random() * 100)

switch (true) {
    case computerChoice > 0 && computerChoice <= 33:
        computerChoice = "rock";
        break;
    case computerChoice > 33 && computerChoice <= 66:
        computerChoice = "paper";
        break;
    case computerChoice > 66 && computerChoice <= 100:
        computerChoice = "scissors";
        break;
}

let playerChoice = window.prompt(`'Input either 'rock, paper or scissors' into the bar`);

let message = `You picked ${playerChoice}, and the computer picked ${computerChoice}`;

switch (true) {
        case playerChoice == 'rock' && computerChoice == 'paper': // rock as a choice
            console.log(message);
            console.log('Paper covers Rock, You lose');
            break;
        case playerChoice == 'rock' && computerChoice == 'scissors':
            console.log(message);
            console.log('Rock smashes Scissors, You Win');
            break;
        case playerChoice == 'paper' && computerChoice == 'scissors': // paper as a choice
            console.log(message);
            console.log('Scissors cuts Paper, You lose');
            break;
        case playerChoice == 'paper' && computerChoice == 'rock':
            console.log(message); 
            console.log('Paper covers Rock, You Win');
            break;
        case playerChoice == 'scissors' && computerChoice == 'rock': // scissprs as a choice
            console.log(message);
            console.log('Rock smashes Scissors, You lose');
            break;
        case playerChoice == 'scissors' && computerChoice == 'paper':
            console.log(message); 
            console.log('Scissors cut Paper, You Win');
            break;
        case playerChoice === computerChoice:
            console.log(message);
            console.log('That was a tie');
            break;
        default:
            console.log('Please choose and input from the specified criteria of "rock, paper and scissors"')  
    }


// Method 2


let playerChoice = window.prompt(`input either 'rock, paper or scissors'`)
let computerChoice = Math.floor(Math.random() * 100)

switch (true) {
    case playerChoice == 'rock' && (computerChoice > 33 && computerChoice <= 66): //rock choice
        computerChoice = 'paper'
        console.log('Paper covers Rock, You lose');
        break;
    case playerChoice == 'rock' && (computerChoice > 66 && computerChoice <= 100):
        computerChoice = 'scissors'
        console.log('Rock smashes Scissors, You Win');
        break;
    case playerChoice && (computerChoice > 0 && computerChoice <= 33):
        computerChoice = 'rock'
        console.log('That was a tie');
        break;
    case playerChoice == 'paper' && (computerChoice > 66 && computerChoice <= 100): //paper choice
        computerChoice = 'scissors'
        console.log('Scissors cuts Paper, You lose');
        break;
    case playerChoice == 'paper' && (computerChoice > 0 && computerChoice <= 33): 
        console.log('Paper covers Rock, You Win');
        break;
    case playerChoice && (computerChoice > 33 && computerChoice <= 66):
        computerChoice = 'paper'
        console.log('That was a tie');
        break;
    case playerChoice == 'scissors' && (computerChoice > 0 && computerChoice <= 33): //scissors choice
        console.log('Rock smashes Scissors , You lose');
        break;
    case playerChoice == 'scissors' && (computerChoice > 33 && computerChoice <= 66):
        computerChoice = 'paper'
        console.log('Scissors cuts Paper, You Win');
        break;
    case playerChoice && (computerChoice > 66 && computerChoice <= 100):
        computerChoice = 'scissors'
        console.log('That was a tie');
        break;
        
}
console.log(computerChoice)


// 4. Month Name Displayer

let moonthDisplayer = parseFloat(window.prompt('Input any number between 1 and 12'));

switch(moonthDisplayer) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default: 
        console.log('Please Input a number between 1 and 12')
}

// 5. Simple Menu: Create a menu with a few options and execute different actions
// based on the user's choice.

let userChoice = window.prompt("Please choose from any of the available options by its index number \n 1. Request Balance Check \n 2. Request Data Balance Check \n 3. Check Data Plan \n 4 Check Talk Plan")

switch(userChoice){
    case '1':
        console.log(`You selected option 1, and your data balance is: 2045.56`)
        break;
    case '2':
        console.log(`You picked option 2, and your Data Balance is: 2045MB`)
        break;
    case '3':
        console.log(`You selected option 3, and your data plan is: 100GB for 2 months`)
        break;
    case '4':
        console.log(`You picked option 4, and your Talk Plan is: Glo Yafu Yafu`)
        break;
    default: 
        console.log(`Please pick a valid option and try again`)
}



// For Loops:
// 1. Number Summation: Calculate the sum of all numbers from 1 to a given
// number.

let summation = 0;
let givenNumber = 10;


for (i = 0; i < givenNumber; i++ ){
    summation += i;

}

console.log(summation);

// 2. Countdown Timer: Print a countdown from a given number to 1.

givenNumber = 10
let counter = givenNumber;
for (i = 0; i < givenNumber; i++) {
    counter -= 1;
    console.log(counter);
}
// 3. Multiplication Table Generator: Print a multiplication table for a given number.

let multiplier = 5;

for (i = 1; i <= 12; i++) {
    table = i * multiplier;
    console.log(`${multiplier} times ${i} : ${table}`)
}
// 4. Array Element Printer: Print each element of an array.

let elementPrinter = ['orient', 33, 'This is print', 895, true, false]

for (i = 0; i < elementPrinter.length; i++){
    message = elementPrinter[i];
    console.log(message);
}
// 5. String Repeater: Repeat a string a specified number of times.

let stringRepeater = 'This string will be repeated as much as I want it to';
let repeatString = 20;

for (i = 0; i < repeatString; i++){
    console.log(stringRepeater);
}


// Functions:

// 1. Greeter Function: Take a person's name as input and greet them with a
// personalized message.

function greeterBot(name){
    console.log(`Hi ${name}, Good Morning`)
}
greeterBot('Ubong');


// 2. Area Calculator: Calculate the area of a rectangle, triangle, or circle.

function areaCalculator(length, breadth){
    if (isNaN(length) || isNaN(breadth)) {
        console.log(`Please check your parameter value and try again`)
    } else {
        let area = length * breadth;
        console.log(area)
    }
   
}

areaCalculator(5, 't');
// 3. Palindrome Checker: Determine if a given word or phrase is a palindrome
// (reads the same backward as forward).

function palindromeChecker(word){
    let splitWord = word.split('').reverse().join('');
    console.log(splitWord);

    if(splitWord === word){
        console.log(`Your word is a palindrome`)
    } else {
        console.log(`Not a palindrome`)
    }
}
palindromeChecker("eve")
// 4. Number Reverser: Reverse the digits of a given number.

function numberReverser(reverseNumber) {
    let numberReversed = reverseNumber.toString().split('').reverse().join('');
    numberReversed = parseInt(numberReversed, 10);

    console.log(numberReversed);
}

numberReverser(975957439475);

// 5. Simple Sorting Function: Sort an array of numbers in ascending or
// descending order

function simpleSort(order, array){
    if(order === "ascending"){
        sorted = array.sort((a, b) => a - b);
        console.log(sorted)
    } else if (order === "descending"){
        sorted = array.sort((a, b) => b - a);
        console.log(sorted)
    }
}
let arraySort = [ 1, 54, 8, 9, 30, 657, 10, 3]
simpleSort("descending", arraySort);


// Function Parameters:
// 1. Number Adder: Take two numbers as parameters and return their sum.

function numberAdder(number1, number2) {
    console.log(number1 + number2);
}

numberAdder(2, 7);


// 2. Word Length Checker: Take a word as input and return its length.

function wordLength(inputWord) {
    let length = inputWord.length;
    console.log(length);
}

wordLength("bassey");


// 3. Age Difference Calculator: Calculate the age difference between two people
// given their birth years.

function ageGapChecker(age1, age2) {
    let ageGap = age1 > age2 ? age1 - age2 : age2 - age1;
    console.log(ageGap)
}

ageGapChecker(2001, 2003);


// 4. Temperature Converter: Convert between Celsius and Fahrenheit.

function tempConverter(unit, Temperature) {

    if(!isNaN(Temperature)) {
        if (unit === 'C') {
            let tConvert = (Temperature + 32) * (9/5);
            console.log(tConvert)
        } else if (unit === "F") {
            let tConvert = (Temperature - 32) * 5/9;
            console.log(tConvert);
        } else {
            console.log(`Pls choose the right measurement unit`)
        };
    } else if (isNaN(Temperature)) {
        console.log(`Please ensure your temperature is a number`);
    } 
}

tempConverter('F',409);

// 5. Currency Converter: Convert between two different currencies

function currencyConverter(currency, amount) {
    if (!isNaN(amount)) {
        if (currency === 'Dollar') {
            let moneyConvert = amount * 1200; 
            console.log(moneyConvert);
        } else if (currency === 'Naira') {
            let moneyConvert = amount / 1200;  
            console.log(moneyConvert);
        } else {
            console.log('Please choose the right currency unit');
        }
    } else {
        console.log('Please ensure your amount is a number');
    }
}

currencyConverter('Naira', 394);


// Arrow Functions:


// 1. Array Element Doubler: Double each element in an array.

// Array Event doubler

let arrayDoubler = (doubler) => {
    let doubledNumbers = [];

    for (i = 0; i < doubler.length; i++) {
        doubledNumbers.push(doubler[i] * 2);
    }
    console.log(doubledNumbers);
}

arrayDoubler([2, 4, 5, 7, 8, 9, 10]);

// 2. String Concatenation: Combine two strings into a single string.

// String Concatenation

const stringAdder = (string1, string2) =>  string1 + " " + string2;

console.log(stringAdder('this is the first part of the string', 'and this is the other part of the string'));



// 3. Even Number Filter: Filter an array of numbers to keep only the even ones.

//Even number filter

const evenFilter = (filter) => {

    let evenNumbers = [];

    for(let item of filter) {
        if (item % 2 == 0) {
            evenNumbers.push(item);
        }
    }

    console.log(evenNumbers);
}

evenFilter([3, 5, 6, 8, 10, 75, 100, 30, 49]);


// 4. Word Splitter: Split a sentence into an array of words.

const wordSplitter = (sentence) => {
    let splitWord = sentence.split(" ");
    console.log(splitWord);
}

wordSplitter('This is a demo of it');


// 5. Number Multiplier: Multiply a number by a given factor

const multiplyParameter = (a, b) => {
    result = a * b;
    console.log(result);
}

multiplyParameter(2, 5);


// Object Literals:
// 1. Person Object: Create an object representing a person with properties like
// name, age, and occupation.

let person = {
    name: "Ubong Josh",
    age: 23,
    occupation: "Software Engineer",
  };

  
// 2. Book Object: Create an object representing a book with properties like title,
// author, and genre.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  };

  
// 3. Animal Object: Create an object representing an animal with properties like
// species, name, and age.

let animal = {
    species: "Dog",
    name: "Channel",
    age: 5,
  };
  
// 4. Product Object: Create an object representing a product with properties like
// name, price, and description.

let product = {
    name: "Laptop",
    price: 100999.99,
    description: "High-performance laptop with finger print",
  };
  
// 5. Address Object: Create an object representing an address with properties
// like street, city, state, and zip code.

let address = {
    street: "Mbiabong U turn",
    city: "Uyo",
    state: "Akwa Ibom",
    zipCode: "12345",
  };

// Arrays:
// 1. Number Sorter: Sort an array of numbers in ascending or descending order.

const toBeSorted = [3,5,3,4,6,875,23434,23,55,2,45,345,342,3]

toBeSorted.sort((a,b) =>{
    return a - b
})

console.log(toBeSorted)

toBeSorted.sort((a,b)=> {
    return b - a;
}
console.log(toBeSorted)
// 2. Word Finder: Check if a given word exists within an array of words.

const wordFinder = (sentence) => {
    let splitWord = sentence.split(" ");
    console.log(splitWord);
}

wordSplitter('This is a demo of it');

// 3. Largest Number Finder: Find the largest number in an array.

let theArray = [20, 23, 30, 75, 75, 23, 95];

let theLargestValue = Math.max(...theArray)
console.log(theLargestValue);


// 4. Duplicate Remover: Remove duplicate elements from an array.

 theArray = [20, 23, 30, 75, 75, 23, 95];



function makeArrayUnique(numbers) {

    for(let number of numbers) {
        if (!numbers.includes(number)) {
            let uniqueArray = [];
            uniqueArray.push(number)
            return uniqueArray
        }
    }

    console.log(uniqueArray)
}

makeArrayUnique(theArray);


// 5. Array Reverser: Reverse the order of elements in an array.

let reverseArray = ['this', 'is', 'a', 'reverse', 'array'];

let reversal = reverseArray.reverse()
console.log(reversal);


// While Loops:
// 1. Guessing Game: Keep prompting the user for a guess until they guess the
// correct number.

let userGuess = parseInt(window.prompt('Please make a guess of a number between 1 and 10'));
let theLuckyGuess = 8;

while ( userGuess !== theLuckyGuess ){
    userGuess = parseInt(window.prompt('Please make a guess of a number between 1 and 10'));
}

console.log(`Congratulations you've made the right guess`)

// 2. Password Validator: Keep prompting the user for a password until it meets
// certain criteria (length, complexity).

let password = window.prompt('Please input a password');

while (password.length < 9){
    password = window.prompt("Please your password shouldn't be less than 9 characters long");
}
console.log(password);

3. Number Counter: Count from 1 to a given number.

let number = 1;
while(number <= 10){
    console.log(number);
    number++;
}

// 4. Number factor Finder: Find all factors of a given number.

let factorFinder = 1;
let givenNumber = parseInt(window.prompt("Input any  number to find it's factors"))
let factorials = []
while(factorFinder <= givenNumber){
    if(givenNumber % factorFinder === 0){
        factorials.push(factorFinder)
    }
    factorFinder++;
}

console.log(factorials);

// 5. Simple Number Guessing Game: Generate a random number and let the user
// guess it within a limited number of tries.

let randomGuess = Math.floor(Math.random() * 10);
console.log(randomGuess);

let userGuess = parseInt(window.prompt("Please guess the lucky number to win"));
let trialCount = 5;

while (userGuess !== randomGuess && trialCount > 0) {
    trialCount--; 
    console.log(`You have ${trialCount} trial(s) left`);
    userGuess = parseInt(window.prompt("Wrong guess, please guess the lucky number to win"));
}

if (trialCount <= 0) {
    console.log(`You've exhausted your free trials`);
} else if (userGuess === randomGuess) {
    console.log(`Hurray! Your guess is ${userGuess}, and the random number is ${randomGuess}. YOU WON`);
}



//   Math Object:
//   1. Random Number Generator (use Math.random() to generate random
//   numbers)

const randomNumber = Math.random();

console.log(randomNumber)

//   2. Quadratic Equation Solver (use Math.sqrt() to find roots of a quadratic
//   equation)

const quadraticEquation = Math.sqrt(49);

console.log(quadraticEquation);

//   3. Distance Calculator (use the Pythagorean theorem to calculate distance
//   between points)

let coordinates_1 = {
    a: 1, 
    b: 2,
}
let coordinates_2 = {
    a: 4, 
    b: 8,
}

const distanceCalculator = (a1, b1, a2, b2) => {
    distance = Math.sqrt(Math.pow((a2 - a1), 2) + Math.pow((b2 - b1), 2));
    return distance;
}

let calculatedDistance = distanceCalculator(coordinates_1.a, coordinates_1.b, coordinates_2.a, coordinates_2.b)
console.log(calculatedDistance);


//   4. Trigonometric Calculator (calculate sine, cosine, tangent using Math.sin(),
//   Math.cos(), Math.tan())

let sine = Math.sin(34);
console.log(sine)
let cosine = Math.cos(34);
console.log(cosine)
let tangent = Math.tan(34);
console.log(tangent)

//   5. Finance Calculator (calculate simple interest, compound interest, loan
//   payments)



function simpleInterest(p, r, t) {
    calculation = (p * r * t) / 100;
    return calculation
}

simpleInterest(bankDetails.principal, bankDetails.rate, bankDetails.time);

let bankDetails = {
    rate: 7,
    principal: 10000,
    time: 5,
    compounding: 4
}

function compoundInterest(p, r, t, n) {
    let power = n * t;
    let rate = r / 100;
    let calculation = p * Math.pow(1 + rate / n, power);
    console.log(calculation);
}

compoundInterest(bankDetails.principal, bankDetails.rate, bankDetails.time, bankDetails.compounding);