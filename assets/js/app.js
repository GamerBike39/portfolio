let projetOne = document.querySelector(".containerProject > h3:nth-child(1)");
let projetTwo = document.querySelector(".containerProject > h3:nth-child(2)");
let projetThree = document.querySelector(".containerProject > h3:nth-child(3)");

// ********* mouse enter and leave events ***********

projetOne.addEventListener("mouseenter", function () {
  projetTwo.classList.add("opac");
  projetThree.classList.add("opac");
});

projetOne.addEventListener("mouseleave", function () {
  projetTwo.classList.remove("opac");
  projetThree.classList.remove("opac");
});

projetTwo.addEventListener("mouseenter", function () {
  projetOne.classList.add("opac");
  projetThree.classList.add("opac");
});
projetTwo.addEventListener("mouseleave", function () {
  projetOne.classList.remove("opac");
  projetThree.classList.remove("opac");
});

projetThree.addEventListener("mouseenter", function () {
  projetOne.classList.add("opac");
  projetTwo.classList.add("opac");
});
projetThree.addEventListener("mouseleave", function () {
  projetOne.classList.remove("opac");
  projetTwo.classList.remove("opac");
});

// ****modale****

const btnPop = document.querySelector(".btn-modalPop");
const btnAllo = document.querySelector(".btn-modalAllo");
const btnCrea = document.querySelector(".btn-modalCrea");
const modalPop = document.querySelector(".modalPop");
const modalAllo = document.querySelector(".modalAllo");
const modalCrea = document.querySelector(".modalCrea");
const closeModalePop = document.querySelector(".closePop");
const closeModaleAllo = document.querySelector(".closeAllo");
const closeModaleCrea = document.querySelector(".closeCrea");

btnPop.addEventListener("click", function () {
  modalPop.classList.toggle("flex");
  modalPop.classList.toggle("displayNone");
});
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
btnAllo.addEventListener("click", function () {
  modalAllo.classList.toggle("flex");
  modalAllo.classList.toggle("displayNone");
});
btnCrea.addEventListener("click", function () {
  modalCrea.classList.toggle("flex");
  modalCrea.classList.toggle("displayNone");
});
