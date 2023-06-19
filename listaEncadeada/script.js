// Definindo a classe Node que representa cada nó da lista encadeada
class Node {
    constructor(value) {
        this.value = value; // Valor armazenado no nó
        this.next = null; // Referência para o próximo nó
    }
}

// Definindo a classe LinkedList que representa a lista encadeada
class LinkedList {
    constructor() {
        this.head = null; // Referência para o primeiro nó (cabeça da lista)
    }

    // Método para adicionar um novo nó na lista encadeada
    addNode(value) {
        const newNode = new Node(value); // Cria um novo nó com o valor fornecido

        if (!this.head) {
            // Se a lista estiver vazia, o novo nó se torna a cabeça da lista
            this.head = newNode;
        } else {
            // Se a lista já tiver nós, percorre até o último nó e adiciona o novo nó no final
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }

        this.displayList(); // Atualiza a exibição da lista
    }

    // Método para remover um nó da lista encadeada
    deleteNode(value) {
        if (!this.head) return; // Se a lista estiver vazia, não há nada a ser removido

        if (this.head.value === value) {
            // Se o valor está na cabeça da lista, atualiza a cabeça para o próximo nó
            this.head = this.head.next;
            this.displayList(); // Atualiza a exibição da lista
            return;
        }

        let currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.next.value === value) {
                // Se o próximo nó tiver o valor a ser removido, atualiza as referências para ignorar esse nó
                currentNode.next = currentNode.next.next;
                this.displayList(); // Atualiza a exibição da lista
                return;
            }
            currentNode = currentNode.next;
        }
    }

    // Método para atualizar o valor de um nó da lista encadeada
    updateNode(index, value) {
        let count = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (count === index) {
                // Quando o índice desejado é encontrado, atualiza o valor do nó
                currentNode.value = value;
                this.displayList(); // Atualiza a exibição da lista
                return;
            }
            currentNode = currentNode.next;
            count++;
        }
    }

    // Método para exibir a lista encadeada na página
    displayList() {
        let currentNode = this.head;
        let listHTML = "";

        while (currentNode !== null) {
            listHTML += `<div class="node">${currentNode.value}</div>`; // Cria um elemento div para cada nó
            if (currentNode.next !== null) {
                listHTML += `<span class="arrow">-></span>`; // Adiciona uma seta entre os nós
            }
            currentNode = currentNode.next;
        }

        const listContainer = document.getElementById("list");
        listContainer.innerHTML = listHTML; // Insere o HTML gerado na página
    }
}

const linkedList = new LinkedList(); // Cria uma nova instância da lista encadeada

// Event listener para o botão "Push" (adicionar um novo nó)
document.getElementById("btn-add").addEventListener("click", () => {
    const valueInput = document.getElementById("valueInput");
    const value = valueInput.value;
    if (value) {
        linkedList.addNode(value);
        valueInput.value = "";
    }
});

// Event listener para o botão "Pop" (remover um nó)
document.getElementById("btn-delete").addEventListener("click", () => {
    const valueInput = document.getElementById("valueInput");
    const value = valueInput.value;
    if (value) {
        linkedList.deleteNode(value);
        valueInput.value = "";
    }
});

// Event listener para o botão "Set" (atualizar um nó)
document.getElementById("btn-update").addEventListener("click", () => {
    const valueInput = document.getElementById("valueInput");
    const value = valueInput.value;
    const index = parseInt(prompt("Digite o índice do nó que deseja atualizar:"));
    if (value && !isNaN(index)) {
        linkedList.updateNode(index, value);
        valueInput.value = "";
    }
});
