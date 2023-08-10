//task 1

/*function isEven (number) {
  return number % 2 === 0;
}

function isOdd (number) {
  return number % 2 !== 0;
}

console.log(isEven(3));
console.log(isEven(2)); 
console.log(isOdd(3));  
console.log(isOdd(2));  */



//task2

/*for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
} */



//task3

/*function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("welcome")); */



//task4 ??


//task5

/*function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}

console.log(test50(50, 0))
console.log(test50(50, 50))
console.log(test50(60, 10))
console.log(test50(20, 30)) */



//task6

/*function checkNumber(x,y) {
  if ((x>0 && y<0) || (x<0 && y>0)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkNumber(1,1));
console.log(checkNumber(1,-1));
console.log(checkNumber(-1,1));
console.log(checkNumber(-1,-1)); */



//task7

/*function test58(x) 
{
  if (x % 5 == 0 || x % 8 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test58(15));
console.log(test58(24));
console.log(test58(40));
console.log(test58(11)); */


//task8

/*function max_of_three(x, y, z) 
{
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(9,5,2));
console.log(max_of_three(50,20,30)); 
console.log(max_of_three(978,985,890));*/



//task9

/*function sum() {
  var result = 0;
  for (var i = 1; i <= 10; i++) {
    result += i;  
  }
  return result;
}

console.log(sum());*/



//task10 ??



//task11

/*console.log(Math.sign(8));  //:D
console.log(Math.sign(-8));*/



//task12

/*var a = [0,1,2,3,4,5,6,7,8,9];
for (var i in a) 
{
  console.log("element " + i);
}*/



//task13

/*const num1 = 8;
const num2 = 8;
const sum = num1 + num2;

console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);*/



//task14

/*function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
  else{
    return "number has to be positive."
  }  
}
let n = 5;
answer = factorial(n)
console.log("Factorial of " + n + " : " + answer);*/



//task15

const operator = prompt('Enter operator ( +, -, *, / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);