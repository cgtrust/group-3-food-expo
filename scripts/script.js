// nav open/close function in mobile
const btnNav = document.querySelector('.nav-button');
const menu = document.querySelector('.bottom-nav');

function openNav() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
      } else {
        menu.classList.add("showMenu");
      }
}

btnNav.addEventListener('click', openNav);

// move #socials out of its div for media query purposes
const socials = document.getElementById('socials');
const topNav = document.querySelector('.top-nav');
const bottomNav = document.querySelector('.bottom-nav');

// function moveSearch() {
//   if(window.innerWidth >= 500) {
//     topNav.appendChild(search);
//   } else if (window.innerWidth < 500) {
//     bottomNav.appendChild(search);
//   }
// }

function moveSocials() {
  if(window.innerWidth >= 500) {
    topNav.appendChild(socials);
  } else if (window.innerWidth < 500) {
    bottomNav.appendChild(socials);
  }
}

window.addEventListener('resize', moveSocials,);

moveSocials();
// moveSearch();