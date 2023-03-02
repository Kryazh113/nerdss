const modal = document.querySelector('.modal');
const modalOpenButton = document.querySelector('.modal-button');
const modalCloseButton = modal.querySelector('.modal-close');
const modalForm = modal.querySelector('form');
const formName = modal.querySelector('.login-name');
const formEmail = modal.querySelector('.login-email');
const formComment = modal.querySelector('.login-message');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try{
  storageName = localStorage.getItem('login');
  storageEmail = localStorage.getItem('email');
}catch (err) {
  isStorageSupport = false;
}

modalOpenButton.addEventListener('click', function(evt){
  evt.preventDefault;
  modal.classList.add('modal-show');
  if(storageName && storageEmail){
    formName.value = storageName;
    formEmail.value = storageEmail;
    formComment.focus();
  }else{
  formName.focus();
  }
});

modalCloseButton.addEventListener('click', function(evt){
  evt.preventDefault
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
});

window.addEventListener('keydown',function(evt){
  if(evt.keyCode === 27){
    if(modal.classList.contains('modal-show')){
      evt.preventDefault;
      modal.classList.remove('modal-show');
      modal.classList.remove('modal-error');
    }
  }
});

modalForm.addEventListener('submit', function(evt){
  if(!formName.value || !formEmail.value){
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal-error');
  }else{
    if(isStorageSupport){
    localStorage.setItem('login', formName.value);
    localStorage.setItem('email', formEmail.value);
    }
  }
})
