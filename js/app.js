import {UIELEMENTS} from './const.js';
import {conversionDate} from './additional.js';
import {addTaskInDOM} from './ui.js';

function getDataTask(){
    const newTask = {
        task: UIELEMENTS.taskInput.value,
        priority: UIELEMENTS.taskPriority.value,
        createDate: conversionDate(),
        status: 'active',
    };
    return newTask;
}

function render(){
    while(UIELEMENTS.taskActual.firstChild){
        UIELEMENTS.taskActual.removeChild(UIELEMENTS.taskActual.firstChild);
    }

    for(let key of JSON.parse(localStorage.getItem('tasks')).reverse()){
        addTaskInDOM(key.task, key.createDate);
    }
}

function createTask(event){
    event.preventDefault();
    const currentDataTask = getDataTask();

    if(!localStorage.length){
        localStorage.setItem('tasks', JSON.stringify([currentDataTask]));
    } else{
        const arrayTasks = JSON.parse(localStorage.getItem('tasks'));
        arrayTasks.push(currentDataTask);
        localStorage.setItem('tasks', JSON.stringify(arrayTasks));
    }
    render();
}

UIELEMENTS.inputsForm.addEventListener("submit", createTask);