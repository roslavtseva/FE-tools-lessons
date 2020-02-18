"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDeleteTask = onDeleteTask;

var _storage = require("./storage.js");

var _renderer = require("./renderer.js");

var _tasksGateway = require("./tasksGateway.js");

function onDeleteTask(event) {
  var deleteBtn = event.target.classList.contains('list-item__delete-btn');
  if (!deleteBtn) return;
  var taskId = event.target.parentNode.firstElementChild.dataset.id;
  (0, _tasksGateway.deleteTask)(taskId).then(function () {
    return (0, _tasksGateway.getTasksList)();
  }).then(function (newTasksList) {
    (0, _storage.setItem)('tasksList', newTasksList);
    (0, _renderer.renderTasks)();
  });
}

;