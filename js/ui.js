import {UIELEMENTS} from './const.js';

export function addTaskInDOM(valueTask, createDateTask, id, key){
    const div = document.createElement('div'); // сделать с помощью template
    div.setAttribute('data-id', id);
    div.classList = 'main__task';

    if(key == 'High'){
        div.classList.add('high-task');
    } else if(key == 'Low'){
        div.classList.add('low-task');
    } else{
        div.classList.add('standard-task');
    }

    div.append(messageTemplate.content.cloneNode(true));

    div.querySelector('p').textContent = valueTask;
    div.querySelector('span').textContent = createDateTask;

    UIELEMENTS.taskBlock.append(div);
};

export function editElement(taskElement, text, callback){
    const textarea = document.createElement('textarea');
    textarea.textContent = text.task;
    taskElement.querySelector('p').remove();
    taskElement.prepend(textarea);

    textarea.addEventListener('keydown', (event) => {
        if(event.key == "Enter" && textarea.value !== ''){
            const p = document.createElement('p');
            p.textContent = textarea.value;
            taskElement.removeChild(textarea);
            taskElement.prepend(p);
            callback(p.textContent);
        };
    });
};

export function changeStatusElement(task, status){
    if(status === 'done'){
        task.classList.add('main__done');
    } else{
        task.classList.remove('main__done');
    }
}

export function changeBackgroundColor(){

    document.addEventListener('click', function(event){
        
        if(event.target.parentElement === UIELEMENTS.changeColorWindow){
            UIELEMENTS.changeColorWindow.append(windowChangeColor.content.cloneNode(true));

            UIELEMENTS.changeColorWindow.querySelectorAll('[data-color]').forEach(colorBack => colorBack.addEventListener('click', function(){
                document.body.style.backgroundColor = colorBack.dataset.color;
                localStorage.setItem('backgroundColor', JSON.stringify(colorBack.dataset.color));
                document.querySelector('.main__selector').remove();
            }));
        };
    });
};

changeBackgroundColor();