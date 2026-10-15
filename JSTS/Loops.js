for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 1; i--) {      // 5 4 3 2 1
  console.log(i);
}

for (let i = 0; i <= 10; i += 2) {  // 0 2 4 6 8 10
  console.log(i);
}

let count = 1;

while (count <= 3) {
  console.log("Count is " + count);
  count++;
}
let n = 10;

do {
  console.log("Runs once, n is " + n);
  n++;
} while (n < 5);

let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

for (let ch of "Hi!") {
  console.log(ch);   // H, i, !
}

let person = { name: "Megna", age: 25, city: "Adelaide" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(i + " → " + colors[i]);
}

// break = stop the whole loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);          // 1 2 3 4
}

// continue = skip this round only
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);          // 1 2 4 5
}

for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "* ";
  }
  console.log(line);
}

