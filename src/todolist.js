import {addItem, removeItem, displayList, getList, getItem} from './listmethods.js';
import listItem from './listitem.js';
import uimethods from './uimethods.js';


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
                console.log(' 4 ');
                callBack();
            }, () => {
                console.log(' c ');
                callBack();
            });
            //this.list.push(listItem());
        }
    };

    return Object.assign(retval, { addItem, removeItem, displayList, getList, getItem });
};

// const todoList = () => {
//     const retval = {
//         title: "",
//         list: [],
//         addItem() {
//             let newItem = listItem.makeItem();
//             list[this.list.length - 1] = newItem;
//         },
//         removeItem(index) {
//             // To be implemented
//         }
//     };
//     function makeList() {
//         this.title = uimethods.readListTitle();
//     }
//     Object.getPrototypeOf(retval).makeList = makeList;
//     retval.makeList();
//     return retval;
// }

export default todoList;