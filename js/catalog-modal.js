const catalogModal = document.querySelector('.catalog-modal');
const cardName = document.querySelectorAll('.card-name');
const closeModalButton = catalogModal.querySelector('.catalog-modal-close');

for(let i=0; i<cardName.length; i++){
  cardName[i].addEventListener('click', function(evt){
    evt.preventDefault;
    catalogModal.classList.add('catalog-modal-show');
  })
}

closeModalButton.addEventListener('click', function(evt){
  evt.preventDefault;
  catalogModal.classList.remove('catalog-modal-show');
})
