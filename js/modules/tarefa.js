export default class Tarefa {
    static criarNova(nomeTarefa) {
        const tarefaEstrutura = document.createElement('li');
        tarefaEstrutura.classList.add('task');

        tarefaEstrutura.innerHTML = `<i class="fa fa-circle-thin complete"></i>`;
        tarefaEstrutura.innerHTML += `<p class="texto-task">${nomeTarefa}</p>`;
        tarefaEstrutura.innerHTML += `<i class="fa fa-trash-o delete"></i>`;

        return tarefaEstrutura;
    }
}