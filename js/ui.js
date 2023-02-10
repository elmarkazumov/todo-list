import {UIELEMENTS} from './const.js';

export function addTaskInDOM(valueTask, createDateTask){
    const div = document.createElement('div');
    div.classList = 'main__task';
    const text = document.createElement('p');
    text.textContent = valueTask;
    const createDate = document.createElement('span');
    createDate.textContent = createDateTask;
    div.append(text, createDate);
    UIELEMENTS.taskActual.append(div);
}