document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.toggle("active");
  });

  // Get the button
  var mybutton = document.getElementById("scrollToTopBtn");

  // When the user scrolls down 500px from the top of the document, show the button
  window.onscroll = function () {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  mybutton.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  let pdfButton = document.getElementsByClassName(".pdf-link");
  openPDFs = () => {
    window.open("docs/Certificate_of_Achievement-AlionaTerguta.pdf", "1");
    window.open("docs/Certificate_of_Participation-AlionaTerguta.pdf", "2");
  };
});
