import {UIELEMENTS} from './const.js';
import {conversionDate, getID, selectBackgroundColor, taskHandler} from './additional.js';
import {addTaskInDOM, editElement, changeStatusElement} from './ui.js';

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
        addTaskInDOM(key.task, key.createDate, key.id, key.priority);
    }

    editTask();
    deleteTask();
    selectBackgroundColor();
    changeStatusTask();
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
    taskHandler('.main__change-btn', (task, parseTask, parseArray) =>{
        if(parseTask.id == task.dataset.id){
            editElement(task, parseTask, (resultText) => {
                parseTask.task = resultText;
                localStorage.setItem('tasks', JSON.stringify(parseArray));
            });
        };
    });
};

function changeStatusTask(){
    taskHandler('.main__done-btn', (task, parseTask, parseArray) => {
        if(parseTask.status == 'active'){
            parseTask.status = 'done';
            localStorage.setItem('tasks', JSON.stringify(parseArray));
            changeStatusElement(task, parseTask.status); 
        } else{
            parseTask.status = 'active';
            localStorage.setItem('tasks', JSON.stringify(parseArray));
            changeStatusElement(task, parseTask.status);
        }
    });
}

function deleteTask(){
    taskHandler('.main__remove-btn', (task, parseTask, parseArray) => {
        task.remove();
        parseArray.splice(parseArray.indexOf(parseTask), 1);
        localStorage.setItem('tasks', JSON.stringify(parseArray));        
    });
}

UIELEMENTS.inputsForm.addEventListener("submit", createTask);

render();