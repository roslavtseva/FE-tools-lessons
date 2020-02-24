const baseUrl = 'https://crudcrud.com/api/ac0b44b064c345f489ba2807d01f8b53/tasks';

function mapTasks(tasks) {
    return tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
};

function getTasksList() {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks))
};

function createTask(taskData) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    })
};

function updateTask(taskId, updatedTaskData) {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updatedTaskData),
    })
};

function deleteTask(taskId) {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
};

export { getTasksList, createTask, updateTask, deleteTask };