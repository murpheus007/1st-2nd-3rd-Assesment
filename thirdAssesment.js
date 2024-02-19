// ● How can you select an element by its ID using JavaScript?

let element = document.getElementById("elementID");


// ● How can you select all elements of a speciﬁc class name?

let allElements = document.getElementsByClassName("specificClassName");

// ● How can you select the ﬁrst child element of a given element?

let firstChild = document.getElementById("parent").firstElementChild

// ● How can you select all elements that match a speciﬁc CSS selector?

let allElements = document.querySelectorAll(".flyin");

// ● How can you change the text content of an element?

let elementText = document.getElementById("elementText").innerText

// ● How can you modify the value of an HTML attribute?

elementText.placeholder = "text" OR 
elementText.setAttribute("placeholder", "text")

// ● How can you add a new element to the DOM?

let newElement = document.createElement('p');
newElement.innerText = `A new element`
oldELement.appendChild(newElement); 

// ● How can you remove an element from the DOM?

oldELement.removeChild(newElement);

// ● How can you access the parent element of a given element?

let parent = newElement.parentElement;

// ● How can you access the next sibling element of a given element?

let sibling = newElement.nextElementSibling;

// ● How can you iterate over all child elements of a given element?

let allChildElements = document.getElementsByClassName("allChild");

allChildElements.forEach((child, index) =>{
    console.log(child, index)
})

// ● How can you ﬁnd all elements matching a speciﬁc condition within asubtree?


// ● How can you change the inline style of an element using JavaScript?

let elementInline = document.getElementById("inlineElement");
elementInline.style.display = 'block';

// ● How can you add or remove CSS classes from an element?

let addRemoveclass = document.getElementById("addRemoveclass")
addRemoveclass.classList.add("classOne") 
addRemoveclass.classList.remove("classTwo") 


// ● How can you toggle between two diﬀerent styles for an element?

let myElement = document.getElementById("myElement");

function toggleStyles() {
    let element = document.getElementById('myElement');
    element.classList.toggle('style1');
    element.classList.toggle('style2');
}
myElement.addEventListener("onclick", toggleStyles())

// ● How can you dynamically create and add a CSS stylesheet to the document?

const styleSheet = document.createElement('link');

styleSheet.rel = "stylesheet";
styleSheet.href == "style.css"

document.head.appendChild(styleSheet);


// ● Explain the syntax and purpose of the forEach method in JavaScript.

array.forEach(function(currentValue, index, array) {
    Code to be executed for each element
  });

  the function of the forEach method is to iterate over a list or collection of elements and treat it as an array, whilst executing a callback function on each 

// ● How does forEach diﬀer from traditional for loops in terms of scope andbehavior?

//scope

variables in a traditional for loop are block scope and cannot be accessed outside of the block, while in foreach loop the variables are declared in the callback function 

//behaviour
traditional FORloOP requires control of the index value to work whilst a foreach loop iterates over each element of an array with or without the need for the index 


// ● Write code to double each element in an array using forEach.

let forArray = [20, 21, 1, 4, 6, 7, 8, 9, 5, 50];
let newArray = []
forArray.forEach(function (doubler, index, array){
    newArray.push(doubler * 2);
    console.log(newArray)
})

// ● Create a new array containing only strings from a mixed array using forEach.

let mixedArray = [1, 'apple', 3, 'banana', 'orange', true, 'grape', false];

let stringArray = [];

mixedArray.forEach((element) => {
    if (typeof element === 'string') {
        stringArray.push(element);
    }
});

console.log(stringArray);

// ● Filter an array to include only even numbers using forEach.
let evenNumberSum = 0;
forArray.forEach(function (number){
    
    if(number % 2 === 0){
        evenNumberSum += number;
        console.log(`${evenNumberSum} += ${number}`);
    }
    console.log(evenNumberSum);
})

// ● Demonstrate how to access the current index within a forEach callback.
//Ans:
forArray.forEach(function (doubler, index){
    //in this case when a second argument is passed in the callback function of the forEach method, its being assigned the index of the element
    doubler, index
})

