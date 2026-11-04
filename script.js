
const restaurants = [
    { name: "Burger House", category: "Бургери • Картопля фрі", photo: "1568901346375-23c9450c58cd", emoji: "🍔", rating: "4.8", time: "20–30", price: 180 },
    { name: "Pizza Mafia", category: "Піца • Італійська кухня", photo: "1565299624946-b28f40a0ae38", emoji: "🍕", rating: "4.9", time: "25–40", price: 250 },
    { name: "Sushi Master", category: "Суші • Роли", photo: "1579871494447-9811cf80d66c", emoji: "🍣", rating: "4.7", time: "30–45", price: 320 },
    { name: "KFC", category: "Курка • Стріпси", photo: "1626082927389-6cd097cdc6ec", emoji: "🍗", rating: "4.6", time: "20–35", price: 210 },
    { name: "McDonald's", category: "Бургери • Комбо", photo: "1550547660-d9450f859349", emoji: "🍔", rating: "4.7", time: "15–30", price: 190 },
    { name: "Taco Loco", category: "Тако • Буріто", photo: "1565299585323-38d6b0865b47", emoji: "🌮", rating: "4.5", time: "20–35", price: 220 },
    { name: "Pasta Italia", category: "Паста • Італійська кухня", photo: "1473093295043-cdd812d0e601", emoji: "🍝", rating: "4.8", time: "25–40", price: 240 },
    { name: "Wok Express", category: "Локшина • Азійська кухня", photo: "1512058564366-18510be2db19", emoji: "🍜", rating: "4.6", time: "20–35", price: 195 },
    { name: "Green Bowl", category: "Салати • Здорова їжа", photo: "1512621776951-a57141f2eefd", emoji: "🥗", rating: "4.7", time: "15–30", price: 175 },
    { name: "Steak House", category: "Стейки • М'ясо", photo: "1544025162-d76694265947", emoji: "🥩", rating: "4.9", time: "35–50", price: 450 },
    { name: "Chicken Point", category: "Курка • Нагетси", photo: "1562967914-608f82629710", emoji: "🍗", rating: "4.5", time: "20–35", price: 185 },
    { name: "Doner King", category: "Шаурма • Донер", photo: "1529006557810-274b9b2fc783", emoji: "🥙", rating: "4.6", time: "15–25", price: 160 },
    { name: "Pancake Club", category: "Млинці • Десерти", photo: "1528207776546-365bb710ee93", emoji: "🥞", rating: "4.5", time: "20–30", price: 140 },
    { name: "BBQ Station", category: "Барбекю • Ребра", photo: "1529193591184-b1d58069ecdd", emoji: "🍖", rating: "4.8", time: "30–45", price: 350 },
    { name: "Dumpling House", category: "Вареники • Пельмені", photo: "1585032226651-759b368d7246", emoji: "🥟", rating: "4.6", time: "20–35", price: 170 },
    { name: "Thai Garden", category: "Тайська кухня • Карі", photo: "1559847844-5315695dadae", emoji: "🍛", rating: "4.7", time: "30–45", price: 260 },
    { name: "Falafel Street", category: "Фалафель • Піта", photo: "1547592180-85f173990554", emoji: "🧆", rating: "4.4", time: "15–30", price: 150 },
    { name: "Ramen Tokyo", category: "Рамен • Японська кухня", photo: "1569718212165-3a8278d5f624", emoji: "🍜", rating: "4.8", time: "25–40", price: 280 },
    { name: "Fish & Chips", category: "Риба • Картопля", photo: "1519708227418-c8fd9a32b7a2", emoji: "🐟", rating: "4.5", time: "25–40", price: 230 },
    { name: "Sweet Dreams", category: "Торти • Тістечка", photo: "1578985545062-69928b1d9587", emoji: "🍰", rating: "4.9", time: "20–35", price: 130 },
    { name: "Coffee Time", category: "Кава • Сендвічі", photo: "1509042239860-f550ce710b93", emoji: "☕", rating: "4.7", time: "10–20", price: 120 },
    { name: "Vegan Life", category: "Веганська кухня", photo: "1540420773420-3366772f4999", emoji: "🥑", rating: "4.6", time: "20–35", price: 190 },
    { name: "Hot Dog City", category: "Хот-доги • Фастфуд", photo: "1561758033-d89a9ad46330", emoji: "🌭", rating: "4.4", time: "10–20", price: 110 },
    { name: "Greek Taverna", category: "Грецька кухня • Гірос", photo: "1547592180-85f173990554", emoji: "🥙", rating: "4.6", time: "25–40", price: 225 },
    { name: "Mexican Fire", category: "Начос • Буріто", photo: "1513456852971-30c0b8199d4d", emoji: "🌯", rating: "4.5", time: "20–35", price: 210 },
    { name: "Asian Dragon", category: "Рис • Азійські страви", photo: "1512058564366-18510be2db19", emoji: "🍚", rating: "4.7", time: "25–40", price: 200 },
    { name: "Odesa Fish", category: "Морепродукти • Риба", photo: "1559737558-2f5a35f4523b", emoji: "🦐", rating: "4.7", time: "30–45", price: 340 },
    { name: "Ukrainian Kitchen", category: "Борщ • Домашня кухня", photo: "1547592180-85f173990554", emoji: "🍲", rating: "4.8", time: "25–40", price: 160 },
    { name: "French Bakery", category: "Круасани • Випічка", photo: "1555507036-ab1f4038808a", emoji: "🥐", rating: "4.8", time: "15–25", price: 95 },
    { name: "Grill Master", category: "Гриль • Кебаб", photo: "1558030006-450675393462", emoji: "🍢", rating: "4.7", time: "25–40", price: 290 }
];

