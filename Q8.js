/*
Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.
*/

let goalNumber = 10;

let currentNumber = 1;
let temp = currentNumber;
let sum = 0;

do{
    sum += temp ;
    temp++;
}while(temp <= goalNumber);

console.log(`the sum of all numbers from ${currentNumber} to ${goalNumber} : ${sum}`); //Output : the sum of all numbers from 1 to 10 : 55