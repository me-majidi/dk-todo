import { Todo } from "./todo.model";

let todos = [];

const syncDateWithLocalStorage = () => {
    localStorage.setItem('dk-todos', JSON.stringify(todos));
};

const initTodos = () => {
    if (localStorage) {
        const localStorageData = localStorage.getItem('dk-todos');

        if (localStorageData) {
            todos = JSON.parse(localStorageData).map( t => new Todo(t.title, t.isDone) );
        }
    }
};

const addTodo = (todo) => {
    todos = [todo, ...todos];
    syncDateWithLocalStorage();
};

const removeTodo = (id) => {
    todos = todos.filter( todo => todo.id != id );
    syncDateWithLocalStorage();
}

const toggleTodoState = (id) => {
    const todo = todos.find( _todo => _todo.id == id );

    console.log(todo);
    if (todo) {
        todo.toggleState();
        syncDateWithLocalStorage();
    }
}

const getTodos = () => {
    return todos;
}


initTodos();



export default { addTodo, removeTodo, toggleTodoState, getTodos };