console.info(2);
console.debug(23 + 3);
console.warn(6 * 3 - 10);
console.warn("app started");

var myName = "Dan";
var age = 19;

console.info(" My name is " + myName + " , I'm " + age + " years old ");
age = 30;
console.info(" My name is " + myName + " , I'm " + age + " years old ");
age = 31;
console.info(" My name is " + myName + " , I'm " + age + " years old ");

var jobTitle = "<span> web </span>";

var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

// mottoElement.innerHTML = mottoElement.innerHTML + "&" + jobTitle;
// mottoElement.innerHTML += "&" + jobTitle;

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

var activePage = "skills";

function showPage(nextPage) {
  // console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        console.warn("click pe meniu", id);
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();
// initializare ; conditie ; post executie

function displaySkills() {
  var ul = document.querySelector("#skills ul");

  skills.sort(function (a, b) {
    return b.endorcements - a.endorcements;
    //   if (a.name.toLowerCase() < b.name.toLowerCase()) {
    //     return -1;
    //   }
    //   if (a.name.toLowerCase() > b.name.toLowerCase()) {
    //     return 1;
    //   }
    //   return 0;
  });
  console.info(skills);
  for (var i = 0; i < skills.length; i++) {
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorcemets}</li>`;
  }
}

function loadSkills() {
  fetch("skills.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (serverSkills) {
      console.warn(serverSkills);
    });
}

loadSkills();
