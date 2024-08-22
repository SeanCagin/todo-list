import uimethods from "./uimethods";

// callers of listItem cannot know exactly what listItem wants so it 
// makes more sense for list item to call the individual ui functions to
// get the necessary data it needs.
const listItem = () => {
    const retval = {
        // title: '',
        // description: '',
        // priority: 0,
        // dueDate: 'Jan 1',
        isCompleted: false,
        toggleComplete() {
            this.isCompleted = !this.isCompleted; // will require further implementation for ui features.
        },
    };
    function makeItem() {
        //const itemInfo = listItemInput();
        listItemInput()
            .then(itemInfo => {
                this.name = itemInfo.name;
                this.priority = itemInfo.priority;
                this.dueDate = itemInfo.dueDate;
            })
            .catch(e => {
                console.log(e);
            })
        // console.log('what what what what');

    };
    Object.getPrototypeOf(retval).makeItem = makeItem; // This is only useful to make sense of the 'this' keywords in makeItem
    retval.makeItem();

    return retval;
};


// Renders the necessary form to collect list item data
const listItemInput = () => {
    const dialog = document.querySelector('dialog');
    const form = document.querySelector('form');
    const closeDialog = document.querySelector('#close');
    const submitDialog = document.querySelector('#submit');

    dialog.showModal();

    const retval = {
        name: '',
        priority: '',
        dueDate: '',
    };

    closeDialog.addEventListener('click', (e) => {
        form.reset();
        dialog.close();
    });

    submitDialog.addEventListener('click', (e) => {
        e.preventDefault();
        if(form.checkValidity()) {
            let data = new FormData(form);
            retval.name = data.get('name');
            retval.priority = data.get('priority');
            retval.dueDate = data.get('due-date');
            return retval;
        } else {
            form.reportValidity();
        }
    });
};

export default listItem;