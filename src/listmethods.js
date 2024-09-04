import screenController from "./index.js";
import backImage from './assets/back.svg';
import addImage from './assets/add.svg';
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

const nextNum = (() => {
    let num = 0;
    function getNextNum() {
        return(++num);
    }
    return getNextNum;
})();

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

    const listTitle = document.createElement('input');
    listTitle.value = this.name;
    listTitle.classList.toggle('inner-title');
    listTitle.setAttribute('maxlength', 30);
    listTitle.setAttribute('minlength', 1);
    listTitle.setAttribute('required', true);
    listTitle.setAttribute('spellCheck', false);
    const wrapperForm = document.createElement('form');
    wrapperForm.appendChild(listTitle);
    wrapperForm.addEventListener('submit', (e) => {e.preventDefault()});

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
    });
    
    header.appendChild(backButton);
    header.appendChild(wrapperForm);
    header.appendChild(addButton);

    backButton.addEventListener('click', (e) => {
        if (wrapperForm.checkValidity()) {
            this.name = listTitle.value;
            screenController();
        } else {
            wrapperForm.reportValidity();
            listTitle.focus();
        }
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

            let clickAble = true;
            const currNum = nextNum();
            const name = document.createElement('div');
            const dueDate = document.createElement('div');
            const completeBox = document.createElement('input');
            const completeBoxLabel = document.createElement('div');
            const completeBoxSlider = document.createElement('span');
        
            completeBox.type = 'checkbox';
            completeBoxLabel.classList.toggle('switch');
            completeBoxSlider.classList.toggle('slider');
            completeBoxLabel.append(completeBox);
            completeBoxLabel.append(completeBoxSlider);
            name.classList.toggle('todo-title');
            dueDate.classList.toggle('todo-title');

            completeBoxLabel.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                if (!this.list[i].isComplete()) {
                    this.list[i].complete();
                    completeBox.checked = true;
                    clickAble = false;
                    taskHolder.classList.add('complete');
                } else {
                    clickAble = true;
                    this.list[i].uncomplete();
                    completeBox.checked = false;
                    taskHolder.classList.remove('complete');
                }
                console.log(this.list[i].isComplete());
                
                setTimeout(() => {renderInnerList()}, "400");
            });

            if (this.list[i].isComplete()) {
                taskHolder.classList.add('complete');
                completeBox.checked = true;
            } else { // Only add edit event listener if the task is not yet completed
                taskHolder.addEventListener('click', (e) => {
                    e.stopImmediatePropagation();
                    if (clickAble) {
                        this.list[i].update(() => {
                            renderInnerList();
                            return;
                        });
                    }
                });
            }

            if (this.list[i].priority == '1') {
                completeBoxSlider.classList.toggle('priority1');
            } else if (this.list[i].priority == '2') {
                completeBoxSlider.classList.toggle('priority2');
            } else {
                completeBoxSlider.classList.toggle('priority3');
            }

            name.textContent = this.list[i].name;
            dueDate.textContent = this.list[i].dueDate;
            
            const delImg = document.createElement('img');
            delImg.classList.toggle('todo-img');

            delImg.src = deleteImage;
            delImg.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                this.removeItem(i);
                renderInnerList();
                return;
            });
            
            const topHolder = document.createElement('div');
            const leftHalf = document.createElement('div');
            const rightHalf = document.createElement('div');
            leftHalf.classList.toggle('list-half');
            rightHalf.classList.toggle('list-half');

            leftHalf.appendChild(completeBoxLabel);
            leftHalf.appendChild(name);

            rightHalf.appendChild(dueDate);
            rightHalf.appendChild(delImg);
            topHolder.classList.toggle('top-holder');
            
            topHolder.appendChild(leftHalf);
            topHolder.appendChild(rightHalf);
            taskHolder.appendChild(topHolder);
            listGrid.appendChild(taskHolder);
        }
        if (this.list.length == 0) {
            listGrid.classList.add('empty');
            listGrid.append(placeHolderText);
        }
    };
    listTitle.focus();
    renderInnerList();
}


function getList() {
    return this.list;
}

export {removeItem, addItem, getItem, displayList, getList};