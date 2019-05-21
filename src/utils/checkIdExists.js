export default function(id, items) {
  if (!items) return false;

  return !!items.find(item => item.id === id);
}
