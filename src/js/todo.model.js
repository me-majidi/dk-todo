import uniqueId from 'lodash/uniqueId';


export class Todo {
    constructor(title, isDone = false) {
        this.title = title;
        this.isDone = isDone;
        this.id = uniqueId();
    }

    toggleState() {
        this.isDone = !this.isDone;
    }
}