// Запасні справжні фотографії їжі
const fallbackPhotos = [
    "photo-1546069901-ba9599a7e63c",
    "photo-1555939594-58d7cb561ad1",
    "photo-1565299624946-b28f40a0ae38",
    "photo-1568901346375-23c9450c58cd"
];

const cards = document.getElementById("restaurant-cards");
const filter = document.getElementById("restaurant-filter");
const count = document.getElementById("restaurant-count");
const emptyMessage = document.getElementById("empty-message");

const orderMenu = document.getElementById("order-menu");
const orderTitle = document.getElementById("order-title");
const orderCategory = document.getElementById("order-category");
const quantityText = document.getElementById("quantity");
const unitPrice = document.getElementById("unit-price");
const totalPrice = document.getElementById("total-price");
const orderMessage = document.getElementById("order-message");

const cartMenu = document.getElementById("cart-menu");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cartMessage = document.getElementById("cart-message");
const checkoutButton = document.getElementById("checkout-button");

let selectedRestaurant = null;
let quantity = 1;
let cart = [];
let orderSent = false;

function formatPrice(price) {
    return `${price.toLocaleString("uk-UA")} грн`;
}

function makeFallbackImage(emoji) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="700" height="400" viewBox="0 0 700 400">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#302819"/>
                    <stop offset="100%" stop-color="#151719"/>
                </linearGradient>
            </defs>
            <rect width="700" height="400" fill="url(#bg)"/>
            <circle cx="350" cy="180" r="120" fill="#ffc229" opacity=".1"/>
            <text x="350" y="220" text-anchor="middle" font-size="100">${emoji}</text>
            <text x="350" y="320" text-anchor="middle" fill="#ffc229" font-size="24" font-family="Arial">GOSTVORON</text>
        </svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function createCard(restaurant) {
    const card = document.createElement("article");
    card.className = "card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "card-image-wrap";

    const image = document.createElement("img");
    image.alt = restaurant.name;
    image.loading = "lazy";

    // Якщо головне фото не відкриється, пробуємо інші фото
    const imageOptions = [
        `https://images.unsplash.com/photo-${restaurant.photo}?auto=format&fit=crop&w=700&q=85`,
        ...fallbackPhotos.map(photo =>
            `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=700&q=85`
        )
    ];

    let imageIndex = 0;

    image.onerror = function () {
        imageIndex++;

        if (imageIndex < imageOptions.length) {
            this.src = imageOptions[imageIndex];
        } else {
            // Останній запасний варіант, якщо зовнішні фото недоступні
            this.onerror = null;
            this.src = makeFallbackImage(restaurant.emoji);
        }
    };

    image.src = imageOptions[0];
    imageWrap.appendChild(image);

    const content = document.createElement("div");
    content.className = "card-content";

    const title = document.createElement("h3");
    title.textContent = restaurant.name;

    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = restaurant.category;

    const details = document.createElement("div");
    details.className = "details";

    const rating = document.createElement("span");
    rating.className = "rating";
    rating.textContent = `★ ${restaurant.rating}`;

    const time = document.createElement("span");
    time.textContent = `◷ ${restaurant.time} хв`;

    const price = document.createElement("p");
    price.className = "card-price";
    price.textContent = `Від ${formatPrice(restaurant.price)}`;

    const button = document.createElement("button");
    button.className = "order";
    button.type = "button";
    button.textContent = "Замовити";
    button.addEventListener("click", () => openOrder(restaurant));

    details.append(rating, time);
    content.append(title, description, details, price, button);
    card.append(imageWrap, content);

    return card;
}

function renderRestaurants(list) {
    cards.replaceChildren();
    list.forEach(restaurant => cards.appendChild(createCard(restaurant)));
    count.textContent = `${list.length} закладів`;
    emptyMessage.hidden = list.length !== 0;
}

