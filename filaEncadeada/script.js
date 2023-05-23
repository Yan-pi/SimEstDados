// Definindo a classe nó da fila encadeada
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Definindo a classe fila encadeada
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Método para enfileirar um elemento
  enqueue(data) {
    const newNode = new Node(data);
    if (this.rear === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.displayQueue();
  }

  // Método para desenfileirar um elemento
  dequeue() {
    if (this.front === null) {
      console.log("A fila está vazia.");
    } else {
      const removedNode = this.front;
      this.front = this.front.next;
      if (this.front === null) {
        this.rear = null;
      }
      console.log("Elemento desenfileirado:", removedNode.data);
      this.displayQueue();
    }
  }

  // Método para exibir a fila na tela
  displayQueue() {
    const queueItems = document.getElementById("queue-items");
    queueItems.innerHTML = "";
    let currentNode = this.front;
    while (currentNode) {
      const queueItem = document.createElement("div");
      queueItem.classList.add("queue-item");
      queueItem.textContent = currentNode.data;
      queueItems.appendChild(queueItem);
      currentNode = currentNode.next;
    }
  }
}

// Instanciando a fila
const queue = new Queue();

// Função chamada ao clicar no botão "Enfileirar"
function enqueue() {
  const inputValue = document.getElementById("inputValue").value;
  if (inputValue) {
    queue.enqueue(inputValue);
    document.getElementById("inputValue").value = "";
  }
}

// Função chamada ao clicar no botão "Desenfileirar"
function dequeue() {
  queue.dequeue();
}
