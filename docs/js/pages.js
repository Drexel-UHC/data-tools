// Get button elements
const toggleButtons = document.querySelectorAll('.pagesButton');



// Handle Embedd Button Function
function handleEmbedButton(event) {
  // Get HTML Elements
  const button = event.currentTarget;
  const icon = button.firstElementChild
  const embededElement = button.parentElement.lastElementChild;
  // Toggle Embedded Display
  embededElement.style.display =
    embededElement.style.display === 'none' ? '' : 'none';
  console.log(embededElement.style.display);
  // Change the icon
  if (embededElement.style.display === 'none') {
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-right');
  } else {
    icon.classList.remove('fa-chevron-right');
    icon.classList.add('fa-chevron-down');
  }
}

// Add listener
toggleButtons.forEach(function (toggleButton) {
  toggleButton.addEventListener('click', handleEmbedButton);
});