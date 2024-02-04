const listItem = (titleArg, descriptionArg, isCompletedArg) => {
    const retval = {
        title: '',
        description: '',
        isCompleted: false,
    };
    function makeItem(defaultTitle = 'List Item',
        defaultDescription = 'complete list item') {
        this.title = prompt('What is the title of your item?', defaultTitle);
        this.description = prompt('What is the description of your list item', defaultDescription);
    };
    function update() {
        this.makeItem(this.title, this.description);
        this.isCompleted = confirm('Have you completed this item?') ?? false;
    }
    Object.getPrototypeOf(retval).makeItem = makeItem;
    Object.getPrototypeOf(retval).update = update;
    retval.makeItem();

    return retval;
};

export default listItem;