// ● Explain how to break out of a forEach loop early.


// ● Can you modify the original array directly within a forEach callback? Why orwhy not?
//Ans
// you can not modify the array itself but you can modify the elements in the array



// ● Describe common use cases for forEach in JavaScript applications.
//Ans:
// it provides a cleaner code to traditional for loop, it can be used for iterating, modifying and performing events om elements in an array...addRemoveclass



// ● When would you choose forEach over other looping methods?
// Ans:
// for iterating over individual element and executing a change (modify) to each element...
// for a cleaner code with less errors due to manually inputing index for each item...a
// and to attach a function to each element...



// ● Explain the syntax and purpose of the for...of loop in JavaScript.
//Ans:
//  the syntax of for of loop is:  for(let item of items){

//  }
// what it does is that it is used to iterate over an array, the item is a variable representing a current item of the array, and is used to assign a value to the item... while the items is the name of the array(or Map, string, set) whose individual items is being iterated



// ● How does for...of diﬀer from traditional for loops and forEach?
//Ans:
// for of loop is used for iterable objects whilst for loops is used when you need a more control over non iterable object, whilst fot each is used when you want to make changes on each element without worrying about the index (which can  be accessed as a second parameter in the callback function)

// ● Iterate over an array of numbers and print their squares using for...of.

const forSquare = [1,2,3,4,5,6,7,8,9,10,21,34,5,46];
const squared = []
for(let square of forSquare){
    let sum = (square * square);
    squared.push(sum)
}

console.log(squared)

// ● Create a new array containing the string lengths of each element in anotherarray using for...of.

const anotherarray = ['first', 'second', 'third', 'fourth'];
const stringLength = [];

for(let length of anotherarray){
    let stringL = length.length;
    stringLength.push(stringL);
}

console.log(stringLength)


// ● Iterate over the keys of an object using for...of.

let personInfo = {
    name: 'Ubong',
    age: 23,
    address: 'Cat Street'
}

for(let property of Object.keys(personInfo)){
   console.log(property)
}

// ● Iterate over the values of an object using for...of.

for(let value of Object.values(personInfo)){
    console.log(value)
}

// ● Explain how to access both keys and values in a for...of loop.
//Ans:
const accessObject = {
    key1: 'Value 1',
    key2: 'Value 2',
    key3: 'Value 3'
}

for (let [key, value] of Object.entries(accessObject)){
    console.log(`${key}, ${value}`)
}


// ● Can you modify the original array or object within a for...of loop?
//Ans:
no, that is where map method comes in

// ● Describe common use cases for for...of loops in JavaScript applications.
//Ans:
for of is used for iterating over items in an array, objects, maps, sets and strings


// ● When would you choose for...of over other looping methods?
//Ans: 
// .Simplicity
// .No need for index position of items
// .Great for all iterable items like array and objects
// .it does not take in a callback function



// ● Write a for loop that prints numbers from 1 to 10.

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// ● Write a for loop that sums all numbers in an array.

const arraySum = [2,3,4,35,5,345,34,23,445,25]
let sum = 0;
for(let num = 0; num < arraySum.length; num++){
    sum += arraySum[num];
}

console.log(sum);

// ● Find the largest number in an array using a for loop.

const largestNumArray = [23, 423, 43, 434, 34, 3, 65, 546, 12, 5, 58, 3];

let largestNum = 0;

for (let x = 0; x < largestNumArray.length; x++) {
  largestNum = largestNum < largestNumArray[x] ? largestNumArray[x] : largestNum; //using a ternary operator to check and assign the outcome to the largestNum variable
}

console.log(largestNum);

// ● Create a new array containing the squares of numbers in another array usinga for loop.

const toBeSquared = [1,2,3,4,5,6,7,8,9,10,21,34,5,46]
let squared = []
for(let z = 0; z < toBeSquared.length; z++){
    squared.push(toBeSquared[z]* toBeSquared[z]);
}
console.log(squared)
console.log(toBeSquared)


