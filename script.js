const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add Task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = ''; // Clear input
  }
});

// Add Task to List
function addTask(taskText) {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskTextNode = document.createElement('span');
  taskTextNode.textContent = taskText;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = 'edit-button';
  editButton.addEventListener('click', () => editTask(taskItem, taskTextNode));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';
  deleteButton.addEventListener('click', () => deleteTask(taskItem));

  taskItem.appendChild(taskTextNode);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
}

// Edit Task
function editTask(taskItem, taskTextNode) {
  const newTaskText = prompt('Edit your task:', taskTextNode.textContent);
  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskTextNode.textContent = newTaskText.trim();
  }
}

// Delete Task
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}
