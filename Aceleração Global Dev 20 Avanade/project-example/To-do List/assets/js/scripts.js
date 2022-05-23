const form = document.getElementById("task-form");
const taskList = document.getElementById("tasks");

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById("task-input");
    addTask(inputField.value);
    form.reset();
};

function addTask(description) {
    const taskContainer = document.createElement("div");
    const newTask = document.createElement("input");
    const taskLabel = document.createElement("label");
    const taskDescriptionMode = document.createElement("description");

    newTask.setAttribute("type", "checkbox");
    newTask.setAttribute("name", description);
    newTask.setAttribute("id", description);

    taskLabel.setAttribute("for", description);
    taskLabel.appendChild(taskDescriptionMode);

    taskContainer.classList.add("task-item");
    taskLabel.appendChild(newTask);
    taskLabel.appendChild(taskLabel);

    taskLabel.appendChild(taskContainer);
}