import { addItem, removeItem, getItem, displayList, getList } from './listmethods.js';
import todoList from './todolist.js';
import listItem from './listitem.js';
import './styles.css';



const listController = (() => {
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
    function changeSublistName(name) {
        sublist.name = name;
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
    return {addList, removeList, chooseSublist, addToSublist, removeFromSublist, modifySublistItem, changeSublistName};
});


const screenController = (() => {
    const backingList = listController();
    const listGrid = document.querySelector('#list-grid');
    const addList = document.querySelector('#add-list');
    const removeList = document.querySelector('#remove-list');
    const selectSublist = document.querySelector('#select-sublist');
    const changeSublistName = document.querySelector('#change-sublist-name');
    const addListItem = document.querySelector('#add-list-item');
    const removeListItem = document.querySelector('#remove-list-item');
    const modifyListItem = document.querySelector('#modify-list-item');
    let currentSublist;

    function renderList(list) {
        const todoListHolder = document.createElement('div');
        todoListHolder.classList.toggle('todo-list');
        todoListHolder.textContent = backingList.getItem(getList);
    }
    addList.addEventListener('click', (e) => {
        backingList.addList();
    });
    removeList.addEventListener('click', (e) => {
        let removeIndex = prompt('What index list would you like to remove?');
        backingList.removeList(removeIndex);
    });
    selectSublist.addEventListener('click', (e) => {
        let index = prompt('what index would you like to modify?');
        backingList.chooseSublist(index);
    });
    changeSublistName.addEventListener('click', (e) => {
        let name = prompt('what would you like to rename the sublist to?');
        backingList.changeSublistName(name);
    });
    addListItem.addEventListener('click', (e) => {
        backingList.addToSublist();
    });
    removeListItem.addEventListener('click', (e) => {
        let index = prompt('What index would you like to remove?');
        backingList.removeFromSublist();
    });
    modifyListItem.addEventListener('click', (e) => {
        let index = prompt('What index would you like to modify?');
        backingList.modifySublistItem(index);
    });
})();