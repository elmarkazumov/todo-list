import {UIELEMENTS} from './const.js';

export function addTaskInDOM(valueTask, createDateTask, id){
    const div = document.createElement('div');
    div.setAttribute('data-id', id);
    div.classList = 'main__task';
    const text = document.createElement('p');
    text.textContent = valueTask;
    const createDate = document.createElement('span');
    createDate.textContent = createDateTask;
    const closeButton = document.createElement('span')
    closeButton.textContent = 'X';
    closeButton.classList = 'main__remove-btn';
    div.append(text, createDate, closeButton);
    UIELEMENTS.taskBlock.append(div);
};

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
};

export function deleteTaskDOM(){
    
};