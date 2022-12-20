export function addQueryParam(key: string, value: string) {
  const searchParam = new URLSearchParams(window.location.search);
  searchParam.set(key, value);
  const newPath = window.location.pathname + '?' + searchParam.toString();
  history.pushState(null, '', newPath);
}