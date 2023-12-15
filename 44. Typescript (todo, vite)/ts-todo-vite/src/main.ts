import "./style/style.css";
import FullList from "./models/FullList";
import ListItem from "./models/ListItem";
import ListTemplate from "./templates/ListTemplate";

function initApp():void {
    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    const form = document.getElementById('itemEntryForm') as HTMLFormElement;

    form.addEventListener('submit',(e: SubmitEvent)=>{
        e.preventDefault();

        const input = document.getElementById('newItem') as HTMLInputElement;
        const newItem: string = input.value.trim();
        if (!newItem.length) return;

        const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length-1].id) + 1 : 1;

        const newListItem = new ListItem(String(itemId),newItem);
        fullList.add(newListItem);
        template.render(fullList);

        input.value = '';

    });

    const clearItems = document.getElementById('clearItemsButton') as HTMLButtonElement;

    clearItems.addEventListener('click',():void=>{
        fullList.clearList();
        template.clear();
    });

    fullList.load();

    template.render(fullList);
}



document.addEventListener('DOMContentLoaded',initApp);