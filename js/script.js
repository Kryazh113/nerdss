let modal = document.querySelector('.modal');
let whriteUs = document.querySelector('.modal-button');
let closeModal = document.querySelector('.modal-close');


modal.classList.toggle('not-active');


whriteUs.addEventListener('click', function(){
  modal.classList.remove('not-active');
  modal.classList.add('modal');
});

closeModal.addEventListener('click', function(){
  modal.classList.toggle('not-active');
});
