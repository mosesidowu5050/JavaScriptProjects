//let arrayOfNumbers = [2, 3, 4, 5, 6, 7, 9];


function calculate(firstValue, secondValue, callBackFunction){
    return callBackFunction(firstValue, secondValue)
};

function addTwoNumbers(numberOne, numberTwo){
let result = numberOne + numberTwo;
return result;
};

function subtractTwoNumbers(numberOne, numberTwo){
let result = numberOne - numberTwo;
return result;
};


function getEvenNumbers(array){
let newArray = [];
  for (let value of array){
    if(value % 2 === 0){
      newArray.push(value)
    }
  }
   return newArray;
};



function calculateArea(width, height){
   let area = width * height;
   return area;
}


function convertToFahrenheit(celsius){
  let result = (celsius * 9/5) + 32;
  return result;
}


function isEven(number){
  if(number % 2 == 0){
    return true;
  }
return false;
}


function isLeapYear(year){
  if (year % 4 == 0){
    return true;
  } 
   else if (year % 400 == 0){
   return true;
  } 
  else {
     return false;
  }
}



function countVowels(vowels){
let letters = "aeiou";
let check = 0;
 
  for (let count = 0; count < vowels.length; count++){
    for (let counter = 0; counter < vowels.length; counter++){
      if (letters[count] === vowels[counter]){
         check++;
      }
    }
  }
   return check;
}



module.exports = {calculate, addTwoNumbers, subtractTwoNumbers, getEvenNumbers, calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels};

