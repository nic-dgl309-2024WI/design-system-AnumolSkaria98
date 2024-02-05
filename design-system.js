// Reference
// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
// Modified this code with Chat GPT

function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  var toggleButton = document.querySelector(".toggle-nav");
  var hamburger = document.querySelector(".hamburger");
  var cancel = document.querySelector(".cancel");

  if (sidenav.style.display === "block") {
    sidenav.style.display = "none";
    hamburger.style.display = "inline"; // Show hamburger icon
    cancel.style.display = "none"; // Hide cancel icon
  } else {
    sidenav.style.display = "block";
    hamburger.style.display = "none"; // Hide hamburger icon
    cancel.style.display = "inline"; // Show cancel icon
  }
}
