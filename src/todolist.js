import {addItem, removeItem, displayList} from './listmethods.js';


const todoList = (listName, baseList) => {
    let name = listName;
    let list = baseList.map( (item) => item );

    function updateItem(index) {
        list[index].update();
    }

    return Object.assign({ name, list, updateItem }, { addItem, removeItem, displayList });
};

export default todoList;