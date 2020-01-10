import Tarefa from './tarefa.js';
export default class UI {
    constructor() {
        this.listaTarefas = document.querySelector('#lista');
        this.textBox = document.querySelector('#input');
        this.btnAdd = document.querySelector('#AddTarefa');
        this.inserirTarefaLista = this.inserirTarefaLista.bind(this);
        this.concluirTarefa = this.concluirTarefa.bind(this);
        this.deletarTarefa = this.deletarTarefa.bind(this);
    }
    iniciar() {
        this.adicionarEventosInteracao();
        return this;
    }

    adicionarEventosInteracao(elementosTarefa) {
        this.btnAdd.addEventListener('click', this.inserirTarefaLista);
        if (elementosTarefa) {
            elementosTarefa.firstChild.addEventListener('click', this.concluirTarefa);
            elementosTarefa.lastChild.addEventListener('click', this.deletarTarefa);
        }
    }
    inserirTarefaLista() {
        if (this.textBox.value) {
            const tarefaCriadaHtml = new Tarefa(this.textBox.value).criarNova();
            this.listaTarefas.appendChild(tarefaCriadaHtml);
            this.adicionarEventosInteracao(tarefaCriadaHtml);
            this.textBox.value = null;
        }
    }
    concluirTarefa(event) {
        const check = event.target;
        const textoTarefa = check.nextElementSibling;

        check.classList.toggle('fa-circle-thin');
        check.classList.toggle('fa-circle');
        textoTarefa.classList.toggle('riscado');
    }
    deletarTarefa(event) {
        const lixeira = event.target;
        const lista = lixeira.parentNode.parentNode;
        const itemLista = lixeira.parentNode;
        lista.removeChild(itemLista);
    }

}