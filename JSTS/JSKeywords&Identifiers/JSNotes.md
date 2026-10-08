# JavaScript Keywords & Identifiers

## 1. What are they?

- **Keyword** = a word JavaScript already owns. You cannot use it as your own name.
- **Identifier** = a name YOU choose for a variable, function, class, etc.

```javascript
let age = 20;          // let = keyword, age = identifier
function greet() {}    // function = keyword, greet = identifier
```

---

## 2. Rules for Identifiers

### Rule 1: Only letters, digits, `_` and `$` are allowed

```javascript
let user_name = "A";   // valid
let $price = 10;       // valid
let _count = 5;        // valid
let user@mail = "A";   // invalid
```

### Rule 2: Cannot start with a digit

```javascript
let name1 = "A";       // valid
let 1name = "A";       // invalid
```

### Rule 3: No spaces

```javascript
let userName = "A";    // valid
let user name = "A";   // invalid
```

### Rule 4: No hyphens or special symbols (`- @ # % ! & * + .`)

```javascript
let first_name = "A";  // valid
let first-name = "A";  // invalid (JS reads it as first minus name)
```

### Rule 5: Cannot be a keyword

```javascript
let className = "A";   // valid
let let = 5;           // invalid
let if = 10;           // invalid
let class = "A";       // invalid
```

### Rule 6: Case-sensitive

```javascript
let age = 20;
let Age = 30;
let AGE = 40;          // three different variables
```

### Rule 7: No length limit (keep names meaningful)

```javascript
let totalPriceOfAllItems = 500;   // valid, and clear
let x = 500;                      // valid, but unclear
```

### Rule 8: Same name cannot be declared twice with `let` or `const` in the same scope

```javascript
let a = 1;
let a = 2;   // SyntaxError: Identifier 'a' has already been declared
```

---

## 3. Rules for Keywords

### Rule 1: Reserved, so they cannot be variable or function names

```javascript
function for() {}      // invalid
let return = 5;        // invalid
```

### Rule 2: Lowercase and case-sensitive

```javascript
let If = 5;            // legal (not the keyword), but confusing
let IF = 5;            // legal, but avoid it
```

### Rule 3: Can be used as object property names (avoid it)

```javascript
const obj = { class: "A", if: 5 };
console.log(obj.class);   // A
```

### Rule 4: `undefined`, `NaN`, `Infinity` are not keywords, but never use them as names

```javascript
console.log(typeof undefined);   // undefined (it is a value, not a keyword)
```

### Rule 5: Never reuse built-in names like `console`

```javascript
let console = "hi";    // legal, but breaks console.log
```

---

## 4. Naming Style (good habits)

- `camelCase` for variables and functions
- `PascalCase` for classes
- `UPPER_SNAKE_CASE` for fixed constants

```javascript
let userName = "Sam";          // camelCase
function getTotal() {}         // camelCase
class UserAccount {}           // PascalCase
const MAX_SIZE = 100;          // UPPER_SNAKE_CASE
```

---

## 5. Common Keywords

- **Declaring:** `var`, `let`, `const`, `function`, `class`
- **Decisions:** `if`, `else`, `switch`, `case`, `default`
- **Loops:** `for`, `while`, `do`, `break`, `continue`
- **Functions:** `return`, `async`, `await`
- **Errors:** `try`, `catch`, `finally`, `throw`
- **Objects:** `new`, `this`, `delete`, `typeof`, `instanceof`, `in`
- **Modules:** `import`, `export`
- **Values:** `true`, `false`, `null`

```javascript
const isAdult = true;               // const, true = keywords
if (isAdult) {                      // if = keyword
  console.log("Adult");
} else {                            // else = keyword
  console.log("Minor");
}
```

---

## 6. Quick Check: valid or invalid?

- `myName` - valid
- `2ndPlace` - invalid (starts with a digit)
- `total_price` - valid
- `first-name` - invalid (hyphen)
- `$amount` - valid
- `for` - invalid (keyword)
- `Class` - valid (capital C is not the keyword `class`)
- `user name` - invalid (space)

---

## 7. Interview Questions (IQ)

- **What is an identifier?** A name you choose for a variable, function, class, etc.
- **What is a keyword?** A reserved word with a built-in meaning in JavaScript.
- **Can an identifier start with a digit?** No.
- **Which special characters are allowed?** Only `_` and `$`.
- **Is JavaScript case-sensitive?** Yes. `age`, `Age`, `AGE` are different.
- **Can a keyword be an identifier?** No.
- **Can the same name be declared twice with `let`?** No, in the same scope.

---

## 8. One-Line Summary

Keywords belong to JavaScript. Identifiers belong to you. Identifiers use letters, digits, `_` and `$`, never start with a digit, have no spaces or symbols, are case-sensitive, and cannot be a keyword.

