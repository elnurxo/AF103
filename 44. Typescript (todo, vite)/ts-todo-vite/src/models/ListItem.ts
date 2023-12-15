export interface Item{
    id: string;
    item: string;
    checked: boolean;
}

export default class ListItem implements Item{

    constructor(private _id: string = '', private _item: string = '', private _checked: boolean = false){}

    //getters
    get id():string{
        return this._id;
    }
    get item():string{
        return this._item;
    }
    get checked():boolean{
        return this._checked;
    }
    //setters
    set item(value:string){
        this._item = value;
    }
    set checked(value:boolean){
        this._checked = value;
    }
}