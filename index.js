var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for a click 

window.addEventListener('load', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);
//functions

function openModal() {
  modal.style.display = 'block';
  removeEvent();
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none'; 
  }
}
function removeEvent() {
  window.removeEventListener('mouseover', openModal);
}