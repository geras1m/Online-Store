import {addActive} from './utility';

const changeViewB = document.querySelectorAll('.btn__view');
const items = document.querySelector('.items-cards');
const urlParams = new URLSearchParams(window.location.search);
const address = urlParams.get('view');


function changeView(view: string) {
  const description = document.querySelectorAll('.description');
  if (view === 'add-view') {
    description.forEach(el => {
      el.classList.remove('hidden')
    });
    if (items) {
      items.classList.remove('row-cols-md-4');
      items.classList.add('row-cols-md-1');
    }
  } else {
    description.forEach(el => {
      el.classList.add('hidden')
    });
    if (items) {
      items.classList.remove('row-cols-md-1');
      items.classList.add('row-cols-md-4');
    }
  }
  if (address) {
    urlParams.set('view', view);
  } else {
    urlParams.append('view', view);
  }
  window.location.search = urlParams.toString();
}

export function viewChange() {
  changeViewB.forEach(element => {
    element.addEventListener('click', (event) => {
        let param = 'add-view';
        if ((event.target as Element).classList.contains('main-view')) {
            param = 'main-view';
        }
        addActive(event.target as Element);
        changeView(param);
    })
});
  if (address) {
    addActive(document.querySelector(address.toString()) as Element);
    changeView(address.toString());
  }
}