let projetOne = document.querySelector(".containerProject > h3:nth-child(1)");
let projetTwo = document.querySelector(".containerProject > h3:nth-child(2)");
let projetThree = document.querySelector(".containerProject > h3:nth-child(3)");
let projetFour = document.querySelector(".containerProject > h3:nth-child(4)");

// ********* mouse enter and leave events ***********

projetOne.addEventListener("mouseenter", function () {
  projetTwo.classList.add("opac");
  projetThree.classList.add("opac");
  projetFour.classList.add("opac");
});

projetOne.addEventListener("mouseleave", function () {
  projetTwo.classList.remove("opac");
  projetThree.classList.remove("opac");
  projetFour.classList.remove("opac");
});

projetTwo.addEventListener("mouseenter", function () {
  projetOne.classList.add("opac");
  projetThree.classList.add("opac");
  projetFour.classList.add("opac");
});
projetTwo.addEventListener("mouseleave", function () {
  projetOne.classList.remove("opac");
  projetThree.classList.remove("opac");
  projetFour.classList.remove("opac");
});

projetThree.addEventListener("mouseenter", function () {
  projetOne.classList.add("opac");
  projetTwo.classList.add("opac");
  projetFour.classList.add("opac");
});
projetThree.addEventListener("mouseleave", function () {
  projetOne.classList.remove("opac");
  projetTwo.classList.remove("opac");
  projetFour.classList.remove("opac");
});
projetFour.addEventListener("mouseenter", function () {
  projetOne.classList.add("opac");
  projetTwo.classList.add("opac");
  projetThree.classList.add("opac");
});
projetFour.addEventListener("mouseleave", function () {
  projetOne.classList.remove("opac");
  projetTwo.classList.remove("opac");
  projetThree.classList.remove("opac");
});

// ****modale****
const btnPop = document.querySelector(".btn-modalPop");
const btnAllo = document.querySelector(".btn-modalAllo");
const btnCrea = document.querySelector(".btn-modalCrea");
const btnBoots = document.querySelector(".btn-modalBoots");
const modalPop = document.querySelector(".modalPop");
const modalAllo = document.querySelector(".modalAllo");
const modalCrea = document.querySelector(".modalCrea");
const modalBoots = document.querySelector(".modalBoots");
const allModal = document.querySelectorAll(".modal");
const closeModalePop = document.querySelector(".closePop");
const closeModaleAllo = document.querySelector(".closeAllo");
const closeModaleCrea = document.querySelector(".closeCrea");
const closeModaleBoots = document.querySelector(".closeBoots");
const containerProject = document.querySelector(".containerProject");
const dekstopNavModale = document.querySelector("header");

closeModalePop.addEventListener("click", function () {
  modalPop.classList.toggle("flex");
  modalPop.classList.toggle("displayNone");
  containerProject.classList.remove("scaleTranslate");
  dekstopNavModale.classList.remove("dekstopNavModale");
});
closeModaleAllo.addEventListener("click", function () {
  modalAllo.classList.toggle("flex");
  modalAllo.classList.toggle("displayNone");
  containerProject.classList.remove("scaleTranslate");
  dekstopNavModale.classList.remove("dekstopNavModale");
});
closeModaleCrea.addEventListener("click", function () {
  modalCrea.classList.toggle("flex");
  modalCrea.classList.toggle("displayNone");
  containerProject.classList.remove("scaleTranslate");
  dekstopNavModale.classList.remove("dekstopNavModale");
});
closeModaleBoots.addEventListener("click", function () {
  modalBoots.classList.toggle("flex");
  modalBoots.classList.toggle("displayNone");
  containerProject.classList.remove("scaleTranslate");
  dekstopNavModale.classList.remove("dekstopNavModale");
});

btnPop.addEventListener("click", () => {
  modalPop.classList.toggle("flex");
  modalPop.classList.toggle("displayNone");
  modalPop.classList.add("opacfull");
  modalCrea.classList.add("displayNone");
  modalAllo.classList.add("displayNone");
  modalCrea.classList.remove("flex");
  modalAllo.classList.remove("flex");
  modalBoots.classList.add("displayNone");
  modalBoots.classList.remove("flex");
  if (modalPop.classList.contains("flex") === true) {
    containerProject.classList.add("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNav");
    dekstopNavModale.classList.add("dekstopNavModale");
  } else {
    containerProject.classList.remove("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNavModale");
    dekstopNavModale.classList.add("dekstopNav");
  }
  setTimeout(function () {
    modalPop.classList.remove("opacfull");
  }, 500);
});

