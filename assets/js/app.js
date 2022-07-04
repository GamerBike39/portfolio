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
const closeModalePop = document.querySelector(".closePop");
const closeModaleAllo = document.querySelector(".closeAllo");
const closeModaleCrea = document.querySelector(".closeCrea");
const closeModaleBoots = document.querySelector(".closeBoots");

closeModalePop.addEventListener("click", function () {
  modalPop.classList.toggle("flex");
  modalPop.classList.toggle("displayNone");
});
closeModaleAllo.addEventListener("click", function () {
  modalAllo.classList.toggle("flex");
  modalAllo.classList.toggle("displayNone");
});
closeModaleCrea.addEventListener("click", function () {
  modalCrea.classList.toggle("flex");
  modalCrea.classList.toggle("displayNone");
});
closeModaleBoots.addEventListener("click", function () {
  modalBoots.classList.toggle("flex");
  modalBoots.classList.toggle("displayNone");
});

btnPop.addEventListener("click", () => {
  modalPop.classList.toggle("flex");
  modalPop.classList.toggle("displayNone");
  modalCrea.classList.add("displayNone");
  modalAllo.classList.add("displayNone");
  modalCrea.classList.remove("flex");
  modalAllo.classList.remove("flex");
  modalBoots.classList.add("displayNone");
  modalBoots.classList.remove("flex");
});

btnAllo.addEventListener("click", function () {
  modalAllo.classList.toggle("flex");
  modalAllo.classList.toggle("displayNone");
  modalPop.classList.add("displayNone");
  modalCrea.classList.add("displayNone");
  modalPop.classList.remove("flex");
  modalCrea.classList.remove("flex");
  modalBoots.classList.add("displayNone");
  modalBoots.classList.remove("flex");
});
btnCrea.addEventListener("click", function () {
  modalCrea.classList.toggle("flex");
  modalCrea.classList.toggle("displayNone");
  modalPop.classList.add("displayNone");
  modalAllo.classList.add("displayNone");
  modalPop.classList.remove("flex");
  modalAllo.classList.remove("flex");
  modalBoots.classList.add("displayNone");
  modalBoots.classList.remove("flex");
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
});

var ztxt = new Ztextify(".name", {
  depth: "3px",
  layers: 8,
  event: "pointer",
  eventRotation: "45deg",
});
