import ListItem from "./ListItem";

interface List{
    list: ListItem[],
    load():void,
    save():void,
    add(newItem: ListItem):void,
    remove(id: string):void,
    clearList():void
}

export default class FullList implements List{
    //singleton

    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []){}

    //getter
    get list(): ListItem[]{
        return this._list;
    }

    //method implement

   load(): void {
       const storedList : string | null = localStorage.getItem('todos');
       if (typeof storedList !== 'string') return;

       const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList);

       parsedList.forEach((item)=>{
            const newListItem = new ListItem(item._id, item._item, item._checked);
            FullList.instance.add(newListItem);
       })
   }

    save():void{
        localStorage.setItem('todos',JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    add(newItem: ListItem): void {
        this._list.push(newItem);
        this.save();
    }

    remove(id: string): void {
        this._list = this._list.filter(item=>item.id!==id);
        this.save();
    }

}

