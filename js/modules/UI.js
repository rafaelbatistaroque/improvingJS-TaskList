import Tarefa from './tarefa.js';
export default class UI {
    constructor(lista, inputTarefa, btnAddtarefa) {
        this.listaTarefas = document.querySelector(lista);
        this.textBox = document.querySelector(inputTarefa);
        this.btnAdd = document.querySelector(btnAddtarefa);
    }
    iniciar() {
        if (this.btnAdd && this.textBox && this.listaTarefas) {
            this.bindEventos();
            this.adicionarEventosInteracao();
        }
        return this;
    }
    adicionarEventosInteracao(tarefaCriada) {
        this.btnAdd.addEventListener('click', this.inserirTarefaLista);
        if (tarefaCriada) {
            tarefaCriada.firstChild.addEventListener('click', this.concluirTarefa);
            tarefaCriada.lastChild.addEventListener('click', this.deletarTarefa);
        }
    }
    inserirTarefaLista() {
        if (this.textBox.value && this.listaTarefas) {
            const tarefaCriadaHtml = new Tarefa(this.textBox.value).criarNova();
            this.listaTarefas.appendChild(tarefaCriadaHtml);
            this.adicionarEventosInteracao(tarefaCriadaHtml);
            this.textBox.value = null;
        }
    }
    concluirTarefa(event) {
        const check = event.target;
        const textoTarefa = check.nextElementSibling;

        check.classList.toggle('fa-square');
        check.classList.toggle('fa-check-square');
        textoTarefa.classList.toggle('riscado');
    }
    deletarTarefa(event) {
        const lixeira = event.target;
        const itemLista = lixeira.parentNode;
        this.listaTarefas.removeChild(itemLista);
    }
    bindEventos() {
        this.inserirTarefaLista = this.inserirTarefaLista.bind(this);
        this.concluirTarefa = this.concluirTarefa.bind(this);
        this.deletarTarefa = this.deletarTarefa.bind(this);
    }
}