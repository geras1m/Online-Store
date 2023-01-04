import { ICard } from '../types';


export class Render {

  templateMain() {
    return `
    <div class="container">
        <section class="search-bar input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username"
                   aria-describedby="button-addon2">
        </section>
        <section class="row items">
            <div class="col-3 filter">
                <div class="filter-btn btn-group" role="group" aria-label="Basic example">
                    <button id="resetFilters" class="btn" type="button">Reset filters</button>
                    <button class="btn copy-link" type="button">Copy link</button>
                </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                Category
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                             aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body category">
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                Brand
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body brand">
                            </div>
                        </div>
                    </div>
                </div>
                <label class="form-label fw-bold"> Price</label>
                <div class="price-range row">
                    <div class="col text-start">€<span class="min-price">0</span></div>

                    <div class="col text-end">€<span class="max-price">2000</span></div>
                </div>

                <div class="range_container price-container">
                    <div class="sliders_control price-control">
                        <input id="fromSliderPrice" type="range" value="0" min="0" max="100"/>
                        <input id="toSliderPrice" type="range" value="100" min="0" max="100"/>
                    </div>
                </div>

                <label class="form-label fw-bold">Stock</label>
                <div class="stock-range row">
                    <div class="col text-start">0</div>

                    <div class="col text-end">200</div>
                </div>

                <div class="range_container stock-container">
                    <div class="sliders_control stock-control">
                        <input id="fromSliderStock" type="range" value="0" min="0" max="100"/>
                        <input id="toSliderStock" type="range" value="100" min="0" max="100"/>
                    </div>
                </div>

            </div>
            <div class="col cards">
                <div class="row text-center cards__header">
                    <div class="col sort-menu">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                Sort options
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li class="dropdown-item price asc">Sort by price ascending</li>
                                <li class="dropdown-item price des">Sort by price descending</li>
                                <li class="dropdown-item rating asc">Sort by rating ascending</li>
                                <li class="dropdown-item rating des">Sort by rating descending</li>
                                <li class="dropdown-item discount asc">Sort by discount ascending</li>
                                <li class="dropdown-item discount des">Sort by discount descending</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">Found: <span class="items-found">100</span></div>
                    <div class="col text-end view-btns">
                        <img src="../src/icons/square.svg" alt="Square view" class="btn__view main-view active">
                        <img src="../src/icons/row.svg" alt="Row view" class="btn__view add-view">
                    </div>
                </div>
                <div class="items-cards row row-cols-1 row-cols-md-4 g-4">
                </div>
            </div>
        </section>
    </div>
    `;
  }

