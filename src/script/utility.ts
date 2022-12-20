export function addActive(target: Element) {
  const parent = target.parentElement;
  if (parent != null ){
    parent.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
  }
  (target as Element).classList.add('active');
}