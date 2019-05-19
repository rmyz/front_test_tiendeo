export default function(id, items) {
  return !!items.find(item => item.id === id);
}
