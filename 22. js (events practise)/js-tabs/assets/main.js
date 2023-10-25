// let headers = document.querySelectorAll('.tab-header');
// let contents = document.querySelectorAll('.tabs-content');

//option 1
// headers.forEach((header)=>{
//     header.addEventListener('click',function(){
//         contents.forEach((content)=>{
//             content.classList.remove('tabs-content-active');
//             if (this.id === content.id) {
//                 content.classList.add('tabs-content-active');
//             }
//         })
        
//     })
// })

//solution 2
let headerList = document.querySelector('.tabs-header-wrapper-list');
let contentList = document.querySelector('.tabs-content-wrapper-list');
let data = [
    {
        id: 'windows',
        color: '#0DA7E3',
        iconClass: 'fa-windows',
        content: `Windows Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nobis aperiam.
        Necessitatibus ipsam voluptatem praesentium laborum pariatur officiis inventore vero voluptas
        voluptatibus modi animi magnam cumque, porro dolorum repudiandae, adipisci quo distinctio natus
        nostrum ipsa, velit reiciendis? Facere similique pariatur quos, magnam nesciunt molestiae dolor
        consectetur nobis? Itaque quaerat accusamus possimus iste sint, odio cumque repellat natus ipsam
        delectus id voluptatibus expedita recusandae modi maiores ad iure consectetur. Sint, nostrum?`
    },
    {
        id: 'ubuntu',
        color: 'orange',
        iconClass: 'fa-ubuntu',
        content: `Ubuntu Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nobis aperiam.
        Necessitatibus ipsam voluptatem praesentium laborum pariatur officiis inventore vero voluptas
        voluptatibus modi animi magnam cumque, porro dolorum repudiandae, adipisci quo distinctio natus
        nostrum ipsa, velit reiciendis? Facere similique pariatur quos, magnam nesciunt molestiae dolor
        consectetur nobis? Itaque quaerat accusamus possimus iste sint, odio cumque repellat natus ipsam
        delectus id voluptatibus expedita recusandae modi maiores ad iure consectetur. Sint, nostrum?`
    },
    {
        id: 'red-hat',
        color: 'red',
        iconClass: 'fa-redhat',
        content: `Redhat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nobis aperiam.
        Necessitatibus ipsam voluptatem praesentium laborum pariatur officiis inventore vero voluptas
        voluptatibus modi animi magnam cumque, porro dolorum repudiandae, adipisci quo distinctio natus
        nostrum ipsa, velit reiciendis? Facere similique pariatur quos, magnam nesciunt molestiae dolor
        consectetur nobis? Itaque quaerat accusamus possimus iste sint, odio cumque repellat natus ipsam
        delectus id voluptatibus expedita recusandae modi maiores ad iure consectetur. Sint, nostrum?`
    },
    {
        id: 'instagram',
        color: 'orangered',
        iconClass: 'fa-instagram',
        content: `Instagram Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nobis aperiam.
        Necessitatibus ipsam voluptatem praesentium laborum pariatur officiis inventore vero voluptas
        voluptatibus modi animi magnam cumque, porro dolorum repudiandae, adipisci quo distinctio natus
        nostrum ipsa, velit reiciendis? Facere similique pariatur quos, magnam nesciunt molestiae dolor
        consectetur nobis? Itaque quaerat accusamus possimus iste sint, odio cumque repellat natus ipsam
        delectus id voluptatibus expedita recusandae modi maiores ad iure consectetur. Sint, nostrum?`
    },
    {
        id: 'youtube',
        color: 'red',
        iconClass: 'fa-youtube',
        content: `Youtube Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nobis aperiam.
        Necessitatibus ipsam voluptatem praesentium laborum pariatur officiis inventore vero voluptas
        voluptatibus modi animi magnam cumque, porro dolorum repudiandae, adipisci quo distinctio natus
        nostrum ipsa, velit reiciendis? Facere similique pariatur quos, magnam nesciunt molestiae dolor
        consectetur nobis? Itaque quaerat accusamus possimus iste sint, odio cumque repellat natus ipsam
        delectus id voluptatibus expedita recusandae modi maiores ad iure consectetur. Sint, nostrum?`
    },

];


document.addEventListener('DOMContentLoaded',()=>{
    //header added on load
    data.forEach((item)=>{
        headerList.innerHTML += `<li style="background-color:${item.color}" id="${item.id}" class="tab-header" data-color="${item.color}">
        <i class="fa-brands ${item.iconClass}"></i>
    </li>`
    });

    let headers = document.querySelectorAll('.tab-header');
    headers.forEach((header)=>{
        header.addEventListener('click',function(){
            let searchedData = data.find((x)=>x.id===this.id);
            contentList.innerHTML = `
            <li style="background-color:${searchedData.color}" id="${searchedData.id}" class="tabs-content d-flex align-items-center">
                    <p>${searchedData.content}</p>
                    <i class="fa-brands ${searchedData.iconClass}"></i>
                </li>
            `
        })
    })
})





