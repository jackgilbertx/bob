const burger = document.getElementById('burger');
const dropdown = document.getElementById('dropdown');
const tags = document.getElementsByTagName('li');

// dropdown.style.height = "0px";
burger.onclick = function () {
  if (dropdown.style.height == '0px') {
    dropdown.style.height = '180px';
  } else {
    dropdown.style.height = '0px';
  }
};
for (let i = 0; i < tags.length; i++) {
  tags[i].onclick = function () {
    dropdown.style.height = '0px';
  };
}
