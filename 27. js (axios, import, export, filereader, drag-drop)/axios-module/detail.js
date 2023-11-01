import { getCategoryByID } from "./httprequests.js";

let id = new URLSearchParams(location.search).get('id');

const category = await getCategoryByID(id);

let item = document.createElement('h3');
item.textContent = category.name;
document.body.append(item);