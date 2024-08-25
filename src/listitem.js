const listItem = (callBack, cancel) => {
    const retval = {
        isCompleted: false,
        complete() {
            this.isCompleted = true; 
        },
        uncomplete() {
            this.isCompleted = false;
        },
        get isComplete() {
            return this.isCompleted;
        },
        update(updateCallBack) {
            listItemInput((itemInfo) => {
                retval.name = itemInfo.name;
                retval.priority = itemInfo.priority;
                retval.dueDate = itemInfo.dueDate;
                updateCallBack();
            }, () => {
                return;
            }, true, this);
        },
    };

    listItemInput((itemInfo) => {
        retval.name = itemInfo.name;
        retval.priority = itemInfo.priority;
        retval.dueDate = itemInfo.dueDate;
        callBack(retval);
    }, () => {
        cancel();
    }, false, retval);
};


// Renders the necessary form to collect list item data
const listItemInput = (onSubmit, onCancel, updateMode, retval) => {
    const dialog = document.querySelector('dialog');
    const form = document.querySelector('form.item-form');
    const closeDialog = document.querySelector('#close');
    const submitDialog = document.querySelector('#submit');

    if (updateMode) {
        const formName = document.querySelector('#name');
        const formPriority = document.querySelector('#priority');
        const formDueDate = document.querySelector('#due-date');
        formName.value = retval.name;
        formPriority.value = retval.priority;
        formDueDate.value = retval.dueDate;
    }

    dialog.showModal();

    closeDialog.addEventListener('click', handleCancel);
    submitDialog.addEventListener('click', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        if(form.checkValidity()) {
            let data = new FormData(form);
            retval.name = data.get('name');
            retval.priority = data.get('priority');
            retval.dueDate = data.get('due-date');
            form.reset();
            dialog.close();
            submitDialog.removeEventListener('click', handleSubmit); 
            closeDialog.removeEventListener('click', handleCancel);
            onSubmit(retval);
        } else {
            form.reportValidity();
        }
    }

    function handleCancel(e) {
        form.reset();
        dialog.close();
        submitDialog.removeEventListener('click', handleSubmit); 
        closeDialog.removeEventListener('click', handleCancel);
        onCancel();
    }
};

export default listItem;