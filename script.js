function adicionarTarefa() {
    const tarefa = document.getElementById('textoTarefa');
    const textoTarefa = tarefa.value.trim();
    const listaTarefa = document.getElementById('listaTarefa');
    const tarefaExistente = listaTarefa.getElementsByTagName('strong');

    if (textoTarefa === "") {
        alert("Por favor, insira uma tarefa!");
        return;
    }

    for (let i = 0; i < tarefaExistente.length; i++) {
        if (tarefaExistente[i].textContent === textoTarefa) {
            alert("Essa tarefa já existe!");
            return;
        }
    }

    if (listaTarefa.children.length >= 12) {
        alert("Limite de tarefas atingido!");
        return;
    }
    else {

        const listaTarefa = document.getElementById('listaTarefa');
        const li = document.createElement('li');

        li.innerHTML = `
        <button class="remove-btn" onclick="removeTarefa(this)">X</button>
        <strong>${textoTarefa}</strong>
        <button class="realiza-btn" onclick="realizaTarefa(this)">X</button>
    `;

        listaTarefa.appendChild(li);
        tarefa.value = "";
        localStorage.setItem('listaTarefa', listaTarefa.innerHTML);
    }
}

function removeTarefa(button) {
    const lista = button.parentElement;
    lista.remove();

    localStorage.setItem('listaTarefa', document.getElementById('listaTarefa').innerHTML);
}

function realizaTarefa(button) {
    const lista = button.parentElement;
    lista.classList.toggle('realiza');

    const listaTarefa = document.getElementById('listaTarefa');
    localStorage.setItem('listaTarefa', listaTarefa.innerHTML);
}

function carregarTarefas() {
    const listaTarefa = document.getElementById('listaTarefa');
    
    const tarefasArmazenadas = localStorage.getItem('listaTarefa');
    if (tarefasArmazenadas) {
        listaTarefa.innerHTML = tarefasArmazenadas;
    }
}

window.onload = carregarTarefas;