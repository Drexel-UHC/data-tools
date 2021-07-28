// Get button elements
const toggleButtons = document.querySelectorAll('.pagesButton');

 

// Handle Embedd Button Function
function handleEmbedButton(event) {
  // Get HTML Elements
  let button = event.currentTarget;
  let icon = button.firstElementChild;
  let embededElement = button.parentElement.lastElementChild;
    console.log('CLICKED');
  console.log(embededElement.style.display);

  // Toggle Embedded Display
  embededElement.style.display =
    embededElement.style.display === 'none' ? 'block' : 'none';
  
  console.log(embededElement.style.display);
  console.log(embededElement );
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