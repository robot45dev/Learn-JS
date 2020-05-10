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
        sale: "Подарок – к Вам не прийдут коллекторы если оформите рассрочку",
    },
    {
        id: 3,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        old_price: 650,
        price: 535,
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
        id: 11,
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
        id: 12,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        old_price: 669,
        price: 623,
        available: 1,
        rating: 2,
        sale: "Подарок пульт",
    },
    {
        id: 33,
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
        id: 42,
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
        id: 54,
        title:
            "Телевизор Samsung UE43N5000AUXUA + в подарок подписка ROZETKA PREMIUM за 1 гривну!",
        img:
            "https://i2.rozetka.ua/goods/10317062/samsung_ue43n5000auxua_images_10317062073.jpg",
        price: 355,
        available: 100,
        rating: 1,
        sale: "Подарок – провод питания",
    },
    {
        id: 65,
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

if (!localStorage.wishlist) {
    localStorage.wishlist = JSON.stringify({});
}

const productList = document.getElementById("product-list");
const sortSelect = document.getElementById("sort-select");
const filterForm = document.getElementById("filter-form");
const stockCheckbox = document.querySelector('input[name="checkbox"]');
// const masonryBtns = document.querySelectorAll(".masonry-btn");
const masonry = document.getElementById("masonry");
// const pileSmall = document.getElementById('pileSmall');
// const pileClassSearchSmall = document.querySelectorAll('.col-3');
// const pileClassSearchLarge = document.querySelectorAll('.col-4');
const wishList = JSON.parse(localStorage.wishlist);

sortSelect.addEventListener("change", sorted(data));
filterForm.addEventListener("submit", filtered(data));
// pileSmall.addEventListener("click", pileChangeToSmall);
masonry.addEventListener("click", masonryChange);
stockCheckbox.addEventListener("change", stock(data));
productList.addEventListener("click", wishListAddRemove);

function wishListAddRemove(event) {
    // let heart = wishList[event.target.dataset.id] –– ПОЧЕМУ НЕ РАБОТАЕТ?
        if (event.target.classList.contains('js-wish-btn')) {
            if (!wishList[event.target.dataset.id]) {
                wishList[event.target.dataset.id] = true;
                event.target.classList.remove('far');
                event.target.classList.add('fas');
            } else if (wishList[event.target.dataset.id]) {
                delete wishList[event.target.dataset.id];
                event.target.classList.add('far');
                event.target.classList.remove('fas');
            }
            localStorage.wishlist = JSON.stringify(wishList);
        }
        wishCounter(wishList);
    }

function wishCounter (products) {
    let counter = document.getElementById('wishCounter');
    counter.innerHTML = "";
    if (!Object.keys(products).length) {
        counter.innerHTML = "";
    } else if (Object.keys(products).length) {
        // counter.insertAdjacentHTML('afterbegin', Object.keys(products).length);
        counter.innerHTML = Object.keys(products).length;
    }
  
//   function wishCounter(products) {
//     let counter = document.getElementById("wishCounter");
//     let val = Object.keys(products).length;
//     counter.innerHTML = val ? val : "";

  
    // function ff() {
    //     for (let element of Object.keys(products)) {
    //         console.log(Number.parseInt(element));
    //     }
    //     return new Array(element);
    // }
}

// actualPrice(data);
// appendCardsToList(data);
sortByDefault(data);
changeInputs(minMax(data));
wishCounter(wishList);

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

    let html = `<div class="col my-3">
          <div class="card ${availabilityColorClass}">
            <img src="${product.img}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-rating">Рейтинг: ${starTags}</p>
             ${product.old_price ? `<p class="card-old-price"> Старая цена: ${formatter.format(product.old_price * USD)}</p>` : ""}
              <p class="card-current-price">Цена: ${formatter.format(product.price * USD)}</p>
              <p class="card-availability ${availabilityColorClass}">Наличие: ${availability}</p>
              ${product.sale && product.available ? `<p>${product.sale}</p>` : ""}
              <div class="buttons">
                  <a href="#" role="button" class="btn btn-success buy-btn mb-2 ${availabilityActionClass}">Купить</a>
                  <button data-id="${product.id}" class="btn btn-clear ${wishList[product.id] ? 'fas' : 'far'} fa-heart js-wish-btn"></button>
              </div>
              ${product.top && product.available !== 0 ? `<i class="fas fa-star top-star"></i>` : ""}
            </div>
          </div>
        </div>`;

    return html;
}

function appendCardsToList(products) {
    for (let element of products) {
        let template = createCardTemplate(element);
        productList.insertAdjacentHTML('beforeend', template);
    }
}

// function actualPrice(products) {
//     for (let element of products) {
//         element.price *= USD;
//     }
// }

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

        let index = options.indexOf("-");
        let property = options.slice(0, index);
        let type = options.slice(index + 1);

        if (type === "inc") {
            return a[property] - b[property];
        } else if (type === "dec") {
            return b[property] - a[property];
        }
    };
}

// function sorted(products) {
//     return function () {
//         productList.innerHTML = "";
//         appendCardsToList(products.sort(sortBy(this.value)));
//     };
// }

