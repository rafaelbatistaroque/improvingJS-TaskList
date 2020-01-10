import Tarefa from './tarefa.js';
export default class UI {
    constructor() {
        this.listaTarefas = document.querySelector('#lista');
        this.textBox = document.querySelector('#input');
    }
    iniciar() {
        this.adicionarEventoTextBoxNovaTarefa();
        return this;
    }

    adicionarEventoTextBoxNovaTarefa() {
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 13 && this.textBox.value) {
                const tarefaCriada = new Tarefa(this.textBox.value).criarNova();
                this.listaTarefas.appendChild(tarefaCriada);
                this.textBox.value = null;
            }
        });
    }
}