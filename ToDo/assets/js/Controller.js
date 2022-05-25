export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.onTodoListChanged(this.model.todos);
        this.model.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindToAdd(this.handleAddTodo);
        this.view.bindToToggle(this.handleToggleTodo);
        this.view.bindToRemove(this.handleRemoveTodo);
    }

    onTodoListChanged = (todos) => {
        this.view.render(todos);
    }

    handleAddTodo = (todoText) => {
        this.model.addTodo(todoText);
    }

    handleRemoveTodo = (id) => {
        this.model.removeTodo(id);
    }

    handleToggleTodo = (id) => {
        this.model.toggleTodo(id);
    }
}