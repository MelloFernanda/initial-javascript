const todoList=[{
    name: 'make dinner',
    dueDate:'2022-12-22',
}, {
    name: 'wash dishes',
    dueDate:'2022-12-22',   
    }];

renderTodoList();

function renderTodoList(){
    let todoListHMTL ='';


    todoList.forEach((todoObject, index) => {

        //const name = todoObject.name;
        //const name = todoObject.name;
        const { name, dueDate } = todoObject;


        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
            `;

        todoListHMTL += html;
    });

    document.querySelector('.js-todo-list').innerHTML=todoListHMTL;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    if(name && dueDate){
        todoList.push({
            //name: name, dueDate: dueDate,
            name,
            dueDate
        });
    }

    inputElement.value ='';
    dateInputElement.value ='';

    renderTodoList();
}