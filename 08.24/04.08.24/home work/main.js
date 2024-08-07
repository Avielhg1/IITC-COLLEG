// ## Questions

// 1. What is the basic assignment operator in JavaScript?
// +, -, =, %

// 2. How do you assign a value to a variable in JavaScript?
// let or const = some value.

// 3. What does the += operator do?
// Adds the value of a variable defined in the equation

// 4. How would you add 5 to a variable x using +=?
let x = 10;
x += 5;
console.log(x); // = 15.

// 5. What does the -= operator do?
// Subtracts the value of the variable defined in the equation

// 6. How would you subtract 3 from a variable y using -=?
let y = 10;
y -= 3;
console.log(y); // = 7.

// 7. What does the *= operator do?
// Multiplies the value of the variable defined in the equation.

// 8. How would you multiply a variable z by 2 using *=?
let z = 8;
z *= 2;
console.log(z);

// 9. What does the /= operator do?
// Divides the value of the variable defined in the equation.

// 10. How would you divide a variable w by 4 using /=?
let w = 40;
w /= 4;
console.log(w);

// 11. What's the difference between x = x + 1 and x += 1?
// no difference, Both are equal.

// 12. How do you increase a variable by 1 using an assignment operator?
// by operator + twice = (++)

// 13. What happens when you use += with strings?
// Adds the value not mathematically but appends it to the end of the number.
let b = 10;
b += `5`;
console.log(b); // = 105.

// 14. How would you append the string "Hello" to a variable str using +=?
let str = "hello";
str += "World";
console.log(str);

// 15. What's the result of let x = 5; x += 3;?
let X = 5;
X += 3;
console.log(X);
////////////////////////////////////////////////////////////////////////////////////////////////////

// # JavaScript Arithmetic Operations Quiz

// ## Questions

// 1. What is the result of 5 + 3 in JavaScript?
console.log(5 + 3); // = 8

// 2. How do you add two numbers in JavaScript?
// use the + operator.

// 3. What symbol is used for subtraction in JavaScript?
// use the - operator.

// 4. What is the result of 10 - 4 in JavaScript?
console.log(10 - 4); // = 6

// 5. How do you multiply two numbers in JavaScript?
// use the * operator.

// 6. What is the result of 6 * 2 in JavaScript?
console.log(6 * 2); // = 12

// 7. What symbol is used for division in JavaScript?
// use the / operator.

// 8. What is the result of 15 / 3 in JavaScript?
console.log(15 / 3); // = 5

// 9. What happens if you divide a number by 0 in JavaScript?
console.log(15 / 0); // = Infinity

// 10. How do you calculate the remainder of a division in JavaScript?
// use the % operator.

// 11. What is the result of 17 % 5 in JavaScript?
console.log(17 % 5); // = 2

// 12. How do you add 1 to a variable x in JavaScript?
// use the + operator.
// x + 1

// 13. What's the difference between x += 1 and x = x + 1?
// no difference, Both are equal.

// 14. How do you subtract 1 from a variable y in JavaScript?
// use the - operator.
//  y - 1

// 15. What is the result of 10 + 5 * 2 in JavaScript?
console.log(10 + 5 * 2); // = 20

// 16. How can you change the order of operations in an arithmetic expression?
// use the ( ).

// 17. What is the result of (10 + 5) * 2 in JavaScript?
console.log(10 + 5) * 2; // = 30

// 18. How do you convert a string "5" to a number in JavaScript?
let str1 = "5";
str1 = Number(str1);
console.log(str1);

// 19. What is the result of "5" + 3 in JavaScript?
console.log("5" + 3); // = 53

// 20. What is the result of "10" - 5 in JavaScript?
console.log("10" - 5); // = 5

const product_1 = {
  name: "Phone",
  categories: ["electronics"],
  isAvailable: false,
};

// 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
function addCategory(product, category) {
  // your code here
}
function addCategory(product, category) {
  product.categories.push(category);
  console.log("Updated Product:", product);
}

addCategory(product_1, `gadgets`);
// console.log("Updated Product:", product);

// addCategory(product_1, "gadgets");
// console.log("Updated Product:", product);
// let avielh = 29;
// console.log(avielh);
