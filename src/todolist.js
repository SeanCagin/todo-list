import {addItem, removeItem, displayList, getList, getItem} from './listmethods.js';
import listItem from './listitem.js';


const todoList = (listName, baseList) => {
    const retval = {
        name: listName,
        list: baseList.map( (item) => item ),
        updateItem: function(index) {
            list[index].update();
        },
        addTask(callBack) {
            listItem((item) => {
                this.list.push(item);
                callBack();
            }, () => {
                callBack();
            });
        }
    };

    return Object.assign(retval, { addItem, removeItem, displayList, getList, getItem });
};

export default todoList;