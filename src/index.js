import { addItem, removeItem, getItem, displayList } from './listmethods.js';
import { todoList, todoHelpers, loadItemFunctions } from './todolist.js';
import listItem from './listitem.js';
import './styles.css';
import deleteImage from './assets/exit.png'
import addImage from './assets/add.svg'
import saveImage from './assets/save.svg'


const listController = (() => {
    let listHolder;
    if (localStorage.length == 0) {
        listHolder = (() => {
            let size = 0;
            let sublist;
            let list = [];
            return Object.assign({list}, {size, sublist});
        })();
    } else {
        listHolder = JSON.parse(localStorage.getItem('list'));
        for (let i = 0; i < listHolder.size; i++) {
            Object.assign(Object.getPrototypeOf(listHolder.list[i]), todoHelpers);
            listHolder.list[i].loadItemFunctions();
        }
    }
    Object.assign(Object.getPrototypeOf(listHolder), {addItem, removeItem, getItem, displayList});

    function addList(listName = 'Todo List') {
        listHolder.addItem(todoList(listName, []));
        listHolder.size++;
    }
    function removeList(index) {
        listHolder.removeItem(index);
        listHolder.size = listHolder.size > 0 ? listHolder.size - 1 : 0;
    }
    function chooseSublist(index) {
        listHolder.sublist = listHolder.getItem(index);
        listHolder.sublist.displayList();
        return listHolder.sublist;
    }
    function getSelected() {
        return listHolder.sublist;
    }
    function getSublist(index) {
        return listHolder.getItem(index);
    }
    function changeSublistName(index, name) {
        listHolder.list[index].name = name;
    }
    function addToSublist() {
        listHolder.sublist.addItem(listItem());
        listHolder.sublist.displayList();
        return listHolder.sublist;
    }
    function removeFromSublist(index) {
        listHolder.sublist.removeItem(index);
        listHolder.sublist.displayList();
        return listHolder.sublist;
    }
    function modifySublistItem(index) {
        listHolder.sublist.updateItem(index);
        listHolder.sublist.displayList();
        return listHolder.sublist;
    }
    function getSize() {
        return listHolder.size;
    }
    return {addList, removeList, chooseSublist, addToSublist, removeFromSublist, modifySublistItem, changeSublistName, getSize, getSublist, getSelected, listHolder};
});



const screenController = (() => {

    const backingList = listController();

    function renderList() {
        const listGrid = document.querySelector('#list-box');
        listGrid.innerHTML = '';
        listGrid.className = '';
        
        const placeHolderText = document.createElement('div');
        placeHolderText.innerText = `Looks like you have no todo lists created yet!
                                    Click on the + to create your first list!
                                    Click on 'save' to locally save your list!`;
    
                                    
        const header = document.querySelector('#header');
        header.innerHTML = '';
        header.className = '';
        header.classList.toggle('home-header');
        const saveImg = document.createElement('img');
        const addImg = document.createElement('img');
        const addButton = document.createElement('button');

        saveImg.src = saveImage;
        saveImg.classList.toggle('header-img');
    
        addImg.src = addImage;
        addImg.classList.toggle('header-img');
        addButton.appendChild(addImg);
        addButton.classList.toggle('header-button');
        header.appendChild(saveImg);
        header.appendChild(addButton);

        if (backingList.getSize() == 1) {
            listGrid.classList.remove('empty');
        }
        listGrid.innerHTML = '';
        for (let i = 0; i < backingList.getSize(); i++) {
            const todoListHolder = document.createElement('div');

            const title = document.createElement('div');
            title.classList.toggle('todo-title');

            const delImg = document.createElement('img');
            delImg.classList.toggle('todo-img');

            delImg.src = deleteImage;
            delImg.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                backingList.removeList(i);
                renderList();
            });

            const topHolder = document.createElement('div');
            topHolder.classList.toggle('top-holder');
            todoListHolder.classList.toggle('list');
            let currList = backingList.getSublist(i);
            
            title.textContent = currList.name;

            topHolder.appendChild(title);
            topHolder.appendChild(delImg);
            todoListHolder.appendChild(topHolder);
            todoListHolder.addEventListener('click', (e) => {
                backingList.chooseSublist(i);
            });
            listGrid.appendChild(todoListHolder);
        }
        if (backingList.getSize() == 0) {
            listGrid.classList.add('empty');
            listGrid.appendChild(placeHolderText);
        } 
        addButton.addEventListener('click', (e) => {
            backingList.addList();
            backingList.chooseSublist(backingList.getSize() - 1);
        });
        saveImg.addEventListener('click', (e) => {
            localStorage.setItem('list', JSON.stringify(backingList.listHolder));
        });
    }
    renderList();
    return renderList;
})();


export default screenController;