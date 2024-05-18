"use strict";
//------------------------ Question 1------------------------------//
// Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".
Object.defineProperty(exports, "__esModule", { value: true });
const fruits = ['apple', 'banana', 'mango', 'orange'];
console.log(fruits, "Fruits");
// ----------------------- Question 2-----------------------------//
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.
const numbers = [10, 20, 30, 40];
console.log(numbers, "Numbers");
//----------------------- Question 3-----------------------------//
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit.
let thirdFruit = ['apple', 'banana', 'mango', 'orange'];
console.log(fruits[3], `:Remove Index 3 Fruit`);
//----------------------- Question 4---------------------------//
// Change the second element of the numbers array to 25.
let changeNumber = [10, 20, 30, 40];
changeNumber[2] = 25;
console.log(changeNumber, "Change index [2] Numbers");
// --------------------- Question 5--------------------------------------//
//Add the element "grape" to the end of the fruits array using the method.
let addFruit = ['apple', 'banana', 'mango', 'orange'];
addFruit.push('watermelon');
console.log(addFruit, "Add Last Fruit");
//--------------------- Question 6-----------------------//
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.
let lastFruit = ['apple', 'banana', 'mango', 'orange', 'watermelon'];
lastFruit.pop();
console.log(lastFruit, "Remove Last Fruit");
//------------------- Question 7-------------------------//
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.
let firstFruit = ["apple", "banana", "mango", "orange"];
firstFruit.shift();
console.log(firstFruit, "Remove First Fruit");
//------------------ Question 8------------------------------//
// Add the element "kiwi" to the beginning of the fruits array
// using the method.
let addFirstFruit = ["banana", "mango", "orange"];
addFirstFruit.unshift("kiwi");
console.log(addFirstFruit, "Add First Fruit");
//------------------- Question 9--------------------------------//
// Remove 2 elements from the fruits array starting from index 1
// using the method.
let removeFruits = ['kiwi', 'banana', 'mango', 'orange'];
removeFruits.splice(1, 2);
console.log(removeFruits, "Remove 2 Fruits From Index 1");
//------------------ Question 10----------------------------------//
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
let addFruits = ['kiwi', 'orange'];
addFruits.splice(2, 0, "pinaple", "pear");
console.log(addFruits, "Insert 2 Fruits at Index 2");
//------------------ Question 11------------------------------------//
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.
let fruit2 = ["apple", "orange", "pineapple", "pear"];
let citrusFruits = fruit2.slice(0, 2);
console.log(citrusFruits, "Citrus Fruits");
//----------------- Question 12-----------------------------------//
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.
let fruit3 = ["apple", "orange", "pineapple", "pear"];
let lastTwoFruits = fruit3.slice(-2);
console.log(lastTwoFruits, "Last Two Fruits");
