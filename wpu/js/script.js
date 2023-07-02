// toggle classs active
const navbarnav = document.querySelector(".navbar-nav");
//ketika hamburger menu dikilck
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
