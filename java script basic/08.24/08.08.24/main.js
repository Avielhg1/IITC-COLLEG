// JavaScript Loops Exercises

// // # for loop:
// for (let i = 0; i < 5; i++) {
//     console.log("Hello!");
//   }
// //   let i = 0: אתחול משתנה i לערך התחלתי של 0.
// // i < 5: תנאי עצירה – הלולאה תרוץ כל עוד i קטן מ-5.
// // i++: כל פעם שהלולאה מסתיימת, i גדל ב-1.
// // התוצאה תהיה שהטקסט "Hello!" יודפס 5 פעמים.

// // # while loop:
// let count = 0;
// while (count < 5) {
//   console.log("Counting: " + count);
//   count++;
// }
// // הלולאה תרוץ כל עוד count קטן מ-5.
// // בתוך הלולאה, הקוד מדפיס את המספר הנוכחי של count, ואז מגדיל אותו ב-1.

// // # do...while loop:
// let count1 = 0;
// do {
//   console.log("Counting: " + count1);
//   count1++;
// } while (count1 < 5);

// הלולאה מריצה את הקוד פעם אחת, ואז בודקת אם התנאי מתקיים להמשך.

// 'for' Loop Exercises

// 1. Write a loop that counts from 10 to 1 (backwards). Hint: Start your counter at 10 and decrement it in each iteration. 
for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
// 2. Create a loop that prints only even numbers from 2 to 20. Hint: Start at 2 and increment by 2 in each iteration. 
for (let i = 2; i <= 20; i+=2) {
console.log(i)

}
// 3. Make a loop that adds up all numbers from 1 to 10 and prints the sum. Hint: Use a variable to keep track of the sum and add each number in the loop. 
// "כתוב לולאה שמוסיפה את כל המספרים מ-1 עד 10 ומדפיסה את הסכום. רמז: השתמש במשתנה כדי לעקוב אחרי הסכום והוסף כל מספר בלולאה."
let sum = 0
for(i = 1; i <= 10; i++)
sum += i
console.log(sum);

// 4. Write a loop that prints the 5 times table (5, 10, 15, ..., 50). Hint: Multiply each number in the loop by 5.
// Create a loop that prints this pattern:
// markdown
// Copy code
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 10; i++) {
    console.log(i * 5);
    
}
for(let i = 1; i <= 10; i++) {
    let Stars = "";
    for (let j = 1; j<= i; j++)
        Stars += "*";
    console.log(Stars);
    
}

// 5.	Hint: Use nested loops - one for rows and one for columns. Learn more about nested loops
// 'while' Loop Exercises
// 1.	Write a while loop that prints numbers from 1 to 10. Hint: Initialize a counter before the loop and increment it inside. Learn more about while loops
let a = 1
while (a <= 10) {
console.log(a);
a++
}
    
// 2.	Create a while loop that doubles a number until it's bigger than 100. Hint: Start with 1 and multiply by 2 in each iteration. Learn more about while loops
let b = 1
while (b <= 100) {
    console.log(b);
    b *= 2
}
// 3.	Make a while loop that counts down from 20 to 0. Hint: Start with 20 and decrement in each iteration. Learn more about while loops
let c = 20
while (c >= 0) {
    console.log(c);
    c--
}
// 4.	Write a while loop that keeps asking for a password until the correct one is entered. Hint: Use prompt() to get user input and compare it to the correct password. Learn more about while loops
// let password = "12345";
// let userInput = "";
// while (userInput!== password ) {
//    userInput = prompt("Please enter the password")

// }
// console.log("Access");1

// let correctPassword = "12345";  // הסיסמה הנכונה
// let userInput = "";  // אתחול משתנה לקבלת קלט מהמשתמש

// while (userInput !== correctPassword) {  // הלולאה תמשיך לרוץ כל עוד הסיסמה שהוזנה אינה נכונה
//   userInput = prompt("Please enter the password:");  // בקשת סיסמה מהמשתמש
// }

// console.log("Access granted!");  // הסיסמה הנכונה הוזנה והגישה מאושרת

// 5.	Create a while loop that generates random numbers between 1 and 10 until it gets a 5. Hint: Use Math.random() and Math.floor() to generate random integers. Learn more about while loops
let raNum = 0;
while (raNum !== 5) {
    raNum = Math.floor(Math.random() * 10) + 1;
    console.log(raNum);
    
}
console.log("Got a 5! The loop stopped.");

// let randomNumber = 0;  // אתחול המשתנה למספר כלשהו שאינו 5 כדי שהלולאה תתחיל

// while (randomNumber !== 5) {  // הלולאה תמשיך לרוץ עד שיגיע המספר 5
//     randomNumber = Math.floor(Math.random() * 10) + 1;  // יצירת מספר אקראי בין 1 ל-10
//     console.log(randomNumber);  // הדפסת המספר שנוצר
// }

// console.log("Got a 5! The loop stopped.");  // הודעה שהלולאה הסתיימה

// שאלה 1: כתוב לולאת for שמדפיסה את כל המספרים בין 1 ל-20, אך מדלגת על כל מספר שמתחלק ב-3.
for (let i = 1; i <= 20; i++) {
    if (i % 3 !== 0)
         console.log(i)
        
}

