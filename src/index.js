document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const formInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const task = formInput.value.trim();
    if (task) {
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
      formInput.value = '';
    }
  });
});