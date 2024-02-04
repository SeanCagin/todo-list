import { addItem, removeItem, getItem, displayList } from './listmethods.js';
import todoList from './todolist.js';
import listItem from './listitem.js';



const gameController = (() => {
    let sublist;
    const listHolder = (() => {
        let list = [];
        return Object.assign({list}, {addItem, removeItem, getItem, displayList});
    })();

    function addList(listName = 'Todo List') {
        listHolder.addItem(todoList(listName, []));
        listHolder.displayList();
    }
    function removeList(index) {
        listHolder.removeItem(index);
        listHolder.displayList();
    }
    function chooseSublist(index) {
        sublist = listHolder.getItem(index);
        sublist.displayList();
    }
    function addToSublist() {
        sublist.addItem(listItem());
        sublist.displayList();
    }
    function removeFromSublist(index) {
        sublist.removeItem(index);
        sublist.displayList();
    }
    function modifySublistItem(index) {
        sublist.updateItem(index);
        sublist.displayList();
    }
    return {addList, removeList, chooseSublist, addToSublist, removeFromSublist, modifySublistItem};
});


const screenHandler = (() => {
    const game = gameController();
    const addList = document.querySelector('#add-list');
    const removeList = document.querySelector('#remove-list');
    const selectSublist = document.querySelector('#select-sublist');
    const addListItem = document.querySelector('#add-list-item');
    const removeListItem = document.querySelector('#remove-list-item');
    const modifyListItem = document.querySelector('#modify-list-item');

    addList.addEventListener('click', (e) => {
        game.addList();
    });
    removeList.addEventListener('click', (e) => {
        let removeIndex = prompt('What index list would you like to remove?');
        game.removeList(removeIndex);
    });
    selectSublist.addEventListener('click', (e) => {
        let index = prompt('what index would you like to modify?');
        game.chooseSublist(index);
    });
    addListItem.addEventListener('click', (e) => {
        game.addToSublist();
    });
    removeListItem.addEventListener('click', (e) => {
        let index = prompt('What index would you like to remove?');
        game.removeFromSublist();
    });
    modifyListItem.addEventListener('click', (e) => {
        let index = prompt('What index would you like to modify?');
        game.modifySublistItem(index);
    });
})();