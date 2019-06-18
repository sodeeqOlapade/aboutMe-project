

const fName = document.querySelector('#fName');
const cName = document.querySelector('#cName');
const email = document.querySelector('#email');
const phone = document.querySelector('#pNumber');
const subscribe = document.querySelector('#subscribe');

subscribe.addEventListener('submit', submit);

function submit(event) {
//   event.preventDefault();
  console.log(event);
  console.log(fName.value);
  console.log(cName.value);
  console.log(email.value);
  console.log(phone.value);
}

const url = new URLSearchParams(window.location.search);

console.log(url.getAll('fName'))
