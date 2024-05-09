// Sample menu data (you can replace this with your actual menu items)
const menuItems = [
    { name: 'Chonkee Cat', price: '$13.99', image: 'img/Chonk.jpg' },
    { name: 'Pizza Chonk', price: '$12.49', image: 'img/pizza.jpg' },
    { name: 'Salad Chonk', price: '$6.99', image: 'img/salad.jpg' },
    { name: 'Burger Chonk', price: '$8.99', image: 'img/burger.jpg' },
    // Add more items here
];
// Sample menu data (you can replace this with your actual menu items)
const menuItems = [
    { name: 'Burger', price: '$8.99', image: 'img/burger.jpg' },
    { name: 'Pizza', price: '$12.49', image: 'img/pizza.jpg' },
    { name: 'Salad', price: '$6.99', image: 'img/salad.jpg' },
    // Add more items here
];

// Function to populate the menu
function populateMenu() {
    const menuList = document.getElementById('menu-list');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span class="item-name">${item.name}</span>
            <span class="item-price">${item.price}</span>
        `;
        menuList.appendChild(li);
    });
}

// Call the function to populate the menu
populateMenu();
