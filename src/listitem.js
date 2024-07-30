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
        this.title = uimethods.readItemTitle();
        this.description = uimethods.readItemDescription();
        this.priority = uimethods.readItemPriority();
        this.dueDate = uimethods.readItemDueDate();
    };
    Object.getPrototypeOf(retval).makeItem = makeItem; // This is only useful to make sense of the 'this' keywords in makeItem
    retval.makeItem();

    return retval;
};

export default listItem;