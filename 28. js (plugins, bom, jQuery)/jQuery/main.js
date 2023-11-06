let btn = document.querySelector("#btn");
let text = document.querySelector("#text");

// btn.addEventListener('click',()=>{
//     text.classList.toggle('hide');
// })

$(() => {
  $(".flip").click(function () {
    $.get("https://northwind.vercel.app/api/categories", function(data, status){
        console.log(data);
      });
  });
});
