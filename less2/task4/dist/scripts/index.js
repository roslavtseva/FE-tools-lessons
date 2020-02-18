"use strict";

var _todoList = require("./todoList.js");

var _renderer = require("./renderer.js");

var _tasksGateway = require("./tasksGateway.js");

var _storage = require("./storage.js");

// import {onDeleteTask} from './deleteTask.js';
document.addEventListener('DOMContentLoaded', function () {
  (0, _tasksGateway.getTasksList)().then(function (tasksList) {
    (0, _storage.setItem)('tasksList', tasksList);
    (0, _renderer.renderTasks)();
  });
  (0, _todoList.initTodoListHandlers)();
});

var onStorageChange = function onStorageChange(e) {
  if (e.key === 'tasksList') {
    (0, _renderer.renderTasks)();
  }
};

window.addEventListener('storage', onStorageChange);