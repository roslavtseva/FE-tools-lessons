const baseUrl = 'https://crudcrud.com/api/85a971d18bef4d8cba22546c94e56eee/tasks';

export { getTasksList, createTask, updateTask, deleteTask };

const mapTasks = tasks => tasks.map( ({ _id, ...rest }) => ({ ...rest, id: _id }));

const getTasksList = () => fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));

const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData),
    });
};

const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData),
    });
};

const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });
};