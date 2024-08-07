// 1. What is the data type of x = 5?
let x = 5;
console.log(typeof x);

// 2. How do you declare a string variable in JavaScript?
// *you need to use in let/const declare a strings end to add- "" ''
let string = "hello";
const string1 = "welcome";
console.log(string, string1);

// 3. What's the difference between null and undefined?
// * Undefined: A variable that has been declared but not assigned a value.
let age;
console.log(age);
// * Null: Represents the intentional absence of any object value.
let emptyValue = null;
console.log(emptyValue);

// 4. How can you check the type of a variable in JavaScript?
let myAge = 28;
let myfatherage = `58`;
console.log(typeof myAge);
console.log(typeof myfatherage);

// let myAge1 = 28;
// let myage = `28`;
// console.log(myAge == myage);
// console.log(myAge === myage);

// 5. What's the data type of the result of 5 / 2?
let result1 = 5 / 2;
console.log(typeof result1);
// console.log(result); = 2.5

// 6. What's the data type of true?
let istrue = true;
console.log(typeof istrue); // boolean

// 7. How do you declare an object in JavaScript?
// *we are need to use in {}
let person1 = {
  name: "aviel",
  age: 28,
  city: "beitShemesh",
  isStudent: true,
};
console.log(person1);

// 8. What's the data type of NaN?
console.log(0 / 0);

// 9. What's the difference between == and ===?
// == - Similar but not exactly equal.
// === - absolutely worth it.
let danAge = 6;
let danage = "6";
console.log(danAge === danage); // false
console.log(danAge == danage); // true

// 10. How do you convert a string to a number?
let numstring = "10";
console.log(typeof numstring); // string.
console.log(typeof +numstring); // number.

// 11. What's the data type of the result of "5" + 3?
let a = "5" + 3;
console.log(typeof a); // string.
console.log(a); // 53

// 12. How can you check if a variable is of a specific type?
let team = "maccabi";
let tshirtnumber = 7;
let booleanvar = true;
console.log(typeof team);
console.log(typeof tshirtnumber);
console.log(typeof booleanvar);
// We need to use the typeof command in each test and it will print us the data type.

// 13. How do you create a multi-line string in JavaScript?
let multilinestring = `
this is a multi-line string whit a two words
in javascript code.
`;
console.log(multilinestring);

// 14. What's the difference between single quotes, double quotes, and backticks for strings?
let doubleQuoteString = "This is a string with double quotes."; // ("") מרכאות כפולות
console.log(doubleQuoteString);
// נוח לשימוש כאשר המחרוזת מכילה מרכאות יחידות.
// מאפשר שימוש בתו \ כדי לאפשר הימלטות של תווים מיוחדים.

let singleQuoteString = `This is a string with single quotes.`; // (``) מרכאות יחידות
console.log(singleQuoteString);
// נוח לשימוש כאשר המחרוזת מכילה מרכאות יחידות.
// מאפשר שימוש בתו \ כדי לאפשר הימלטות של תווים מיוחדים.

let backtickString = `This is a string with backticks.`; //  (`) טילדה הפוכה (backticks)
console.log(backtickString);
// מחרוזות רב-שורתיות
// הכנסת ביטויים
// קלות הימלטות

// 15. How do you convert a number to a string?
let c = 9 + ""; // we need to use "" or whit .toString().
console.log(typeof c);
let c1 = c.toString();
console.log(typeof c1);

// 16. What's the result of typeof null?
let resultnull = null;
console.log(typeof resultnull);

// 17. How do you declare a constant variable in JavaScript?
const student = "aviel";
console.log(student);
console.log(typeof student);

// 18. What happens when you add a string and a number? How can you handle this?

let stringnumber = `age` + 28;
let numb = 28;
console.log(stringnumber); // = age28
let num1 = "30"; //Number()
let num2 = 22;
let sum = Number(num1) + num2;
console.log(sum);
let num3 = 108;
let num4 = "42"; // Number()
let sum1 = num3 + Number(num4);
console.log(sum1);
// 19. What's the data type of the result of 3 > 2?
let result2 = 3 > 2;
console.log(typeof result2); // boolean.

// 20. How do you escape special characters in a string?
// use whit- \, \n, \t, \b, \r, \z.
let str = "it`s a nice day!";
console.log(str);
let lines = "firstline\nsecondline";
console.log(lines);
let bless = '"welcome"';
console.log(bless);
let tabstring = "tab1\ttab2";
console.log(tabstring);
let str2 = "This is a vertical tab\v";
console.log(str2);

// 21. What's the difference between var, let, and const?
// var- משתנה קבוע שניתן לשנות את ערכו (היה נפוץ בעבר)
// let- משתנה שניתן לשנות את ערכו.
// const- משתנה קבוע שלא ניתן לשנות את ערכו.

// 22. How do you check if a variable is undefined?
let undefinedvariable;
console.log(typeof undefinedvariable);

// 23. What's the result of 10 + "5"?
let result3 = 10 + "5";
console.log(10 + "5");
console.log(typeof result3);

// 24. How do you create a boolean variable?
let isrich = true;
console.log(isrich);
console.log(typeof isrich);

// 25. What's the difference between primitive data types and objects in JavaScript?
// primitive:
let a1 = 10;
let b1 = a1; // b מקבל את הערך של a
b1 = 20;
console.log(a1); // ידפיס 10
console.log(b1); // ידפיס 20

// objects:
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 מקבל את ההפניה ל-obj1
obj2.name = "Bob";
console.log(obj1.name); // ידפיס "Bob"
console.log(obj2.name); // ידפיס "Bob"

// הבדלים עיקריים:
// אחסון והעתקה:

// פרימיטיבים: מעתיקים את הערך עצמו.
// אובייקטים: מעתיקים את ההפניה לערך.
// השוואה:

// פרימיטיבים: משווים את הערכים עצמם.
// אובייקטים: משווים את ההפניות, לא את הערכים עצמם.
// שימוש:

// פרימיטיבים: פשוטים וקבועים.
// אובייקטים: מורכבים וגמישים, יכולים להשתנות ולהכיל הרבה נתונים.
// לסיכום, פרימיטיבים הם ערכים בסיסיים כמו מספרים ומחרוזות, בעוד שאובייקטים הם מבנים מורכבים שיכולים להכיל הרבה מידע.
