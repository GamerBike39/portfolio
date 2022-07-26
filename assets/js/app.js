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
  dekstopNavModale.classList.remove("scaleTranslate");
});
closeModaleAllo.addEventListener("click", function () {
  modalAllo.classList.toggle("flex");
  modalAllo.classList.toggle("displayNone");
  containerProject.classList.remove("scaleTranslate");
  dekstopNavModale.classList.remove("dekstopNavModale");
  dekstopNavModale.classList.remove("scaleTranslate");
});
closeModaleCrea.addEventListener("click", function () {
  modalCrea.classList.toggle("flex");
  modalCrea.classList.toggle("displayNone");
  containerProject.classList.remove("scaleTranslate");
  dekstopNavModale.classList.remove("dekstopNavModale");
  dekstopNavModale.classList.remove("scaleTranslate");
});
closeModaleBoots.addEventListener("click", function () {
  modalBoots.classList.toggle("flex");
  modalBoots.classList.toggle("displayNone");
  containerProject.classList.remove("scaleTranslate");
  dekstopNavModale.classList.remove("dekstopNavModale");
  dekstopNavModale.classList.remove("scaleTranslate");
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
    dekstopNavModale.classList.add("scaleTranslate");
  } else {
    containerProject.classList.remove("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNavModale");
    dekstopNavModale.classList.add("dekstopNav");
    dekstopNavModale.classList.remove("scaleTranslate");
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
    dekstopNavModale.classList.add("scaleTranslate");
  } else {
    containerProject.classList.remove("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNavModale");
    dekstopNavModale.classList.add("dekstopNav");
    dekstopNavModale.classList.remove("scaleTranslate");
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
    dekstopNavModale.classList.add("scaleTranslate");
  } else {
    containerProject.classList.remove("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNavModale");
    dekstopNavModale.classList.add("dekstopNav");
    dekstopNavModale.classList.remove("scaleTranslate");
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
    dekstopNavModale.classList.add("scaleTranslate");
  } else {
    containerProject.classList.remove("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNavModale");
    dekstopNavModale.classList.add("dekstopNav");
    dekstopNavModale.classList.remove("scaleTranslate");
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
  controlsText: ["⬅", "➡"],
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
  controlsText: ["⬅", "➡"],
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
  controlsText: ["⬅", "➡"],
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
  controlsText: ["⬅", "➡"],
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
let btnHobbie = document.querySelector(".hobbies");
let containerQui = document.querySelector(".containerQui");
let containerSkill = document.querySelector(".containerSkills");
let containerExp = document.querySelector(".containerMyExp");
let containerHobbie = document.querySelector(".containerHobbies");

btnAbout.addEventListener("click", function () {
  about.classList.toggle("displayNone");
  header.classList.remove("dekstopNav");
  header.classList.toggle("popNav");
  for (let i = 0; i < allModal.length; i++) {
    allModal[i].classList.add("displayNone");
    allModal[i].classList.remove("flex");
    header.classList.add("popNav");
    header.classList.remove("scaleTranslate");
  }
});

quiBtn.addEventListener("click", function () {
  containerQui.classList.toggle("displayNone");
  // containerQui.classList.toggle("flex");
  containerSkill.classList.add("displayNone");
  containerExp.classList.add("displayNone");
  containerHobbie.classList.add("displayNone");
  header.classList.remove("popNav");
  header.classList.add("dekstopNav");
  header.classList.remove("scaleTranslate");
});

skillBtn.addEventListener("click", function () {
  containerSkill.classList.toggle("displayNone");
  // containerSkill.classList.toggle("flex");
  containerQui.classList.add("displayNone");
  containerExp.classList.add("displayNone");
  containerHobbie.classList.add("displayNone");
  header.classList.remove("popNav");
  header.classList.add("dekstopNav");
  header.classList.remove("scaleTranslate");
});

expBtn.addEventListener("click", function () {
  containerExp.classList.toggle("displayNone");
  // containerExp.classList.toggle("flex");
  containerSkill.classList.add("displayNone");
  containerQui.classList.add("displayNone");
  containerHobbie.classList.add("displayNone");
  header.classList.remove("popNav");
  header.classList.add("dekstopNav");
  header.classList.remove("scaleTranslate");
});

btnHobbie.addEventListener("click", function () {
  containerHobbie.classList.toggle("displayNone");
  // containerHobbie.classList.toggle("flex");
  containerExp.classList.add("displayNone");
  containerSkill.classList.add("displayNone");
  containerQui.classList.add("displayNone");
  header.classList.remove("popNav");
  header.classList.add("dekstopNav");
  header.classList.remove("scaleTranslate");
});

new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 400) {
    containerHobbie.classList.remove("flex");
    containerExp.classList.remove("flex");
    containerSkill.classList.remove("flex");
    containerQui.classList.remove("flex");
    btnPop.addEventListener("click", () => {
      modalPop.classList.add("opacfull");
      header.classList.add("displayNone");
      containerProject.classList.add("displayNone");
      setTimeout(function () {
        modalPop.classList.remove("opacfull");
      }, 500);
    });

    btnAllo.addEventListener("click", function () {
      modalAllo.classList.add("opacfull");
      header.classList.add("displayNone");
      containerProject.classList.add("displayNone");
      setTimeout(function () {
        modalAllo.classList.remove("opacfull");
      }, 500);
    });
    btnCrea.addEventListener("click", function () {
      modalCrea.classList.add("opacfull");
      header.classList.add("displayNone");
      containerProject.classList.add("displayNone");
      setTimeout(function () {
        modalCrea.classList.remove("opacfull");
      }, 500);
    });
    btnBoots.addEventListener("click", function () {
      modalBoots.classList.add("opacfull");
      header.classList.add("displayNone");
      containerProject.classList.add("displayNone");
      setTimeout(function () {
        modalBoots.classList.remove("opacfull");
      }, 500);
    });
    closeModalePop.addEventListener("click", function () {
      header.classList.remove("displayNone");
      containerProject.classList.remove("displayNone");
    });
    closeModaleAllo.addEventListener("click", function () {
      header.classList.remove("displayNone");
      containerProject.classList.remove("displayNone");
    });
    closeModaleCrea.addEventListener("click", function () {
      header.classList.remove("displayNone");
      containerProject.classList.remove("displayNone");
    });
    closeModaleBoots.addEventListener("click", function () {
      header.classList.remove("displayNone");
      containerProject.classList.remove("displayNone");
    });
  } else {
    containerQui.classList.add("flex");
    containerSkill.classList.add("flex");
    containerExp.classList.add("flex");
    containerHobbie.classList.add("flex");
  }
}).observe(document.body);

// curseur custom
var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${
    e.clientY
  }px - 50%), 0) rotate(${x + y}deg)`;
  cursor.style.animation = " animation: rotate 0.5s infinite ;";
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

// rubrique contact form
const contactBtn = document.querySelector(".contactBtn");
const contactForm = document.querySelector(".containerContact");

  contactBtn.addEventListener("click", function () {
    contactForm.classList.toggle("displayNone");
  });