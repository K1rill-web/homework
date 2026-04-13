// Задание 1.

const users = [
  {
    name: "Alex",
    age: 24,
    isAdmin: false,
  },
  {
    name: "Bob",
    age: 13,
    isAdmin: false,
  },
  {
    name: "John",
    age: 31,
    isAdmin: true,
  },
  {
    name: "Jane",
    age: 20,
    isAdmin: false,
  },
];
console.log(users);

users.push(
  {
    name: "Ann",
    age: 19,
    isAdmin: false,
  },
  {
    name: "Jack",
    age: 43,
    isAdmin: true,
  },
);
console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum += users[i].age;
  }
  return sum / users.length;
}
console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

users.push(
  {
    name: "Nicole",
    age: 40,
    isAdmin: true,
  },
  {
    name: "ALice",
    age: 35,
    isAdmin: true,
  },
  {
    name: "Kira",
    age: 22,
    isAdmin: true,
  },
);
console.log(users);

function getAllAdmins(users) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
      result.push(users[i]);
    }
  }
  return result;
}
console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(array, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(array, n) {
  if (n === undefined) {
    return array.length > 0 ? [array[0]] : [];
  }
  if (n === 0) {
    return [];
  }
  if (n > array.length) {
    console.error(`Не может быть больше длины массива: ${n}`);
  }
  let count = n;
  if (count > array.length) {
    count = array.length;
  }
  const result = new Array(count);
  for (let i = 0; i < count; i++) {
    result[i] = array[i];
  }
  return result;
}

console.log(first([10, 20, 30, 40], 2));
console.log(first([10, 20, 30, 40], 0));
console.log(first([10, 20, 30, 40]));
console.log(first([], 3));
console.log(first([1, 2, 3], 5));
