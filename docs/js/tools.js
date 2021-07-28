//selecting all required elements
const filterItems = document.querySelectorAll('.techItem');
const galleryItems = document.querySelectorAll('.toolGallery .toolGalleryItem');

// Function to handle click
const handFilterClick = function (event, array) {
  // Clear Active
  filterItems.forEach((element) => element.classList.remove('active'));
  // Set Active
  let button = event.currentTarget;
  button.classList.add('active');
  // Filter Gallery Items
  let filterName = button.getAttribute('data-name');
  galleryItems.forEach((item) => {
    let itemCat = item.getAttribute('data-name');
    console.log("LOOP ITERATION");
    console.log(item);
    console.log(itemCat);
    if (itemCat.includes(filterName) || filterName == 'all') {
      item.style.display = 'grid'; //first remove the hide class from the image
    } else {
      item.style.display = 'none'; //first remove the hide class from the image
    }
    console.log(item.style.display);

  });
};

// Add listener
filterItems.forEach(function (filterItem) {
  filterItem.addEventListener('click', handFilterClick);
});

