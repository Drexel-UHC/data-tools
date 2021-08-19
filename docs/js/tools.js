//selecting all required elements
const filterItems = document.querySelectorAll('.techItem');
const galleryItems = document.querySelectorAll('.toolGallery .toolGalleryItem');
const galleryElement = document.querySelector('.toolGallery');
// Function to handle click
const handFilterClick = function (event, array) {
  // Clear Active
  filterItems.forEach((element) => element.classList.remove('active'));
  // Set Active
  let button = event.currentTarget;
  button.classList.add('active');
  // Filter Gallery Items
  let filterName = button.getAttribute('data-name');
  let itemCounter = 0;
  galleryItems.forEach((item) => {
    let itemCat = item.getAttribute('data-name');
    console.log('LOOP ITERATION');
    console.log(item);
    console.log(itemCat);
    if (filterName == 'all') {
      itemCounter = galleryItems.length;
      item.style.display = 'grid'; //first remove the hide class from the image
    } else if (itemCat.includes(filterName)) {
      itemCounter = itemCounter + 1;
      item.style.display = 'grid'; //first remove the hide class from the image
    } else {
      item.style.display = 'none'; //first remove the hide class from the image
    }
  });
  // grid template column update based on number of items
  if (itemCounter < 3) {
    galleryElement.classList.remove('toolGallery');
    galleryElement.classList.add('toolGallerySmall');
  } else {
    galleryElement.classList.remove('toolGallerySmall');
    galleryElement.classList.add('toolGallery');
  }
};

// Add listener
filterItems.forEach(function (filterItem) {
  filterItem.addEventListener('click', handFilterClick);
});

// Validation Modal for outsourcing
var modal = document.getElementById('modalToolsValidate_LE_income_ineq');
var btn = document.getElementById('btnToolsValidate_LE_income_ineq');
var span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
  modal.style.display = 'block';
  var form = document.getElementById('form');
  var passwordUHC = document.getElementById('passwordUHC');
  console.log(form, passwordUHC);
  form.addEventListener('submit', formSubmit);
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Form Validation
function formSubmit(event) {
  console.log(`Submit clicked;  ${passwordUHC.value}`);
  if (passwordUHC.value === 'uhc') {
    console.log(`Correct`);
    modal.style.display = 'none';
    window.open(
      'https://drexel-uhc.shinyapps.io/LE_Income_Inequalities_City_dev/'
    );
  } else {
    console.log(`INCORRECT`);
  }
  event.preventDefault();
}
