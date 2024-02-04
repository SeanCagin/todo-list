class TodoList {
    constructor(listName, baseList) {
        this.name = listName;
        this.list = baseList.map( (item) => item );
    }

    addItem(item) {
        this.list.push(item);
    }
}

export default TodoList;