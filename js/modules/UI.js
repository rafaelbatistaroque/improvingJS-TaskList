import Tarefa from './tarefa.js';
export default class UI {
    constructor() {
        this.listaTarefas = document.querySelector('#lista');
        this.textBox = document.querySelector('#input');
    }
    iniciar() {
        this.adicionarEventoNovaTarefa();
        return this;
    }

    adicionarEventoNovaTarefa() {
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 13 && this.textBox.value) {
                const tarefa = Tarefa.criarNova(this.textBox.value);
                this.listaTarefas.appendChild(tarefa);
                this.textBox.value = null;
            }
        });
    }
}