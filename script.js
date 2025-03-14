const btns = document.querySelectorAll(".projectbtn");
const copyrightYear = document.querySelector('.copyright-year')


//project links--------
const projectLink = [
  "https://apnamanuu-education.netlify.app/",
  "https://primenests.onrender.com/listing",
  "https://apnacollegeclone-by-samirkhan.netlify.app/",
  "https://aman-educational-point-2.vercel.app/",
  "https://googleplaystoreclone.netlify.app/",
  "https://eidmubark-whishes.netlify.app/",

];

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    window.location.href = projectLink[i];
    console.log("clicked");
  });
});



//copy right year
let date = new Date();
let year = date.getFullYear();
copyrightYear.textContent = year;



//auto typing Effect-----------

const names = document.querySelector(".name");
const developerNames = ["Web Developer", "Video_Editor", "Youtuber"];

let nameIndex = 0;
let charIndex = 0;
let reverse = false;
let intervalId = setInterval(() => {
  if (!reverse) {
    names.textContent += developerNames[nameIndex][charIndex];
    charIndex++;
    if (charIndex === developerNames[nameIndex].length) {
      reverse = true;
    }
  } else {
    names.textContent = names.textContent.slice(0, -1);
    if (names.textContent === '') {
      reverse = false;
      charIndex = 0;
      nameIndex = (nameIndex + 1) % developerNames.length;
    }
  }
  if (nameIndex === developerNames.length && names.textContent === '') {
    clearInterval(intervalId);
  }
}, 200);



//responsive page ---------

const ham = document.querySelector('.hamburger');
const cut = document.querySelector('.cut');
const navul = document.querySelector('ul');



ham.addEventListener('click', () => {
  navul.classList.add('responsive');
  gsapanimation2()

})

cut.addEventListener('click', () => {
  navul.classList.remove('responsive');

})


//mouse hover Effect-----------


const mousemover = document.querySelector('.mousemover');
const mousesmall = document.querySelector('.smallmouse');
const mousesmall3 = document.querySelector('.smallmouse3');
const smallmouse4 = document.querySelector('.smallmouse4');



function mousemove(element) {
  document.body.addEventListener("mousemove", (event) => {
    element.style.left = event.x + "px"
    element.style.top = event.y + "px"

  });
}

mousemove(mousemover)
mousemove(mousesmall)
mousemove(mousesmall3)
mousemove(smallmouse4)




// dark mode LIght mode 


const modeSvg = document.querySelector('.sun svg'); // Selecting the sun SVG element
const moon = document.querySelector('.moon svg'); // Selecting the moon SVG element

// Set a default theme on load
document.body.classList.add('darkcolorMode');

// Retrieve the theme mode from Local Storage and parse it; default to true (dark mode)
let mode = JSON.parse(localStorage.getItem('lightmodeon')) || false;



// Function to apply light mode
function lightmode() {
  document.body.classList.remove('darkcolorMode');
  document.body.classList.add('lightmode');
  modeSvg.style.display = 'block';
  moon.style.display = 'none';
  mode = true;
  localStorage.setItem('lightmodeon', JSON.stringify(mode)); // Save the light mode state as a string in Local Storage
}

// Function to apply dark mode
function darkmode() {
  document.body.classList.add('darkcolorMode');
  document.body.classList.remove('lightmode');
  modeSvg.style.display = 'none';
  moon.style.display = 'block';
  mode = false;
  localStorage.setItem('lightmodeon', JSON.stringify(mode)); // Save the dark mode state as a string in Local Storage
}

// Event listeners should pass the function references, not invoke them
moon.addEventListener('click', lightmode);
modeSvg.addEventListener('click', darkmode);

// Apply the correct mode based on the saved value
if (mode) {
  lightmode(); // If mode is true, set light mode
} else {
  darkmode(); // If mode is false, set dark mode
}





//set GSAP Animation 

gsap.from(".text p", {    //from property are working final to inital 
  opacity: 0,
  scale: 1.2,
  stagger: 0.3,
  duration: 0.8,
  delay: 0.4,
  y: -40,

});


let time = gsap.timeline()

let text = document.querySelector(".logo");
let breakText = text.innerText.split("")
let clutter = '';


var textHalf = Math.floor(text.innerText.length / 2) - 2
function TextBreak() {
  breakText.forEach((element, idx) => {
    if (idx < textHalf) {
      clutter += `<span class= "a"> ${element}</span>`
    }
    else {
      clutter += `<span class= "b"> ${element}</span>`
    }

  });
  text.innerHTML = clutter;
}

TextBreak()

setTimeout(() => {
  console.log('hii')
}, 1000)






gsap.from(".logo .a", {

  y: 50,
  color: 'blue',
  duration: 0.5,
  delay: 1,
  stagger: 0.7,
  opacity: 0,
  color: 'green',


});


gsap.from(".logo .b", {

  y: 150,
  color: 'blue',
  duration: 1.5,
  delay: 1,
  stagger: -0.3,
  opacity: 0,
  color: 'green',


});








function gsapanimation2() {
  gsap.from("ul li", {
    duration: 0.6,
    y: -40,
    stagger: 0.2,
    opacity: 0,

  })

}
gsapanimation2()





