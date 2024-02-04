// Reference
// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
// Modified this code with Chat GPT

function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.display === "block") {
      sidenav.style.display = "none";
    } else {
      sidenav.style.display = "block";
    }
  }