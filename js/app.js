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
        available: 1,
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
        price: 355,
        available: 100,
        rating: 1,
        sale: "Подарок – провод питания",
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

const productList = document.getElementById("product-list");
const sortSelect = document.getElementById("sort-select");
const filterForm = document.getElementById("filter-form");
const stockCheckbox = document.querySelector('input[name="checkbox"]');
// const masonryBtns = document.querySelectorAll(".masonry-btn");
const masonry = document.getElementById("masonry");
// const pileSmall = document.getElementById('pileSmall');
// const pileClassSearchSmall = document.querySelectorAll('.col-3');
// const pileClassSearchLarge = document.querySelectorAll('.col-4');

sortSelect.addEventListener("change", sorted(data));
filterForm.addEventListener("submit", filtered(data));
// pileSmall.addEventListener("click", pileChangeToSmall);
masonry.addEventListener("click", masonryChange);
stockCheckbox.addEventListener("change", stock(data));

// actualPrice(data);
appendCardsToList(data);
//sortByDefault(data);
changeInputs(minMax(data));

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
//
// function actualPrice(products) {
//     for (let element of products) {
//         element.price *= USD;
//     }
// }

//console.log(data.map.has('price'));

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

function sorted(products) {
    return function () {
        productList.innerHTML = "";
        appendCardsToList(products.sort(sortBy(this.value)));
        sortByDefault(products)
    };
}

function sortByDefault(products) {
    productList.innerHTML = "";
    appendCardsToList(products.sort(function (a, b) {
            return b.available - a.available
        }))
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
        let minValue = (data.get("min")) / USD;
        let maxValue = (data.get("max")) / USD;
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

function masonryChange(e) {
    const btn = e.target;
    if (btn.classList.contains("js-masonry-btn")) {
        const tileClassSearch = document.querySelectorAll(".product-list");
        for (let element of tileClassSearch) {
            if (btn.dataset.action == "sm") {
                element.classList.add("row-cols-4");
                element.classList.remove("row-cols-3");

                $(btn).addClass('active').siblings().removeClass('active');
            } else if (btn.dataset.action == "lg") {
                element.classList.add("row-cols-3");
                element.classList.remove("row-cols-4");

                $(btn).addClass('active').siblings().removeClass('active');
            }
        }
        // console.log(this.children);

        // for (let i = 0; i < this.children.length; i++) {
        //     const el = this.children[i];
        //     console.log(el);
        //     el.classList.toggle("active");
        // }
    }
}

// function pileChangeToSmall(e) {
//     let pileClassSearch = document.querySelectorAll('.product-list');
//     for (let element of pileClassSearch) {
//         element.classList.add('row-cols-4');
//         element.classList.remove('row-cols-3');
//     }
//     pileLarge.classList.remove('active');
//     pileSmall.classList.add('active');
// }

function minMax(arrPrice) {
    const newArray = arrPrice.map(function (element) {
        return element.price;
    });
    let min = Math.min(...newArray);
    let max = Math.max(...newArray);

    return {min:min, max:max}
}

function changeInputs(filterValue) {

    // я не стал искать их по форме, потому что на сколько я понимаю внутри формы
    //input-ы все равно пришлось бы отделять по name например,
    // а по скольку у них есть лейблы то уже есть id, хз есть ли смысл усложнять

    const minInput = document.getElementById('filter-min');
    const maxInput = document.getElementById('filter-max');

    minInput.min = Math.round(filterValue.min * USD) - 1;
    minInput.max = Math.round(filterValue.max * USD);
    minInput.value = minInput.min;

    maxInput.min = Math.round(filterValue.min * USD);
    maxInput.max = Math.round(filterValue.max * USD) + 1;
    maxInput.value = maxInput.max;
}


// идея присутствия сортировки по умолчaнию всегда - добавить sortDefault в sorted;

// куда я ее только не тыкал, пока что ниче не заработало,
//
// я не совсем понимаю саму концепцию, у нас ведь все функции сортировки стирают
//страницу и генерируют заново, как тогда применить 2 вида сортировки перед генерацией страницы,
// засовывать sortByDefault еще на этапе sortBy?