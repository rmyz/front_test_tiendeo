const compareFunc = (a, b) => {
  if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
  if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
  return 0;
};

const orderAsc = () => {
  const _items = JSON.parse(window.localStorage.getItem("items"));
  return _items.sort((a, b) => compareFunc(a, b));
};

const orderDesc = () => {
  const _items = JSON.parse(window.localStorage.getItem("items"));
  return _items.sort((a, b) => compareFunc(b, a));
};

export default function(order) {
  switch (order) {
    case "asc":
      return orderAsc();
    case "desc":
      return orderDesc();
    default:
      break;
  }
}
