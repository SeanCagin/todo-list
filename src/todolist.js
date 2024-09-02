import {addItem, removeItem, displayList, getList, getItem} from './listmethods.js';
import {listItem, retvalFuncs} from './listitem.js';


// Functions to attach after deserialization 
function updateItem(index) {
    this.list[index].update();
}

function addTask(callBack) {
    listItem((item) => {
        this.list.push(item);
        callBack();
    }, () => {
        callBack();
    });
}

function loadItemFunctions() {
    for (let i = 0; i < this.list.length; i++) {
        Object.assign(Object.getPrototypeOf(this.list[i]), retvalFuncs);
    }
}

const todoHelpers = {loadItemFunctions, addTask, updateItem};

const todoList = (listName, baseList) => {
    const retval = {
        name: listName,
        list: baseList.map( (item) => item ),
    };

    return Object.assign(retval, { addItem, removeItem, displayList, getList, getItem, updateItem, addTask, loadItemFunctions });
};

export { todoList };
export { todoHelpers };
export { loadItemFunctions };