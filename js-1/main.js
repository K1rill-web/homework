// Задача 1:
const firstName = "Кирилл";
const lastName = "Гапочкин";
const isStudent = true;
console.log(firstName, lastName, isStudent);

// Задача 2:
let age = 25;
let currentYear = 2025;
let birthYear = currentYear - age;
console.log(age, currentYear, birthYear);

// Задача 3:
console.log(
  `Меня зовут ${firstName}, мне ${age} лет. Я ученик курса: ${isStudent}`,
);

// Задача 4: мой ответ: 124245 false true, ответ с консоли: 123456789 false true
let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;
console.log(result);
