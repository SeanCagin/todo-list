import TodoList from './todolist.js';
import ListItem from './listitem.js';

const gameController = (() => {
    const listHolder = [];
    function displayListHolder() {
        console.log('listHolder is now:');
        console.log(listHolder);
    }
    function addList(listName = 'Todo List') {
        listHolder.push(new TodoList(listName, []));
        displayListHolder();
    }
    function removeList(index) {
        listHolder.splice(index, 1);
        displayListHolder();
    }
    return {addList, removeList};
});


const screenHandler = (() => {
    const game = gameController();
    const addListButton = document.querySelector('#add-list');
    const removeListButton = document.querySelector('#remove-list');

    addListButton.addEventListener('click', (e) => {
        game.addList();
    });
    removeListButton.addEventListener('click', (e) => {
        let removeIndex = prompt('What index list would you like to remove?');
        game.removeList(removeIndex);
    });
})();