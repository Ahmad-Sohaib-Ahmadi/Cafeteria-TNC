// Get references to menu items and sections
const allList = document.querySelector('#all_list');
const coffeeList = document.querySelector('#coffee_list');
const foodList = document.querySelector('#food_list');
const chocolateList = document.querySelector('#chocolate_list');

// Function to hide all sections
const hideAllSections = () => {
    document.querySelectorAll('.menu_section').forEach(section => {
        section.style.display = 'none';
    });
};

// Function to remove active class from all menu items
const removeActiveClass = () => {
    document.querySelectorAll('.reg_menu_list ul li').forEach(li => {
        li.classList.remove('li_spi');
    });
};

// Event listener for "All" menu item
allList.addEventListener('click', () => {
    hideAllSections();
    document.querySelectorAll('.menu_section').forEach(section => {
        section.style.display = 'grid';
    });
    removeActiveClass();
    allList.classList.add('li_spi');
});

// Event listener for "Coffee Menu" item
coffeeList.addEventListener('click', () => {
    hideAllSections();
    document.querySelectorAll('.coffee_sec').forEach(section => {
        section.style.display = 'grid';
    });
    removeActiveClass();
    coffeeList.classList.add('li_spi');
});

// Event listener for "Food Menu" item
foodList.addEventListener('click', () => {
    hideAllSections();
    document.querySelectorAll('.food_sec').forEach(section => {
        section.style.display = 'grid';
    });
    removeActiveClass();
    foodList.classList.add('li_spi');
});

// Event listener for "Chocolate Menu" item
chocolateList.addEventListener('click', () => {
    hideAllSections();
    document.querySelectorAll('.chocolate_sec').forEach(section => {
        section.style.display = 'grid';
    });
    removeActiveClass();
    chocolateList.classList.add('li_spi');
});
