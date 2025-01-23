// CREACIÓN DE ELEMENTOS POR EL USER

const addTaskButton = document.querySelector('.form-submit-btn');
const inputTask = document.querySelector('#input__task-user');
const containerTask = document.querySelector('.container__task');
let taskId = 0;



addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const dataInput = inputTask.value;



    if (dataInput) {
        addTask(dataInput, taskId);
        // Reseteando el input
        inputTask.value = '';
        taskId += 1;
        inputTask.classList.remove('emptyField');
    }

    if(dataInput === ''){
        const alert = document.createElement('span');
        alert.classList.add('alertText');
        const formGroup = document.querySelector('.form-group');
        alert.textContent = 'Ingresa algo válido ❌';
        formGroup.appendChild(alert);
        // inputTask.classList.add('emptyField');
    }


})
// Add Task

function addTask(tarea, id) {

    let element = `
        <article class="container__task-user" id="${id}">
            <div class="container__icon-checked">
                <span class="icon__checked" data="Realizado" role="checkbox"></span>
            </div>
            <div class="container__text-task">
                <p class="text__task-user">${tarea}</p>
            </div>
            <div class="container__icon-edit" role="button">
                <img
                src="/images/main-section/pencil.svg"
                alt="edit-icon"
                class="edit__icon"
                data="Editar"
            />
            </div>
            <div class="container__icon-edit" role="button">
                <img
                src="/images/main-section/cross_remove.svg"
                alt="remove-icon"
                class="delete__icon"
                data="Eliminar"
            />
            </div>
        </article>`;

    // Inserta codigo HTML segun las especificaciones en los parametros
    containerTask.insertAdjacentHTML('afterbegin', element);

}


containerTask.addEventListener('click', (e) => {
    const element = e.target;
    const data = element.attributes.data.value;
    const ID = element.parentNode.parentNode.attributes.id;
    

    switch(data){
        case 'Realizado': 
            taskCheck(element);
            break;
        case 'Eliminar':
            taskDelete(element, ID);
            break;
        default : 
            console.log('Hubo un error');
    }
})

function taskCheck(iconElement){
    
    const containerText = iconElement.parentNode.parentNode.querySelector('.container__text-task');

    iconElement.classList.toggle('checked');
    containerText.classList.toggle('made');

}


function taskDelete(taskElement, idArticle){
    const childElement = containerTask.children.item(0);
    // console.log(childElement);
    containerTask.removeChild(childElement);
    // console.log(taskRemoved);
}







