const taskList = document.getElementById('taskList');

function fetchTask() {
    fetch('/tasks')

        .then(res => res.json())
        .then(data => {
            taskList.innerHTML = '';
            data.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.title;
                li.innerHTML += `
                <button onclick="deleteTask(task.id)">X</button>
            `;
                taskList.appendChild(li);
            });
        })
}

function addTask() {
    const title = document.getElementById('Ntask').value;

    fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(title)
    }

    )
    .then(fetchTask);
}

function deleteTask(){
    fetch('/tasks/:id', {
        method: 'DELETE'
    })
    .then(fetchTask);
}
