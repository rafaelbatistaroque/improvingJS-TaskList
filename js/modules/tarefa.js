export default class Tarefa {
    constructor(nomeTarefa) {
        this.tarefaEstrutura = document.createElement('li');
        this.nomeTarefa = nomeTarefa;
        this.status = 'incompleta';
        this.elementos = [
            this.iconCheck = document.createElement('i'),
            this.textoTarefa = document.createElement('p'),
            this.lixeira = document.createElement('i')
        ];
    }
    configurarElementos() {
        this.tarefaEstrutura.classList.add('task');
        this.elementos[0].classList.add('fa', 'fa-circle-thin');
        this.elementos[1].classList.add('texto-task');
        this.elementos[1].textContent = this.nomeTarefa;
        this.elementos[2].classList.add('fa', 'fa-trash-o');
    }
    criarNova() {
        this.configurarElementos();
        this.elementos.forEach(item => {
            this.tarefaEstrutura.appendChild(item);
        });
        return this.tarefaEstrutura;
    }
}