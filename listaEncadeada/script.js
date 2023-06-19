class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }

        this.displayList();
    }

    deleteNode(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.displayList();
            return;
        }

        let currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                this.displayList();
                return;
            }
            currentNode = currentNode.next;
        }
    }

    updateNode(index, value) {
        let count = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (count === index) {
                currentNode.value = value;
                this.displayList();
                return;
            }
            currentNode = currentNode.next;
            count++;
        }
    }

    displayList() {
        let currentNode = this.head;
        let listHTML = "";

        while (currentNode !== null) {
            listHTML += `<div class="node">${currentNode.value}</div>`;
            if (currentNode.next !== null) {
                listHTML += `<span class="arrow">-></span>`;
            }
            currentNode = currentNode.next;
        }

        const listContainer = document.getElementById("list");
        listContainer.innerHTML = listHTML;
    }
}

const linkedList = new LinkedList();

document.getElementById("btn-add").addEventListener("click", () => {
    const valueInput = document.getElementById("valueInput");
    const value = valueInput.value;
    if (value) {
        linkedList.addNode(value);
        valueInput.value = "";
    }
});

document.getElementById("btn-delete").addEventListener("click", () => {
    const valueInput = document.getElementById("valueInput");
    const value = valueInput.value;
    if (value) {
        linkedList.deleteNode(value);
        valueInput.value = "";
    }
});

document.getElementById("btn-update").addEventListener("click", () => {
    const valueInput = document.getElementById("valueInput");
    const value = valueInput.value;
    const index = parseInt(prompt("Digite o índice do nó que deseja atualizar:"));
    if (value && !isNaN(index)) {
        linkedList.updateNode(index, value);
        valueInput.value = "";
    }
});
