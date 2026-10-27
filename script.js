
const restaurants = [
    { name: "Burger House", category: "Бургери • Картопля фрі", photo: "1568901346375-23c9450c58cd", rating: "4.8", time: "20–30" },
    { name: "Pizza Time", category: "Піца • Італійська кухня", photo: "1571407970349-bc81e7e96d47", rating: "4.9", time: "25–35" },
    { name: "Sushi Master", category: "Суші • Роли", photo: "1579871494447-9811cf80d66c", rating: "4.7", time: "30–40" },
    { name: "Italiano", category: "Піца • Паста", photo: "1565299624946-b28f40a0ae38", rating: "4.8", time: "25–40" },
    { name: "Wok Express", category: "Локшина • Азійська кухня", photo: "1569718212165-3a8278d5f624", rating: "4.6", time: "20–35" },
    { name: "Green Bowl", category: "Салати • Здорова їжа", photo: "1547592180-85f173990554", rating: "4.7", time: "15–25" },
    { name: "Sweet Moment", category: "Десерти • Морозиво", photo: "1563805042-7684c019e1cb", rating: "4.9", time: "20–30" },
    { name: "Grill Station", category: "М'ясо • Гриль", photo: "1555939594-58d7cb561ad1", rating: "4.8", time: "30–45" },
    { name: "Cake House", category: "Торти • Тістечка", photo: "1565958011703-44f9829ba187", rating: "4.9", time: "20–35" },
    { name: "Chicken King", category: "Курка • Нагетси", photo: "1626082927389-6cd097cdc6ec", rating: "4.7", time: "20–35" },
    { name: "Street Food", category: "Хот-доги • Бургери", photo: "1612392062798-2dbaa9f8b6d1", rating: "4.6", time: "15–25" },
    { name: "Taco Fiesta", category: "Тако • Буріто", photo: "1551504734-5ee1c4a1479b", rating: "4.8", time: "25–35" },
    { name: "Pasta Point", category: "Паста • Спагеті", photo: "1473093295043-cdd812d0e601", rating: "4.7", time: "25–40" },
    { name: "BBQ House", category: "Барбекю • Реберця", photo: "1544025162-d76694265947", rating: "4.9", time: "35–45" },
    { name: "Doner City", category: "Донер • Шаурма", photo: "1529006557810-274b9b2fc783", rating: "4.6", time: "20–30" },
    { name: "Ramen World", category: "Рамен • Японська кухня", photo: "1569718212165-3a8278d5f624", rating: "4.8", time: "25–40" },
    { name: "Pancake Land", category: "Млинці • Сирники", photo: "1528207776546-365bb710ee93", rating: "4.7", time: "20–30" },
    { name: "Seafood Point", category: "Морепродукти • Риба", photo: "1559737558-2f5a35f4523b", rating: "4.8", time: "30–45" },
    { name: "Vegan Life", category: "Веганські страви • Овочі", photo: "1512621776951-a57141f2eefd", rating: "4.7", time: "20–35" },
    { name: "Dumpling House", category: "Вареники • Пельмені", photo: "1563245372-f21724e3856d", rating: "4.8", time: "25–35" },
    { name: "Hot Pizza", category: "Піца • Кальцоне", photo: "1513104890138-7c749659a591", rating: "4.9", time: "25–40" },
    { name: "Fry Station", category: "Картопля фрі • Снеки", photo: "1573080496219-bb080dd4f877", rating: "4.6", time: "15–25" },
    { name: "Pho Vietnam", category: "Фо • В'єтнамська кухня", photo: "1555126634-323283e090fa", rating: "4.7", time: "30–40" },
    { name: "Steak House", category: "Стейки • М'ясо", photo: "1546833999-b9f581a1996d", rating: "4.9", time: "35–50" },
    { name: "Coffee Break", category: "Кава • Круасани", photo: "1509042239860-f550ce710b93", rating: "4.8", time: "15–25" },
    { name: "Donut World", category: "Пончики • Солодощі", photo: "1551024506-0bccd828d307", rating: "4.7", time: "20–30" },
    { name: "Ice Cream Bar", category: "Морозиво • Мілкшейки", photo: "1497034825429-c343d7c6a68f", rating: "4.8", time: "15–25" },
    { name: "Breakfast Club", category: "Сніданки • Омлети", photo: "1525351484163-7529414344d8", rating: "4.7", time: "20–30" },
    { name: "Falafel Corner", category: "Фалафель • Піта", photo: "1547592180-85f173990554", rating: "4.6", time: "20–35" },
    { name: "Mega Combo", category: "Комбо • Сети • Закуски", photo: "1561758033-d89a9ad46330", rating: "4.8", time: "25–40" }
];

const cards = document.getElementById("restaurant-cards");
const filter = document.getElementById("restaurant-filter");
const count = document.getElementById("restaurant-count");
const emptyMessage = document.getElementById("empty-message");

function createCard(restaurant) {
    const card = document.createElement("article");
    card.className = "card";

    const image = document.createElement("img");
    image.src = `https://images.unsplash.com/photo-${restaurant.photo}?auto=format&fit=crop&w=700&q=80`;
    image.alt = restaurant.name;
    image.loading = "lazy";

    image.onerror = () => {
        image.style.display = "none";
    };

    const content = document.createElement("div");
    content.className = "card-content";

    const title = document.createElement("h3");
    title.textContent = restaurant.name;

    const description = document.createElement("p");
    description.textContent = restaurant.category;

    const details = document.createElement("div");
    details.className = "details";

    const rating = document.createElement("span");
    rating.className = "rating";
    rating.textContent = `★ ${restaurant.rating}`;

    const time = document.createElement("span");
    time.className = "time";
    time.textContent = `◷ ${restaurant.time} хв`;

    const button = document.createElement("button");
    button.className = "order";
    button.textContent = "Замовити";

    button.addEventListener("click", () => {
        alert(`Ти обрав заклад «${restaurant.name}»!\n\nКатегорії: ${restaurant.category}\nЧас доставки: ${restaurant.time} хв.\n\nОформлення замовлення поки не підключено.`);
    });

    details.append(rating, time);
    content.append(title, description, details, button);
    card.append(image, content);

    return card;
}

function renderRestaurants(list) {
    cards.replaceChildren();

    list.forEach(restaurant => {
        cards.appendChild(createCard(restaurant));
    });

    count.textContent = `Знайдено: ${list.length} із ${restaurants.length}`;
    emptyMessage.hidden = list.length !== 0;
}

filter.addEventListener("input", () => {
    const query = filter.value.trim().toLowerCase();

    const filtered = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query) ||
        restaurant.category.toLowerCase().includes(query)
    );

    renderRestaurants(filtered);
});

document.getElementById("search-form").addEventListener("submit", event => {
    event.preventDefault();

    const address = document.getElementById("address").value.trim();
    const message = document.getElementById("search-message");

    if (!address) {
        message.textContent = "Спочатку введи адресу доставки.";
        return;
    }

    message.textContent = `Вказана адреса: ${address}. Доставка за цією адресою ще не перевіряється.`;

    document.getElementById("restaurants").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("profile-button").addEventListener("click", () => {
    alert("Особистий кабінет поки що не підключено.");
});

renderRestaurants(restaurants);
