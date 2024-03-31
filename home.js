function toggleNav() {
    var topNavLinks = document.querySelector(".c-topnav__links");
    var hamburger = document.querySelector(".c-hamburger");
    var cancel = document.querySelector(".c-cancel");
  
    if (topNavLinks.style.display === "" || topNavLinks.style.display === "none") {
      topNavLinks.style.display = "flex";
      hamburger.style.display = "none"; // Hide hamburger icon
      cancel.style.display = "block"; // Show cancel icon
    } else {
      topNavLinks.style.display = "none";
      hamburger.style.display = "block"; // Show hamburger icon
      cancel.style.display = "none"; // Hide cancel icon
    }
  }