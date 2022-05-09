// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.querySelector("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//Readmore button
const more = document.querySelectorAll(".more");

//Looping through button node list
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}

//Recent news
const seeAll = document.querySelector(".see-all");
const newsSection = document.querySelector(".recent-news");

seeAll.addEventListener("click", function () {
  seeAll.classList.toggle("active");
  if (seeAll.textContent === "See All" && seeAll.classList.contains("active")) {
    seeAll.textContent = "See Less";
  } else {
    seeAll.textContent = "See All";
  }
  newsSection.classList.toggle("active");
});

//NavLink Active
const navLink = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    const currentlySelectedElem = document.querySelector(
      ".nav-link.active-link"
    );
    if (currentlySelectedElem) {
      currentlySelectedElem.classList.remove("active-link");
    }
    navLink[i].classList.add("active-link");
  });
}

// var today = (new Date()).toString().split(' ').splice(1,3).join(' ');

// let date = document.querySelectorAll('.date');

// for (let i = 0; i < date.length; i++) {
//     date[i].textContent = today;

// }

//modals

const circularModal = document.getElementsByClassName("circular-modal");
const printDoc = document.querySelector(".print-doc");
const overlay = document.querySelector(".overlay");
const circularCard = document.querySelectorAll(".circular-card");

function closeModal() {
  for (let i = 0; i < circularModal.length; i++) {
    circularModal[i].classList.add("hidden");
    overlay.classList.add("hidden");
    printDoc.classList.add("hidden");
  }
}

for (let i = 0; i < circularCard.length; i++) {
  circularCard[i].addEventListener("click", function openModal() {
    circularModal[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
    printDoc.classList.remove("hidden");
  });
}

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  for (let i = 0; i < circularModal.length; i++) {
    if (e.key === "Escape" && !circularModal[i].classList.contains("hidden")) {
      closeModal();
    }
  }
});

//REMOVE STICKY ON SMALLER SCREENS

// function checkScreen() {
//   if (window.innerWidth < 768) {
//   }
// }
