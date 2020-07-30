const burger = document.getElementById('burger');
const dropdown = document.getElementById('dropdown');
const tags = document.getElementsByTagName('li');
const scrollHome = document.getElementsByClassName('scroll')[0];
const scrollBooks = document.getElementsByClassName('scroll')[1];
const scrollContact = document.getElementsByClassName('scroll')[2];

const books = document.getElementById('books');
const contact = document.getElementById('contact');

burger.onclick = function () {
  if (dropdown.style.height == '0px') {
    burger.innerHTML = '&#9650';
    dropdown.style.height = '180px';
  } else {
    burger.innerHTML = '&#9776;';
    dropdown.style.height = '0px';
  }
};

for (let i = 0; i < tags.length; i++) {
  console.log('click');
  tags[i].onclick = function () {
    burger.innerHTML = '&#9776;';
    dropdown.style.height = '0px';
  };
}

scrollHome.onclick = function () {
  window.scrollTo(0, 0);
  burger.innerHTML = '&#9776;';
  dropdown.style.height = '0px';
};

scrollBooks.onclick = function () {
  window.scrollTo(0, 850);
  burger.innerHTML = '&#9776;';
  dropdown.style.height = '0px';
};

scrollContact.onclick = function () {
  window.scrollTo(0, contact.offsetTop);
  burger.innerHTML = '&#9776;';
  dropdown.style.height = '0px';
};
