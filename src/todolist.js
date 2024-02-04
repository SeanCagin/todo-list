import {addItem, removeItem, displayList, getList} from './listmethods.js';


const todoList = (listName, baseList) => {
    const retval = {
        name: listName,
        list: baseList.map( (item) => item ),
        updateItem: function(index) {
            list[index].update();
        }
    };

    return Object.assign(retval, { addItem, removeItem, displayList, getList });
};

export default todoList;