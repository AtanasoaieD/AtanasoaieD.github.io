console.info(2);
console.debug(23 + 3);
console.warn(6 * 3 - 10);
console.error("app started");

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
mottoElement.innerHTML += "&" + jobTitle;

function hidePage(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  showPage("home");
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
}

function showSkillsPage() {
  hidePage("home");
  hidePage("projects");
  showPage("skills");

  hidePage("languages");
}

function showProjectsPage() {
  hidePage("home");
  hidePage("skills");
  showPage("projects");
  hidePage("languages");
}

function showLanguagesPage() {
  hidePage("home");
  hidePage("skills");
  hidePage("projects");
  showPage("languages");
}

showHomePage();
