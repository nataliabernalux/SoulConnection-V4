// JavaScript code to open and close dropdown products menu
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('categorias-dropdown-toggle');
    var dropdownMenu = document.getElementById('categorias-dropdown-menu');

    toggleButton.addEventListener('click', function () {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });
});



 // JavaScript code to filter products based on the selected category
 document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('#categorias-dropdown-menu li a');
    const productItems = document.querySelectorAll('.product-item');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const selectedCategory = this.textContent.toLowerCase().trim(); // Get the category name

            // Hide all products
            productItems.forEach(item => {
                item.style.display = 'none';
            });

            // Show only products that match the selected category
            const matchingProducts = document.querySelectorAll(`[data-category="${selectedCategory}"]`);
            matchingProducts.forEach(item => {
                item.style.display = 'block';
            });
        });
    });
});