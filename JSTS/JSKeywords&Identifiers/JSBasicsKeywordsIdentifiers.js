// identifier -> a name that you choose for something in the 
// let userName = "Sam";        // userName → identifier (variable)
// function addNumbers() {}     // addNumbers → identifier (function)
// const PI = 3.14;             // PI → identifier (constant)

//Rule1->. Allowed characters: letters (a-z, A-Z), digits (0-9), underscore _, and dollar sign $
// let user_name = "A";   // ✅
// let $price = 10;       // ✅
// let _count = 5;        // ✅
// console.log(user_name);
// console.log($price);
// console.log(_count);

// //Rule2. Must NOT start with a digit
// //let 1name = "A";   // ❌ SyntaxError
// let name1 = "A";   // ✅
// //console.log(1name);
// console.log(name1);

// //Rule3->No spaces
// //let user name = "A";   // ❌
// let userName = "A";    // ✅
// //console.log(user Name);
// console.log(userName);

// //Rule4->No special symbols like - @ # % ! & * + .
// // let user-name = "A";   // ❌ JS reads it as user minus name
// // let user@mail = "A";   // ❌

// //Rule5->Cant be a reserved word
// // let let = 5;      // ❌
// // let if = 10;      // ❌
// // let class = "A";  // ❌

// //Rule6->case sensitive
// let age = 20;
// let Age = 30;
// let AGE = 40;    // three DIFFERENT variables
// console.log(age);
// console.log(Age);
// console.log(AGE);

// //Rule7->No length limit, but keep names short and meaningful.
// let meg=123;
// let megnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa=5;
// console.log(meg);
// console.log(megnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa);

// //Rule8->Unicode letters are allowed
// let café =1;
// console.log(café);

// // A keyword is a word that JavaScript already owns. It has a built-in meaning, so you can't use it as your own name.
// // let age = 20;     // let → keyword
// // if (age > 18) {}  // if → keyword

// //Rule1->Some words are only "sometimes" reserved (contextual keywords), like let, static, async, await, of, get, set. Just treat them as off-limits.
// //Rule2->Keywords are case-sensitive
// let If = 5;     // ✅ legal (different from "if")
// let IF = 5;     // ✅ legal,Legal, but confusing. Don't do it.
// console.log(If);
// console.log(IF);

// //Rule3->dont shadow built-ins
// //let console = "hi";   // legal, but breaks console.log!
// let name = "x";       // in browsers, "name" is already a global property
// //console.log(console);
// //console.log(name);



// //Rule4->Property names CAN be keywords (for object keys), though it's still best avoided:
// const obj = { class: "A", if: 5 };
// console.log(obj.class);   // works


//Refer the below code to understand more clearly
// ===============================================
//  KEYWORDS & IDENTIFIERS: ONE COMPLETE PROGRAM
// ===============================================

// ---------- PART 1: Valid identifiers ----------
// Rule 1: letters, digits, _ and $ are allowed
let userName = "Megna";
let user_age = 25;
let $price = 99.5;
let _secret = "hidden";

// Rule 2: digits are fine, but NOT at the start
let item1 = "Pen";
let item2 = "Book";

// Rule 6: case-sensitive (three different variables)
let age = 20;
let Age = 30;
let AGE = 40;

console.log("--- Part 1: Valid identifiers ---");
console.log(userName, user_age, $price, _secret);
console.log(item1, item2);
console.log(age, Age, AGE);

// ---------- PART 2: Naming conventions ----------
const MAX_SIZE = 100;          // UPPER_SNAKE_CASE for fixed constants
let totalPrice = 250;          // camelCase for variables

console.log("--- Part 2: Conventions ---");
console.log("Max size:", MAX_SIZE, "| Total price:", totalPrice);

// ---------- PART 3: INVALID identifiers (kept as comments) ----------
// Remove the // and run one line at a time to see each error.
// let 1name = "A";        // ❌ starts with a digit
// let user name = "A";    // ❌ contains a space
// let first-name = "A";   // ❌ hyphen is not allowed
// let user@mail = "A";    // ❌ special symbol
// let let = 5;            // ❌ keyword used as a name
// let if = 10;            // ❌ keyword used as a name
// let a = 1; let a = 2;   // ❌ same name declared twice

// ---------- PART 4: Keywords in action ----------
console.log("--- Part 4: Keywords in action ---");

const isAdult = true;              // const, true → keywords
let count = 0;                     // let → keyword

if (age >= 18 && isAdult) {        // if → keyword
  console.log("Adult");
} else {                           // else → keyword
  console.log("Minor");
}

for (let i = 1; i <= 3; i++) {     // for → keyword
  count = count + i;
}
console.log("Count:", count);      // 6

while (count > 4) {                // while → keyword
  count--;
}
console.log("After while:", count);

// ---------- PART 5: Case-sensitivity of keywords ----------
// "Class" and "IF" are NOT keywords, so they are legal (but confusing).
let Class = "Math";
let IF = "Maybe";
console.log("--- Part 5: Case-sensitivity ---");
console.log(Class, IF);

// ---------- PART 6: Keywords as object property names ----------
const box = { class: "A", if: 5, new: "yes" };
console.log("--- Part 6: Keywords as properties ---");
console.log(box.class, box.if, box.new);

// ---------- PART 7: Identifier checker (all rules together) ----------
const reserved = [
  "let", "const", "var", "if", "else", "for", "while", "do", "break",
  "continue", "function", "return", "class", "new", "this", "true",
  "false", "null", "switch", "case", "default", "try", "catch", "throw"
];

const testNames = [
  "myName", "2ndPlace", "total_price", "first-name",
  "$amount", "for", "Class", "user name"
];

console.log("--- Part 7: Checker ---");
for (let i = 0; i < testNames.length; i++) {
  const word = testNames[i];

  // Rules 1-4: only letters, digits, _ and $, and no digit at the start
  const goodShape = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(word);

  // Rule 5: must not be a keyword
  const isKeyword = reserved.includes(word);

  if (!goodShape) {
    console.log(word + " → ❌ INVALID (bad character, space, or starts with a digit)");
  } else if (isKeyword) {
    console.log(word + " → ❌ INVALID (it is a keyword)");
  } else {
    console.log(word + " → ✅ VALID");
  }
}


