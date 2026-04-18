"use strict";
const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};
const todos = [];
const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;
const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};
const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};
const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

const todosContainer = document.querySelector(".todos");

const createTodoElement = (todo) => {
  const li = document.createElement("li");
  li.classList.add("todo");
  li.dataset.id = todo[todoKeys.id];
  if (todo[todoKeys.is_completed]) {
    li.classList.add("completed");
  }

  li.innerHTML = `
    <div class="todo-text">${todo[todoKeys.text]}</div>
    <div class="todo-actions">
      <button class="button-complete button">&#10004;</button>
      <button class="button-delete button">&#10006;</button>
    </div>
  `;

  const completeBtn = li.querySelector(".button-complete");
  const deleteBtn = li.querySelector(".button-delete");

  completeBtn.addEventListener("click", () => {
    const updated = completeTodoById(todos, todo[todoKeys.id]);
    if (updated) {
      li.classList.toggle("completed", updated[todoKeys.is_completed]);
    }
  });

  deleteBtn.addEventListener("click", () => {
    deleteTodoById(todos, todo[todoKeys.id]);
    li.remove();
  });

  todosContainer.append(li);
};

const handleCreateTodo = (todosArray, text) => {
  if (text.trim() === "") return;
  const newTodo = createTodo(todosArray, text.trim());
  createTodoElement(newTodo);
};

const form = document.querySelector(".form");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleCreateTodo(todos, input.value);
  input.value = "";
});

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
