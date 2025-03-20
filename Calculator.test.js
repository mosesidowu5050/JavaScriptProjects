const {calculate, addTwoNumbers, subtractTwoNumbers, getEvenNumbers, calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels} = require("./Calculator.js");


test("add two numbers", ()=> {
   let firstNumber = 5;
   let secondNumber = 72; // Arrange
   const result = addTwoNumbers(firstNumber, secondNumber); // Act
   let answer = 77;
   expect(result).toBe(answer); // Assert


})

test("subtract two numbers", ()=> {
   let firstNumber = 5;
   let secondNumber = 72; // Arrange
   const result = subtractTwoNumbers(firstNumber, secondNumber); // Act
   let answer = -67;
   expect(result).toBe(answer); // Assert


})


test("return even numbers in the array", () => {
   let arrayOfNumbers = [2, 3, 4, 5, 6, 7, 9];
   let answer = [2, 4, 6];
   let result = getEvenNumbers(arrayOfNumbers);

   expect(result).toEqual(answer);

})


test("return area of the rectangle", ()=> {
   let length = 12.9;
   let width = 41.5;
   let answer = 535.35;

   let result = calculateArea(width, length);
   expect(result).toBe(answer);
})


test("returns temperature in Fahrenheit", ()=> {
   let fahrenheit = 5.2;
   let answer = 41.36;

   let result = convertToFahrenheit(fahrenheit);
   expect(result).toBe(answer);

})


test("returns true if the number is even", ()=>{
  let number = 6;
  let answer = true;

  let result = isEven(number);
  expect(result).toBe(answer);

})


test("return true if the year is a leap year", ()=>{
   let year = 2020;
   let answer = true;
   
   let result = isLeapYear(year);
   expect(result).toBe(answer);
})


test("returns number of vowels", ()=> {
   let vowels = "aeiou";
   let answer = 5;

   let result = countVowels(vowels);
   expect(result).toBe(answer);

})
