document.addEventListener('DOMContentLoaded', function() {
    const tasksList = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');
    const addTaskButton = document.getElementById('tasks__add');
    
    // Загрузка задач из localStorage при загрузке страницы
    loadTasksFromStorage();

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
            const task = createTaskElement(taskText);
            tasksList.appendChild(task);
            saveTasksToStorage();
            taskInput.value = '';
        }
    }

    function createTaskElement(taskText) {
        const task = document.createElement('div');
        task.className = 'task';
        
        const taskTitle = document.createElement('div');
        taskTitle.className = 'task__title';
        taskTitle.textContent = taskText;
        
        const removeButton = document.createElement('a');
        removeButton.className = 'task__remove';
        removeButton.innerHTML = '&times;';
        removeButton.addEventListener('click', function() {
            task.remove();
            saveTasksToStorage();
        });
        
        task.appendChild(taskTitle);
        task.appendChild(removeButton);
        
        return task;
    }

    function saveTasksToStorage() {
        const tasks = tasksList.innerHTML;
        localStorage.setItem('tasks', tasks);
    }

    function loadTasksFromStorage() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            tasksList.innerHTML = tasks;
            const removeButtons = document.querySelectorAll('.task__remove');
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    button.parentElement.remove();
                    saveTasksToStorage();
                });
            });
        }
    }
});