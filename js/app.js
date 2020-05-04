"use strict";

let USD = 27.5;

const formatter = new Intl.NumberFormat("ua", {
    style: "currency",
    currency: "UAH",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
});

const data = [
    {
        id: 1,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        price: 536.3,
        available: 10,
        rating: 3.5,
        top: true,
    },
    {
        id: 2,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        old_price: 669,
        price: 623,
        available: 2,
        rating: 2,
        sale: "Подарок пульт",
    },
    {
        id: 3,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        old_price: 650,
        price: 500,
        available: 0,
        rating: 0.5,
        top: true,
    },
    {
        id: 4,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        price: 412,
        available: 3,
        rating: 4,
        top: true,
    },
    {
        id: 5,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        price: 325,
        available: 100,
        rating: 1,
    },
    {
        id: 6,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        old_price: 700,
        price: 659,
        available: 0,
        rating: 5,
        sale: "Подарок пульт",
    },
    {
        id: 1,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        price: 536,
        available: 6,
        rating: 0.5,
        top: true,
    },
    {
        id: 2,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        old_price: 669,
        price: 623,
        available: 0,
        rating: 2,
        sale: "Подарок пульт",
    },
    {
        id: 3,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        old_price: 650,
        price: 500,
        available: 5,
        rating: 3,
        top: true,
    },
    {
        id: 4,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        price: 412,
        available: 3,
        rating: 4,
        top: true,
    },
    {
        id: 5,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        price: 325,
        available: 100,
        rating: 1,
    },
    {
        id: 6,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        old_price: 700,
        price: 659,
        available: 0,
        rating: 5,
        sale: 1,
    },
];

const stockCheckbox = document.querySelector('input[name="checkbox"]');
console.log(stockCheckbox);

stockCheckbox.addEventListener("change", stock(data));

function stockCheck (products) {
    for (let element of products) {
        if (element.sale) {
            return;
        }
    }
}

function stock (products) {
    if(stockCheckbox.checked) {
        appendCardsToList(products.filter(stockCheck))
    }
}

function actualPrice (products) {
    for (let element of products) {
        element.price *= USD;
        // console.log(element);
    }
}

actualPrice(data);

//console.log(data.map.has('price'));

const productList = document.getElementById("product-list");
const sortSelect = document.getElementById("sort-select");
const filterForm = document.getElementById("filter-form");

appendCardsToList(data);

sortSelect.addEventListener("change", sorted(data));
filterForm.addEventListener("submit", filtered(data));


function filterBy(options) {
    return function (el) {
        if (options.type === "price") {  //  * USD
            return (el.price >= options.min && el.price <= options.max);
        }
    };
}


function filtered(products) {
    return function (e) {
        e.preventDefault();
        let data = new FormData(this);
        let minValue = data.get('min');
        let maxValue = data.get('max');
        productList.innerHTML = "";
        appendCardsToList(products.filter(filterBy({
            type: 'price',   //* USD
            min: minValue,
            max: maxValue
        })));
    };
}

// function sortBy(type) {
//     return function (a, b) {
//         if (type === "inc") {
//             return a.price - b.price;
//         } else if (type === "dec") {
//             return b.price - a.price;
//         }
//     };
// }

function sortBy(options) {
    return function (a, b) {
        // let property = options.subject;
        // let type = options.type;

        let index = options.indexOf('-');
        let property = options.slice(0, index);
        let type = options.slice(index+1);

        if (type === 'inc') {
            return a[property] - b[property]
        } else if (type === 'dec') {
            return b[property] - a[property]
        }
    };
}

function sorted(products) {
    return function () {
        productList.innerHTML = "";
        appendCardsToList(products.sort(sortBy(this.value)));
    };
}

function createCardTemplate(product) {

    let availability = ``;
    let availabilityColorClass = ``;
    let availabilityActionClass = ``;
    if (product.available === 0) {
        availability = "Нет в наличии";
        availabilityColorClass = "remainZero";
        availabilityActionClass = "disabled";
    } else if (product.available <= 2) {
        availability = "Заканчивается";
        availabilityColorClass = "remainSmall";
    } else {
        availability = "Есть в наличии";
        availabilityColorClass = "remainLot";
    }

    let starTags = ``;
    for (let i = 0.5; i <= 5; i++) {
        let starClass = "";
        if (product.rating >= i + 0.5) {
            starClass = "fas fa-star";
        } else if (product.rating >= i) {
            starClass = "fas fa-star-half-alt";
        } else {
            starClass = "far fa-star";
        }
        starTags += `<i class="${starClass}"></i>`;
    }

    let html =
        `<div class="col my-3">
          <div class="card ${availabilityColorClass}">
            <img src="${product.img}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-rating">Рейтинг: ${starTags}</p>
              ${product.old_price ? `<p class="card-old-price"> Старая цена: ${formatter.format(product.old_price)}</p>` : ""}
              <p class="card-current-price">Цена: ${formatter.format(product.price)}</p>
              <p class="card-availability ${availabilityColorClass}">Наличие: ${availability}</p>
              ${product.sale && product.available ? `<p>${product.sale}</p>` : ""}
              <a href="#" role="button" class="btn btn-success buy-btn ${availabilityActionClass}">Купить</a>
              ${product.top && product.available !== 0 ? `<i class="fas fa-star top-star"></i>` : ""}
            </div>
          </div>
        </div>`;

    return html;
}

function appendCardsToList(products) {
    for (let element of products) {
        let template = createCardTemplate(element);
        productList.insertAdjacentHTML("beforeend", template);
    }
}

// *********************

const pileLarge = document.getElementById('pileLarge');
const pileSmall = document.getElementById('pileSmall');

//const pileClassSearchSmall = document.querySelectorAll('.col-3');
//const pileClassSearchLarge = document.querySelectorAll('.col-4');

pileLarge.addEventListener("click", pileChangeToLarge);
pileSmall.addEventListener("click", pileChangeToSmall);


function pileChangeToLarge() {
    let pileClassSearch = document.querySelectorAll('.row-cols-4');
    for (let element of pileClassSearch) {
        element.classList.add('row-cols-3');
        element.classList.remove('row-cols-4');
    }
    pileLarge.classList.add('active');
    pileSmall.classList.remove('active');
}

function pileChangeToSmall() {
    let pileClassSearch = document.querySelectorAll('.row-cols-3');
    for (let element of pileClassSearch) {
        element.classList.add('row-cols-4');
        element.classList.remove('row-cols-3');
    }
    pileLarge.classList.remove('active');
    pileSmall.classList.add('active');
}


//150 – 177, 289

