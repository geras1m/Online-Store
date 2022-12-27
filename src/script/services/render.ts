import { ICard } from '../types';

export class Render {
  templateMain() {
    return `
    <div class="container">
        <section class="search-bar input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username"
                   aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button">Search</button>
        </section>
        <section class="row items">
            <div class="col-3 filter">
                <div class="filter-btn btn-group" role="group" aria-label="Basic example">
                    <button id="resetFilters" class="btn" type="button">Reset filters</button>
                    <button class="btn" type="button">Copy link</button>
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

  items(data: ICard[], target?: HTMLElement) {
    let CARDS_BOX = <HTMLElement>document.querySelector('.items-cards');
    if (target) {
      CARDS_BOX = target;
    }
    for (let i = 0; i < data.length; i++) {
      const finalPrice = ((data[i].price / 100) * (100 - data[i].discountPercentage)).toFixed(1);
      const card = `<div class="card h-100" data-id = '${data[i].id}' data-price = "${finalPrice}" data-rating = "${data[i].rating}" data-discount = "${data[i].discountPercentage}">
                <img src="${data[i].thumbnail}" class="img-thumbnail" alt="Card image">
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
                    <span class="price">€${data[i].price}</span>
                    <small class="text-muted sale">-${data[i].discountPercentage}%</small>
                    €<span class="final-price h4">${finalPrice}</span>
                    <span class="filter-btn btn-group card-btns" role="group">
                      <button type="button" class="btn remove hidden">-</button>
                      <button type="button" class="btn item-count hidden" disabled>0</button>
                      <button type="button" class="btn add">+ <span class='add-text'>Add to cart<span></button>
                    </span>
                  </p>
                  </p>
                </div>
              </div>`;
      CARDS_BOX.insertAdjacentHTML('beforeend', card);
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
}