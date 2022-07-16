window.addEventListener("load", function () {
  // When the user scrolls the page, execute  scrollFunction
  window.onscroll = function () {
    scrollFunction();
  };

  // Get the navbar
  let navbar = document.querySelector("nav");

  // Get the offset position of the navbar
  let sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function scrollFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  //stop fixed navigation covering the content when scrolling

  const navigationHeight = navbar.offsetHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding",
    `${navigationHeight}px`
  );

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
    if (
      seeAll.textContent === "See All" &&
      seeAll.classList.contains("active")
    ) {
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
  const overlay = document.querySelector(".overlay");
  const circularCard = document.querySelectorAll(".circular-card");

  for (let i = 0; i < circularCard.length; i++) {
    circularCard[i].addEventListener("click", function openModal() {
      circularModal[i].classList.remove("hidden");
      overlay.classList.remove("hidden");
    });
  }

  function closeModal() {
    for (let i = 0; i < circularModal.length; i++) {
      circularModal[i].classList.add("hidden");
    }
    overlay.classList.add("hidden");
  }

  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    for (let i = 0; i < circularModal.length; i++) {
      if (
        e.key === "Escape" &&
        !circularModal[i].classList.contains("hidden")
      ) {
        closeModal();
      }
    }
  });

  const menuToggle = document.querySelector("#menu");

  menuToggle.addEventListener("click", function () {
    if (navbar.style.display !== "block") {
      navbar.style.display = "block";
      navbar.style.animation = "move-right";
      navbar.style.animationDuration = ".5s";
      navbar.style.animationTimingFunction = "ease-out";
    } else {
      navbar.style.display = "none";
    }
  });

  //REQUISITION MODAL

  //creating embeded pdf element
  let embededPDF = document.createElement("embed");
  embededPDF.type = "application/pdf";
  embededPDF.style.width = "100%";
  embededPDF.style.height = "100%";

  //creating a modal
  let requisitionModal = document.createElement("div");
  requisitionModal.classList.add("modal", "hidden");
  document.body.appendChild(requisitionModal);

  // selectiing elements
  let medicalRequistion = document.querySelector(".requisition-grid-1");
  let pettyCashRequisition = document.querySelector(".requisition-grid-4");
  let maintenanceRequisition = document.querySelector(".requisition-grid-7");
  let transportRequisition = document.querySelector("#transportCard");
  let transportPopup = document.querySelector("#transportPopup");
  let staffLeavePopup = document.querySelector("#staffLeavePopup");
  let transportCardOverlay = document.querySelector("#transportCardOverlay");
  let staffLeaveCardOverlay = document.querySelector("#staffLeaveCardOverlay");
  let externalTransport = document.querySelector(".external-transport");
  let internalTransport = document.querySelector(".internal-transport");
  let seniorStaff = document.querySelector(".senior-staff");
  let juniorStaff = document.querySelector(".junior-staff");
  let staffLeave = document.querySelector("#staffLeave");

  //adding click event to requisition cards
  medicalRequistion.addEventListener("click", function () {
    embededPDF.src = "img/medicalClaim.pdf";
    requisitionModal.appendChild(embededPDF);
    requisitionModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  pettyCashRequisition.addEventListener("click", function () {
    embededPDF.src = "img/pettyCash.pdf";
    requisitionModal.appendChild(embededPDF);
    requisitionModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  maintenanceRequisition.addEventListener("click", function () {
    embededPDF.src = "img/maintenanceRequest.pdf";
    requisitionModal.appendChild(embededPDF);
    requisitionModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  transportRequisition.addEventListener("click", function () {
    transportPopup.classList.toggle("hidden");
    transportCardOverlay.classList.toggle("hidden");
  });
  staffLeave.addEventListener("click", function () {
    staffLeavePopup.classList.toggle("hidden");
    staffLeaveCardOverlay.classList.toggle("hidden");
  });

  externalTransport.addEventListener("click", function () {
    embededPDF.src = "img/Statement_44273_54913_17.pdf";
    requisitionModal.appendChild(embededPDF);
    requisitionModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  internalTransport.addEventListener("click", function () {
    embededPDF.src = "img/chS.pdf";
    requisitionModal.appendChild(embededPDF);
    requisitionModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  seniorStaff.addEventListener("click", function () {
    embededPDF.src = "img/seniorStaffLeaveForm.pdf";
    requisitionModal.appendChild(embededPDF);
    requisitionModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  juniorStaff.addEventListener("click", function () {
    embededPDF.src = "img/juniorStaffLeaveForm.pdf";
    requisitionModal.appendChild(embededPDF);
    requisitionModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  function closeRequisitionModal() {
    requisitionModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
  overlay.addEventListener("click", closeRequisitionModal);
});
