// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
let user = {
  name: "Kirill",
  age: 25,
  isProgramer: true,
  company: "Aroken.ru",
  city: "Saint-Peterburg",
};
console.log(user);
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const isEmpty = (object) => {
  if (object === null || typeof object !== "object") {
    return false;
  }
  for (let key in object) {
    return false;
  }
  return true;
};
// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
// Создаем исходный объект task
const task = {
  title: "Изучить JavaScript",
  description: "Пройти курс по основам JS и выполнить практические задания",
  isCompleted: false,
};

const cloneAndModify = (object, modifications) => {
  return { ...object, ...modifications };
};

const modifications = {
  isCompleted: true,
  priority: "Высокий",
};

const modifiedTask = cloneAndModify(task, modifications);

console.log("Свойства модифицированного объекта:");
for (let key in modifiedTask) {
  console.log(`${key}: ${modifiedTask[key]}`);
}
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.
// Функция для вызова всех методов объекта
function callAllMethods(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      console.log(`Вызов метода: ${key}`);
      obj[key]();
    }
  }
}

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  method3: function () {
    console.log("Метод 3 вызван (альтернативный синтаксис)");
  },
  property: "Это не метод",
};
callAllMethods(myObject);
// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
