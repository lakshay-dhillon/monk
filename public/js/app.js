
function toggleMenu() {
let menu = document.querySelector(".mobile-menu");
menu.style.left = (menu.style.left === "0px") ? "-250px" : "0px";
}

// Function to close menu when clicking on a menu item
document.addEventListener("DOMContentLoaded", function () {
const navLinks = document.querySelectorAll(".mobile-menu a"); // All menu links

navLinks.forEach(link => {
link.addEventListener("click", function () {
    let menu = document.querySelector(".mobile-menu");
    menu.style.left = "-250px"; // Close the menu
});
});
});

function toggleDropdown() {
let dropdown = document.querySelector(".dropdown-menu");
dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}



// header 
window.onscroll = function () {
    let scrollPosition = window.pageYOffset;
    let header = document.getElementById("header");

    if (scrollPosition > 50) {
        header.style.top = "0"; // Move Header to Top
    } else {
        header.style.top = "40px"; // Keep Header Below Announcement Bar
    }
};






  // Back to top functionality
  const backToTopButton = document.querySelector('.back-to-top');
        
  // Show button when scrolled 5% of page height
  window.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollThreshold = scrollHeight * 0.05; // 5% of page height
      
      if (scrollTop > scrollThreshold) {
          backToTopButton.classList.add('visible');
      } else {
          backToTopButton.classList.remove('visible');
      }
  });
  
  // Scroll to top when button is clicked
  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });