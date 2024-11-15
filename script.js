const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button" onclick="deleteTask(${i})">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (name && dueDate) {
    todoList.push({ name: name, dueDate: dueDate });

    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
  } else {
    alert('Please fill in both fields.');
  }
}

function deleteTask(index) {
  todoList.splice(index, 1);

  localStorage.setItem('todoList', JSON.stringify(todoList));

  renderTodoList();
}
