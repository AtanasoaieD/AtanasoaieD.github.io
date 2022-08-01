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
  console.info("display skills");

  for (var i = 1; i < 5; i++) {
    console.info(`${i} * 5 = ${i * 5}`);
  }
  // i = i + 1;
  var ul = document.querySelector("#skills ul");
  var skills = ["html", "css", "js", "rubik"];
  console.info(ul);
  for (var i = 0; i < skills.length; i++) {
    // ul.innerHTML = ul.innerHTML`<li>${skills[i]}</li>`;
    ul.innerHTML += `<li>${skills[i]}</li>`;
  }
}
displaySkills();
