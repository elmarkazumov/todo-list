import {UIELEMENTS} from './const.js';

function conversionDate(){
    const zeroCorrect = (value) => (value < 10) ? `0${value}`: value;

    const newDate = new Date();
    const getDate = zeroCorrect(newDate.getDate());
    const getMounth = zeroCorrect(newDate.getMonth() + 1);
    const getTime = `${zeroCorrect(newDate.getHours())}:${zeroCorrect(newDate.getMinutes())}`;
    const date = `${getDate}.${getMounth}, ${getTime}`;
    return date;
}

function getDataTask(){
    const newTask = {
        task: UIELEMENTS.taskInput.value,
        priority: UIELEMENTS.taskPriority.value,
        createDate: conversionDate(),
    };
    return newTask;
}

function createTask(event){
    
}

UIELEMENTS.inputsForm.addEventListener("submit", createTask);