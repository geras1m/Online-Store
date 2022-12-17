import {ICard} from '../types';

export function createFilter(data: ICard[]) {
  const category = <HTMLDivElement>document.querySelector('.category');
  const brand = <HTMLDivElement>document.querySelector('.brand');
  const categoryList:string[] = [];
  const brandList:string[] = [];
  for (let i = 0; i < data.length; i++){
    if (!categoryList.includes(data[i].category)) {
      categoryList.push(String(data[i].category))
    }
    if (!brandList.includes(data[i].brand)) {
      brandList.push(String(data[i].brand))
    }
  }
  for (let i = 0; i < categoryList.length; i++){
    const checkboxCategory = `<div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="category-${categoryList[i]}">
      <label class="form-check-label" for="category-${categoryList[i]}">
      ${categoryList[i]}
      </label>
    </div>`;
    category.innerHTML += checkboxCategory;
  }
  for (let i = 0; i < brandList.length; i++){
    const checkboxBrand = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="brand-${brandList[i]}">
    <label class="form-check-label" for="brand-${brandList[i]}">
      ${brandList[i]}
    </label>
  </div>`;
    brand.innerHTML += checkboxBrand;
  }
}