  items(data: ICard[], target?: HTMLElement, flag?: string) {
    let CARDS_BOX = <HTMLElement>document.querySelector('.items-cards');
    const itemNumbers = document.querySelectorAll('.item-number');
    let count = 1;
    if (target) {
      CARDS_BOX = target;
    }
    for (let i = 0; i < data.length; i++) {
      if (document.getElementById(`carouselItemPicture${i}`)) continue;
      const finalPrice = ((data[i].price / 100) * (100 - data[i].discountPercentage)).toFixed(1);
      let card = `<a href='#/item/${data[i].id}' class="card h-100" data-id = '${data[i].id}' data-price = "${finalPrice}" data-rating = "${data[i].rating}" data-discount = "${data[i].discountPercentage}">
      <div class="item-number hidden">${count}</div>
      <div id="carouselItemPicture${i}" class="carousel carousel-dark slide car${i}">
      <div class="carousel-indicators indicators${i}">
        <button type="button" data-bs-target="#carouselItemPicture${i}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0"></button>
      </div>
      <div class="carousel-inner inner${i}">
        <div class="carousel-item active">
          <img src="${data[i].thumbnail}" class="d-block w-100 img-thumbnail" alt="Card image">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselItemPicture${i}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselItemPicture${i}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
      <div class="card-body">
        <h5 class="card-title">${data[i].title}</h5>
        <p class="text-muted card-text">
        <small class="stock">In stock: ${data[i].stock}</small>
        <p>
          <small class="text-muted category">${data[i].category},</small>
          <small class="text-muted brand">${data[i].brand},</small>
          <small class="text-muted rating">${data[i].rating}★</small>
        </p>
        <p>
          <small class="text-muted description hidden">${data[i].description}</small>
        </p>
        <p class="text-end">
          <span class="text-end-price">
          <span class="price">€${data[i].price}</span>
          <small class="text-muted sale">-${data[i].discountPercentage}%</small>
          <span class="final-price h4">€${finalPrice}</span>
          </span>
          <span class="btn-group card-btns default" role="group">
            <button type="button" class="btn remove">-</button>
            <button type="button" class="btn item-count" disabled>0</button>
            <button type="button" class="btn add">+ <span class='add-text'>Add to cart<span></button>
          </span>
        </p>
        </p>
      </div>
      </a>`;
      for (let j = 0; j < localStorage.length; j++) {
        if (data[i].id === Number(localStorage.key(j))) {
          card = `<a href='#/item/${data[i].id}' class="card h-100" data-id = '${data[i].id}' data-price = "${finalPrice}" data-rating = "${data[i].rating}" data-discount = "${data[i].discountPercentage}">
                <div class="item-number hidden">${count}</div>
                <div id="carouselItemPicture${i}" class="carousel carousel-dark slide car${i}">
                  <div class="carousel-indicators indicators${i}">
                    <button type="button" data-bs-target="#carouselItemPicture${i}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0"></button>
                  </div>
                  <div class="carousel-inner inner${i}">
                    <div class="carousel-item active">
                      <img src="${data[i].thumbnail}" class="d-block w-100 img-thumbnail" alt="Card image">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselItemPicture${i}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselItemPicture${i}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
              </div>
              <div class="card-body">
                <h5 class="card-title">${data[i].title}</h5>
                <p class="text-muted card-text">
                <small class="stock">In stock: ${data[i].stock}</small>
                <p>
                  <small class="text-muted category">${data[i].category},</small>
                  <small class="text-muted brand">${data[i].brand},</small>
                  <small class="text-muted rating">${data[i].rating}★</small>
                </p>
                <p>
                  <small class="text-muted description hidden">${data[i].description}</small>
                </p>
                <p class="text-end">
                  <span class="text-end-price">
                  <span class="price">€${data[i].price}</span>
                  <small class="text-muted sale">-${data[i].discountPercentage}%</small>
                  <span class="final-price h4">€${finalPrice}</span>
                  </span>
                  <span class="btn-group card-btns" role="group">
                    <button type="button" class="btn remove">-</button>
                    <button type="button" class="btn item-count" disabled>${localStorage.getItem(String(data[i].id))}</button>
                    <button type="button" class="btn add">+ <span class='add-text'>Add to cart<span></button>
                  </span>
                </p>
                </p>
              </div>
            </a>`;
        }
      }
      // CARDS_BOX.insertAdjacentHTML('beforeend', card);
      // if (flag === 'yes') {
      //   CARDS_BOX.innerHTML = card;
      // }
      CARDS_BOX.innerHTML += card;
      // if (flag) {
      //   CARDS_BOX.innerHTML = card;
      // }
      this.images(data, i, flag);
      count++;
    }
    if (flag === 'cart' && itemNumbers) {
      itemNumbers.forEach(el => el.classList.remove('hidden'));
    }
  }

