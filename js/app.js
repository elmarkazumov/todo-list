import {UIELEMENTS} from './const.js';
import {conversionDate, getID} from './additional.js';
import {addTaskInDOM, editElement} from './ui.js';

function getDataTask(){
    const newTask = {
        id: getID(),
        task: UIELEMENTS.taskInput.value,
        priority: UIELEMENTS.taskPriority.value,
        createDate: conversionDate(),
        status: 'active',
    };
    return newTask;
};

function render(){
    while(UIELEMENTS.taskBlock.firstChild){
        UIELEMENTS.taskBlock.removeChild(UIELEMENTS.taskBlock.firstChild);
    }
    for(let key of JSON.parse(localStorage.getItem('tasks')).reverse()){
        addTaskInDOM(key.task, key.createDate, key.id);
    }

    editTask();
    deleteTask();
};

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
};

function editTask(){
    const taskElement = document.querySelectorAll(".main__task"); // инициализируем все отображенные задачи
    const parseArray = JSON.parse(localStorage.getItem('tasks'));

    taskElement.forEach(task => task.querySelector('.main__task p').addEventListener('click', function(){
        for(let parseTask of parseArray){
            if(parseTask.id == task.dataset.id){
                editElement(task, parseTask, (resultText) => {
                    parseTask.task = resultText;
                    localStorage.setItem('tasks', JSON.stringify(parseArray));
                });
            };
        };
    }));
};

function deleteTask(){
    const taskElement = document.querySelectorAll(".main__task"); // инициализируем все отображенные задачи
    const parseArray = JSON.parse(localStorage.getItem('tasks'));

    taskElement.forEach(task => task.querySelector('.main__remove-btn').addEventListener('click', function(){
        for(let parseTask of parseArray){
            if(parseTask.id == task.dataset.id){
                task.remove();
                parseArray.splice(parseArray.indexOf(parseTask), 1);
                localStorage.setItem('tasks', JSON.stringify(parseArray));
            };
        };
    }));

    if(!parseArray.length){
        localStorage.clear();
    }
}

UIELEMENTS.inputsForm.addEventListener("submit", createTask);

render();