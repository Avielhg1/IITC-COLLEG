// # JavaScript Comparison Operators Quiz

// Questions:
// 1. What is the equality operator in JavaScript?
let e = `10`;
let q = 10;
console.log(e == q); // דומה אך לא שווה באופן מוחלט
console.log(e === q); // האם שווה באופן מוחלט או לא?

// 2. What's the difference between == and ===?
let a = `100`;
let b = 100;
console.log(a == b); // דומה אך לא שווה באופן מוחלט
console.log(a === b); // האם שווה באופן מוחלט או לא?

// 3. How do you check if two values are not equal in JavaScript?
let values1 = 15;
let values2 = 18;
let values3 = "21";
console.log(values1 === values2); // print- true or (false).
console.log(values1 === values3);

// 4. What does the > operator do?

// left greater than right
console.log(4 > 3);
let c = 3;
let d = 4;
console.log(d > c);

// 5. What does the < operator do?
// Left is smaller than right:
console.log(5 < 6);
let g = 5;
let f = 6;
console.log(g < f);

// 6. How do you check if a value is greater than or equal to another value?
console.log(10 >= 11);

// 7. How do you check if a value is less than or equal to another value?
console.log(10 <= 11);

// 8. What is the result of 5 > 3?
console.log(5 > 3); // true

// 9. What is the result of 10 === "10"?
console.log(10 === "10"); // false

// 10. What is the result of 7 <= 7?
console.log(7 <= 7); // true

// 11. How would you compare two strings alphabetically?
let alpha = "alef";
let beta = "bet";
console.log("alef" === "bet"); // ידפיס טעות מכיוון שאלף שונה מבית.
console.log("alef" > "bet"); // נכון מבחינה אלפאבתית- ארבע אותיות כנגד שלוש אותיות.
console.log("alef" < "bet"); // נכון מבחינה אלפאבתית- ארבע אותיות כנגד שלוש אותיות.

// 12. What's the result of "apple" < "banana"?
let str1 = "apple";
let str2 = "banna";
console.log("apple" < "banna");

// 13. What does the !== operator do?
console.log("apple" !== "banna");
// .הוא בודק אם שני ערכים אינם שווים וגם אם סוגי הנתונים שלהם אינם שווים.
// אם הערכים שונים או סוגי הנתונים שונים, הוא מחזיר אמת -שזה לא שווה- . אם הערכים וסוגי הנתונים שווים, הוא מחזיר שקר.

// 14. What's the result of 5 !== "5"?
console.log(5 !== "5"); //true' it's not same operator/

// 15. How do comparison operators work with different data types? = true or false
console.log("1" === 1);
console.log("a" == 3);

let h = 8;
console.log(h);
