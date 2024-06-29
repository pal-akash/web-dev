'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = function () {
    // console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

const closeModel = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {

//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

  btnsOpenModal[i].addEventListener('click', openModel);


  
}

//   btnCloseModal.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

btnCloseModal.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function(event){       //event is just a name
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModel();
    } 
});