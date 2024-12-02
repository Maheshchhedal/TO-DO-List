let input = document.querySelector('#text');
let btn = document.querySelector('#btn');
let display = document.querySelector('#display');

let tasks = [];

btn.addEventListener('click', () => {
    let taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    tasks.push({
        text: taskText,
        completed: false,
    });

    input.value = '';
    renderTasks();
});

function renderTasks() {
    display.innerHTML = '';

    tasks.forEach((task, index) => {
        let taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        if (task.completed) {
            taskItem.classList.add('completed');
        }

        taskItem.innerHTML = `
            <span>${task.text}</span>
            <div class="button-container">
                <button onclick="toggleComplete(${index})" class="complete-btn"><i class="fas fa-check"></i></button>
                <button onclick="deleteTask(${index})" class="delete-btn"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;

        display.appendChild(taskItem);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
