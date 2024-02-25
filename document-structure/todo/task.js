document.addEventListener('DOMContentLoaded', function() {
    const tasksList = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');
    const addTaskButton = document.getElementById('tasks__add');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    addTaskButton.addEventListener('click', function(event) {
        event.preventDefault();
        addTask();
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            taskInput.value = '';
        }
    }

    function renderTasks() {
        tasksList.innerHTML = '';
        tasks.forEach((taskText, index) => {
            const task = createTaskElement(taskText, index);
            tasksList.appendChild(task);
        });
    }

    function createTaskElement(taskText, index) {
        const task = document.createElement('div');
        task.className = 'task';
        
        const taskTitle = document.createElement('div');
        taskTitle.className = 'task__title';
        taskTitle.textContent = taskText;
        
        const removeButton = document.createElement('a');
        removeButton.className = 'task__remove';
        removeButton.innerHTML = '&times;';
        removeButton.addEventListener('click', function() {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        });
        
        task.appendChild(taskTitle);
        task.appendChild(removeButton);
        
        return task;
    }

    renderTasks();
});