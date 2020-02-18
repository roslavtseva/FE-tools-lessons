"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTodoListHandlers = void 0;

var _createTask = require("./createTask.js");

var _updateTask = require("./updateTask.js");

var _deleteTask = require("./deleteTask.js");

var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', _createTask.onCreateTask);
  var todoListItem = document.querySelector('.list');
  todoListItem.addEventListener('click', _updateTask.onToggleTask);
  todoListItem.addEventListener('click', _deleteTask.onDeleteTask);
};

exports.initTodoListHandlers = initTodoListHandlers;