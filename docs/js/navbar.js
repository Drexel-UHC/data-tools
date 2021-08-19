/**
 * Responsive nav bar written with CSS Grid
 * Kudos: https://www.youtube.com/watch?v=zFpReiq-wuI&feature=youtu.be
 *
 * Danos on YouTube did a marvelous tutorial but failed to leave
 * a link to the source code. I took the liberty of following
 * the video and detailing the code here WITH improvements.
 *
 * His later Github link leads to 404
 *
 * CLICK the FORK button above
 *
 * courtesy of https://github.com/thomascayne
 */

var dropdown = document.querySelector('.nav .dropdown');
var button = document.querySelector('.nav .menu');
var nav = document.querySelector('.nav');

function menu() {
  if (dropdown.style.display === 'grid') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'grid';
  }
}

/** Close the dropdown (if opened) on window resize*/
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    dropdown.style.display = 'none';
    button.style.display = 'none';
  } else {
    button.style.display = 'grid';
  }
});

/** If the dropdown is open and a click outside is detected, the dropdown will be closed */
document.addEventListener('click', function (event) {
  var isClickInside = nav.contains(event.target);
  if (!isClickInside) {
    if (dropdown.style.display === 'grid') {
      dropdown.style.display = 'none';
    }
  }
});
