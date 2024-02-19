// Arrays:
// 1. Create an array containing the numbers 1 to 10.

let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// 2. Access the third element of the array.

let thirdArray = firstArray[2];
console.log(thirdArray);


// 3. Change the value of the last element to 0.


firstArray[firstArray.length - 1] = 0;

// 4. Add a new element to the end of the array.

firstArray.push(9)

console.log(firstArray);

// 5. Remove the first element from the array.

firstArray.shift();
console.log(firstArray);


// 6. Find the index of the number 5 in the array.

let index = firstArray.indexOf(5)
console.log(index);

// 7. Check if the array contains the number 8.

let check = firstArray.includes(8);
console.log(check);
// 8. Reverse the order of the elements in the array.

let reversal = firstArray.reverse();
console.log(reversal);

// 9. Sort the array in ascending order.

let sorted = firstArray.sort();
console.log(sorted);

// 10.Create a new array containing only the even numbers from the original array.

let evenNumbers = [];

for (let num of firstArray){
    if(num % 2 === 0){
        evenNumbers.push(num);
    }
}

console.log(evenNumbers)


// While loops:
// 11.Write a while loop that prints the numbers from 1 to 10.

let number = 1;

while(number <= 10){
    console.log(number);
    number++;
}
// 12.Write a while loop that sums all the numbers in an array.

let numberArray = [20, 21, 1, 4, 6, 7, 8, 9, 5, 50];
let i = 0
let sum = 0;

while(i < numberArray.length){
    sum += numberArray[i];
    i++;
}
console.log(sum);

// 13.Write a while loop that finds the largest number in an array.
let l = 0;
let largestNummber = 0

while(l < numberArray.length){
    if (numberArray[l] > largestNummber)
    largestNummber = numberArray[l];
    console.log(largestNummber)

    l++;
}

console.log(`The largest number is ${largestNummber}`);
// 14.Write a while loop that prompts the user for input until they enter a valid email
// address.

let emailAddress = window.prompt("Please input your emaill address in the input field")

while(!emailAddress.includes('@')){
    emailAddress = window.prompt("Please input a valid email address")
}

console.log(`Your email ${emailAddress} has been recorded`);

// 15.Write a while loop that simulates a dice roll until a 6 is rolled

let diceRoll = Math.floor(Math.random() * 10);
let numberOfRolls = 0;
while(diceRoll !== 6){
    diceRoll =  Math.floor(Math.random() * 10);
    console.log(diceRoll)
    numberOfRolls++;
}

console.log(`After rolling for ${numberOfRolls} attempts, it finally landed a 6`)


// ForEach Method:
// 16.Use the forEach method to print each element of an array.

let forArray = [20, 21, 1, 4, 6, 7, 8, 9, 5, 50];

forArray.forEach(function (num, index) {
    console.log(`Element at index ${index} : ${num}`)
})
// 17.Use the forEach method to double each element of an array.

forArray.forEach(function (doubler, index, array){
    let doubled = doubler * 2;
    console.log(`for ${doubler} at ${index} : ${doubled}, ${array}`)
})
// 18.Use the forEach method to create a new array containing only the strings
// from a mixed array.

let mixedArray = [1, 'apple', 3, 'banana', 'orange', true, 'grape', false];

let stringArray = [];

mixedArray.forEach((element) => {
    if (typeof element === 'string') {
        stringArray.push(element);
    }
});

console.log(stringArray);


// 19.Use the forEach method to find the sum of all even numbers in an array.

let evenNumberSum = 0;
forArray.forEach(function (number){
    
    if(number % 2 === 0){
        evenNumberSum += number;
        console.log(`${evenNumberSum} += ${number}`);
    }
    console.log(evenNumberSum);
})
// 20.Use the forEach method to filter an array based on a certain condition.




// Rest parameters:
// 21.Define a function that accepts any number of arguments using rest
// parameters.

function restPara(...args){
    console.log(args);
    return args;
}

restPara('abobi', 'check', 'yourself');

// 22.Use rest parameters to create a function that calculates the average of a list
// of numbers.

let average = 0;
function calcAverage(...medianCheck){
    for(let median of medianCheck){
        average += median;
    }

    average = average / medianCheck.length;
    console.log(average)
}

calcAverage(24, 35, 46, 43, 12, 9, 0, 45);
// 23.Use rest parameters to create a function that logs all the arguments passed
// to it.

function logAll(...restParam){
    for(let para of restParam){
        console.log(para);
    }
}

logAll('String', 34, 'Another string', true, 3.54);


// 24.Use rest parameters to create a function that combines multiple arrays into a
// single array.

const concatenates = [];
function combineAll(...concats){
    for(let concat of concats){
        concatenates.push(...concat);

    }
    console.log(concatenates);
}

combineAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['string', 'another string', 'third one'], [true, false,], [3.95]);

// 25.Use rest parameters to create a function that accepts a variable number of objects and merges them into a single object.


const combObjects = {};

function combineAll(...objects) {
    for (let obj of objects) {
        Object.assign(combObjects, obj);
    }
    console.log(combObjects);
}

combineAll(
    { name: 'Ubong', age: 23, school: 'Uniuyo' },
    { name: 'John', age: 25, occupation: 'Engineer' },
    { city: 'New York', country: 'USA' }
);
