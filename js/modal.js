let modalPrice = document.querySelector('.modal-price');
let catalogItem = document.querySelector('.catalog-item');


modalPrice.classList.toggle('not-active');
modalPrice.classList.remove('modal-price')



catalogItem.addEventListener('focusin',function(){
   
    modalPrice.classList.remove('not-active');
    modalPrice.classList.add('modal-price');
});

catalogItem.addEventListener('focusout',function(){
   
    modalPrice.classList.remove('modal-price');
    modalPrice.classList.add('not-active');
});
