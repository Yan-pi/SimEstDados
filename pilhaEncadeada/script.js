window.addEventListener('DOMContentLoaded', (event) => {
  const stack = [];

  const stackDiv = document.getElementById('stack');
  const pushInput = document.getElementById('push-input');
  const pushBtn = document.getElementById('push-btn');
  const popBtn = document.getElementById('pop-btn');

  pushBtn.addEventListener('click', () => {
    const value = pushInput.value;
    if (value !== '') {
      stack.push(value);
      displayStack();
      pushInput.value = '';
    }
  });

  popBtn.addEventListener('click', () => {
    if (stack.length > 0) {
      stack.pop();
      displayStack();
    }
  });

  function displayStack() {
    stackDiv.innerHTML = '';
    for (let i = stack.length - 1; i >= 0; i--) {
      const nodeDiv = document.createElement('div');
      nodeDiv.className = 'node';
      nodeDiv.innerText = stack[i];
      stackDiv.appendChild(nodeDiv);
    }
  }
});
