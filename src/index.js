import { addItem, removeItem, getItem, displayList, getList } from './listmethods.js';
import todoList from './todolist.js';
import listItem from './listitem.js';
import './styles.css';



const listController = (() => {
    let sublist;
    let size = 0;
    const listHolder = (() => {
        let list = [];
        return Object.assign({list}, {addItem, removeItem, getItem, displayList});
    })();

    function addList(listName = 'Todo List') {
        listHolder.addItem(todoList(listName, []));
        listHolder.displayList();
        size++;
    }
    function removeList(index) {
        listHolder.removeItem(index);
        listHolder.displayList();
        size = size > 0 ? size - 1 : 0;
    }
    function chooseSublist(index) {
        sublist = listHolder.getItem(index);
        //sublist.displayList();
        return sublist;
    }
    function getSublist(index) {
        return listHolder.getItem(index);
    }
    function changeSublistName(name) {
        sublist.name = name;
    }
    function addToSublist() {
        sublist.addItem(listItem());
        sublist.displayList();
        return sublist;
    }
    function removeFromSublist(index) {
        sublist.removeItem(index);
        sublist.displayList();
        return sublist;
    }
    function modifySublistItem(index) {
        sublist.updateItem(index);
        sublist.displayList();
        return sublist;
    }
    function getSize() {
        return size;
    }
    return {addList, removeList, chooseSublist, addToSublist, removeFromSublist, modifySublistItem, changeSublistName, getSize, getSublist};
});


const screenController = (() => {
    const backingList = listController();
    const buttonList = document.querySelectorAll('.action-button');
    const listGrid = document.querySelector('#list-grid');
    const addList = document.querySelector('#add-list');
    const removeList = document.querySelector('#remove-list');
    const selectSublist = document.querySelector('#select-sublist');
    const changeSublistName = document.querySelector('#change-sublist-name');
    const addListItem = document.querySelector('#add-list-item');
    const removeListItem = document.querySelector('#remove-list-item');
    const modifyListItem = document.querySelector('#modify-list-item');
    let currentSublist;

    function renderList() {
       // console.log(backingList.getSize());
       listGrid.innerHTML = '';
        for (let i = 0; i < backingList.getSize(); i++) {
            const todoListHolder = document.createElement('div');
            const title = document.createElement('h2');
            const body = document.createElement('ul');
            todoListHolder.classList.toggle('todo-list');
            let currList = backingList.getSublist(i);
            title.textContent = currList.name;
            console.log(currList.getList().length);
            for (let j = 0; j < currList.getList().length; j++) {
                let currItem = currList.getItem(j);
                console.log(currItem);
                const listElementHolder = document.createElement('li');
                const listElementTitle = document.createElement('h3');
                const listElementDescription = document.createElement('p');
                const listElementCompleted = document.createElement('span');
                listElementTitle.textContent = currItem.title;
                listElementDescription.textContent = currItem.description;
                listElementCompleted.textContent = currItem.isCompleted;
                listElementHolder.appendChild(listElementTitle);
                listElementHolder.appendChild(listElementDescription);
                listElementHolder.appendChild(listElementCompleted);
                body.appendChild(listElementHolder);
            }
            todoListHolder.appendChild(title);
            todoListHolder.appendChild(body);
            listGrid.appendChild(todoListHolder);
        }
    }
    addList.addEventListener('click', (e) => {
        backingList.addList();
        renderList();
    });
    removeList.addEventListener('click', (e) => {
        let removeIndex = prompt('What index list would you like to remove?');
        backingList.removeList(removeIndex);
        renderList();
    });
    selectSublist.addEventListener('click', (e) => {
        let index = prompt('what index would you like to modify?');
        backingList.chooseSublist(index);
        renderList();
    });
    changeSublistName.addEventListener('click', (e) => {
        let name = prompt('what would you like to rename the sublist to?');
        backingList.changeSublistName(name);
        renderList();
    });
    addListItem.addEventListener('click', (e) => {
        backingList.addToSublist();
        renderList();
    });
    removeListItem.addEventListener('click', (e) => {
        let index = prompt('What index would you like to remove?');
        backingList.removeFromSublist();
        renderList();
    });
    modifyListItem.addEventListener('click', (e) => {
        let index = prompt('What index would you like to modify?');
        backingList.modifySublistItem(index);
        renderList();
    });
})();