import todoStorage from './todo.storage';
import { Todo } from './todo.model';

import uiController from './ui.controller';

const handleCreateTodo = () => {
    const input = $('#todo-title-input');
    const inputValue = input.val();
    
    if (!inputValue) {
        return;
    }
    
    const todo = new Todo(inputValue);
    todoStorage.addTodo(todo);
    input.val('');
    input.blur();

    uiController.appendTodoToUi(todo);
};

const handleToggleTodoState = id => {
    todoStorage.toggleTodoState(id);
    uiController.toggleTodoState(id);
};

const handleRemoveTodo = id => {
    todoStorage.removeTodo(id);
    uiController.removeTodo(id);
}







$('.js-new-todo-form').on('submit', (event) => {
    event.preventDefault();
    handleCreateTodo();
});


$('.js-new-todo-btn').click( event => {
    handleCreateTodo();
});


$('.js-todos-list').click( event => {
    const { target } = event;
    const targetEl = $(target);
    const todoEl = targetEl.closest('.todo');
    const todoId = todoEl.data('id');

    if ( targetEl.hasClass('js-icon-check-mark') || targetEl.hasClass('js-todo-state') ) {
        handleToggleTodoState(todoId);
    } else if ( targetEl.hasClass('js-todo-remove') ) {
        handleRemoveTodo(todoId);
    }
});






uiController.initUi(todoStorage.getTodos());