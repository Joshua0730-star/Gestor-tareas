// // CREACIÓN DE ELEMENTOS POR EL USER

// const addTaskButton = document.querySelector('.form-submit-btn');
// const inputTask = document.querySelector('#input__task-user');
// const containerTask = document.querySelector('.container__task');
// let taskId = 0;



// addTaskButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const dataInput = inputTask.value;


//     // Call to add function
//     if (dataInput) {
//         addTask(dataInput, taskId);
//         // Reseteando el input
//         inputTask.value = '';
//         taskId += 1;
//         inputTask.classList.remove('emptyField');
//     }


//     // Alert message empty field
//     if(dataInput === ''){
//         const alert = document.createElement('span');
//         alert.classList.add('alertText');
//         const formGroup = document.querySelector('.form-group');
//         alert.textContent = 'Ingresa algo válido ❌';
//         formGroup.appendChild(alert);
//         // inputTask.classList.add('emptyField');
//     }


// })


// // Add Task function
// function addTask(tarea, id) {
//     // Component
//     let element = `
//         <article class="container__task-user" id="${id}" >
//             <div class="container__icon-checked">
//                 <span class="icon__checked" data="Realizado" role="checkbox"></span>
//             </div>
//             <div class="container__text-task">
//                 <p class="text__task-user" data="Text">${tarea}</p>
//             </div>
//             <div class="container__icon-edit" role="button">
//                 <img
//                 src="/images/main-section/pencil.svg"
//                 alt="edit-icon"
//                 class="edit__icon"
//                 data="Editar"
//             />
//             </div>
//             <div class="container__icon-edit" role="button">
//                 <img
//                 src="/images/main-section/cross_remove.svg"
//                 alt="remove-icon"
//                 class="delete__icon"
//                 data="Eliminar"
//             />
//             </div>
//         </article>`;

//     // Inserta codigo HTML segun las especificaciones en los parametros
//     containerTask.insertAdjacentHTML('afterbegin', element);

// }



// // State task
// containerTask.addEventListener('click', (e) => {
//     const element = e.target;
//     const data = element.attributes.data.value;
//     const PARENT = element.parentNode.parentNode;

//     const ID = PARENT.attributes.id; 
//     if(typeof data === 'undefined'){
//         console.log('Es undefined')
//     }

//     switch(data){
//         case 'Realizado': 
//             taskCheck(PARENT);
//             break;
//         case 'Eliminar':
//             taskDelete(PARENT, ID);
//             break;
//         case 'Text':
//             taskCheck(PARENT);
//             break;
//         default : 
//             console.log('Ninguna opción fue seleccionada');
//     }
// })




// // Task Completed and checked
// function taskCheck(dadElement){

//     const containerText = dadElement.querySelector('.container__text-task');
//     const icon = dadElement.querySelector('.icon__checked');
//     // console.log(dadElement);

//     // Agregando estilos  
//     icon.classList.toggle('checked')
//     containerText.classList.toggle('made');
// }


// function taskDelete(taskElement, idArticle){
//     const childElement = containerTask.children.item(0);
//     // console.log(childElement);
//     containerTask.removeChild(childElement);
//     // console.log(taskRemoved);
// }



// Selección de elementos
const addTaskButton = document.querySelector('.form-submit-btn');
const inputTask = document.querySelector('#input__task-user');
const containerTask = document.querySelector('.container__task');
let taskId = 0; // Identificador unico para cada tarea

// Escucha del botón para agregar tareas
addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const dataInput = inputTask.value.trim();

    if (dataInput) {
        addTask(dataInput, taskId);
        inputTask.value = ''; // Limpia el campo de entrada
        taskId += 1;
        removeAlert(); // Remueve cualquier alerta previa
    } else {
        showAlert('Ingresa algo válido ❌');
    }
});

// Función para agregar tareas al contenedor
function addTask(taskText, id) {
    const taskHTML = `
        <article class="container__task-user" id="task-${id}">
            <div class="container__icon-checked">
                <span class="icon__checked" data-action="complete" role="checkbox"></span>
            </div>
            <div class="container__text-task">
                <p class="text__task-user" contenteditable="" data-action="edit">${taskText}</p>
            </div>
            <div class="container__icon-edit" role="button">
                <img src="/images/main-section/pencil.svg" alt="edit-icon" class="edit__icon" data-action="edit" />
            </div>
            <div class="container__icon-edit" role="button">
                <img src="/images/main-section/cross_remove.svg" alt="remove-icon" class="delete__icon" data-action="delete" />
            </div>
        </article>`;
    containerTask.insertAdjacentHTML('afterbegin', taskHTML);
}

// Manejo de eventos en el contenedor de tareas
containerTask.addEventListener('click', (e) => {
    const target = e.target;
    const action = target.dataset.action;
    // console.log(action)
    const parentTask = target.closest('.container__task-user');

    if (!parentTask || !action) return; // Salir si no se detecta tarea o acción

    switch (action) {
        case 'complete':
            toggleTaskComplete(parentTask);
            break;
        case 'delete':
            deleteTask(parentTask);
            break;
        case 'edit':
            editTask(parentTask);
            break;
        default:
            console.log('Acción no reconocida');
    }
});

// Función para marcar como completada una tarea

function toggleTaskComplete(taskElement) {
    const parent = taskElement;
    const icon = parent.querySelector('.icon__checked');
    const text = parent.querySelector('.text__task-user');
    
    icon.classList.toggle('checked');
    text.classList.toggle('made');
    
    parent.classList.add('remove');

    setTimeout(() => {
        parent.classList.remove('remove');
        parent.remove();
    }, 800);
}

// Función para eliminar una tarea
function deleteTask(taskElement) {
    containerTask.removeChild(taskElement);
}

// Función para editar una tarea
function editTask(taskElement) {
    const textElement = taskElement.querySelector('.text__task-user');
    const parentText = textElement.closest('.container__text-task');

    parentText.classList.add('edit');



    textElement.setAttribute('contenteditable', 'true');
    textElement.focus();
    
    const newValue = textElement.textContent.trim();
    // Guardar cambios al salir del input editable o presionar Enter
    textElement.addEventListener('blur', () => {
        if(newValue) {
            parentText.classList.remove('edit');
            textElement.removeAttribute('contenteditable');
            // textElement.blur();
        } else {
                showAlert('El texto no puede estar vacío');
                textElement.focus();
        }
    });
    textElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if(newValue) {
                parentText.classList.remove('edit');
                textElement.removeAttribute('contenteditable');

                // textElement.blur();
            } else {
                showAlert('El texto no puede estar vacío');
                textElement.focus();
            }
        }
    });
}



// Mostrar alerta en el formulario
function showAlert(message) {
    removeAlert(); // Remover alertas existentes
    const alert = document.createElement('span');
    const formGroup = document.querySelector('.form-group');
    alert.classList.add('alertText');
    alert.textContent = message;
    formGroup.appendChild(alert);
}

// Remover alertas previas
function removeAlert() {
    const existingAlert = document.querySelector('.alertText');
    if (existingAlert) {
        existingAlert.remove();
    } 
}




