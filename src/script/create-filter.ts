import {ICard} from '../types';

export function createCheckbox(data: ICard[], attribute: 'category' | 'brand', path: HTMLElement) {
  const result:string[] = [];
  for (let i = 0; i < data.length; i++){
    let current = data[i].category;
    if (attribute === 'brand') {
      current = data[i].brand;
    }
    if (!result.includes(current)) {
      result.push(String(current))
    }
  }
  for (let i = 0; i < result.length; i++){
    const checkbox = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="${result[i]}">
    <label class="form-check-label" for="${result[i]}">
      ${result[i]}
    </label>
    </div>`;
    path.innerHTML += checkbox;
  }
}
