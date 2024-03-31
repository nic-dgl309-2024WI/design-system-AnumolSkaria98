// Reference
https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
// Modified this code with Chat GPT

function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  var toggleButton = document.querySelector(".c-toggle-nav");
  var hamburger = document.querySelector(".c-hamburger");
  var cancel = document.querySelector(".c-cancel");

  if (sidenav.style.display === "block") {
    sidenav.style.display = "none";
    hamburger.style.display = "block"; // Show hamburger icon
    cancel.style.display = "none"; // Hide cancel icon
  } else {
    sidenav.style.display = "block";
    hamburger.style.display = "none"; // Hide hamburger icon
    cancel.style.display = "block"; // Show cancel icon
  }
}






