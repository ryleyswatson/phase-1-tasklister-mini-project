document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target['new-task-description'].value);
  });
});

function handleToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.textContent = 'x';
  li.textContent = todo;  
  li.appendChild(btn);
  btn.addEventListener('click', () => {
    li.remove();
  });
  document.querySelector('#tasks').appendChild(li); 
}