filter.addEventListener("input", () => {
    const query = filter.value.trim().toLowerCase();

    renderRestaurants(restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query) ||
        restaurant.category.toLowerCase().includes(query)
    ));
});

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
    heroImage.onerror = function () {
        this.onerror = null;
        this.src = `https://images.unsplash.com/${fallbackPhotos[0]}?auto=format&fit=crop&w=900&q=85`;
    };
}

document.getElementById("search-form").addEventListener("submit", event => {
    event.preventDefault();

    const address = document.getElementById("address").value.trim();
    const message = document.getElementById("search-message");

    if (!address) {
        message.textContent = "Спочатку введи адресу доставки.";
        document.getElementById("address").focus();
        return;
    }

    message.textContent = `Адресу «${address}» введено. Обери заклад для замовлення.`;
    document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" });
});

function openOrder(restaurant) {
    selectedRestaurant = restaurant;
    quantity = 1;

    orderTitle.textContent = restaurant.name;
    orderCategory.textContent = restaurant.category;
    orderMessage.textContent = "";

    updateOrder();
    orderMenu.hidden = false;
    document.body.classList.add("modal-open");
}

function updateOrder() {
    if (!selectedRestaurant) return;

    quantityText.textContent = quantity;
    unitPrice.textContent = formatPrice(selectedRestaurant.price);
    totalPrice.textContent = formatPrice(selectedRestaurant.price * quantity);
}

document.getElementById("minus").addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        updateOrder();
    }
});

document.getElementById("plus").addEventListener("click", () => {
    if (quantity < 99) {
        quantity++;
        updateOrder();
    }
});

function closeOrder() {
    orderMenu.hidden = true;
    document.body.classList.remove("modal-open");
}

document.getElementById("close-order").addEventListener("click", closeOrder);

orderMenu.addEventListener("click", event => {
    if (event.target === orderMenu) closeOrder();
});

document.getElementById("add-to-cart").addEventListener("click", () => {
    if (!selectedRestaurant) return;

    const existingItem = cart.find(item => item.name === selectedRestaurant.name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name: selectedRestaurant.name,
            category: selectedRestaurant.category,
            price: selectedRestaurant.price,
            quantity
        });
    }

    orderSent = false;
    updateCart();
    orderMessage.textContent = `Додано до кошика: ${quantity} шт.`;
    cartMessage.textContent = "";
});

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function updateCart() {
    cartCount.textContent = getCartCount();
    cartItems.replaceChildren();

    if (cart.length === 0) {
        const empty = document.createElement("p");
        empty.className = "cart-empty";
        empty.textContent = orderSent
            ? "Замовлення відправлено! Кошик порожній."
            : "Кошик поки що порожній.";
        cartItems.appendChild(empty);
    } else {
        cart.forEach((item, index) => {
            const row = document.createElement("div");
            row.className = "cart-item";

            const name = document.createElement("p");
            name.className = "cart-item-name";
            name.textContent = item.name;

            const info = document.createElement("p");
            info.className = "cart-item-info";
            info.textContent = `${formatPrice(item.price)} × ${item.quantity} шт.`;

            const price = document.createElement("p");
            price.className = "cart-item-price";
            price.textContent = formatPrice(item.price * item.quantity);

            const remove = document.createElement("button");
            remove.className = "remove-item";
            remove.type = "button";
            remove.textContent = "Видалити";

            remove.addEventListener("click", () => {
                cart.splice(index, 1);
                orderSent = false;
                cartMessage.textContent = "";
                updateCart();
            });

            row.append(name, info, price, remove);
            cartItems.appendChild(row);
        });
    }

    cartTotal.textContent = formatPrice(getCartTotal());
    checkoutButton.disabled = cart.length === 0;
    checkoutButton.textContent = cart.length === 0
        ? "Кошик порожній"
        : "Оформити замовлення";
}

function openCart() {
    updateCart();
    cartMessage.textContent = "";
    cartMenu.hidden = false;
    document.body.classList.add("modal-open");
}

function closeCart() {
    cartMenu.hidden = true;
    document.body.classList.remove("modal-open");
}

document.getElementById("cart-button").addEventListener("click", openCart);
document.getElementById("close-cart").addEventListener("click", closeCart);

cartMenu.addEventListener("click", event => {
    if (event.target === cartMenu) closeCart();
});

checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        cartMessage.textContent = "Спочатку додай щось до кошика.";
        return;
    }

    // Очищаємо кошик після оформлення
    cart = [];
    orderSent = true;
    updateCart();

    cartMessage.textContent = "✓ Замовлення відправлено!";
    cartMessage.style.color = "#ffc229";
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        if (!orderMenu.hidden) closeOrder();
        if (!cartMenu.hidden) closeCart();
    }
});

renderRestaurants(restaurants);
updateCart();
