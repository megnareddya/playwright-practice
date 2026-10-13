console.log(`------------Literals--------------------`);
let a=10;
console.log(a);
let x='Megna';
let y="Megna";
console.log(' Hi ${x},${y}'); //Hi ${x},${y}
console.log(" Hi ${x},${y}");//Hi ${x},${y}
console.log(`Hi ${x},${y}`);//Hi Megna,Megna
console.log("She said \"hi\""); //She said "hi"
console.log("megh\tana");//megh ana
console.log('meg\nna');//meg
                       //na
let z = null;        // "empty on purpose" (you set it)
let c;               // undefined = no value given yet
console.log(z);      // null
console.log(c);//undefined
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);   // apple (counting starts at 0)
let person = { name: "Megna", age: 25 };
console.log(person.name);   // Megna
console.log(`---------------Operators-------------------`);
let q=3;
let w=q++;
console.log(q,w);//4,3
let e=++q;
console.log(q,e);//5,5
console.log(5=="5");//true bcz string 5 is first converted then compared with 5(loose equality)
console.log(5==="5");//false bcz type & value is checked without converting(strict equality)
let age = 25;
console.log(age > 18 && age < 60);   // true
console.log(age < 18 || age > 20);   // true
console.log(!true);                  // false
//false, 0, "", null, undefined, NaN. Everything else is truthy.
console.log(0 || "default");     // default (first truthy value)
console.log("hi" && "there");    // there   (last value if all truthy)
console.log(0 && "there");       // 0       (stops at first falsy)
//Nullish operator?? -> Gives the right side only if the left is null or undefined.
let u = 0;
console.log(u ?? 10);   // 0   (0 is not null/undefined)
//Ternary operator->condition ? valueIfTrue : valueIfFalse
let agee = 20;
let result = agee >= 18 ? "Adult" : "Minor";
console.log(result);   // Adult
//String operator->joining text
let first = "Megna";
let last = "Reddy";
console.log(first + " " + last);   // Megna Reddy
console.log("5" + 3);   // "53"  (+ joins, because one side is a string)
console.log("5" - 3);   // 2     (- only works on numbers)
console.log("5" * "2"); // 10
console.log("abc" - 1); // NaN
//typeof operator
console.log(typeof 42);         // number
console.log(typeof "hi");       // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object   (a famous old JavaScript bug)
console.log(typeof [1, 2]);     // object
console.log('----------------------');
let age1 =  "pramod"; // String literal.
let age2 =  'pramod'; 

let isStudent = true;
 // This is a boolean literal assigned to the variable 'isStudent'.

 let pi = 3.14;


 let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.

 let undefinedValue;

 // Numric Literal - Numeric
// 1. int
// 2. float

// // typeof - operatr - It will tell you what is a data type that it has. 
console.log(typeof age1);
console.log(typeof age2);
console.log(typeof pi);
console.log(typeof isStudent);
console.log(typeof nullValue); // object
console.log(typeof undefinedValue);
console.log('----------undefined--------------');
let userName; // declared but not assigned
console.log(userName);
console.log(typeof userName);

// function greet() {
//     // no return statement
// }
// console.log(greet()); 

let k;
k = 10;
console.log(k);

console.log('--------null-----------------');
let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture); // "object"   <-- known JS quirk!

console.log('------------');
let h = 0xFF;
console.log(typeof h);
console.log('------all number types in js-------------------------');
// ============================================================
// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------

// Decimal (Base 10) - most common
let decimal = 42;
console.log("Decimal:", decimal); // 42

// Binary (Base 2) - starts with 0b or 0B
let binary = 0b1010; // 10 in decimal
console.log("Binary 0b1010:", binary); // 10

// Octal (Base 8) - starts with 0o or 0O
let octal = 0o52; // 42 in decimal
console.log("Octal 0o52:", octal); // 42

// Hexadecimal (Base 16) - starts with 0x or 0X
let hex = 0x2A; // 42 in decimal
console.log("Hexadecimal 0x2A:", hex); // 42

// --------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// --------------------------------------------------------

let float1 = 3.14;
let float2 = -0.5;
let float3 = .5;    // valid, but avoid for readability
let float4 = 5.;    // valid, but avoid for readability

console.log("Float 3.14:", float1);
console.log("Float -0.5:", float2);
console.log("Float .5:", float3);
console.log("Float 5.:", float4);



// Exponential notation
let exp1 = 1.5e3;   // 1.5 * 10^3 = 1500
let exp2 = 1.5e-3;  // 1.5 * 10^-3 = 0.0015
let exp3 = 2E10;    // 2 * 10^10 = 20000000000

console.log("Exponential 1.5e3:", exp1);   // 1500
console.log("Exponential 1.5e-3:", exp2);  // 0.0015
console.log("Exponential 2E10:", exp3);    // 20000000000
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------


let million = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;


// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"
// --------------------------------------------------------
// 5. SPECIAL NUMERIC VALUES
// --------------------------------------------------------

// Infinity
console.log("Infinity:", Infinity);           // Infinity
console.log("1 / 0:", 1 / 0);                 // Infinity
console.log("-1 / 0:", -1 / 0);               // -Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"

// -Infinity
console.log("-Infinity:", -Infinity);

// NaN (Not a Number) - result of invalid math
console.log("NaN:", NaN);                     // NaN
console.log("0 / 0:", 0 / 0);                 // NaN
console.log("'hello' * 2:", "hello" * 2);     // NaN
console.log("typeof NaN:", typeof NaN);       // "number" (quirky!)
console.log('---------------');
let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);
console.log('--------------');
let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";



console.log(`Status ${statusCode}: ${category}`);
console.log('-------------');
let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);
console.log(`Value is , ${isSKMale}`);
console.log('----------------------');
let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);


// Template Literal
console.log(`What is the SLA time ? - ${sla}`);
console.log('----------------------');
let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");
console.log('----------------------');
let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);
console.log('-------------');
let i = 1;
let resultt = i++ + ++i;//1 + 3
console.log(resultt,i );//3
console.log('----------');
let ab = 10;
console.log(++ab + ab + ab++);//11 + 11 + 11
console.log(ab);//12
console.log('--------------');
let ac= 10;
console.log(++ac + ac);//11 + 11
console.log(ac);//11
console.log('-----------');
let api_response1 = "Pramod";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);