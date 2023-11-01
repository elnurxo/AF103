let loader = document.querySelector('.loader-wrapper');
let cardsWrapper = document.querySelector('.cards-wrapper');
let basketCount = document.querySelector('.basket-count');
let API_BASE_URL = 'https://fakestoreapi.com';
let clearAllBtn = document.querySelector('.clear-all');
fetch(API_BASE_URL+'/products')
.then((res)=>res.json())
.then((products)=>{
    loader.classList.replace('d-flex','d-none');
    products.forEach(product => {
        cardsWrapper.innerHTML+= `
        <div class="col-3">
                    <div class="card">
                        <img class="card-img-top" style="height: 200px;object-fit: cover;" src="${product.image}" alt="${product.title}">
                        <div class="card-body">
                          <h5 class="card-title">${product.title}</h5>
                          <p class="card-text">${product.description}</p>
                          <p class="card-text">Category <span class="fw-bold text-danger">${product.category}</span></p>
                          <button id="${product.id}" class="btn btn-success add-to-cart"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                      </div>
                </div>
        `
    });
    let addCardBtns = document.querySelectorAll('.add-to-cart');
    addCardBtns.forEach((btn)=>{
        btn.addEventListener('click',function(){
            fetch(API_BASE_URL+`/products/${this.id}`)
            .then((res)=>res.json())
            .then((product)=>{
                if (JSON.parse(localStorage.getItem('cart'))===null) {
                    product.quantity = 1;
                    localStorage.setItem('cart',JSON.stringify([product]));
                    basketCount.textContent = JSON.parse(localStorage.getItem('cart')).length;
                }
                else{
                    let card = JSON.parse(localStorage.getItem('cart'));
                    let found = card.find((x)=>x.id===product.id);
                    if (found) {
                        found.quantity++;
                        localStorage.setItem('cart',JSON.stringify([...card]));
                    }
                    else{
                        product.quantity = 1;
                        localStorage.setItem('cart',JSON.stringify([...card,product]));
                        basketCount.textContent = JSON.parse(localStorage.getItem('cart')).length;
                    }
                }
            })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item added to cart',
                showConfirmButton: false,
                timer: 1500
              })
        })
    })
});

basketCount.textContent = JSON.parse(localStorage.getItem('cart')).length;

clearAllBtn.addEventListener('click',()=>{
    if (JSON.parse(localStorage.getItem('cart'))) {
        if (JSON.parse(localStorage.getItem('cart')).length===0) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Your Local Storage is Empty',
                showConfirmButton: false,
                timer: 1000
              })
        }
        else{
            localStorage.setItem('cart',JSON.stringify([]));
            basketCount.textContent = JSON.parse(localStorage.getItem('cart')).length;
        }
    }
})