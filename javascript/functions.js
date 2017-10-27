//Write function called isEven() that determines if the arguement is even(true) or odd(false).

function isEven(num) {
  if (num % 2 === 0) {
      return true;
  } else {
      return false;
  }
}

//Write a function factorial which takes a single numeric argument and returns the factorial of that number.

function factorial(num) {
  let result = 1;
  for (var i = 2; i <= num; i++) {
      result = result * i;
  }
  return result;
}

//Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.

function kebabToSnake(str) {
   let newStr = str.replace(/-/g, "_");
   return newStr;
}