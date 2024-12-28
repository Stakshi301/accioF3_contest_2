const menuButton = document.querySelector('.menu'); 
const leftContainer = document.querySelector('.left_container');
const navBar = document.querySelector('nav');
const poster = document.querySelector('.poster'); 
const menuContainer = document.querySelector('.menu_container');

menuButton.addEventListener('click', () => {
    leftContainer.style.display = 'block';

    poster.style.display = 'none';

    menuContainer.innerHTML = `
<div class="card">
    <div class="item_img"><img src="burger1.png" alt="Burger"></div>
    <div class="card_details">
        <div class="card_content">
            <p class="item_desc">Cheeseburger</p>
            <p class="item_price">$5.99</p>
        </div>
        <button class="add_to_cart">+</button>
    </div>
</div>
<div class="card">
    <div class="item_img"><img src="burger2.png" alt="Burger"></div>
    <div class="card_details">
        <div class="card_content">
            <p class="item_desc">Veggie Burger</p>
            <p class="item_price">$4.99</p>
        </div>
        <button class="add_to_cart">+</button>
    </div>
</div>
<!-- Add more cards here -->
`;

    menuContainer.style.overflowY = 'auto';
    menuContainer.style.height = 'calc(100vh - 50px)'; 
});