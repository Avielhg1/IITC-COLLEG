// // Logical Operators:

// 1.	What are the three main logical operators in JavaScript?
// (1). && = and
// (2). ||= or
// (3). ! =not

// 2.	What does the AND (&&) operator do?
// האופרטור && מחזיר טרו אם שני מהאופרטנדים שלו הם טרו, אחרת הוא מחזיר פולס.
// true && false = false;

// false && true = false;

// false && false = false;

// true && true = true;
//          (false)      (true)
console.log(2 === 4 && 7 === 7); // = false

// 3.	What is the result of true && true?
//          (true)      (false)
console.log(5 === 5 && `10` === `10`); // true

// 4.	What is the result of true && false?
//          (true)      (false)
console.log(5 === 5 && 11 === 10); // true

// 5.	What does the OR (||) operator do?
// האופרטור || מחזיר פולס אם אחד מהאופרטנדים שלו הוא טרו, אחרת הוא מחזיר פולס.
// true || false = true

// false || true = true

// true || true = true

// false || false = false

// 6.	What is the result of false || true?
//          (false)     (true)
console.log(2 === 3 || 5 === 5); // = true

// 7.	What is the result of false || false?
//          (false)     (false)
console.log(1 === 3 || 5 === 10); // = true

// 8.	What does the NOT (!) operator do?
// ! הופך את הערך הבוליאני שלו, לדוגמא:
// true = true

// !true = false

// !false = true

// 9.	What is the result of !true?
console.log(!true); //false
// 10.	What is the result of !false?
console.log(!false); // true

// 11.	What is the result of true && true && false?
console.log(true && true && false);

// 12.	What is the result of false || false || true?
console.log(false || false || true);

// 13.	What is the order of precedence for logical operators?
// 1. NOT (!)
// 2. AND (&&)
// 3. OR (||)

// 14.	What is short-circuit evaluation in logical operations?
function A() {
  return 1 > 5;
}
function B() {
  return true;
}

function C() {
  return true;
}
console.log(A() && B());
console.log(B() && C());

// Logs "called A" to the console due to the call for function A,
// && evaluates to alse (function A returns false), then false is logged to the console;
// the AND operator **short-circuits** here and ignores function B

// 15.	In the expression a && b, when is b not evaluated?
// When a evaluates to false, then b is not evaluated at all because the result of the expression is already known to be false.
let a = 2 > 4;
let b = 4 > 2;
console.log(a && b);

// 16.	In the expression a || b, when is b not evaluated?
// When a evaluates to true, then b is not evaluated at all because the result of the expression is already known to be true.
let a1 = 2 < 4;
let b1 = 4 < 2;
console.log(a1 || b1);

// 17.	What is the result of 5 > 3 && 2 < 4?
console.log(5 > 3 && 2 < 4); //true

// 18.	What is the result of 5 > 7 || 3 < 2?
console.log(5 > 7 || 3 < 2);

// 19.	What is the result of !(5 > 3)?
console.log(!(5 > 3));

// 20.	How can you use parentheses to change the order of evaluation in logical expressions?
let t = true;
let f = false;
let r = true;
//             false   true
let return2 = (t && f) || r; // = true
//            false  true
let return3 = f && (t || r); // = false

console.log(return2);
console.log(return3);
יהנצינצנךליחםןי