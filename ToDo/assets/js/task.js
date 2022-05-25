export default class Task {
    constructor(text) {
        this.done = false;
        this.text = text || 'Введите текст';
    }

    render() {
        return `
            <div class="todo__item">
                <div class="todo__checkbox-wrapper">
                    <input type="checkbox" id="item1" class="todo__checkbox">
                    <label for="item1" class="todo__label"></label>
                </div>
                <div class="todo__content">Нужно сделать туду лист</div>
                <div class="todo__actions">
                    <div class="todo__remove">x</div>
                </div>
            </div>
        `;
    }
}