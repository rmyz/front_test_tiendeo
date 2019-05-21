const compareFunc = (a, b) => {
  if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
  if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
  return 0;
};

const orderAsc = items => {
  return items.sort((a, b) => compareFunc(a, b));
};

const orderDesc = items => {
  return items.sort((a, b) => compareFunc(b, a));
};

export default function(order, items) {
  if (!items) return null;

  switch (order) {
    case "asc":
      return orderAsc(items);
    case "desc":
      return orderDesc(items);
    default:
      return items;
  }
}
