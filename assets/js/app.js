const projetOne = document.querySelector(".containerProject > h3:nth-child(1)");
const projetTwo = document.querySelector(".containerProject > h3:nth-child(2)");
const projetThree = document.querySelector(".containerProject > h3:nth-child(3)");
const projetFour = document.querySelector(".containerProject > h3:nth-child(4)");
// ****modale****
const btnPop = document.querySelector(".btn-modalPop");
const modalBoots = document.querySelector(".modalBoots");
const modal = document.querySelector(".modal");
const closeModalePop = document.querySelector(".closePop");
const containerProject = document.querySelector(".containerProject");
const dekstopNavModale = document.querySelector("header");
// modal à remplir avec json
const modalTitle = document.querySelector(".modalTitle");
const modalImg = document.querySelector(".modalImg");
const modalDesc = document.querySelectorAll(".modalDesc");
const modalGit = document.querySelector(".modalGit")
const modalLink = document.querySelector(".modalLink");
const modalBtn = document.querySelectorAll(".containerProject > h3");
// ********* mouse enter and leave events ***********

// const animModalBtn = () => {
//   modalBtn.forEach((item) => {
//     item.addEventListener("mouseover", () => {
//       item.classList.add("opac");
//     })
//     item.addEventListener("mouseleave", () => {
//       item.classList.remove("opac");
//     })
//   })
// }
// animModalBtn();



// projetOne.addEventListener("mouseenter", function () {
//   projetTwo.classList.add("opac");
//   projetThree.classList.add("opac");
//   projetFour.classList.add("opac");
// });
// projetOne.addEventListener("mouseleave", function () {
//   projetTwo.classList.remove("opac");
//   projetThree.classList.remove("opac");
//   projetFour.classList.remove("opac");
// });
// projetTwo.addEventListener("mouseenter", function () {
//   projetOne.classList.add("opac");
//   projetThree.classList.add("opac");
//   projetFour.classList.add("opac");
// });
// projetTwo.addEventListener("mouseleave", function () {
//   projetOne.classList.remove("opac");
//   projetThree.classList.remove("opac");
//   projetFour.classList.remove("opac");
// });
// projetThree.addEventListener("mouseenter", function () {
//   projetOne.classList.add("opac");
//   projetTwo.classList.add("opac");
//   projetFour.classList.add("opac");
// });
// projetThree.addEventListener("mouseleave", function () {
//   projetOne.classList.remove("opac");
//   projetTwo.classList.remove("opac");
//   projetFour.classList.remove("opac");
// });
// projetFour.addEventListener("mouseenter", function () {
//   projetOne.classList.add("opac");
//   projetTwo.classList.add("opac");
//   projetThree.classList.add("opac");
// });
// projetFour.addEventListener("mouseleave", function () {
//   projetOne.classList.remove("opac");
//   projetTwo.classList.remove("opac");
//   projetThree.classList.remove("opac");
// });


const closeModale = function () {
  closeModalePop.addEventListener("click", function () {
    modal.classList.toggle("flex");
    modal.classList.toggle("displayNone");
    containerProject.classList.remove("scaleTranslate");
    dekstopNavModale.classList.remove("dekstopNavModale");
    dekstopNavModale.classList.remove("scaleTranslate");
  })
};
closeModale();

//**** */ effets 3d ****
const ztxt = new Ztextify(".name", {
  depth: "3px",
  layers: 8,
  event: "pointer",
  eventRotation: "10deg",
});

// *************** About ****************************

const about = document.querySelector(".containerAbout");
const btnAbout = document.querySelector(".btnAbout");
const header = document.querySelector("header");
const quiBtn = document.querySelector(".qui");
const skillBtn = document.querySelector(".skills");
const expBtn = document.querySelector(".exp");
const btnHobbie = document.querySelector(".hobbies");
const containerQui = document.querySelector(".containerQui");
const containerSkill = document.querySelector(".containerSkills");
const containerExp = document.querySelector(".containerMyExp");
const containerHobbie = document.querySelector(".containerHobbies");
const home = document.querySelector(".home");

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

const cursorTuning = () => {
  const cursor = document.querySelector(".cursor");
  const cursorinner = document.querySelector(".cursor2");
  const a = document.querySelectorAll("a");

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${
    e.clientY
  }px - 50%), 0) rotate(${x + y}deg)`;
    cursor.style.animation = " animation: rotate 0.5s infinite ;";
  });

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
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
}
cursorTuning();

// rubrique contact form
const contactBtn = document.querySelector(".contactBtn");
const contactForm = document.querySelector(".containerContact");

contactBtn.addEventListener("click", function () {
  contactForm.classList.toggle("displayNone");
});

function closeModalOpen() {
  if (modal.classList.contains("flex")) {
    home.classList.add("displayNone");
  } else {
    home.classList.remove("displayNone");
  }
}
closeModalOpen();


// *****caroussele******
const caroussele = () => {
  let slider = tns({
    container: ".my-slider",
    items: 1,
    gutter: 5,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsText: ["<", ">"],
    controlsPosition: "bottom",
    loop: true,
  });
}



// ******* construction des modales projets depuis JSON **************
async function getProject() {
  const response = await fetch("assets/json/project.json");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    // modalBtn[i].innerHTML = data[i].title;
    modalBtn[i].addEventListener("click", function () {
      containerProject.classList.add("scaleTranslate");
      dekstopNavModale.classList.add("dekstopNavModale", "scaleTranslate");
      if (data[i].title === modalBtn[i].textContent) {
        modal.classList.add("flex");
        modal.classList.remove("displayNone");
        modalTitle.innerHTML = data[i].title;
        modalImg.innerHTML = `  <div class="my-slider">
        ${data[i].img}
    </div>`
        modalDesc[0].innerHTML = data[i].desc;
        // modalGit.innerHTML = data[i].git;
        modalGit.innerHTML = `<a class='learnMore' href="${data[i].github}" target='_blank'><svg
        xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
        <path
            d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' /></a>`
        modalLink.href = data[i].link;
        caroussele();
        return;
      }
    });
  }
}
getProject();