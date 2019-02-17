const todosList = $('.js-todos-list');

const generateTodoTemplate = ({ title, id, isDone }) => `
    <div class="todo ${ isDone ? 'done' : '' }" data-id="${id}">
        <p class="todo__title">${title}</p>
        <div class="todo__buttons">
            <div class="todo__remove-btn js-todo-remove" title="remove todo">
                <i class="icon-trash js-todo-remove"></i>
            </div>
            <div class="todo__state js-todo-state" title="toggle todo state">
                <i class="icon-check-mark-2 js-icon-check-mark"></i>
            </div>
        </div>
    </div>
`;

const appendTodoToUi = todo => {
    todosList.prepend(generateTodoTemplate(todo));
};

const removeTodo = id => {
    todosList.find('.todo')
        .filter( (index, el) => $(el).data('id') === id ).remove();
};

const initUi = todos => {
    todos.forEach( todo => todosList.append(generateTodoTemplate(todo)) );
};

const toggleTodoState = id => {
    const todoElement = todosList.find('.todo')
                .filter( (index, el) => $(el).data('id') === id );

    todoElement.toggleClass('done');
};

export default { appendTodoToUi, initUi, removeTodo, toggleTodoState };