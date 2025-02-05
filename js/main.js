const menuEl = document.querySelector('.menu');
const menuTextEl = document.querySelector('.menu-text');
const taskEl = document.querySelector('.task');
const formEl = document.querySelector('.form');
const buttonAddEl = document.querySelector('.btn-add');
const btnDone = document.querySelector('#done');
const btnDelete = document.querySelector('#delete');
const formInputEl = document.querySelector('.form-input');

formEl.addEventListener('submit', addTask);

function addTask(event) {
	event.preventDefault();

	const textTask = formInputEl.value;

	const newTask = `<li class="task" id="task">
		<span class="task-title" id="task-title">${textTask}</span>
		<div class="task-buttons">
			<img class="btn-action" id="done" src="./img/done.png" alt="done" width="35">
			<img class="btn-action" id="delete" src="./img/delete.png" alt="delete" width="35">
		</div>
	</li>`;

	menuEl.insertAdjacentHTML('beforeend', newTask);

	formInputEl.value = '';
	formInputEl.focus();

	if (menuEl.children.length >= 1) {
		menuTextEl.classList.add('hidden');
	} else {
		menuTextEl.classList.remove('hidden');
	}
}
