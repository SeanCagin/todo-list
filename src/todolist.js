import {addItem, removeItem, displayList, getList, getItem} from './listmethods.js';
import listItem from './listitem.js';


const todoList = (listName, baseList) => {
    const retval = {
        name: listName,
        list: baseList.map( (item) => item ),
        updateItem: function(index) {
            list[index].update();
        }
    };

    return Object.assign(retval, { addItem, removeItem, displayList, getList, getItem });
};

const otherList = () => {
    const retval = {
        name: listName,
        list: [],
        addItem() {
            let newItem = llistItem.makeItem();
            list[this.list.length - 1] = newItem;
        },
    }
}

export default todoList;