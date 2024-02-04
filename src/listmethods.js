function addItem(item) {
    this.list.push(item);
}

function removeItem(index) {
    this.list.splice(index, 1);
}

function getItem(index) {
    return this.list[index];
}

function displayList() {
    console.log(this.list);
}

export {removeItem, addItem, getItem, displayList};