  images(data: ICard[], num: number, flag?: string) {
    const imageHTML = document.querySelector(`.car${num}`);
    const indicators = document.querySelector(`.indicators${num}`);
    const inner = document.querySelector(`.inner${num}`);
    if (data[num].images.length > 1 && imageHTML && indicators && inner) {
      let count = 1;
      for (let t = 0; t < data[num].images.length; t++) {
        if (data[num].images[t] === data[num].thumbnail || data[0].images[t] === "https://i.dummyjson.com/data/products/1/1.jpg" || data[0].images[t] === "https://i.dummyjson.com/data/products/1/2.jpg" || data[num].images[t] === "https://i.dummyjson.com/data/products/77/3.jpg") {
          continue;
        }
        indicators.innerHTML += `<button type="button" data-bs-target="#carouselItemPicture${num}" data-bs-slide-to="${count}" aria-label="Slide ${count}"></button>`;
        inner.innerHTML += `<div class="carousel-item">
         <img src="${data[num].images[t]}" class="d-block w-100 img-thumbnail" alt="Card image">
        </div>`;
        count++;
      }
    } else if (imageHTML) {
      imageHTML.innerHTML = `<img src="${data[num].thumbnail}" class="d-block w-100 img-thumbnail" alt="Card image">`;
      imageHTML.classList.remove('carousel');
    }
    if (imageHTML && !flag) {
      imageHTML.innerHTML = `<img src="${data[num].thumbnail}" class="d-block w-100 img-thumbnail" alt="Card image">`;
      imageHTML.classList.remove('carousel');
    } else if (imageHTML && flag === 'cart') {
      imageHTML.innerHTML = `<img src="${data[num].thumbnail}" class="d-block w-100 img-thumbnail" alt="Card image">`;
      imageHTML.classList.remove('carousel');
    }
  }

  Checkbox(data: Array<ICard>, attribute: 'category' | 'brand', path: HTMLElement) {
    const result: string[] = [];
    for (let i = 0; i < data.length; i++) {
      let current = data[i].category;
      if (attribute === 'brand') {
        current = data[i].brand;
      }
      if (!result.includes(current)) {
        result.push(String(current))
      }
    }
    for (let i = 0; i < result.length; i++) {
      const checkbox = `<div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="${result[i]}">
      <label class="form-check-label" for="${result[i]}">
        ${result[i]}
      </label>
      </div>`;
      path.innerHTML += checkbox;
    }
  }

  header(data: ICard[]) {
    const cartItemsEl = document.querySelectorAll('.cart__items');
    const TotalSumEl = document.querySelectorAll('.cart-sum__number');
    let cartItems = 0;
    let TotalSum = 0;
    for (let i = 0; i < data.length; i++) {
      const finalPrice = ((data[i].price / 100) * (100 - data[i].discountPercentage)).toFixed(1);
      if (localStorage.length) {
        for (let j = 0; j < localStorage.length; j++) {
          if (data[i].id === Number(localStorage.key(j))) {
            cartItems = cartItems + Number(localStorage.getItem(String(data[i].id)))
            TotalSum = TotalSum + (Number(finalPrice) * Number(localStorage.getItem(String(data[i].id))));
          }
        }
      }
    }
    if (cartItemsEl && TotalSumEl) {
      cartItemsEl.forEach(el => el.innerHTML = String(cartItems))
      TotalSumEl.forEach(el => el.innerHTML = String(TotalSum.toFixed(1)))
    }
  }

  templateItem() {
    return `
    <div class="col container">
      <div class="breadcrumbs">
      </div>
      <div class="item">
      </div>
    </div>
    `;
  }

  breadcrumbs(data: ICard[]) {
    const CARDS_BOX = <HTMLElement>document.querySelector('.breadcrumbs');

    const card = `<span class='path'>
          <small class="text-muted category"> <a href="../dist/">STORE</a> /</small>
          <small class="text-muted category">${data[0].category} /</small>
          <small class="text-muted brand">${data[0].brand} /</small>
          <small class="text-muted title">${data[0].title}</small>
          </span>
          <button type="button" class="btn buy-now">Buy now</button>
  `;
    CARDS_BOX.innerHTML = card;
  }

