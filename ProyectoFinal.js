class Queue {
  constructor() {
    this.Numbers = [1, 2, 3, 4, 5];
  }

  EnQueue(element) {
    this.Numbers.push(element);
  }

  DeQueue() {
    this.Numbers.shift();
  }

  printQueue() {
    return this.Numbers.join(' ');
  }
}

const queue = new Queue();
const queueDiv = document.getElementById('queue');
const nextBtn = document.getElementById('nextBtn');

function animateEnterExit(element) {
  const stepsDiv = document.getElementById('steps');
  const enqueuedItem = `Entrando ${element} a la cola: [${queue.printQueue()}]`;
  const dequeuedItem = `Saliendo ${queue.Numbers[0]} de la cola: [${queue.printQueue()}]`;

  const stepElement = document.createElement('div');
  stepElement.textContent = enqueuedItem;
  stepsDiv.appendChild(stepElement);

  queue.EnQueue(element);
  queueDiv.textContent = queue.printQueue();

  setTimeout(() => {
    const stepElement = document.createElement('div');
    stepElement.textContent = dequeuedItem;
    stepsDiv.appendChild(stepElement);

    queue.DeQueue();
    queueDiv.textContent = queue.printQueue();
  }, 1000);
}

let currentIndex = 0;
const elementsToAnimate = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function nextStep() {
  if (currentIndex < elementsToAnimate.length) {
    animateEnterExit(elementsToAnimate[currentIndex]);
    currentIndex++;
  } else {
    nextBtn.disabled = true;
  }
}

nextBtn.addEventListener('click', nextStep);
