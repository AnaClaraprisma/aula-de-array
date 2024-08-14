const listaTarefas = [];
const botao = document.getElementById('addTaskButton')

// Função para mostrar o resultado na página
function mostrarResultado(resultado) {
    document.getElementById('taskList').innerHTML = resultado;
}

botao.addEventListener("click", () => {
    const valorDoInput = document.getElementById('taskInput').value;
    addTask(valorDoInput);
})

function addTask(tarefa) {
    listaTarefas.push(tarefa)

    let listaFinal = ""    
    for (let i = 0; i < listaTarefas.length; i++) {
        listaFinal += "<li>" + (i + 1) + ". " + listaTarefas[i] + "</li>"
    }

    mostrarResultado(listaFinal)
}