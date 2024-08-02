const uimethods = {
    readItemTitle() {
        return prompt("Item title") ?? "";
    },
    readItemDescription() {
        return prompt("Item description") ?? "";
    },
    readItemDueDate() {
        return prompt("Item due date") ?? "Jan 1";
    },
    readItemPriority() {
        return prompt("Item priority") ?? 0;
    },

    readListTitle() {
        return prompt("List title") ?? "";
    },

}


export default uimethods;