document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('#search-tasks');
    const taskList = document.querySelector('#task-list ul');

    searchForm.addEventListener('keyup', function () {
        const term = searchForm.querySelector('input').value.toLowerCase();
        Array.from(taskList.children).forEach(task => {
            const taskName = task.firstElementChild.textContent.toLowerCase();
            if (taskName.includes(term)) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.querySelector('#task-list ul');

    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete')) {
            const taskItem = event.target.parentElement;
            taskItem.remove();

            let tasks = JSON.parse(localStorage.getItem('tasks'));
            const taskText = taskItem.firstElementChild.textContent;
            tasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.querySelector('#task-list ul');
    const addForm = document.querySelector('#add-task');

    addForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskInput = addForm.querySelector('input[type="text"]');
        const task = taskInput.value.trim();

        if (task) {
            addTaskToUI(task);
            saveTaskToLocalStorage(task);
            taskInput.value = '';
        }
    });

    function addTaskToUI(task) {
        const li = document.createElement('li');
        const taskName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        taskName.textContent = task;
        deleteBtn.textContent = 'delete';
        taskName.classList.add('name');
        deleteBtn.classList.add('delete');

        li.appendChild(taskName);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    function saveTaskToLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => addTaskToUI(task));
    }
    loadTasks();
});