btnAllo.addEventListener("click", function () {
  modalAllo.classList.toggle("flex");
  modalAllo.classList.toggle("displayNone");
  modalAllo.classList.add("opacfull");
  modalPop.classList.add("displayNone");
  modalCrea.classList.add("displayNone");
  modalPop.classList.remove("flex");
  modalCrea.classList.remove("flex");
  modalBoots.classList.add("displayNone");
  modalBoots.classList.remove("flex");
  if (modalAllo.classList.contains("flex") === true) {
    containerProject.classList.add("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNav");
    dekstopNavModale.classList.add("dekstopNavModale");
  } else {
    containerProject.classList.remove("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNavModale");
    dekstopNavModale.classList.add("dekstopNav");
  }
  setTimeout(function () {
    modalAllo.classList.remove("opacfull");
  }, 500);
});
btnCrea.addEventListener("click", function () {
  modalCrea.classList.toggle("flex");
  modalCrea.classList.toggle("displayNone");
  modalCrea.classList.add("opacfull");
  modalPop.classList.add("displayNone");
  modalAllo.classList.add("displayNone");
  modalPop.classList.remove("flex");
  modalAllo.classList.remove("flex");
  modalBoots.classList.add("displayNone");
  modalBoots.classList.remove("flex");
  if (modalCrea.classList.contains("flex") === true) {
    containerProject.classList.add("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNav");
    dekstopNavModale.classList.add("dekstopNavModale");
  } else {
    containerProject.classList.remove("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNavModale");
    dekstopNavModale.classList.add("dekstopNav");
  }
  setTimeout(function () {
    modalCrea.classList.remove("opacfull");
  }, 500);
});
btnBoots.addEventListener("click", function () {
  modalAllo.classList.remove("flex");
  modalAllo.classList.add("displayNone");
  modalPop.classList.add("displayNone");
  modalCrea.classList.add("displayNone");
  modalPop.classList.remove("flex");
  modalCrea.classList.remove("flex");
  modalBoots.classList.toggle("flex");
  modalBoots.classList.toggle("displayNone");
  modalBoots.classList.add("opacfull");
  if (modalBoots.classList.contains("flex") === true) {
    containerProject.classList.add("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNav");
    dekstopNavModale.classList.add("dekstopNavModale");
  } else {
    containerProject.classList.remove("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNavModale");
    dekstopNavModale.classList.add("dekstopNav");
  }
  setTimeout(function () {
    modalBoots.classList.remove("opacfull");
  }, 500);
});

// ****** sliders*******
var slider = tns({
  container: ".my-sliderPop",
  items: 1,
  gutter: 5,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  controlsText: ["⬅️", "➡️"],
  controlsPosition: "bottom",
  loop: true,
});
var slider = tns({
  container: ".my-sliderAllo",
  items: 1,
  gutter: 5,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  controlsText: ["⬅️", "➡️"],
  controlsPosition: "bottom",
  loop: true,
});
var slider = tns({
  container: ".my-sliderCreat",
  items: 1,
  gutter: 5,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  controlsText: ["⬅️", "➡️"],
  controlsPosition: "bottom",
  loop: true,
});
var slider = tns({
  container: ".my-sliderBoots",
  items: 1,
  gutter: 5,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  controlsText: ["⬅️", "➡️"],
  controlsPosition: "bottom",
  loop: true,
});

//**** */ effets 3d ****
var ztxt = new Ztextify(".name", {
  depth: "3px",
  layers: 8,
  event: "pointer",
  eventRotation: "10deg",
});

// *************** About ****************************

let about = document.querySelector(".containerAbout");
let btnAbout = document.querySelector(".btnAbout");
let header = document.querySelector("header");
let quiBtn = document.querySelector(".qui");
let skillBtn = document.querySelector(".skills");
let expBtn = document.querySelector(".exp");
let containerQui = document.querySelector(".containerQui");
let containerSkill = document.querySelector(".containerSkills");
let containerExp = document.querySelector(".containerMyExp");

btnAbout.addEventListener("click", function () {
  about.classList.toggle("displayNone");
  header.classList.remove("dekstopNav");
  header.classList.toggle("popNav");
  for (let i = 0; i < allModal.length; i++) {
    allModal[i].classList.add("displayNone");
    allModal[i].classList.remove("flex");
    header.classList.add("popNav");
  }
});

quiBtn.addEventListener("click", function () {
  containerQui.classList.toggle("displayNone");
  containerQui.classList.toggle("flex");
  containerSkill.classList.add("displayNone");
  containerExp.classList.add("displayNone");
  header.classList.remove("popNav");
  header.classList.add("dekstopNav");
});

skillBtn.addEventListener("click", function () {
  containerSkill.classList.toggle("displayNone");
  containerSkill.classList.toggle("flex");
  containerQui.classList.add("displayNone");
  header.classList.remove("popNav");
  header.classList.add("dekstopNav");
});

expBtn.addEventListener("click", function () {
  containerExp.classList.toggle("displayNone");
  containerExp.classList.toggle("flex");
  containerSkill.classList.add("displayNone");
  containerQui.classList.add("displayNone");
  header.classList.remove("popNav");
  header.classList.add("dekstopNav");
});
