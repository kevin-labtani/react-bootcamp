function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  items = items.filter(el => el !== item);
  return items;
}

export { choice, remove };
