const burger = document.getElementById("burger");
const dropdown = document.getElementById("dropdown");
const tags = document.getElementById("dropdown").children;

dropdown.style.height = "0px";
console.log(burger);
burger.onclick = function () {
  if (dropdown.style.height == "0px") {
    dropdown.style.height = "200px";
  } else {
    dropdown.style.height = "0px";
  }
};
console.log(tags);

for (tag in tags) {
  tags[tag].onclick = function () {
    dropdown.style.height = "0px";
  };
}