  templateCart() {
    return `
    <div class="container text-center">
    <div class="row">
        <div class="col row-cols-1">
            <div class="cart-head col row">
                <div class="col">Products In Cart </div>
                <div class="col">Limit <input type="number" id="typeNumber" value='3' min="1">
                </div>
                <ul class="pagination">
                  
                </ul>
                <!--<span class="btn-group page-btns" role="group">
                    <button type="button" class="btn prev-page">-</button>
                    <button type="button" class="btn page-count" disabled>1</button>
                    <button type="button" class="btn next-page">+</button>
                </span>-->
            </div>
            <div class="cart-items col row-cols-md-1"></div>
        </div>
        <div class="col-3 summary text-center">
            <p>Summary</p>
            <p>Products: <span class="cart__items">0</span></p>
            <p>Total: €<span class="cart-sum__number">0.0</span></p>
            <div class="input-group mb-3">
                <span class="input-group-text" id="promo">Promo code</span>
                <input type="text" class="form-control" aria-label="Promo code input" aria-describedby="promo">
            </div>
            <button type="button" class="btn btn-primary buy-now-cart" data-bs-toggle="modal" data-bs-target="#buy-now-modal">
                Buy now
            </button>
            <div class="modal fade" id="buy-now-modal" tabindex="-1" aria-labelledby="buy-now-modalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="buy-now-modalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="row g-3 needs-validation">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingEmale"
                                        placeholder="name@example.com" required>
                                    <label for="floatingEmale">Email address</label>
                                </div>
                                <div class="mb-3 form-floating">
                                    <input type="text" class="form-control" id="validationName"
                                        placeholder="Alex Smith" required>
                                    <label for="validationName">Name</label>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="mb-3 form-floating">
                                    <input type="tel" id="typePhone" class="form-control"
                                        placeholder="+375290000000" required>
                                    <label class="form-label" for="typePhone">Phone number</label>
                                </div>
                                <div class="col-md-9 form-floating">
                                    <input type="text" class="form-control" id="validationCustom03"
                                        placeholder="New York" required>
                                    <label for="validationCustom03">Adress</label>
                                    <div class="invalid-feedback">
                                        Please provide a valid adress.
                                    </div>
                                </div>
                                <div class="col-md-3 form-floating">
                                    <input type="text" class="form-control" id="validationCustom05"
                                        placeholder="220017" required>
                                    <label for="validationCustom05">Zip</label>
                                    <div class="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <div class="credit-card">
                                                <div class="card-header">
                                                    <strong>Credit Card</strong>
                                                    <small>enter your card details</small>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <div class="form-group">
                                                                <label for="name">Card Holder Name</label>
                                                                <input class="form-control" id="name" type="text"
                                                                    placeholder="Enter your Card Holder Name"
                                                                    required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <div class="form-group">
                                                                <label for="ccnumber">Credit Card Number</label>
                                                                <div class="input-group">
                                                                    <input class="form-control" type="text"
                                                                        placeholder="0000 0000 0000 0000" required>
                                                                    <div class="input-group-append">
                                                                        <span class="input-group-text">
                                                                            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341764.png"
                                                                                alt="Credit card icon">
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-sm-4">
                                                            <label for="ccmonth">Month</label>
                                                            <select class="form-control" id="ccmonth">
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6</option>
                                                                <option>7</option>
                                                                <option>8</option>
                                                                <option>9</option>
                                                                <option>10</option>
                                                                <option>11</option>
                                                                <option>12</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-sm-4">
                                                            <label for="ccyear">Year</label>
                                                            <select class="form-control" id="ccyear">
                                                                <option>2023</option>
                                                                <option>2024</option>
                                                                <option>2025</option>
                                                                <option>2026</option>
                                                                <option>2027</option>
                                                                <option>2028</option>
                                                                <option>2029</option>
                                                                <option>2030</option>
                                                                <option>2031</option>
                                                                <option>2032</option>
                                                                <option>2033</option>
                                                                <option>2034</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <div class="form-group">
                                                                <label for="cvv">CVV/CVC</label>
                                                                <input class="form-control" id="cvv" type="text"
                                                                    placeholder="123" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 modal-footer">
                                    <button class="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
  }
}

