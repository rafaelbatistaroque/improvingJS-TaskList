import Tarefa from './tarefa.js';
export default class UI {
    constructor() {
        this.listaTarefas = document.querySelector('#lista');
        this.textBox = document.querySelector('#input');
        this.btnAdd = document.querySelector('#AddTarefa');
        this.inserirTarefaLista = this.inserirTarefaLista.bind(this);
    }
    iniciar() {
        // console.log(this.elementsAdd);
        this.adicionarEventosNovaTarefa();
        return this;
    }

    adicionarEventosNovaTarefa() {
        this.btnAdd.addEventListener('click', this.inserirTarefaLista);
    }
    inserirTarefaLista(event) {
        console.log(event.target);
        if (this.textBox.value) {
            const tarefaCriada = new Tarefa(this.textBox.value).criarNova();
            this.listaTarefas.appendChild(tarefaCriada);
            this.textBox.value = null;
        }
    }

}