import { addItem, removeItem, getItem, displayList } from './listmethods.js';
import todoList from './todolist.js';
import listItem from './listitem.js';
import './styles.css';
import deleteImage from './assets/exit.png'
import addImage from './assets/add.svg'

// TODO: Fix github pushing.
// Change checkbox to a slider (ios style)
// add saving functionality
// Add uz watermark at the bottom


const listController = (() => {
    let sublist;
    let size = 0;
    const listHolder = (() => {
        let list = [];
        return Object.assign({list}, {addItem, removeItem, getItem, displayList});
    })();

    function addList(listName = 'Todo List') {
        listHolder.addItem(todoList(listName, []));
        size++;
    }
    function removeList(index) {
        listHolder.removeItem(index);
        size = size > 0 ? size - 1 : 0;
    }
    function chooseSublist(index) {
        sublist = listHolder.getItem(index);
        sublist.displayList();
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

    function renderList() {
        const listGrid = document.querySelector('#list-box');
        listGrid.innerHTML = '';
        listGrid.className = '';
        
        const placeHolderText = document.createElement('div');
        placeHolderText.innerText = `Looks like you have no todo lists created yet!
                                    Click on the + to create your first list!`;
    
                                    
        const header = document.querySelector('#header');
        header.innerHTML = '';
        header.className = '';
        const addImg = document.createElement('img');
        const addButton = document.createElement('button');
    
        addImg.src = addImage;
        addImg.classList.toggle('header-img');
        addButton.appendChild(addImg);
        addButton.classList.toggle('header-button');
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
    }
    renderList();
    return renderList;
})();


export default screenController;