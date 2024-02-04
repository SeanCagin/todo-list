class ListItem {
    constructor(title, description, completed) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    getItem() {
        return this;
    }
}

export default ListItem;