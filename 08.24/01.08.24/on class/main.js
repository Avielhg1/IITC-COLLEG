// Nested loops:

// multiplication table:

for (let i = 1; i <= 10; i++) {
  console.log(`המכפלה שלי עכשיו היא ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`${i}*${j}`);
  }
}

for (let i = 1; i <= 10; i++) {
  let house = ``;
  for (let j = 1; j <= 10; j++) {
    house += `${j * i}`;
  }
  console.log(house);
}

let n = 10;
console.log(++n);