function sorted(products) {
    return function () {
        //основная сортировка по нужному типу,благодаря обёртке sortBy()
        products.sort(sortBy(this.value));
        //дефолтная сортировка по наличию (обёртка не нужна)
        products.sort(function (a, b) {
            //часть проблемы у тебя было, что тебе нужна "хитрая" сортировка,
            //тебе же нужно чтобы только у которых наличие == 0 шли в конец,
            //а простая сортировка (b-a) сортирует все товары по кол-ву
            //ты по факту должен придумать целиком кастомную сортировку, котороя
            //не вписывается в стандартные (по увелич., по уменьш.)
            if (b.available - a.available == b.available) {
                return 1;
            } else if (b.available - a.available == -a.available) {
                return -1;
            } else {
                return 0;
            }
        });
        productList.innerHTML = "";
        appendCardsToList(products);
    };
}

function sortByDefault(products) {
    productList.innerHTML = "";
    appendCardsToList(
        products.sort(function (a, b) {
            return b.available - a.available;
        })
    );
}

function filterBy(options) {
    return function (el) {
        if (options.type === "price") {
            return el.price >= options.min && el.price <= options.max;
        }
    };
}

function filtered(products) {
    return function (e) {
        e.preventDefault();
        let data = new FormData(this);
        let minValue = data.get("min") / USD;
        let maxValue = data.get("max") / USD;
        productList.innerHTML = "";
        appendCardsToList(
            products.filter(
                filterBy({
                    type: "price",
                    min: minValue,
                    max: maxValue,
                })
            )
        );
    };
}

// function stockCheck (products) {
//     let newArray = [];
//     for (let element of products) {
//         if (element.sale) {
//             newArray.push(element)
//         }
//     }
//     return newArray;
// }

function stockCheck(el) {
    if (el.sale) {
        return true;
    } else {
        return false;
    }
}

function stock(products) {
    return function (e) {
        productList.innerHTML = "";
        if (e.target.checked) {
            appendCardsToList(products.filter(stockCheck));
        } else {
            appendCardsToList(products);
        }
    };
}

function masonryChange(event) {
    const btn = event.target;
    if (btn.classList.contains("js-masonry-btn")) {
        btn.classList.add("active");
        const siblings = [...btn.parentNode.children].filter(function (child) {
            return child != btn;
        });
     
        siblings.forEach((e) => {
            e.classList.remove("active");
        });

        if (btn.dataset.action == "sm") {
            productList.classList.add("row-cols-4");
            productList.classList.remove("row-cols-3");
        } else if (btn.dataset.action == "lg") {
            productList.classList.add("row-cols-3");
            productList.classList.remove("row-cols-4");
        }
    }
}

// function tileChangeToSmall(e) {
//     let tileClassSearch = document.querySelectorAll('.product-list');
//     for (let element of tileClassSearch) {
//         element.classList.add('row-cols-4');
//         element.classList.remove('row-cols-3');
//     }
//     tileLarge.classList.remove('active');
//     tileSmall.classList.add('active');
// }

function minMax(arrPrice) {
    const newArray = arrPrice.map(function (element) {
        return element.price;
    });
    let min = Math.min(...newArray);
    let max = Math.max(...newArray);

    return { min: min, max: max };
}

function changeInputs(filterValue) {
    const minInput = document.getElementById("filter-min");
    const maxInput = document.getElementById("filter-max");

    minInput.min = Math.round(filterValue.min * USD) - 1;
    minInput.max = Math.round(filterValue.max * USD);
    minInput.value = minInput.min;

    maxInput.min = Math.round(filterValue.min * USD);
    maxInput.max = Math.round(filterValue.max * USD) + 1;
    maxInput.value = maxInput.max;
}

// let arrr = ['2','5','9'];

// arrr.forEach((e,i,a) =>{
//     a[i] = +e;
//     if (i == 1) {
//         return false;
//     }
//     console.log(i);

// })
// console.log(arrr);

// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];

//     }
// }

////////////////////////////////////////////////////////////////////////////////////////
const cartBody = document.getElementById("cart-body");

productList.addEventListener("click", function (e) {
    if (e.target.classList.contains("js-buy-btn")) {
        const buyBtn = e.target;
        const card = parents(buyBtn, "card");
        const product = {};

        product.img = card.querySelector("img").src;
        product.title = card.querySelector(".card-title").textContent;
        product.price = card.querySelector(".card-current-price").dataset.price;

        appendCartRow(product);
    }
});``

function parents(node, _class) {
    let current = node;
    while (
        current.parentElement != null &&
        !current.parentElement.classList.contains(_class)
    ) {
        current = current.parentElement;
    }
    return current.parentElement;
}

function appendCartRow(product) {
    cartBody.insertAdjacentHTML("beforeend", createCartRow(product));
}

function createCartRow(product) {
    return `<div class="row cart-body-row">
<div class="col-1 cart-body-order">1</div>
<div class="col-1 cart-body-img"><img class="img-fluid" src="${
        product.img
        }" alt="${product.title}"></div>
<div class="col-5 cart-body-title"><h6>${product.title}</h6></div>
<div class="col-1 cart-body-count"><input type="number" class="w-100" value="1"></div>
<div class="col-1 cart-body-price" data-price="${
        product.price
        }">${formatter.format(product.price)}</div>
<div class="col-2 cart-body-sum">${formatter.format(product.price)}</div>
<div class="col-1 cart-body-remove"><button class="btn btn-secondary">&times;</button></div>
</div>`;
}

