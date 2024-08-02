import { addItem, removeItem, getItem, displayList, getList } from './listmethods.js';
import todoList from './todolist.js';
import listItem from './listitem.js';
import './styles.css';
import deleteImage from './assets/exit.png'
import editImage from './assets/edit.svg'
import addImage from './assets/add.svg'
import todolistholder from './todolistholder.js';


/* const addList = document.querySelector('#add-list');
const addImg = document.createElement('img');
addList.innerHTML = '';
addImg.src = addImage;
addList.appendChild(addImg); */

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
    function getSelected() {
        return sublist;
    }
    function getSublist(index) {
        return listHolder.getItem(index);
    }
    function changeSublistName(index, name) {
        listHolder.list[index].name = name;
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
    return {addList, removeList, chooseSublist, addToSublist, removeFromSublist, modifySublistItem, changeSublistName, getSize, getSublist, getSelected};
});


const screenController = (() => {
    const backingList = listController();
    const addButton = document.querySelector('#add-list');
    const buttonList = document.querySelectorAll('.action-button');
    const listGrid = document.querySelector('#list-box');
    const addListItem = document.querySelector('#add-list-item');
    const removeListItem = document.querySelector('#remove-list-item');
    const modifyListItem = document.querySelector('#modify-list-item');
    let currentSublist;

    function renderList() {
        if (backingList.getSize() == 1) {
            listGrid.innerHTML = '';
            listGrid.classList.remove('empty');
        }
        listGrid.innerHTML = '';
        for (let i = 0; i < backingList.getSize(); i++) {
            const todoListHolder = document.createElement('div');

            const title = document.createElement('div');
            title.classList.toggle('todo-title');
            const editButton = document.createElement('button');
            const editImg = document.createElement('img');
            editImg.src = editImage;
            editButton.appendChild(editImg);
            editImg.classList.toggle('todo-img');
            editButton.classList.toggle('todo-button');
            editButton.addEventListener('click', (e) => {
                let name = prompt('what would you like to rename the sublist to?');
                backingList.changeSublistName(i, name);
                renderList();
            });
            // Edit button is appended later becaue title's textContent is changed.

            const body = document.createElement('ul');

            const delButton = document.createElement('button');
            const delImg = document.createElement('img');
            delImg.classList.toggle('todo-img');

            delImg.src = deleteImage;
            delButton.appendChild(delImg);
            delButton.classList.toggle('todo-button');
            delButton.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                backingList.removeList(i);
                renderList();
            });

            const topHolder = document.createElement('div');
            topHolder.classList.toggle('top-holder');
            todoListHolder.classList.toggle('todo-list');
            let currList = backingList.getSublist(i);
            if (currList == backingList.getSelected()) {
                todoListHolder.classList.toggle('selected');
            }
            title.textContent = currList.name;
            title.appendChild(editButton);
            console.log(currList.getList().length);
/*             for (let j = 0; j < currList.getList().length; j++) {
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
            } */
            topHolder.appendChild(title);
            topHolder.appendChild(delButton);
            todoListHolder.appendChild(topHolder);
            todoListHolder.appendChild(body);
            todoListHolder.addEventListener('click', (e) => {
                backingList.chooseSublist(i);
                renderList();
            });
            listGrid.appendChild(todoListHolder);
        }
        console.log(backingList.getSize());
        if (backingList.getSize() == 0) {
            listGrid.classList.add('empty');
            const placeHolderText = document.createElement('div');
            placeHolderText.innerText = `Looks like you have no todo lists created yet!
                                        Click on the + to create your first list!`
            listGrid.appendChild(placeHolderText);
        } 
    }
    addButton.addEventListener('click', (e) => {
        backingList.addList();
        renderList();
    });

/*     addListItem.addEventListener('click', (e) => {
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
    }); */
    renderList();
})();