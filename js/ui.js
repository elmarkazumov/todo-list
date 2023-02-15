import {UIELEMENTS} from './const.js';

export function addTaskInDOM(valueTask, createDateTask, id){
    const div = document.createElement('div');
    div.setAttribute('data-id', id);
    div.classList = 'main__task';
    const text = document.createElement('p');
    text.textContent = valueTask;
    const createDate = document.createElement('span');
    createDate.textContent = createDateTask;
    div.append(text, createDate);
    UIELEMENTS.taskBlock.append(div);
}

export function editElement(taskElement, text, callback){
    const input = document.createElement('input');
    input.setAttribute('value', text.task);
    taskElement.querySelector('p').remove();
    taskElement.prepend(input);

    input.addEventListener('keydown', (event) => {
        if(event.key == "Enter" && input.value !== ''){
            const p = document.createElement('p');
            p.textContent = input.value;
            taskElement.removeChild(input);
            taskElement.prepend(p);
            callback(p.textContent);
        };
    });
}