// ● Iterate over an object's properties and values using a for loop.

const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(`${obj[key]}`)
}

// ● Explain the diﬀerence between initial, conditional, and increment expressionsin for loops.
//Ans:
// inititial is used to declare a variable; conditional is to compare the declared variable to a value and to execute the code block when the comparison is true; and the increment is to make the iteration count and cause a loop


// ● Demonstrate how to nest for loops to create multidimensional arrays.

let multidimension = []
for (i = 1; i <= 15; i++){
    let dimension = []
    for (x = 1; x <= 15; x++){
        let product = x * i;
        dimension.push(product);
    }

    multidimension.push(dimension);
}

console.log(multidimension)

// ● Break out of a for loop early using the break statement.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // This will terminate the loop when i reaches 5
    }
    console.log(i);
}


// ● Continue to the next iteration of a for loop using the continue statement.

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue; // Skip the rest of the loop body and move to the next iteration if i is 2
    }
    console.log(i); // This line will not be executed when i is 2
}


// ● Describe common use cases for for loops in JavaScript applications.
//Ans:
// it can be used to iterate over items in an array, making it useful for finding an item in the array, or dynamically generatng content based on the array item index..
// it can also be used to iterate over an object property and fetch its key...



// ● Select an element by its ID using getElementById.

let element = document.getElementById("elementID");

// ● Select all elements of a speciﬁc class name using getElementsByClassName.

let allElements = document.getElementsByClassName("specificClassName");

// ● Select the ﬁrst child element of a given element using ﬁrstChild.

let firstChild = document.getElementById("parent").firstElementChild

// ● Select all elements that match a speciﬁc CSS selector using querySelector.

let allElements = document.querySelectorAll(".flyin");

// ● Access the parent element of a given element using parentNode.

let parent = newElement.parentElement;

// ● Access the next sibling element of a given element using nextSibling.

let sibling = newElement.nextElementSibling;

// ● Iterate over all child elements of a given element using childNodes.

const parentElement = document.getElementById("parent");


// Iterate over all child elements
Array.from(parentElement.children).forEach((childElement) => {
    // Do something with the child element
    console.log(childElement);
});


// ● Find all elements matching a speciﬁc condition within a subtree using a recursive function.



// ● Explain the diﬀerence between childNodes, children, andgetElementsByTagName.
//Ans:
// childNodes returns a nodelist containing all child Nodes , both elements and non-elements nodes/
// whilst children returns only elements nodes, excluding non-element nodes
// getElemnentsByTagName simply selects elements by their tagname



// ● Demonstrate how to modify element content (text and attributes) using DOMmanipulation.

sibling.innerText = 'this is a modification to the content' // text

sibling.type = "text" //attribute

// ● Add a new element to the DOM using createElement and appendChild.

const newElement = document.createElement('div'); // create element

document.body.appendChild(newElement); //append child to the body

// ● Remove an element from the DOM using removeChild.

document.body.removeChild(newElement); //remove child

// ● Change the inline style of an element using style.

let elementInline = document.getElementById("inlineElement");
elementInline.style.display = 'block';

// ● Add or remove CSS classes from an element using classList.

let addRemoveclass = document.getElementById("addRemoveclass")
addRemoveclass.classList.add("classOne") 
addRemoveclass.classList.remove("classTwo") 

// ● Toggle between two diﬀerent styles for an element using JavaScript.

let styleToggler = document.getElementById("styleToggler")

styleToggler.classList.toggle('style')

// ● Use a for loop to create 10 new paragraph elements and append them to thebody of the document.


for(let i = 0; i < 10; i++){
    let paragraph = document.createElement('p');
    paragraph.innerText = `The paragraph text`
    document.body.appendChild(paragraph);
}


// ● Use forEach to iterate over all images on a page and add a border to eachone.

let allImages = document.querySelectorAll('img');

allImages.forEach((img) =>{
    img.style.border = "2px Solid Black"
})