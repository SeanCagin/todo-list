import screenController from "./index.js";
import backImage from './assets/back.svg';
import addImage from './assets/add.svg';
import editImage from './assets/edit.svg';
import deleteImage from './assets/exit.png';

function addItem(item) {
    this.list.push(item);
}

function removeItem(index) {
    this.list.splice(index, 1);
}

function getItem(index) {
    return this.list[index];
}

function displayList() {
    const listGrid = document.querySelector('#list-box');
    const placeHolderText = document.createElement('div');
    placeHolderText.innerText = `Looks like you have no tasks in this todo list yet!
                                Click on the + to create your first task!`;

    const header = document.querySelector('#header');
    header.classList.add('in-list');
    header.innerHTML = '';

    const backButton = document.createElement('button');
    backButton.classList.toggle('todo-button');
    const backImg = document.createElement('img');
    backImg.src = backImage;
    backImg.classList.toggle('header-img');
    backButton.appendChild(backImg);

    const listTitle = document.createElement('div');
    listTitle.textContent = this.name;

    const addButton = document.createElement('button');
    addButton.classList.toggle('todo-button');
    const addImg = document.createElement('img');
    addImg.src = addImage;
    addButton.classList.toggle('header-img');
    addButton.appendChild(addImg);
    
    header.appendChild(backButton);
    header.appendChild(listTitle);
    header.appendChild(addImg);


    listGrid.innerHTML = '';
    const renderInnerList = (() => {
        listGrid.classList.add('in-list');
        if (this.list.length == 1) {
            listGrid.classList.remove('empty');
        }
        listGrid.innerHTML = '';
        for (let i = 0; i < this.list.length; i++) {
            const taskHolder = document.createElement('div');
    
            const name = document.createElement('div');
            // title.classList.toggle('todo-title');
            const editButton = document.createElement('button');
            const editImg = document.createElement('img');
            editImg.src = editImage;
            editButton.appendChild(editImg);
            editImg.classList.toggle('todo-img');
            editButton.classList.toggle('todo-button');
/*             editButton.addEventListener('click', (e) => {
                let name = prompt('what would you like to rename the sublist to?');
                backingList.changeSublistName(i, name);
                renderList();
            }); */
            // Edit button is appended later becaue title's textContent is changed.

            
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
            taskHolder.classList.toggle('task');
            title.textContent = this.list[i].title;
            title.appendChild(editButton);
            
            topHolder.appendChild(name);
            topHolder.appendChild(delButton);
            taskHolder.appendChild(topHolder);
            // todoListHolder.appendChild(body);
            taskHolder.addEventListener('click', (e) => {
                backingList.chooseSublist(i);
                renderList();
            });
            listGrid.appendChild(todoListHolder);
        }
    })();
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

}


function renderList() {
    listGrid.classList.add('inner-list');
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

        topHolder.appendChild(title);
        topHolder.appendChild(delButton);
        todoListHolder.appendChild(topHolder);
        // todoListHolder.appendChild(body);
        todoListHolder.addEventListener('click', (e) => {
            backingList.chooseSublist(i);
            renderList();
        });
        listGrid.appendChild(todoListHolder);
    }
    console.log(backingList.getSize());
    if (backingList.getSize() == 0) {
        listGrid.classList.add('empty');
        listGrid.appendChild(placeHolderText);
    } 
}


function getList() {
    return this.list;
}

export {removeItem, addItem, getItem, displayList, getList};