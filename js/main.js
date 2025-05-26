fetch('http://localhost:3000')
    .then(response => {
        if (!response.ok) {
            throw new Error('err');
        }
        return response.json();
    })
    .then(data => {
        const ul = document.getElementById('todo-list');
        data.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo;
            ul.appendChild(li);
        });
    })
    .catch(error => {
        console.error('err:', error);
    });
