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

const closeModale = function () {
  closeModalePop.addEventListener("click", function () {
    modal.classList.toggle("displayNone");
    containerProject.classList.remove("scaleTranslate");
    modalBtn.forEach((item) => {
      item.classList.remove("opac", "active");
    })
    dekstopNavModale.classList.remove("dekstopNavModale", "scaleTranslate");
  })
};
closeModale();

//**** */ effets 3d ****
const ztxt = new Ztextify(".name", {
  depth: "5px",
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
  header.classList.remove("dekstopNav", "scaleTranslate");
  // header.classList.toggle("popNav");
  header.classList.add("popNav");
  modal.classList.add("displayNone");
  containerProject.classList.remove("scaleTranslate");
  modalBtn.forEach((item) => {
    item.classList.remove("opac", "active");
  })
  dekstopNavModale.classList.remove("dekstopNavModale", "scaleTranslate");
})


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

// ******** responsive *******************
new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 400) {
    containerHobbie.classList.remove("flex");
    containerExp.classList.remove("flex");
    containerSkill.classList.remove("flex");
    containerQui.classList.remove("flex");
    return;
  }
  if (modal.classList.contains("flex") === true && entries[0].contentRect.width <= 400) {
    containerProject.classList.add("displayNone");
    dekstopNavModale.classList.add("displayNone");
  } else {
    containerProject.classList.remove("displayNone");
    dekstopNavModale.classList.remove("displayNone");
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
// cursorTuning();

// rubrique contact form
const contactBtn = document.querySelector(".contactBtn");
const contactForm = document.querySelector(".containerContact");

contactBtn.addEventListener("click", function () {
  contactForm.classList.remove("displayNone");
  modal.classList.add("displayNone");
  containerProject.classList.remove("scaleTranslate");
  modalBtn.forEach((item) => {
    item.classList.remove("opac", "active");
  })
  dekstopNavModale.classList.remove("dekstopNavModale", "scaleTranslate");
});

// *****caroussele******
// const caroussele = () => {
//   let slider = tns({
//     container: ".my-slider",
//     items: 1,
//     speed: 10,
//     controlsText: [" <", "> "],
//     controlsPosition: "center",
//     loop: true,
//     swipeAngle: false,
//     mouseDrag: false,
//   });
// }

// ***** anim btn modal ****
const modalBtnActive = () => {
  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener("click", function () {
      for (let j = 0; j < modalBtn.length; j++) {
        modalBtn[j].classList.add("opac");
      }
      modalBtn[i].classList.remove("opac");
    });
  }
}
modalBtnActive();
// *****************************************
// ******* construction des modales projets depuis JSON **************
async function getProject() {
  const response = await fetch("assets/json/project.json");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    modalBtn[i].addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      containerProject.classList.add("scaleTranslate");
      dekstopNavModale.classList.add("dekstopNavModale", "scaleTranslate");
      if (data[i].title === modalBtn[i].textContent) {
        modal.classList.add("flex");
        modal.classList.remove("displayNone");
        modalTitle.innerHTML = data[i].title;
        modalImg.innerHTML = `<div class="swiper-wrapper">${data[i].img}</div>`;
        const swiper = new Swiper(".modalImg", {
          spaceBetween: 100,
        });
        modalDesc[0].innerHTML = data[i].desc;
        modalGit.innerHTML = `<a class='learnMore' href="${data[i].github}" target='_blank'><svg
        xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
        <path
            d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' /></a>`
        modalLink.href = data[i].link;
        caroussele();
        modalBtnActive();
      }
    });
  }
}
getProject();


// *****animation background****
const deg = (a) => Math.PI / 180 * a
const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1))
const opt = {
  particles: window.width / 500 ? 1000 : 500,
  noiseScale: 0.009,
  angle: Math.PI / 180 * -90,
  h1: rand(0, 360),
  h2: rand(0, 360),
  s1: rand(20, 90),
  s2: rand(20, 90),
  l1: rand(30, 80),
  l2: rand(30, 80),
  strokeWeight: 1.2,
  tail: 82,
}
const Particles = []
let time = 0
document.body.addEventListener('click', () => {
  opt.h1 = rand(0, 360)
  opt.h2 = rand(0, 360)
  opt.s1 = rand(20, 90)
  opt.s2 = rand(20, 90)
  opt.l1 = rand(30, 80)
  opt.l2 = rand(30, 80)
  opt.angle += deg(random(60, 60)) * (Math.random() > .5 ? 1 : -1)

  for (let p of Particles) {
    p.randomize()
  }
})


/*--------------------
Particle
--------------------*/
class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.lx = x
    this.ly = y
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0
    this.hueSemen = Math.random()
    this.hue = this.hueSemen > .5 ? 20 + opt.h1 : 20 + opt.h2
    this.sat = this.hueSemen > .5 ? opt.s1 : opt.s2
    this.light = this.hueSemen > .5 ? opt.l1 : opt.l2
    this.maxSpeed = this.hueSemen > .5 ? 3 : 2
  }

  randomize() {
    this.hueSemen = Math.random()
    this.hue = this.hueSemen > .5 ? 20 + opt.h1 : 20 + opt.h2
    this.sat = this.hueSemen > .5 ? opt.s1 : opt.s2
    this.light = this.hueSemen > .5 ? opt.l1 : opt.l2
    this.maxSpeed = this.hueSemen > .5 ? 3 : 2
  }

  update() {
    this.follow()

    this.vx += this.ax
    this.vy += this.ay

    var p = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
    var a = Math.atan2(this.vy, this.vx)
    var m = Math.min(this.maxSpeed, p)
    this.vx = Math.cos(a) * m
    this.vy = Math.sin(a) * m

    this.x += this.vx
    this.y += this.vy
    this.ax = 0
    this.ay = 0

    this.edges()
  }

  follow() {
    let angle = (noise(this.x * opt.noiseScale, this.y * opt.noiseScale, time * opt.noiseScale)) * Math.PI * 0.5 + opt.angle

    this.ax += Math.cos(angle)
    this.ay += Math.sin(angle)

  }

  updatePrev() {
    this.lx = this.x
    this.ly = this.y
  }

  edges() {
    if (this.x < 0) {
      this.x = width
      this.updatePrev()
    }
    if (this.x > width) {
      this.x = 0
      this.updatePrev()
    }
    if (this.y < 0) {
      this.y = height
      this.updatePrev()
    }
    if (this.y > height) {
      this.y = 0
      this.updatePrev()
    }
  }

  render() {
    stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`)
    line(this.x, this.y, this.lx, this.ly)
    this.updatePrev()
  }
}


/*--------------------
Setup
--------------------*/
function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < opt.particles; i++) {
    Particles.push(new Particle(Math.random() * width, Math.random() * height))
  }
  strokeWeight(opt.strokeWeight)
}


/*--------------------
Draw
--------------------*/
function draw() {
  time++
  background(0, 100 - opt.tail)

  for (let p of Particles) {
    p.update()
    p.render()
  }
}


/*--------------------
Resize
--------------------*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}