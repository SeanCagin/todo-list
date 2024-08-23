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
    backButton.classList.toggle('header-button');
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
    addImg.classList.toggle('header-img');
    addButton.classList.toggle('header-button'); 
    addButton.appendChild(addImg);
    addButton.addEventListener('click', (e) => {
        this.addTask(() => {
            renderInnerList();
        });
        console.log(' tset tset tset ');
        //renderInnerList();
    });
    
    header.appendChild(backButton);
    header.appendChild(listTitle);
    header.appendChild(addButton);

    backButton.addEventListener('click', (e) => {
        screenController();
    });


    listGrid.innerHTML = '';
    const renderInnerList = () => {
        listGrid.classList.add('in-list');
        if (this.list.length == 1) {
            listGrid.classList.remove('empty');
        }
        listGrid.innerHTML = '';
        for (let i = 0; i < this.list.length; i++) {
            const taskHolder = document.createElement('div');
            taskHolder.classList.toggle('list');
    
            const name = document.createElement('div');
            const dueDate = document.createElement('div');
            const completeBox = document.createElement('input');
            
            completeBox.type = 'checkbox';
            name.classList.toggle('todo-title');
            dueDate.classList.toggle('todo-title');

            completeBox.addEventListener('change', () => {
                if (completeBox.checked) {
                    this.list[i].complete();
                    taskHolder.classList.add('complete');
                } else {
                    this.list[i].uncomplete();
                    taskHolder.classList.remove('complete');
                }
            });

            if (this.list[i].priority == '1') {
                taskHolder.classList.toggle('priority1');
            } else if (this.list[i].priority == '2') {
                taskHolder.classList.toggle('priority2');
            } else {
                taskHolder.classList.toggle('priority3');
            }

            name.textContent = this.list[i].name;
            dueDate.textContent = this.list[i].dueDate;
            
            // const delButton = document.createElement('button');
            const delImg = document.createElement('img');
            delImg.classList.toggle('todo-img');

            delImg.src = deleteImage;
            delImg.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                this.removeItem(i);
                renderInnerList();
            });
            

            const topHolder = document.createElement('div');
            const leftHalf = document.createElement('div');
            const rightHalf = document.createElement('div');
            leftHalf.classList.toggle('list-half');
            rightHalf.classList.toggle('list-half');

            leftHalf.appendChild(completeBox);
            leftHalf.appendChild(name);

            rightHalf.appendChild(dueDate);
            rightHalf.appendChild(delImg);
            topHolder.classList.toggle('top-holder');
            // name.appendChild(editButton);
            
            topHolder.appendChild(leftHalf);
            topHolder.appendChild(rightHalf);

            taskHolder.appendChild(topHolder);
            //taskHolder.appendChild(dueDate);

            // todoListHolder.appendChild(body);
            // taskHolder.addEventListener('click', (e) => {
            //     backingList.chooseSublist(i);
            //     renderList();
            // });
            listGrid.appendChild(taskHolder);
        }
    };
    renderInnerList();
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


function getList() {
    return this.list;
}

export {removeItem, addItem, getItem, displayList, getList};