// שאלה 2: כתוב לולאת while שמחשבת ומדפיסה את סכום כל המספרים מ-1 עד 50. התוצאה הסופית צריכה להיות מודפסת מחוץ ללולאה.
let sum1 = 0
let i1 = 1
while (i1 <= 50) {
    sum1 += i1
    i1++
}
console.log(sum1);

// שאלה 3: כתוב לולאת for שמדפיסה את סדרת פיבונאצ'י עד למספר ה-10 בסדרה. (רמז: סדרת פיבונאצ'י מתחילה ב-0 ו-1, וכל מספר בסדרה הוא הסכום של שני המספרים הקודמים).
let num1 = 0; // האיבר הראשון בסדרה
let num2 = 1; // האיבר השני בסדרה

console.log(num1); // מדפיסים את האיבר הראשון
console.log(num2); // מדפיסים את האיבר השני

for (let i = 3; i <= 10; i++) { // מתחילים בלולאה מהאיבר השלישי ועד האיבר העשירי
    let nextNum = num1 + num2; // מחשבים את האיבר הבא בסדרה
    console.log(nextNum); // מדפיסים את האיבר הבא בסדרה
    num1 = num2; // מעדכנים את num1 כך שיהיה שווה לאיבר הנוכחי
    num2 = nextNum; // מעדכנים את num2 כך שיהיה שווה לאיבר הבא
}


// שאלה 4: כתוב לולאת for שמדפיסה את כל המספרים מ-1 עד 100, אך עוצרת כאשר היא מגיעה למספר שמתחלק ב-17.
for (let i = 1; i <= 100; i++) {
    if (i % 17 === 0) {
    break;
}
console.log(i);
}
// // שאלה 5: כתוב לולאת while שממשיכה לרוץ עד שמקבלים מספר זוגי אקראי בין 1 ל-100. כאשר מתקבל המספר, הדפס הודעה שמציינת שהמספר נמצא.

let randomNumber1 = 1;  // אתחול המשתנה למספר כלשהו כדי שהלולאה תתחיל

while (randomNumber1 % 2 !== 0) {  // הלולאה תמשיך לרוץ עד שיגיע מספר זוגי
    randomNumber1 = Math.floor(Math.random() * 100) + 1;  // יצירת מספר אקראי בין 1 ל-100
    console.log("The number is " + randomNumber1);  // הדפסת המספר שנוצר
}

console.log("Got a " + randomNumber1 + "! The loop stopped.");  // הודעה שהלולאה הסתיימה



// 'do...while' Loop Exercises
// 1.	Write a do...while loop that prints numbers from 1 to 5. Hint: Initialize a counter before the loop and increment it inside. Learn more about do...while loops

// 2.	Create a do...while loop that asks the user if they want to play again. Hint: Use prompt() to get user input and check if it's "yes" or "no". Learn more about do...while loops

// 3.	Make a do...while loop that rolls a die (1-6) until it gets a 6. Hint: Use Math.random() and Math.floor() to simulate a die roll. Learn more about do...while loops

// 4.	Write a do...while loop that keeps doubling a number until it's over 1000. Hint: Start with 1 and multiply by 2 in each iteration. Learn more about do...while loops

// 5.	Create a do...while loop that asks for names and adds them to a list until the user enters "done". Hint: Use prompt() to get names and push them to an array. Learn more about do...while loops
// Remember to test your code with different inputs to ensure your loops work correctly!



// תרגול:
// // שאלה 1:
// // כתוב לולאת for שמדפיסה את כל המספרים מ-1 עד 10.    
// // רמז: השתמש במשתנה מונה שמתחיל ב-1 ומתקדם עד 10, והדפס את המונה בכל איטרציה.
// for(i = 1; i <= 10; i++)
//     console.log(i);

// // שאלה 2:
// // כתוב לולאת while שמדפיסה את כל המספרים הזוגיים בין 1 ל-20.
// // רמז: התחל את הלולאה במספר 2 והוסף 2 בכל איטרציה.
// let count2 = 2;
// while (count2 <= 20) {
// console.log(count2);
// count2 += 2; 
// }

// // שאלה 3:
// // כתוב לולאת for שמדפיסה את המספרים מ-10 ועד 1 בסדר יורד.
// // רמז: התחל את המונה ב-10 והקטן אותו בכל איטרציה.
// for(i = 10; i >= 1; i--)
//     console.log(i);
    
// // שאלה 4:
// // כתוב לולאה שמדפיסה את כל המספרים מ-1 עד 10 אך רק את המספרים שמתחלקים ב-3.
// // רמז: השתמש במשתנה מונה ובדוק אם כל מספר מתחלק ב-3 לפני ההדפסה.
// for(i = 1; i <= 10; i++)
//     if (i % 3 === 0)
//     console.log(i)

// // שאלה 5:
// // כתוב לולאת for שמדפיסה את המספרים מ-1 עד 5 אך עוצרת ומפסיקה לרוץ כשמגיעה למספר 3.
// // רמז: השתמש בפקודת break כדי להפסיק את הלולאה כאשר המונה מגיע ל-3
// for(i = 1; i <= 5; i++)
//     if(i === 3)
//         break;
// console.log(i);



