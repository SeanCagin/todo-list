import uimethods from "./uimethods";

// callers of listItem cannot know exactly what listItem wants so it 
// makes more sense for list item to call the individual ui functions to
// get the necessary data it needs.
const listItem = (callBack, cancel) => {
    const retval = {
        // title: '',
        // description: '',
        // priority: 0,
        // dueDate: 'Jan 1',
        isCompleted: false,
        complete() {
            this.isCompleted = true; 
        },
        uncomplete() {
            this.isCompleted = false;
        },
    };
    //function makeItem() {
        //const itemInfo = listItemInput();

    listItemInput((itemInfo) => {
        console.log('2');
        retval.name = itemInfo.name;
        retval.priority = itemInfo.priority;
        retval.dueDate = itemInfo.dueDate;
        console.log('3');
        callBack(retval);
    }, () => {
        console.log(' b ');
        cancel();
    });
        // console.log('what what what what');

    //};
    //Object.getPrototypeOf(retval).makeItem = makeItem; // This is only useful to make sense of the 'this' keywords in makeItem
};


// Renders the necessary form to collect list item data
const listItemInput = (onSubmit, onCancel) => {
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
        console.log(' a ');
        onCancel();
    }, {once: true});

    submitDialog.addEventListener('click', (e) => {
        e.preventDefault();
        if(form.checkValidity()) {
            let data = new FormData(form);
            retval.name = data.get('name');
            retval.priority = data.get('priority');
            retval.dueDate = data.get('due-date');
            console.log('im tracing back: 1 ');
            form.reset();
            dialog.close();
            onSubmit(retval);
        } else {
            form.reportValidity();
        }
    }, {once: true});
};

export default listItem;